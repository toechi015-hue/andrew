import { PageLayout } from "../components/layout/PageLayout";
import { Link } from "wouter";
import heroImg from "../assets/images/hero.png";

export default function Catering() {
  const services = [
    {
      title: "Private Dinners",
      description: "An intimate, restaurant-quality chef experience right in your own dining room. Perfect for anniversaries, birthdays, or special date nights.",
      features: ["Customized multi-course menus", "Wine pairing suggestions", "Full service and clean-up", "Interactive chef experience"]
    },
    {
      title: "Family Gatherings",
      description: "Large batch fresh cooking for any occasion. Spend time with your family instead of stuck in the kitchen.",
      features: ["Family-style platters", "Buffet setups", "Kid-friendly options", "Dietary accommodations"]
    },
    {
      title: "Small Events",
      description: "Elevate your next gathering with premium hors d'oeuvres and bites.",
      features: ["Cocktail parties", "Office lunches", "Holiday celebrations", "Passed appetizers"]
    },
    {
      title: "Weekly Home Meal Prep",
      description: "Regular weekly cooking performed in your own kitchen. The ultimate convenience for busy professionals.",
      features: ["Menu planning", "Grocery shopping", "In-home cooking", "Packaged and labeled meals"]
    }
  ];

  return (
    <PageLayout>
      <div className="relative bg-primary py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Catering" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">Catering & Personal Chef Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Bring the Michelin-star training and restaurant experience to your home or event.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-border">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Inquire About Your Event</h2>
            <p className="text-muted-foreground">Fill out the form below to start planning your perfect culinary experience.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input type="text" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Type</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option>Private Dinner</option>
                  <option>Family Gathering</option>
                  <option>Small Event</option>
                  <option>Weekly Home Meal Prep</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Estimated Date</label>
                <input type="date" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Event Details & Dietary Needs</label>
              <textarea rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Tell us about your event..."></textarea>
            </div>

            <button type="button" className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Submit Inquiry
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Or contact us directly at <a href="mailto:ypcdinners@gmail.com" className="text-secondary font-medium">ypcdinners@gmail.com</a>
            </p>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
