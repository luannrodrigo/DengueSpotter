import { InferModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const complaints = sqliteTable("complaints", {
  id: integer("id").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  place: text("place"),
  description: text("description"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export type User = InferModel<typeof complaints>;
export type InsertUser = InferModel<typeof complaints, "insert">;