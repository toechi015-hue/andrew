import { useState, useEffect } from "react";
import { apiUrl, mediaSrc } from "@/lib/apiBase";

import menuChickenParm from "@assets/47c46ebf-97c4-4ac3-92d2-cb1d5b43eb79_1776270077781.jpeg";
import menuBeefStirFry from "@assets/64623fe8-c173-4fc9-bdb3-62695b6264df_1776269707231.jpeg";
import menuEnchiladas from "@assets/2937c4b6-6d7c-40d5-83a4-3bcbef198026_1776269595806.jpeg";

const FALLBACK_IMAGES: Record<string, string> = {
  "chicken parm": menuChickenParm,
  "beef stir fry": menuBeefStirFry,
  "enchiladas": menuEnchiladas,
};

function findFallbackImage(name: string): string {
  const lower = name.toLowerCase();
  for (const [key, img] of Object.entries(FALLBACK_IMAGES)) {
    if (lower.includes(key)) return img;
  }
  return menuChickenParm;
}

export type MenuItemAPI = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string;
  imageUrl: string;
  sortOrder: number;
};

export type MenuItemDisplay = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  tags: string[];
  image: string;
};

const FALLBACK_MENU: MenuItemDisplay[] = [
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

const FALLBACK_SIDES = [
  "Roasted Potatoes",
  "Steamed Rice",
  "Buttered Pasta",
  "Garlic Greens",
  "Vegetable Medley",
  "Honey Butter Glazed Carrots",
];

export function useMenu() {
  const [items, setItems] = useState<MenuItemDisplay[]>([]);
  const [sides, setSides] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(apiUrl("/api/menu"));
        if (res.ok) {
          const data = await res.json();
          const mapped: MenuItemDisplay[] = (data.items as MenuItemAPI[]).map((item) => ({
            id: String(item.id),
            name: item.name,
            description: item.description,
            price: `$${item.price}`,
            priceDetail: "/ portion",
            tags: item.tags ? item.tags.split(",").map((t: string) => t.trim()) : [],
            image: (item.imageUrl ? mediaSrc(item.imageUrl) : "") || findFallbackImage(item.name),
          }));
          setItems(mapped);
          setSides(data.sides || []);
        } else {
          // Use fallback data
          setItems(FALLBACK_MENU);
          setSides(FALLBACK_SIDES);
        }
      } catch {
        // Use fallback data
        setItems(FALLBACK_MENU);
        setSides(FALLBACK_SIDES);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  return { items, sides, loading };
}
