// 'use client';

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import Image from "next/image";
// import { PlaceHolderImages } from "@/lib/placeholder-images";
// import { Loader2 } from "lucide-react";
// import { useState } from "react";

// const formSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters."),
//   email: z.string().email("Please enter a valid email."),
//   subject: z.string().min(5, "Subject must be at least 5 characters."),
//   message: z.string().min(10, "Message must be at least 10 characters."),
// });

// export default function ContactPage() {
//     const { toast } = useToast();
//     const [isLoading, setIsLoading] = useState(false);
//     const contactImage = PlaceHolderImages.find(img => img.id === 'contact-us');

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//         },
//     });

//     function onSubmit(values: z.infer<typeof formSchema>) {
//         setIsLoading(true);
//         console.log(values);
//         // Simulate API call
//         setTimeout(() => {
//             setIsLoading(false);
//             toast({
//                 title: "Message Sent!",
//                 description: "Thanks for reaching out. We'll get back to you soon.",
//             });
//             form.reset();
//         }, 1500);
//     }

//   return (
//     <>
//       <div className="relative overflow-hidden py-12">
//           <div className="container mx-auto px-4 md:px-6 relative z-10">
//               <div className="text-center mb-12">
//                   <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
//                   <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
//                       Have questions or want to partner with us? We'd love to hear from you.
//                   </p>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                   <Card className="bg-background/80 backdrop-blur-sm">
//                       <CardHeader>
//                           <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
//                           <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                           <Form {...form}>
//                               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                                   <FormField
//                                   control={form.control}
//                                   name="name"
//                                   render={({ field }) => (
//                                       <FormItem>
//                                       <FormLabel>Name</FormLabel>
//                                       <FormControl>
//                                           <Input placeholder="Your Name" {...field} />
//                                       </FormControl>
//                                       <FormMessage />
//                                       </FormItem>
//                                   )}
//                                   />
//                                   <FormField
//                                   control={form.control}
//                                   name="email"
//                                   render={({ field }) => (
//                                       <FormItem>
//                                       <FormLabel>Email</FormLabel>
//                                       <FormControl>
//                                           <Input placeholder="your.email@example.com" {...field} />
//                                       </FormControl>
//                                       <FormMessage />
//                                       </FormItem>
//                                   )}
//                                   />
//                                   <FormField
//                                   control={form.control}
//                                   name="subject"
//                                   render={({ field }) => (
//                                       <FormItem>
//                                       <FormLabel>Subject</FormLabel>
//                                       <FormControl>
//                                           <Input placeholder="What is your message about?" {...field} />
//                                       </FormControl>
//                                       <FormMessage />
//                                       </FormItem>
//                                   )}
//                                   />
//                                   <FormField
//                                   control={form.control}
//                                   name="message"
//                                   render={({ field }) => (
//                                       <FormItem>
//                                       <FormLabel>Message</FormLabel>
//                                       <FormControl>
//                                           <Textarea placeholder="Tell us more..." className="min-h-[120px]" {...field} />
//                                       </FormControl>
//                                       <FormMessage />
//                                       </FormItem>
//                                   )}
//                                   />
//                                   <Button type="submit" disabled={isLoading} className="w-full">
//                                       {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
//                                       {isLoading ? "Sending..." : "Send Message"}
//                                   </Button>
//                               </form>
//                           </Form>
//                       </CardContent>
//                   </Card>
                  
//                   <div className="relative w-full h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
//                       {contactImage && (
//                           <Image
//                               src={contactImage.imageUrl}
//                               alt={contactImage.description}
//                               fill
//                               className="object-cover"
//                               data-ai-hint={contactImage.imageHint}
//                           />
//                       )}
//                   </div>
//               </div>
//           </div>
//       </div>
//     </>
//   );
// }











