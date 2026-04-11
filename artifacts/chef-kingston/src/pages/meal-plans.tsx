import { PageLayout } from "../components/layout/PageLayout";
import { mealPlans } from "../data/plans";
import { CheckCircle2 } from "lucide-react";
import imgBasic from "@assets/att.EkvSkwLjDBW1ODlDvD9LxFy62g3LHYLk-ov6o-AmAyQ_1775869943923.jpeg";
import imgFamily from "@assets/att.rmF16ZLZXPQ2l38adXEuFJ76YofuI67T1r5bQiSxikc_1775869943923.jpeg";
import imgCustom from "@assets/att.7hdhp98sexptb5U1uI_eaTIHku5VtG_w7Z8Kh1QK6iY_1775869943923.jpeg";

const planImages = [imgBasic, imgFamily, imgCustom];

export default function MealPlans() {
  return (
    <PageLayout>
      <div className="bg-card py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Save More</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-6">Weekly <span className="text-secondary italic">Meal Plans</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the stress out of dinnertime with our subscription meal plans. Fresh, healthy, and perfectly portioned.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mealPlans.map((plan, idx) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-card overflow-hidden shadow-sm border ${plan.name === "Family Plan" ? "border-secondary border-2 shadow-xl md:-mt-4 md:mb-4 ring-4 ring-secondary/10" : "border-border/50 hover:shadow-lg hover:-translate-y-1"} transition-all`}
            >
              {plan.name === "Family Plan" && (
                <div className="absolute top-4 left-0 right-0 flex justify-center z-20">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={planImages[idx]} alt={plan.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 -mt-6 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-primary">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-secondary">
                  {plan.price}
                  <span className="ml-1 text-lg font-medium text-muted-foreground">{plan.frequency}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground h-10">{plan.recommendedFor}</p>
              </div>
              
              <ul className="flex-1 space-y-4 px-8 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mr-3" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="px-8 pb-8">
                <a href="/contact"
                  className={`mt-auto block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                    plan.name === "Family Plan"
                      ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                  data-testid={`btn-plan-${plan.id}`}>
                  Request My Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center bg-card rounded-3xl p-10 border border-border/50 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Have Dietary Restrictions?</h2>
          <p className="text-muted-foreground mb-6">
            We can accommodate many dietary needs including gluten-free, dairy-free, and specific allergies. Let us know when you request your plan.
          </p>
          <a href="/contact" className="text-secondary font-semibold hover:underline underline-offset-4 transition-colors">
            Contact us to discuss your needs →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
