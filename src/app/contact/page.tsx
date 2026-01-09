'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const contactImage = PlaceHolderImages.find(img => img.id === 'contact-us');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        console.log(values);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Message Sent!",
                description: "Thanks for reaching out. We'll get back to you soon.",
            });
            form.reset();
        }, 1500);
    }

  return (
    <>
      <div className="relative overflow-hidden py-24">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                      Have questions or want to partner with us? We'd love to hear from you.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                          <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                  <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Name</FormLabel>
                                      <FormControl>
                                          <Input placeholder="Your Name" {...field} />
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
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                          <Input placeholder="your.email@example.com" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                                  />
                                  <FormField
                                  control={form.control}
                                  name="subject"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Subject</FormLabel>
                                      <FormControl>
                                          <Input placeholder="What is your message about?" {...field} />
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
                                      <FormLabel>Message</FormLabel>
                                      <FormControl>
                                          <Textarea placeholder="Tell us more..." className="min-h-[120px]" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                                  />
                                  <Button type="submit" disabled={isLoading} className="w-full">
                                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                      {isLoading ? "Sending..." : "Send Message"}
                                  </Button>
                              </form>
                          </Form>
                      </CardContent>
                  </Card>
                  
                  <div className="relative w-full h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                      {contactImage && (
                          <Image
                              src={contactImage.imageUrl}
                              alt={contactImage.description}
                              fill
                              className="object-cover"
                              data-ai-hint={contactImage.imageHint}
                          />
                      )}
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
