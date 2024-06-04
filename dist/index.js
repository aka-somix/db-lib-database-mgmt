"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  categories: () => categories,
  customers: () => customers,
  orders: () => orders,
  products: () => products
});
module.exports = __toCommonJS(src_exports);

// src/database/schema.ts
var import_pg_core = require("drizzle-orm/pg-core");
var customers = (0, import_pg_core.pgTable)("customers", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  name: (0, import_pg_core.text)("name"),
  surname: (0, import_pg_core.text)("surname"),
  phone: (0, import_pg_core.varchar)("phone", { length: 256 })
});
var categories = (0, import_pg_core.pgTable)("categories", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  name: (0, import_pg_core.text)("name"),
  description: (0, import_pg_core.varchar)("description", { length: 256 })
});
var products = (0, import_pg_core.pgTable)("products", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  name: (0, import_pg_core.text)("name"),
  description: (0, import_pg_core.varchar)("description", { length: 256 }),
  category_id: (0, import_pg_core.serial)("category_id").references(() => categories.id)
});
var orders = (0, import_pg_core.pgTable)("orders", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  customer_id: (0, import_pg_core.serial)("customer_id").references(() => customers.id),
  date: (0, import_pg_core.timestamp)("date"),
  status: (0, import_pg_core.char)("status", { length: 1 })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  categories,
  customers,
  orders,
  products
});
//# sourceMappingURL=index.js.map