import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existingItems = await storage.getGalleryItems();
  if (existingItems.length === 0) {
    await storage.createGalleryItem({
      title: "Pharaoh Portrait",
      category: "Tattoos",
      styleTags: "Black & Grey",
      artistName: "Wyskii",
      imageUrl: "/images/image_1771589993398.png"
    });
    await storage.createGalleryItem({
      title: "Ear Piercings",
      category: "Piercings",
      styleTags: "Jewelry",
      artistName: "Caelan",
      imageUrl: "/images/image_1771590016477.png"
    });
    await storage.createGalleryItem({
      title: "Scorpion & Rose Hand",
      category: "Tattoos",
      styleTags: "Color",
      artistName: "Wyskii",
      imageUrl: "/images/image_1771590042708.png"
    });
    await storage.createGalleryItem({
      title: "Gothic Face/Skull",
      category: "Tattoos",
      styleTags: "Color, Black & Grey",
      artistName: "Caelan",
      imageUrl: "/images/image_1771590087510.png"
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database with our provided images
  await seedDatabase();

  app.get(api.gallery.list.path, async (req, res) => {
    const items = await storage.getGalleryItems();
    res.json(items);
  });

  return httpServer;
}
