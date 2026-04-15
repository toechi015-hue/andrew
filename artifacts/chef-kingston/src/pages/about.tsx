import { PageLayout } from "../components/layout/PageLayout";
import { Link } from "wouter";
import aboutImg from "@assets/att.J5mBriJkII7OGL5oPvxlZxyGMhLkpvzbH8sA1bQDX9o.png_1775869943923.jpeg";

export default function About() {
  return (
    <PageLayout>
      <div className="bg-card py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-6">Meet the <span className="text-secondary italic">Chef</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            25 years of culinary excellence, from Michelin-star restaurants to your dinner table.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-primary p-6 sm:p-8 flex items-center justify-center">
                <img
                  src={aboutImg}
                  alt="Your Personal Chef Kingston"
                  className="w-full h-auto object-contain max-h-[420px]"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-secondary/15 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-card rounded-xl p-5 border border-border/40 text-center">
                <p className="font-serif font-bold text-2xl text-secondary mb-0.5">25+</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border/40 text-center">
                <p className="font-serif font-bold text-2xl text-secondary mb-0.5">Red Seal</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Certified Chef</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <blockquote className="relative border-l-4 border-secondary pl-6 py-2">
              <p className="text-lg sm:text-xl font-serif italic text-primary leading-relaxed">
                "I know firsthand how busy life gets — and how exhausting it can be to think about dinner every day. That's where I come in."
              </p>
            </blockquote>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Originally from Toronto, I've spent over two decades perfecting my craft in the restaurant industry. My journey took me through Culinary Management at Georgian College and Culinary Arts at George Brown College, laying the foundation for a career built on precision and passion.
              </p>
              <p>
                My training culminated in a <strong className="text-foreground">Michelin-star restaurant in Italy</strong>, where I learned the profound respect for ingredients that defines authentic Italian cooking. Returning to Canada, I spent years leading fine dining establishments in downtown Toronto, managing business casual kitchens, and executing large-scale banquets.
              </p>
              <p>
                Now settled in Kingston with my wife and two kids, I've traded the hectic pace of Toronto fine dining for something more personal. I wanted to bring <strong className="text-foreground">restaurant-quality food</strong> directly to the people who need it most — busy families, hardworking professionals, and students.
              </p>
              <p>
                Your Personal Chef Kingston isn't just a business; it's my way of helping our community eat better, live simpler, and gather around the table without the stress.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/40">
              <h3 className="font-serif font-bold text-lg text-primary mb-4">Training & Credentials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Red Seal Certified Chef",
                  "Georgian College — Culinary Management",
                  "George Brown College — Culinary Arts",
                  "Michelin-star Restaurant (Italy)",
                  "Fine Dining Chef — Downtown Toronto",
                  "Large-Scale Banquet Experience",
                ].map((cred, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                    <span className="text-foreground">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/menu"
                className="inline-flex justify-center items-center rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Taste the Menu →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
