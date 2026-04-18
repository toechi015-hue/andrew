import { Router } from "express";
import { db, menuItemsTable, sidesTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "../middleware/requireAdmin";

const router = Router();

router.get("/menu", async (_req, res) => {
  try {
    const items = await db.select().from(menuItemsTable).orderBy(asc(menuItemsTable.sortOrder));
    const sides = await db.select().from(sidesTable).orderBy(asc(sidesTable.sortOrder));
    res.json({ items, sides: sides.map((s) => s.name) });
  } catch (err) {
    console.error("Menu fetch error:", err);
    res.status(500).json({ error: "Failed to load menu" });
  }
});

router.post("/admin/menu/items", requireAdmin, async (req, res) => {
  try {
    const { name, description, price, tags, imageUrl, sortOrder } = req.body;
    if (!name || !description || price == null) {
      res.status(400).json({ error: "Name, description, and price are required" });
      return;
    }
    const [item] = await db.insert(menuItemsTable).values({
      name,
      description,
      price: Number(price),
      tags: tags || "",
      imageUrl: imageUrl || "",
      sortOrder: sortOrder ?? 0,
    }).returning();
    res.json({ item });
  } catch (err) {
    console.error("Menu create error:", err);
    res.status(500).json({ error: "Failed to create menu item" });
  }
});

router.put("/admin/menu/items/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, description, price, tags, imageUrl, sortOrder } = req.body;
    const [item] = await db.update(menuItemsTable)
      .set({
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price: Number(price) }),
        ...(tags !== undefined && { tags }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(sortOrder !== undefined && { sortOrder }),
        updatedAt: new Date(),
      })
      .where(eq(menuItemsTable.id, id))
      .returning();
    if (!item) {
      res.status(404).json({ error: "Menu item not found" });
      return;
    }
    res.json({ item });
  } catch (err) {
    console.error("Menu update error:", err);
    res.status(500).json({ error: "Failed to update menu item" });
  }
});

router.delete("/admin/menu/items/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [deleted] = await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id)).returning();
    if (!deleted) {
      res.status(404).json({ error: "Menu item not found" });
      return;
    }
    res.json({ success: true });
  } catch (err) {
    console.error("Menu delete error:", err);
    res.status(500).json({ error: "Failed to delete menu item" });
  }
});

router.put("/admin/menu/sides", requireAdmin, async (req, res) => {
  try {
    const { sides } = req.body;
    if (!Array.isArray(sides)) {
      res.status(400).json({ error: "Sides must be an array" });
      return;
    }
    await db.delete(sidesTable);
    if (sides.length > 0) {
      await db.insert(sidesTable).values(
        sides.map((name: string, i: number) => ({ name, sortOrder: i }))
      );
    }
    const result = await db.select().from(sidesTable).orderBy(asc(sidesTable.sortOrder));
    res.json({ sides: result.map((s) => s.name) });
  } catch (err) {
    console.error("Sides update error:", err);
    res.status(500).json({ error: "Failed to update sides" });
  }
});

export default router;
