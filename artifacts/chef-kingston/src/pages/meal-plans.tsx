import { PageLayout } from "../components/layout/PageLayout";
import { Link } from "wouter";
import { mealPlans } from "../data/plans";
import { CheckCircle2 } from "lucide-react";
import imgBasic from "@assets/att.EkvSkwLjDBW1ODlDvD9LxFy62g3LHYLk-ov6o-AmAyQ_1775869943923.jpeg";
import imgFamily from "@assets/att.rmF16ZLZXPQ2l38adXEuFJ76YofuI67T1r5bQiSxikc_1775869943923.jpeg";
import imgCustom from "@assets/att.7hdhp98sexptb5U1uI_eaTIHku5VtG_w7Z8Kh1QK6iY_1775869943923.jpeg";

const planImages = [imgBasic, imgFamily, imgCustom];

export default function MealPlans() {
  return (
    <PageLayout>
      <div className="bg-card py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Save More</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-4">Weekly <span className="text-secondary italic">Meal Plans</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Take the stress out of dinnertime with our subscription meal plans. Fresh, healthy, and perfectly portioned.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {mealPlans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm border ${plan.name === "Family Plan" ? "border-secondary border-2 shadow-lg md:-mt-4 md:mb-4 ring-4 ring-secondary/8" : "border-border/40 hover:shadow-md hover:-translate-y-0.5"} transition-all`}
            >
              {plan.name === "Family Plan" && (
                <div className="absolute top-3 left-0 right-0 flex justify-center z-20">
                  <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={planImages[idx]} alt={plan.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"></div>
              </div>

              <div className="p-6 -mt-8 relative z-10">
                <h3 className="text-xl font-serif font-bold text-primary">{plan.name}</h3>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl font-extrabold text-secondary">{plan.price}</span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">{plan.frequency}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.recommendedFor}</p>
              </div>

              <ul className="flex-1 space-y-3 px-6 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mr-2.5 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-6">
                <Link href="/contact"
                  className={`block w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-all ${
                    plan.name === "Family Plan"
                      ? "bg-secondary text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-secondary/8 text-secondary hover:bg-secondary hover:text-white"
                  }`}
                  data-testid={`btn-plan-${plan.id}`}>
                  Request My Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 border border-border/40 shadow-sm">
          <h2 className="text-xl font-serif font-bold text-primary mb-3">Have Dietary Restrictions?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            We can accommodate many dietary needs including gluten-free, dairy-free, and specific allergies. Let us know when you request your plan.
          </p>
          <Link href="/contact" className="text-secondary font-semibold text-sm hover:underline underline-offset-4 transition-colors">
            Contact us to discuss your needs →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
