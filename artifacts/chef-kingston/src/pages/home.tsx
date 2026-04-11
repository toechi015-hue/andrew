import { Link } from "wouter";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems } from "../data/menu";
import heroImg from "@assets/att.zF1zSKs8HE67Fv1Ysn_cQNG7xuMXY-hnNeYQLjM67bU_1775869943923.jpeg";
import aboutImg from "@assets/att.He80MLl2WKJIpBo865cw2_TJW-lTG6BDeJQ-TINd5m8_1775869943923.jpeg";
import gallery1 from "@assets/att.HQSPLJRNfF28v2i8Y4oH_xO7Im3GZ1e-4hCMbfyHlUk_1775869943923.jpeg";
import gallery2 from "@assets/att.qOSDHH62gq5NRRtaTOsXClmp7ZV4gqR2W9ulLehqcMY_1775869943923.jpeg";
import gallery3 from "@assets/att.o6wypxRaEioByCQGwWXcek02sBjEzj9H8bGGx8y5RQI_1775869943923.jpeg";
import gallery4 from "@assets/att.A69rdFWTe3wzITD52xuHTwgrojwY7VkksIX_4GHQRJI_1775869943923.jpeg";
import gallery5 from "@assets/att.VvcqNuUBwxjs3UpPbbrYE9R9cY2Sr8uFMo7ANHklVJ4_1775869943923.jpeg";
import gallery6 from "@assets/att.YYNyzODCUYr-GbkJ2Nig5eg7uhaYcjBubYlMsDSVAYg_1775869943923.jpeg";
import gallery7 from "@assets/IMG_2237_1775871535914.jpeg";
import gallery8 from "@assets/IMG_2239_1775871535914.jpeg";

const galleryImages = [
  { src: gallery1, alt: "Roasted meat with vegetables" },
  { src: gallery2, alt: "Panko crusted fish with quinoa" },
  { src: gallery3, alt: "Citrus stir fry" },
  { src: gallery4, alt: "Beef stir fry" },
  { src: gallery5, alt: "Crispy chicken with dipping sauce" },
  { src: gallery6, alt: "Grilled vegetables" },
  { src: gallery7, alt: "Chicken parm fresh from the oven" },
  { src: gallery8, alt: "Crispy orange beef with rice" },
];

