// src/database/schema.ts
import { char, pgTable, serial, text, timestamp, varchar, doublePrecision } from "drizzle-orm/pg-core";
var customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  surname: text("surname").notNull(),
  phone: varchar("phone", { length: 256 }),
  email: varchar("email", { length: 256 }).notNull()
});
var categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: varchar("description", { length: 256 })
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: varchar("description", { length: 256 }),
  category_id: serial("category_id").references(() => categories.id).notNull(),
  price: doublePrecision("price").notNull()
});
var orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customer_id: serial("customer_id").references(() => customers.id),
  date: timestamp("date").notNull(),
  status: char("status", { length: 1 }).notNull()
});
export {
  categories,
  customers,
  orders,
  products
};
//# sourceMappingURL=index.mjs.map