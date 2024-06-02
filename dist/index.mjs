// src/database/schema.ts
import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";
var customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name"),
  surname: text("surname"),
  phone: varchar("phone", { length: 256 })
});
var categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: varchar("description", { length: 256 })
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: varchar("description", { length: 256 }),
  category_id: serial("category_id").references(() => categories.id)
});
var orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customer_id: serial("customer_id").references(() => customers.id)
});
export {
  categories,
  customers,
  orders,
  products
};
//# sourceMappingURL=index.mjs.map