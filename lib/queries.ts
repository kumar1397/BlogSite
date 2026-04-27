// List view — no heavy content, just metadata
export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    category,
    link,
    tags,
    publishedAt
  }
`

// Single blog post by slug — includes full sections with portable text and image URLs
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    category,
    tags,
    link,
    sections[]{
      _key,
      heading,
      content,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    },
    publishedAt
  }
`

// Same shape, but filtered to finance category
export const projectBySlugQuery = `
  *[_type == "post" && category == "finance" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    tags,
    link,
    sections[]{
      _key,
      heading,
      content,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    },
    publishedAt
  }
`

export const profileQuery = `
  *[_type == "profile"][0]{
    _id,
    name,
    designation,
    shortIntro,
    longDescription,
    "imageUrl": profileImage.asset->url,
    "imageAlt": profileImage.alt
  }
`