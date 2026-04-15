import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`New message from ${name} - Your Personal Chef Kingston`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ypcdinners@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-lg font-serif font-bold text-primary">Opening your email app...</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Your message details have been pre-filled. Just hit send in your email app!</p>
        <button onClick={() => setSubmitted(false)} className="text-secondary text-sm font-medium hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs font-semibold text-foreground uppercase tracking-wider">Name</label>
          <input id="contact-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="Your Name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-xs font-semibold text-foreground uppercase tracking-wider">Email</label>
          <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="your@email.com" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-phone" className="text-xs font-semibold text-foreground uppercase tracking-wider">Phone (Optional)</label>
        <input id="contact-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="(555) 123-4567" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs font-semibold text-foreground uppercase tracking-wider">Message</label>
        <textarea id="contact-message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" className="w-full rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <div className="bg-card py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Reach Out</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-4">Get in <span className="text-secondary italic">Touch</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ready to order or have a question about our services? We're here to help make dinner easier.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h2>

            <div className="space-y-4">
              {[
                { icon: Phone, title: "Phone / Text", subtitle: "Call or text us directly", value: "(647) 200-0047", href: "tel:6472000047" },
                { icon: MessageCircle, title: "WhatsApp", subtitle: "Send us a message", value: "+1 647-200-0047", href: "https://wa.me/16472000047", external: true },
                { icon: Send, title: "Messenger", subtitle: "Message on Facebook", value: "Your Personal Chef Kingston", href: "https://m.me/61588412791988", external: true },
                { icon: Mail, title: "Email", subtitle: "Drop us a line", value: "ypcdinners@gmail.com", href: "mailto:ypcdinners@gmail.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start bg-card rounded-xl p-4 border border-border/40 hover:shadow-sm transition-shadow group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mr-3 group-hover:bg-secondary/15 transition-colors">
                    <item.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs mb-0.5">{item.subtitle}</p>
                    <a href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})} className="text-secondary font-semibold text-sm hover:underline underline-offset-2 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start bg-card rounded-xl p-4 border border-border/40">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mr-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">Service Area</h3>
                  <p className="text-muted-foreground text-xs">
                    Proudly serving Kingston, Ontario, Canada and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card border border-border/40 shadow-sm rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-serif font-bold text-primary mb-5">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-serif font-bold text-primary mb-5">Our Service Area</h2>
          <div className="w-full rounded-2xl overflow-hidden border border-border/40 bg-background flex flex-col items-center justify-center gap-3 text-center" style={{ height: 280 }} data-testid="map-placeholder">
            <MapPin className="w-10 h-10 text-secondary/40" />
            <div>
              <p className="font-serif font-bold text-primary text-lg mb-0.5">Kingston, Ontario, Canada</p>
              <p className="text-muted-foreground text-sm max-w-md">
                Pickup available at our location — delivery across the city.
              </p>
            </div>
            <a href="https://maps.google.com/?q=Kingston,Ontario,Canada" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary/8 text-secondary border border-secondary/15 px-5 py-2 text-sm font-semibold hover:bg-secondary hover:text-white transition-all"
              data-testid="link-open-maps">
              <MapPin className="w-3.5 h-3.5" /> View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
