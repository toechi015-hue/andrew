import bcrypt from "bcrypt";
import { db, adminUsersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "ypcdinners@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_PASSWORD) {
  console.error("ADMIN_PASSWORD environment variable is required");
  process.exit(1);
}

async function seedAdmin() {
  const [existing] = await db
    .select()
    .from(adminUsersTable)
    .where(eq(adminUsersTable.email, ADMIN_EMAIL))
    .limit(1);

  if (existing) {
    const hash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    await db
      .update(adminUsersTable)
      .set({ passwordHash: hash })
      .where(eq(adminUsersTable.email, ADMIN_EMAIL));
    console.log(`Admin user updated: ${ADMIN_EMAIL}`);
  } else {
    const hash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    await db.insert(adminUsersTable).values({
      email: ADMIN_EMAIL,
      passwordHash: hash,
    });
    console.log(`Admin user created: ${ADMIN_EMAIL}`);
  }

  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
