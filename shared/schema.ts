import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // e.g., 'Tattoos', 'Piercings'
  styleTags: text("style_tags"), // e.g., 'Black & Grey', 'Color'
  artistName: text("artist_name"),
  imageUrl: text("image_url").notNull(),
});

export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true });
export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
