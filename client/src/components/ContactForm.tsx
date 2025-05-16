import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    mutation.mutate(data);
  }

  return (
    <div className="bg-[hsl(var(--space-gray))] bg-opacity-50 backdrop-filter backdrop-blur-sm p-8 rounded-xl">
      <h3 className="font-['Orbitron'] text-2xl mb-6 text-[hsl(var(--neon-teal))]">Send us a message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[hsl(var(--muted-foreground))] font-['Rajdhani']">Your Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your name" 
                    className="bg-[hsl(var(--space-black))] bg-opacity-50 border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--neon-purple))] transition-colors duration-300" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[hsl(var(--muted-foreground))] font-['Rajdhani']">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-[hsl(var(--space-black))] bg-opacity-50 border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--neon-purple))] transition-colors duration-300" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[hsl(var(--muted-foreground))] font-['Rajdhani']">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Type your message here..." 
                    className="bg-[hsl(var(--space-black))] bg-opacity-50 border border-[hsl(var(--border))] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--neon-purple))] transition-colors duration-300" 
                    rows={5}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-[hsl(var(--neon-purple))] hover:bg-opacity-80 text-white font-['Rajdhani'] py-3 px-8 rounded-lg transition-all duration-300 shadow-neon-purple"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
