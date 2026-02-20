import { galleryItems, type InsertGalleryItem, type GalleryItem } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class DatabaseStorage implements IStorage {
  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems);
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const [newItem] = await db.insert(galleryItems).values(item).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
