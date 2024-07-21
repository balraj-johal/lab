
import { z, defineCollection } from 'astro:content';

const labEntriesCollection = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
  }
})

export const collections = {
  'lab': labEntriesCollection
}