'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
import { Loader2, Sparkles, Mail, MapPin, Phone } from "lucide-react";
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
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Message Sent! 🎉",
                description: "Thanks for reaching out. We'll get back to you soon.",
            });
            form.reset();
        }, 1500);
    }

    const contactInfo = [
        { icon: Mail, label: "Email", value: "hello@creativefutures.com", color: "text-[#FB0091]" },
        { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-[#00B4EE]" },
        { icon: MapPin, label: "Location", value: "123 Creativity Lane, Imagination City", color: "text-[#FBC51A]" },
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#FB0091]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00B4EE]/20 rounded-full blur-3xl translate-x-1/3"></div>
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#FBC51A]/20 rounded-full blur-3xl"></div>

                {/* Cloud SVGs */}
                <svg className="absolute top-24 left-16 w-24 h-16 opacity-40" viewBox="0 0 100 50">
                    <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
                </svg>
                <svg className="absolute top-48 right-24 w-28 h-18 opacity-30" viewBox="0 0 100 50">
                    <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
                </svg>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full text-sm font-bold mb-6 border-2 border-[#FB0091]/20">
                            <Sparkles className="w-4 h-4 text-[#FB0091]" />
                            <span className="bg-gradient-to-r from-[#FB0091] to-[#00B4EE] bg-clip-text text-transparent">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-black leading-tight mb-6">
                            Contact <span className="text-[#FB0091]">Us</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Have questions or want to partner with us? We'd love to hear from you! 💌
                        </p>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
                        <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
                    </svg>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                    <CardContent className="pt-8 pb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full mb-4 shadow-md">
                                            <info.icon className={`w-8 h-8 ${info.color}`} />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{info.label}</h3>
                                        <p className="text-gray-600 text-sm">{info.value}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-gradient-to-br from-[#00B4EE]/5 to-[#FB0091]/5 relative">
                <div className="absolute top-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32 rotate-180">
                        <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
                    </svg>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#FB0091]/10 rounded-full blur-3xl translate-x-1/3"></div>
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#00B4EE]/10 rounded-full blur-3xl -translate-x-1/3"></div>

                <div className="container mx-auto px-4 relative z-10 pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-[#FB0091] via-[#00B4EE] to-[#FBC51A]"></div>
                                <CardHeader className="bg-gradient-to-br from-gray-50 to-white pb-6">
                                    <div className="text-5xl mb-3">📬</div>
                                    <CardTitle className="font-headline text-3xl font-black">Send us a Message</CardTitle>
                                    <CardDescription className="text-base">Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-bold">Name</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="Your Name" 
                                                                {...field} 
                                                                className="border-2 border-gray-200 focus:border-[#FB0091] rounded-xl py-6"
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
                                                        <FormLabel className="font-bold">Email</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="your.email@example.com" 
                                                                {...field}
                                                                className="border-2 border-gray-200 focus:border-[#00B4EE] rounded-xl py-6"
                                                            />
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
                                                        <FormLabel className="font-bold">Subject</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="What is your message about?" 
                                                                {...field}
                                                                className="border-2 border-gray-200 focus:border-[#FBC51A] rounded-xl py-6"
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
                                                        <FormLabel className="font-bold">Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea 
                                                                placeholder="Tell us more..." 
                                                                className="min-h-[140px] border-2 border-gray-200 focus:border-[#FB0091] rounded-xl resize-none" 
                                                                {...field} 
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button 
                                                type="submit" 
                                                disabled={isLoading} 
                                                className="w-full bg-gradient-to-r from-[#FB0091] to-pink-500 hover:from-pink-500 hover:to-[#FB0091] text-white shadow-xl hover:shadow-2xl transition-all text-lg py-6 rounded-full font-bold"
                                            >
                                                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                                                {isLoading ? "Sending..." : "Send Message 🚀"}
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FBC51A]/20 rounded-full blur-3xl"></div>
                            <div className="relative w-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-4 ring-[#00B4EE]/20">
                                {contactImage ? (
                                    <Image
                                        src={contactImage.imageUrl}
                                        alt={contactImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={contactImage.imageHint}
                                    />
                                ) : (
                                    <Image
                                        src="https://picsum.photos/seed/contact/600/600"
                                        alt="Contact us"
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}