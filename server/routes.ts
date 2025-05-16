import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertNewsletterSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRoutes = "/api";

  // Contact form submission endpoint
  app.post(`${apiRoutes}/contact`, async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        data: submission
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      return res.status(400).json({
        message: error.message || "Failed to submit contact form"
      });
    }
  });

  // Newsletter subscription endpoint
  app.post(`${apiRoutes}/newsletter`, async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      
      if (existingSubscriber) {
        if (existingSubscriber.subscribed) {
          return res.status(200).json({
            message: "You are already subscribed to our newsletter"
          });
        } else {
          // Re-subscribe if previously unsubscribed
          await storage.updateNewsletterSubscription(existingSubscriber.id, true);
          return res.status(200).json({
            message: "Successfully re-subscribed to our newsletter"
          });
        }
      }
      
      // Store the newsletter subscription
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Successfully subscribed to newsletter",
        data: subscriber
      });
    } catch (error: any) {
      console.error("Error subscribing to newsletter:", error);
      return res.status(400).json({
        message: error.message || "Failed to subscribe to newsletter"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
