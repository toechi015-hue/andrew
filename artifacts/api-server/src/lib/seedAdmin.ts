import bcrypt from "bcrypt";
import { db, adminUsersTable, menuItemsTable, sidesTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { logger } from "./logger";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ypcdinners@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function ensureAdminUser() {
  if (!ADMIN_PASSWORD) {
    logger.warn("ADMIN_PASSWORD not set — skipping admin seed");
    return;
  }

  try {
    const [existing] = await db
      .select()
      .from(adminUsersTable)
      .where(eq(adminUsersTable.email, ADMIN_EMAIL))
      .limit(1);

    if (!existing) {
      const hash = await bcrypt.hash(ADMIN_PASSWORD, 12);
      await db.insert(adminUsersTable).values({
        email: ADMIN_EMAIL,
        passwordHash: hash,
      });
      logger.info({ email: ADMIN_EMAIL }, "Admin user created");
    }
  } catch (err) {
    logger.error({ err }, "Failed to seed admin user");
  }
}

export async function ensureMenuData() {
  try {
    const existingItems = await db.select().from(menuItemsTable);
    if (existingItems.length > 0) return;

    await db.insert(menuItemsTable).values([
      { name: "Chicken Parm with Homemade Tomato Sauce", description: "Crispy breaded chicken cutlet topped with our rich homemade tomato sauce and melted cheese. A classic comfort dish done right.", price: 18, tags: "Chicken", imageUrl: "", sortOrder: 0 },
      { name: "Crispy Orange Soy Glazed Beef Stir Fry", description: "Tender beef strips wok-tossed in a sweet and tangy orange soy glaze with crisp vegetables.", price: 18, tags: "Beef", imageUrl: "", sortOrder: 1 },
      { name: "Sweet Potato Enchiladas", description: "Soft tortillas filled with roasted sweet potato, black beans, and spices, smothered in enchilada sauce.", price: 16, tags: "Vegetarian", imageUrl: "", sortOrder: 2 },
    ]);

    await db.insert(sidesTable).values([
      { name: "Roasted Potatoes", sortOrder: 0 },
      { name: "Steamed Rice", sortOrder: 1 },
      { name: "Buttered Pasta", sortOrder: 2 },
      { name: "Garlic Greens", sortOrder: 3 },
      { name: "Vegetable Medley", sortOrder: 4 },
      { name: "Honey Butter Glazed Carrots", sortOrder: 5 },
    ]);

    logger.info("Menu data seeded");
  } catch (err) {
    logger.error({ err }, "Failed to seed menu data");
  }
}
