import { PageLayout } from "../components/layout/PageLayout";
import { Link } from "wouter";
import aboutImg from "@assets/att.J5mBriJkII7OGL5oPvxlZxyGMhLkpvzbH8sA1bQDX9o.png_1775869943923.jpeg";

export default function About() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2 block">Meet the Chef</span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">25 Years of Culinary <span className="text-secondary italic">Excellence</span></h1>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                "I know firsthand how busy life gets — and how exhausting it can be to think about dinner every day. That's where I come in."
              </p>
              <p>
                Originally from St. John's, Newfoundland, I've spent over two decades perfecting my craft in the restaurant industry. My journey took me through Culinary Management at Georgian College and Culinary Arts at George Brown College, laying the foundation for a career built on precision and passion.
              </p>
              <p>
                My training culminated in a Michelin-star restaurant in Italy, where I learned the profound respect for ingredients that defines authentic Italian cooking. Returning to Canada, I spent years leading fine dining establishments in downtown Toronto, managing business casual kitchens, and executing large-scale banquets.
              </p>
              <p>
                Now settled in Kingston with my wife and two kids, I've traded the hectic pace of Toronto fine dining for something more personal. I wanted to bring restaurant-quality food directly to the people who need it most — busy families, hardworking professionals, and students.
              </p>
              <p>
                Your Personal Chef Kingston isn't just a business; it's my way of helping our community eat better, live simpler, and gather around the table without the stress.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                <p className="font-serif font-bold text-3xl text-secondary mb-1">25+</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                <p className="font-serif font-bold text-3xl text-secondary mb-1">Red Seal</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Certified Chef</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/menu" 
                className="inline-flex justify-center items-center rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Taste the Menu →
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-primary p-8 flex items-center justify-center">
                <img 
                  src={aboutImg} 
                  alt="Your Personal Chef Kingston" 
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
