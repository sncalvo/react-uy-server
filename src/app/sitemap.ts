import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://react.uy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://react.uy/#events",
      lastModified: new Date(),
      changeFrequency: "weekly", 
      priority: 0.8,
    },
    {
      url: "https://react.uy/#become-speaker",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://react.uy/#organizers",
      lastModified: new Date(), 
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
