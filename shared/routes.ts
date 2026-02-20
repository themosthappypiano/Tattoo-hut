import { z } from 'zod';
import { insertGalleryItemSchema, galleryItems } from './schema';

export const errorSchemas = {
  notFound: z.object({ message: z.string() }),
};

export const api = {
  gallery: {
    list: {
      method: 'GET' as const,
      path: '/api/gallery' as const,
      responses: {
        200: z.array(z.custom<typeof galleryItems.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
