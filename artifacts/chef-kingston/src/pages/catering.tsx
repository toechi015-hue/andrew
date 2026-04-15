import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import imgPrivate from "@assets/att.HQSPLJRNfF28v2i8Y4oH_xO7Im3GZ1e-4hCMbfyHlUk_1775869943923.jpeg";
import imgFamily from "@assets/att.gFpqDOtNQJBmaSYuOZv0csVId2EXKcMW5hNcbS-Nr4M_1775869943923.jpeg";
import imgEvents from "@assets/att.YYNyzODCUYr-GbkJ2Nig5eg7uhaYcjBubYlMsDSVAYg_1775869943923.jpeg";
import imgPrep from "@assets/att.zF1zSKs8HE67Fv1Ysn_cQNG7xuMXY-hnNeYQLjM67bU_1775869943923.jpeg";

function CateringForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Private Dinner");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function buildMessage() {
    return `Hi! I'd like to inquire about catering.\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nDate: ${date}\nDetails: ${details}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://m.me/61588412791988?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-lg font-serif font-bold text-primary">Inquiry Sent!</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Your message has been opened in Messenger. We'll get back to you shortly!</p>
        <button onClick={() => setSubmitted(false)} className="text-secondary text-sm font-medium hover:underline">Submit another inquiry</button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="catering-name" className="text-xs font-semibold text-foreground uppercase tracking-wider">Name</label>
          <input id="catering-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="catering-email" className="text-xs font-semibold text-foreground uppercase tracking-wider">Email</label>
          <input id="catering-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="john@example.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="catering-service" className="text-xs font-semibold text-foreground uppercase tracking-wider">Service Type</label>
          <select id="catering-service" value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all">
            <option>Private Dinner</option>
            <option>Family Gathering</option>
            <option>Small Event</option>
            <option>Weekly Home Meal Prep</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="catering-date" className="text-xs font-semibold text-foreground uppercase tracking-wider">Estimated Date</label>
          <input id="catering-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="catering-details" className="text-xs font-semibold text-foreground uppercase tracking-wider">Event Details & Dietary Needs</label>
        <textarea id="catering-details" rows={4} value={details} onChange={(e) => setDetails(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all" placeholder="Tell us about your event..."></textarea>
      </div>
      <button type="submit" className="w-full rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
        Submit Inquiry
      </button>
      <p className="text-[11px] text-center text-muted-foreground">
        Or contact us directly at <a href="mailto:ypcdinners@gmail.com" className="text-secondary font-medium">ypcdinners@gmail.com</a>
      </p>
    </form>
  );
}

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
      <div className="bg-card py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Services</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-4">Catering & <span className="text-secondary italic">Personal Chef</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Bring the Michelin-star training and restaurant experience to your home or event.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className={`group bg-card rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={`aspect-[16/10] lg:aspect-auto overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className={`p-7 sm:p-8 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-7 md:p-10 max-w-3xl mx-auto border border-border/40 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-3">Inquire About Your <span className="text-secondary italic">Event</span></h2>
            <p className="text-muted-foreground text-sm">Fill out the form below to start planning your perfect culinary experience.</p>
          </div>

          <CateringForm />
        </div>
      </div>
    </PageLayout>
  );
}
