export type SidebarProp = {
  searchClicked: boolean;
  setSearchClicked: (searchClicked: boolean) => void;
};

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
};

export type BlogPostState = {
    blogPosts: BlogPost[]
    setBlogPosts: (blogPosts:BlogPost[]) => void
  };
  