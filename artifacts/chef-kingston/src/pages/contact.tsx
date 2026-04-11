import { PageLayout } from "../components/layout/PageLayout";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <div className="bg-card py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Reach Out</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-6">Get in <span className="text-secondary italic">Touch</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order or have a question about our services? We're here to help make dinner easier.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone / Text", subtitle: "Call or text us directly", value: "(647) 200-0047", href: "tel:6472000047" },
                { icon: MessageCircle, title: "WhatsApp", subtitle: "Send us a message", value: "+1 647-200-0047", href: "https://wa.me/16472000047", external: true },
                { icon: Send, title: "Messenger", subtitle: "Message on Facebook", value: "Your Personal Chef Kingston", href: "https://m.me/YourPersonalChefKingston", external: true },
                { icon: Mail, title: "Email", subtitle: "Drop us a line", value: "ypcdinners@gmail.com", href: "mailto:ypcdinners@gmail.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start bg-card rounded-2xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mr-4">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{item.subtitle}</p>
                    <a href={item.href} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})} className="text-secondary font-semibold hover:underline underline-offset-2 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start bg-card rounded-2xl p-5 border border-border/50 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground text-sm">
                    Proudly serving Kingston, Ontario, Canada and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border/50 shadow-sm rounded-3xl p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input type="text" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input type="email" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
                <input type="tel" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full rounded-full bg-secondary px-4 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-card border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Service Area</h2>
          <div className="w-full rounded-3xl overflow-hidden border border-border/50 shadow-sm bg-background flex flex-col items-center justify-center gap-4 text-center" style={{ height: 320 }} data-testid="map-placeholder">
            <MapPin className="w-12 h-12 text-secondary/50" />
            <div>
              <p className="font-serif font-bold text-primary text-xl mb-1">Kingston, Ontario, Canada</p>
              <p className="text-muted-foreground text-sm max-w-md">
                We proudly serve Kingston and the surrounding areas. Pickup available at our location — delivery across the city.
              </p>
            </div>
            <a href="https://maps.google.com/?q=Kingston,Ontario,Canada" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 px-6 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all"
              data-testid="link-open-maps">
              <MapPin className="w-4 h-4" /> View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
