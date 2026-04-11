import { PageLayout } from "../components/layout/PageLayout";
import imgPrivate from "@assets/att.HQSPLJRNfF28v2i8Y4oH_xO7Im3GZ1e-4hCMbfyHlUk_1775869943923.jpeg";
import imgFamily from "@assets/att.gFpqDOtNQJBmaSYuOZv0csVId2EXKcMW5hNcbS-Nr4M_1775869943923.jpeg";
import imgEvents from "@assets/att.YYNyzODCUYr-GbkJ2Nig5eg7uhaYcjBubYlMsDSVAYg_1775869943923.jpeg";
import imgPrep from "@assets/att.zF1zSKs8HE67Fv1Ysn_cQNG7xuMXY-hnNeYQLjM67bU_1775869943923.jpeg";

export default function Catering() {
  const services = [
    {
      title: "Private Dinners",
      description: "An intimate, restaurant-quality chef experience right in your own dining room. Perfect for anniversaries, birthdays, or special date nights.",
      features: ["Customized multi-course menus", "Wine pairing suggestions", "Full service and clean-up", "Interactive chef experience"],
      image: imgPrivate,
    },
    {
      title: "Family Gatherings",
      description: "Large batch fresh cooking for any occasion. Spend time with your family instead of stuck in the kitchen.",
      features: ["Family-style platters", "Buffet setups", "Kid-friendly options", "Dietary accommodations"],
      image: imgFamily,
    },
    {
      title: "Small Events",
      description: "Elevate your next gathering with premium hors d'oeuvres and bites.",
      features: ["Cocktail parties", "Office lunches", "Holiday celebrations", "Passed appetizers"],
      image: imgEvents,
    },
    {
      title: "Weekly Home Meal Prep",
      description: "Regular weekly cooking performed in your own kitchen. The ultimate convenience for busy professionals.",
      features: ["Menu planning", "Grocery shopping", "In-home cooking", "Packaged and labeled meals"],
      image: imgPrep,
    }
  ];

  return (
    <PageLayout>
      <div className="bg-card py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-6">Catering & <span className="text-secondary italic">Personal Chef</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bring the Michelin-star training and restaurant experience to your home or event.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-foreground">
                      <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-border/50 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Inquire About Your <span className="text-secondary italic">Event</span></h2>
            <p className="text-muted-foreground">Fill out the form below to start planning your perfect culinary experience.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <input type="text" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input type="email" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Type</label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary">
                  <option>Private Dinner</option>
                  <option>Family Gathering</option>
                  <option>Small Event</option>
                  <option>Weekly Home Meal Prep</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Estimated Date</label>
                <input type="date" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Event Details & Dietary Needs</label>
              <textarea rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary" placeholder="Tell us about your event..."></textarea>
            </div>
            <button type="button" className="w-full rounded-full bg-secondary px-4 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
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
