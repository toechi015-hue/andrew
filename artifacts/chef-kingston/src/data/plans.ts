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
    price: "$120",
    frequency: "/ week",
    features: [
      "10 meals per week",
      "Serves family of 4",
      "Kid-friendly options",
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
