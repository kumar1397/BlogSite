export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "description": pt::text(description),
    coverImage,
    category,
    link,
    tags,
    publishedAt
  }
`
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "description": pt::text(description),
    coverImage,
    tags,
    content,
    link,
    publishedAt
  }
`;

export const projectBySlugQuery = `
  *[_type == "post" && category == "finance" && slug.current == $slug][0]{
    _id,
    title,
    "description": coalesce(pt::text(description), description),
    coverImage,
    tags,
    content,
    link,
    publishedAt
  }
`;

export const profileQuery = `
  *[_type == "profile"][0]{
    _id,
    name,
    designation,
    "shortIntro": coalesce(pt::text(shortIntro), shortIntro),
    "longDescription": coalesce(pt::text(longDescription), longDescription),
    "imageUrl": profileImage.asset->url,
    "imageAlt": profileImage.alt
  }
`