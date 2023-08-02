export const postFromModule = (mod: any) => {
 const {title} = mod.attributes.meta[0]
 const {description} = mod.attributes.meta[1]

    return {
      slug: mod.filename.replace(/\.mdx?$/, ""),
      title,
      description
    };
  }

