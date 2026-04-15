export type PlanTier = {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  recommendedFor: string;
};

export const mealPlans: PlanTier[] = [
  {
    id: "basic-plan",
    name: "Basic Plan",
    price: "$65",
    frequency: "/ week",
    features: [
      "5 meals per week",
      "Single portions",
      "Chef's weekly selection",
      "Pickup available"
    ],
    recommendedFor: "Individuals and students looking for stress-free weekday dinners."
  },
  {
    id: "family-plan",
    name: "Family Plan",
    price: "$150",
    frequency: "/ week",
    features: [
      "12 meals per week",
      "4 portions x 3 dinner options",
      "Serves the whole family",
      "Delivery included in Kingston"
    ],
    recommendedFor: "Busy families wanting healthy, homestyle dinners without the prep."
  },
  {
    id: "custom-plan",
    name: "Custom Plan",
    price: "Custom",
    frequency: "Pricing",
    features: [
      "Choose your quantity",
      "Custom portion sizes",
      "Flexible frequency",
      "Specific dietary accommodations"
    ],
    recommendedFor: "Those with specific dietary needs or unique schedules."
  }
];
