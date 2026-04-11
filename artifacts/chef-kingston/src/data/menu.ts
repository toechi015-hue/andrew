import menuChicken from "../assets/images/menu-chicken.png";
import menuStew from "../assets/images/menu-stew.png";
import menuSalmon from "../assets/images/menu-salmon.png";
import menuStirfry from "../assets/images/menu-stirfry.png";
import menuBbq from "../assets/images/menu-bbq.png";
import menuBolognese from "../assets/images/menu-bolognese.png";
import menuShrimp from "../assets/images/menu-shrimp.png";
import menuMeatballs from "../assets/images/menu-meatballs.png";
import menuLasagna from "../assets/images/menu-lasagna.png";
import menuCurry from "../assets/images/menu-curry.png";

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
