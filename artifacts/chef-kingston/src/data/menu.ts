import menuChickenParm from "@assets/IMG_2237_1775871535914.jpeg";
import menuBeefStirFry from "@assets/IMG_2239_1775871535914.jpeg";
import menuEnchiladas from "@assets/IMG_2238_1775871535914.jpeg";

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
    id: "chicken-parm",
    name: "Chicken Parm with Homemade Tomato Sauce",
    description: "Crispy breaded chicken cutlet topped with our rich homemade tomato sauce and melted cheese. A classic comfort dish done right.",
    price: "$18",
    priceDetail: "/ portion",
    tags: ["Chicken"],
    image: menuChickenParm,
  },
  {
    id: "beef-stir-fry",
    name: "Crispy Orange Soy Glazed Beef Stir Fry",
    description: "Tender beef strips wok-tossed in a sweet and tangy orange soy glaze with crisp vegetables.",
    price: "$18",
    priceDetail: "/ portion",
    tags: ["Beef"],
    image: menuBeefStirFry,
  },
  {
    id: "sweet-potato-enchiladas",
    name: "Sweet Potato Enchiladas",
    description: "Soft tortillas filled with roasted sweet potato, black beans, and spices, smothered in enchilada sauce.",
    price: "$16",
    priceDetail: "/ portion",
    tags: ["Vegetarian"],
    image: menuEnchiladas,
  },
];

export const sides = [
  "Roasted Potatoes",
  "Steamed Rice",
  "Buttered Pasta",
  "Garlic Greens",
  "Vegetable Medley",
  "Honey Butter Glazed Carrots",
];
