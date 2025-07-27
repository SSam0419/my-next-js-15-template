import {
  sqliteTable,
  text
} from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";



export const tagTable = sqliteTable("tag", {
  id: text("id").notNull().primaryKey().$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  categoryId: text("category_id").references(()=>tagCategoryTable.id).notNull()
  })

export const tagCategoryTable = sqliteTable("tag_category", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
})
