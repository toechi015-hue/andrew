import menuChicken from "@assets/att.EkvSkwLjDBW1ODlDvD9LxFy62g3LHYLk-ov6o-AmAyQ_1775869943923.jpeg";
import menuStew from "@assets/att.HQSPLJRNfF28v2i8Y4oH_xO7Im3GZ1e-4hCMbfyHlUk_1775869943923.jpeg";
import menuSalmon from "@assets/att.qOSDHH62gq5NRRtaTOsXClmp7ZV4gqR2W9ulLehqcMY_1775869943923.jpeg";
import menuStirfry from "@assets/att.o6wypxRaEioByCQGwWXcek02sBjEzj9H8bGGx8y5RQI_1775869943923.jpeg";
import menuBbq from "@assets/att.YYNyzODCUYr-GbkJ2Nig5eg7uhaYcjBubYlMsDSVAYg_1775869943923.jpeg";
import menuBolognese from "@assets/att.A69rdFWTe3wzITD52xuHTwgrojwY7VkksIX_4GHQRJI_1775869943923.jpeg";
import menuShrimp from "@assets/att.VvcqNuUBwxjs3UpPbbrYE9R9cY2Sr8uFMo7ANHklVJ4_1775869943923.jpeg";
import menuMeatballs from "@assets/att.rmF16ZLZXPQ2l38adXEuFJ76YofuI67T1r5bQiSxikc_1775869943923.jpeg";
import menuLasagna from "@assets/att.gFpqDOtNQJBmaSYuOZv0csVId2EXKcMW5hNcbS-Nr4M_1775869943923.jpeg";
import menuCurry from "@assets/att.7hdhp98sexptb5U1uI_eaTIHku5VtG_w7Z8Kh1QK6iY_1775869943923.jpeg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  tags: string[];
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "herb-roasted-chicken",
    name: "Herb-Roasted Chicken Thighs",
    description: "Golden, herb-marinated chicken thighs with roasted garlic and fresh herbs.",
    price: "$14.99",
    priceDetail: "/ serving",
    tags: ["Chicken", "High Protein"],
    image: menuChicken,
  },
  {
    id: "classic-beef-stew",
    name: "Classic Beef Stew",
    description: "Slow-braised beef with root vegetables in a rich red wine sauce.",
    price: "$12.99",
    priceDetail: "/ serving",
    tags: ["Beef"],
    image: menuStew,
  },
  {
    id: "salmon-lemon-butter",
    name: "Salmon & Lemon Butter",
    description: "Pan-seared Atlantic salmon fillet with lemon butter sauce and seasonal vegetables.",
    price: "$16.99",
    priceDetail: "/ serving",
    tags: ["Seafood", "High Protein"],
    image: menuSalmon,
  },
  {
    id: "vegetable-stir-fry",
    name: "Vegetable Stir Fry",
    description: "Fresh seasonal vegetables in a savory garlic sauce with steamed jasmine rice.",
    price: "$11.99",
    priceDetail: "/ serving",
    tags: ["Vegetarian"],
    image: menuStirfry,
  },
  {
    id: "family-bbq-chicken",
    name: "Family BBQ Chicken Pack",
    description: "Smoky BBQ chicken pieces with coleslaw and garlic bread.",
    price: "$54.99",
    priceDetail: "/ serves 4",
    tags: ["Chicken", "Family Meals"],
    image: menuBbq,
  },
  {
    id: "beef-bolognese",
    name: "Beef Bolognese Pasta",
    description: "Rich slow-cooked beef ragù over perfectly cooked penne pasta.",
    price: "$13.99",
    priceDetail: "/ serving",
    tags: ["Beef"],
    image: menuBolognese,
  },
  {
    id: "shrimp-fried-rice",
    name: "Shrimp Fried Rice",
    description: "Wok-tossed shrimp with egg fried rice, scallions, and soy glaze.",
    price: "$15.99",
    priceDetail: "/ serving",
    tags: ["Seafood"],
    image: menuShrimp,
  },
  {
    id: "lemon-herb-meatballs",
    name: "Lemon Herb Turkey Meatballs",
    description: "Light, tender turkey meatballs in a bright lemon herb tomato sauce.",
    price: "$13.49",
    priceDetail: "/ serving",
    tags: ["High Protein"],
    image: menuMeatballs,
  },
  {
    id: "family-lasagna",
    name: "Family Lasagna Pan",
    description: "Layered beef and ricotta lasagna, oven-ready.",
    price: "$59.99",
    priceDetail: "/ serves 5-6",
    tags: ["Beef", "Family Meals"],
    image: menuLasagna,
  },
  {
    id: "coconut-chickpea-curry",
    name: "Coconut Chickpea Curry",
    description: "Creamy coconut curry with chickpeas, spinach, and basmati rice.",
    price: "$11.49",
    priceDetail: "/ serving",
    tags: ["Vegetarian"],
    image: menuCurry,
  }
];
