"use client";

import { LeftLine, RightLine } from "@/components/design/pricing";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState, useRef } from "react";
import { images } from "@/constants";
import Heading from "@/components/atoms/heading";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Thanks for reaching out! We’ll get back to you soon.");
      formRef.current?.reset(); // Clear form fields
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error submitting contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="overflow-hidden">
      <Toaster position="top-right" />
      <div id="contact-us" className="container relative z-2">

        <h2 className="text-4xl md:text-6xl font-bold text-white text-center my-10 leading-tight">
          Get Started{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            with Nexaim
          </span>
        </h2>
        <div className="relative max-w-lg m-auto">
          <div className="bg-conic-gradient rounded-xl p-[1px]">
            <Card className="w-full relative bg-n-8 backdrop-blur-xl border border-[#ffffff10]">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="bg-black/50 border-gray-800 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="bg-black/50 border-gray-800 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-black/50 border-gray-800 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="min-h-[120px] bg-black/50 border-gray-800 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <RightLine />
          <LeftLine />
        </div>
      </div>
    </Section>
  );
}
