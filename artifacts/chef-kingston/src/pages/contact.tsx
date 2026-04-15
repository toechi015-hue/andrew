import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function getMailtoUrl() {
    const subject = encodeURIComponent(`New message from ${name} - Your Personal Chef Kingston`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`);
    return `mailto:ypcdinners@gmail.com?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  const [copied, setCopied] = useState<string | null>(null);

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  if (submitted) {
    const mailtoUrl = getMailtoUrl();
    const recipientEmail = "ypcdinners@gmail.com";
    const subjectText = `New message from ${name} - Your Personal Chef Kingston`;
    const bodyText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`;

    return (
      <div className="space-y-5">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7 text-green-600" />
          </div>
          <h3 className="text-lg font-serif font-bold text-primary">Your message is ready!</h3>
          <p className="text-muted-foreground text-sm">Use one of the options below to send your message.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={mailtoUrl} className="flex-1 inline-flex justify-center items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <Mail className="w-4 h-4" /> Open Email App
          </a>
          <button onClick={() => copyToClipboard(recipientEmail, "email")} className="flex-1 inline-flex justify-center items-center gap-2 rounded-full border-2 border-secondary px-5 py-3 text-sm font-semibold text-secondary hover:bg-secondary/5 transition-all">
            {copied === "email" ? "Copied!" : "Copy Email Address"}
          </button>
          <button onClick={() => copyToClipboard(`Subject: ${subjectText}\n\n${bodyText}`, "message")} className="flex-1 inline-flex justify-center items-center gap-2 rounded-full border-2 border-secondary px-5 py-3 text-sm font-semibold text-secondary hover:bg-secondary/5 transition-all">
            {copied === "message" ? "Copied!" : "Copy Message"}
          </button>
        </div>

        <div className="bg-muted/40 rounded-xl border border-border/40 p-4 space-y-3 text-sm">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">To</span>
            <p className="text-foreground font-medium mt-0.5">{recipientEmail}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</span>
            <p className="text-foreground font-medium mt-0.5">{subjectText}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</span>
            <p className="text-foreground mt-0.5 whitespace-pre-wrap">{bodyText}</p>
          </div>
        </div>

        <p className="text-[11px] text-center text-muted-foreground italic">
          If the email app doesn't open in preview, test on the published site or copy the details manually.
        </p>

        <div className="text-center">
          <button onClick={() => { setSubmitted(false); setCopied(null); }} className="text-secondary text-sm font-medium hover:underline">Send another message</button>
        </div>
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
