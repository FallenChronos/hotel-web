'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    contact: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ContactUsSection: React.FC = () => {
    const { toast } = useToast();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        try {
            await emailjs.send(
                'service_k0tjzi9',
                'template_oguryi2',
                {
                    from_name: data.name,
                    to_name: "Dr. Pragya Tripathi",
                    from_email: data.email,
                    to_email: "swaracounsellingnest@gmail.com",
                    message: data.message,
                    contact: data.contact,
                },
                'w6_KwrmD_Mnb9BC_x'
            );

            toast({
                title: "Message Sent!",
                description: "Thank you. We will get back to you soon...",
                className: "bg-green-500 text-white",
            });
            reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Ahh, something went wrong. Please try again.",
                className: "bg-red-500 text-white",
            });
        }
    };

    return (
        <section className="relative py-16 bg-gray-100">
            <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: "url('/images/room-service.jpg')" }} />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Share your experiences and feedback
                </motion.h2>
                <motion.div
                    className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div className="relative">
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name")}
                                    className="pl-10"
                                />
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    {...register("email")}
                                    className="pl-10"
                                />
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                            <div className="relative">
                                <Input
                                    id="contact"
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    {...register("contact")}
                                    className="pl-10"
                                />
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                            {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <div className="relative">
                                <Textarea
                                    id="message"
                                    placeholder="Your Message"
                                    {...register("message")}
                                    className="pl-10 pt-2"
                                    rows={4}
                                />
                                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                            </div>
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                        </div>
                        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                            <Send className="mr-2" size={18} />
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUsSection;