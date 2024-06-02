import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';


export const customers = pgTable('customers', {
  id: serial('id').primaryKey(),
  name: text('name'),
  surname: text('surname'),
  phone: varchar('phone', { length: 256 }),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: varchar('description', { length: 256 }),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: varchar('description', { length: 256 }),
  category_id: serial("category_id").references(() => categories.id)
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  customer_id: serial("customer_id").references(() => customers.id)
});