import { db, menuItemsTable, sidesTable } from "@workspace/db";

async function seedMenu() {
  const existingItems = await db.select().from(menuItemsTable);
  if (existingItems.length > 0) {
    console.log("Menu items already seeded, skipping.");
    process.exit(0);
  }

  await db.insert(menuItemsTable).values([
    {
      name: "Chicken Parm with Homemade Tomato Sauce",
      description: "Crispy breaded chicken cutlet topped with our rich homemade tomato sauce and melted cheese. A classic comfort dish done right.",
      price: 18,
      tags: "Chicken",
      imageUrl: "",
      sortOrder: 0,
    },
    {
      name: "Crispy Orange Soy Glazed Beef Stir Fry",
      description: "Tender beef strips wok-tossed in a sweet and tangy orange soy glaze with crisp vegetables.",
      price: 18,
      tags: "Beef",
      imageUrl: "",
      sortOrder: 1,
    },
    {
      name: "Sweet Potato Enchiladas",
      description: "Soft tortillas filled with roasted sweet potato, black beans, and spices, smothered in enchilada sauce.",
      price: 16,
      tags: "Vegetarian",
      imageUrl: "",
      sortOrder: 2,
    },
  ]);

  await db.insert(sidesTable).values([
    { name: "Roasted Potatoes", sortOrder: 0 },
    { name: "Steamed Rice", sortOrder: 1 },
    { name: "Buttered Pasta", sortOrder: 2 },
    { name: "Garlic Greens", sortOrder: 3 },
    { name: "Vegetable Medley", sortOrder: 4 },
    { name: "Honey Butter Glazed Carrots", sortOrder: 5 },
  ]);

  console.log("Menu seeded successfully!");
  process.exit(0);
}

seedMenu().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
