import { PageLayout } from "../components/layout/PageLayout";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <div className="bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to order or have a question about our services? We're here to help make dinner easier.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Phone / Text</h3>
                  <p className="text-muted-foreground mb-1">Call or text us directly</p>
                  <a href="tel:6472000047" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                    (647) 200-0047
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mr-4">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground mb-1">Send us a message</p>
                  <a href="https://wa.me/16472000047" target="_blank" rel="noreferrer" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                    +1 647-200-0047
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mr-4">
                  <Send className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Messenger</h3>
                  <p className="text-muted-foreground mb-1">Message on Facebook</p>
                  <a href="https://m.me/YourPersonalChefKingston" target="_blank" rel="noreferrer" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                    Your Personal Chef Kingston
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mr-4">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Email</h3>
                  <p className="text-muted-foreground mb-1">Drop us a line</p>
                  <a href="mailto:ypcdinners@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors text-lg">
                    ypcdinners@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Service Area</h3>
                  <p className="text-muted-foreground">
                    Proudly serving Kingston, Ontario, Canada and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border shadow-sm rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
                <input type="tel" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Service Area</h2>
          <div
            className="w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-card flex flex-col items-center justify-center gap-4 text-center"
            style={{ height: 320 }}
            data-testid="map-placeholder"
          >
            <MapPin className="w-12 h-12 text-secondary/60" />
            <div>
              <p className="font-serif font-bold text-primary text-xl mb-1">Kingston, Ontario, Canada</p>
              <p className="text-muted-foreground text-sm max-w-md">
                We proudly serve Kingston and the surrounding areas. Pickup available at our location — delivery across the city. Map coming soon.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kingston,Ontario,Canada"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary/10 text-primary border border-primary/20 px-5 py-2.5 text-sm font-semibold hover:bg-primary/20 transition-colors"
              data-testid="link-open-maps"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
