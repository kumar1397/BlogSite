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
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    coverImage,
    tags,
    content,
    link,
    publishedAt
  }
`;
