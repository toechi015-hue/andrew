import { PageLayout } from "../components/layout/PageLayout";
import { Link } from "wouter";
import aboutImg from "@assets/att.QxDSNAc8bqLMwOjg974AJKZuG5rwmXfhpEvXFlBMbvw.png_1775869943923.jpeg";

export default function About() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2 block">Meet the Chef</span>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6">25 Years of Culinary Excellence</h1>
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
              <div>
                <p className="font-serif font-bold text-3xl text-primary mb-1">25+</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="font-serif font-bold text-3xl text-primary mb-1">Red Seal</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Certified Chef</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/menu" 
                className="inline-flex justify-center items-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Taste the Menu
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={aboutImg} 
                  alt="Professional Chef in Kitchen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 to-transparent -z-10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