export default function Home() {
  const featuredMeals = menuItems.slice(0, 3);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-secondary/15 text-secondary text-sm font-semibold tracking-wider uppercase mb-6">
                Personal Chef & Meal Delivery
              </span>
              <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.02] tracking-tight mb-6 text-primary">
                Enjoy <span className="text-secondary italic">Delicious</span> Home-Cooked Meals
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Fresh ingredients, chef-prepared meals, and a passion for good food — delivered to your door or ready for pick-up in Kingston.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/menu" 
                  className="inline-flex justify-center items-center rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all"
                  data-testid="button-view-menu-hero"
                >
                  Order Now →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center rounded-full border-2 border-primary/20 px-8 py-3.5 text-sm font-semibold text-primary hover:border-secondary hover:text-secondary transition-all"
                  data-testid="button-contact-hero"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden ring-8 ring-secondary/20 shadow-2xl">
                  <img 
                    src={heroImg} 
                    alt="Beautifully plated meals" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border/70 backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground">This week's special</p>
                  <p className="font-serif font-bold text-primary text-sm">Chicken Parm</p>
                  <p className="text-secondary font-bold">$18</p>
                </div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">How Ordering Works</h2>
            <p className="text-muted-foreground text-lg">Gourmet meals at home, made simple.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 text-center">
            {[
              { step: "01", title: "Fresh Menu", desc: "4-5 fresh options posted weekly" },
              { step: "02", title: "Choose", desc: "Select meals and quantities" },
              { step: "03", title: "Order", desc: "Message us on social media or text" },
              { step: "04", title: "Cooked", desc: "Chef cooks your meals fresh to order" },
              { step: "05", title: "Delivery", desc: "Pick up or get it delivered" },
              { step: "06", title: "Enjoy", desc: "Heat, eat, and enjoy your evening" }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group border border-border/50">
                <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-serif font-bold text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-all">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">This Week</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">Our Signature <span className="text-secondary italic">Dishes</span></h2>
              <p className="text-muted-foreground text-lg">From classic favourites to modern culinary creations, every dish is made with the freshest ingredients.</p>
            </div>
            <Link 
              href="/menu" 
              className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
              data-testid="link-view-all-menu"
            >
              View Full Menu <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMeals.map((meal) => (
              <div key={meal.id} className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={meal.image} 
                    alt={meal.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {meal.tags.map(tag => (
                      <span key={tag} className="bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-serif font-bold text-xl text-primary leading-tight">{meal.name}</h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="font-bold text-2xl text-secondary">{meal.price}</span>
                      <span className="text-xs text-muted-foreground block">{meal.priceDetail}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Who Is This For?</h2>
            <p className="text-muted-foreground text-lg">We cook so you don't have to.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Busy Families", desc: "Healthy home-style dinners that are kid-friendly. Reclaim your stress-free weeknights and spend more time together.", emoji: "👨‍👩‍👧‍👦" },
              { title: "Individuals", desc: "Fresh portioned meals perfectly sized for one. Save time on cooking and cleanup while eating better than takeout.", emoji: "🧑‍💼" },
              { title: "Students", desc: "Better than fast food, affordable, and filling. Just heat, eat, and get back to your studies.", emoji: "🎓" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-serif font-bold text-2xl text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">A Feast for <span className="text-secondary italic">Your Eyes</span></h2>
            <p className="text-muted-foreground text-lg">Real meals, prepared fresh every week by our chef.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex justify-center items-center rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              See This Week's Menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative rounded-t-[3rem] mx-2 sm:mx-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About the Chef</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 mt-2">Why Choose Your Personal Chef?</h2>
              <ul className="space-y-6">
                {[
                  { title: "Professional Chef Prepared", desc: "25+ years experience, Red Seal certified, Michelin-star trained." },
                  { title: "Fresh Quality Ingredients", desc: "No preservatives, no shortcuts. Just real food cooked with care." },
                  { title: "Convenient Delivery & Pickup", desc: "Flexible options to fit your schedule perfectly." },
                  { title: "Affordable Pricing", desc: "Restaurant-quality meals at prices that make sense for everyday dining." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link 
                  href="/about" 
                  className="inline-flex justify-center items-center rounded-full border-2 border-secondary text-secondary px-7 py-3 text-sm font-semibold hover:bg-secondary hover:text-white transition-all"
                  data-testid="button-about-chef"
                >
                  Meet the Chef →
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={aboutImg} alt="Chef in kitchen" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary/30 rounded-3xl -z-0 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">They Love <span className="text-secondary italic">Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Finally, a meal service that actually feels home-cooked. We order every week for the whole family.", name: "Sarah T.", location: "Kingston, ON", initial: "S" },
              { quote: "As a student, I never ate this well. Fresh food, great price — total game changer.", name: "Marcus L.", location: "Queen's University", initial: "M" },
              { quote: "The salmon dish was restaurant quality. Can't believe I can get this at home with zero effort.", name: "Jennifer K.", location: "Kingston, ON", initial: "J" }
            ].map((t, i) => (
              <div key={i} className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm relative hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-secondary fill-secondary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">Testimonials are illustrative examples. Real reviews will populate here after our April/May 2026 launch.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto bg-card rounded-[2rem] p-10 sm:p-14 border border-border/50 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Don't Wait — <span className="text-secondary italic">Order Now!</span></h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Fresh ingredients, mouth-watering recipes, and a passion for good food delivered to your door or ready for pick-up.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/16472000047" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                data-testid="button-cta-whatsapp"
              >
                Order Now →
              </a>
              <Link 
                href="/meal-plans" 
                className="inline-flex justify-center items-center rounded-full border-2 border-primary/20 px-8 py-4 text-base font-semibold text-primary hover:border-secondary hover:text-secondary transition-all"
                data-testid="button-cta-plans"
              >
                View Meal Plans
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Or call/text us at <a href="tel:6472000047" className="text-secondary font-medium hover:underline">(647) 200-0047</a>
            </p>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
