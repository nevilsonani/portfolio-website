"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("https://formspree.io/f/mwvvladd", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
      } else {
        alert("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Oops! Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left side */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm font-mono text-primary uppercase tracking-wider">
                  Contact
                </h2>

                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  {"Let's build something"}
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    amazing together.
                  </span>
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Whether you have a specific project in mind or just want to explore AI possibilities, I{"'"}m always
                  open to discussing new opportunities.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 glass rounded-xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      nevilsonani2810@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 glass rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Location</h4>
                    <p className="text-muted-foreground">Bhavnagar, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/nevilsonani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nevil-sonani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="glass p-10 rounded-3xl relative">
              {submitted ? (
                <div className="text-center text-xl font-bold text-primary animate-fadeIn">
                  Thank you! Your message has been sent.
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 focus:border-primary h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="bg-white/5 border-white/10 focus:border-primary h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project"
                      className="bg-white/5 border-white/10 focus:border-primary min-h-[150px] resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-14 text-lg">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Nevil Sonani. All rights reserved.</p>
      </footer>

      {/* Tailwind fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
