import { create } from "zustand";
import { persist} from "zustand/middleware";
import type { BlogPostState } from "~/types/types";

export const useStore = create<BlogPostState>()(
  persist(
    (set) => ({
      blogPosts: [],
      setBlogPosts: (blogPosts) => set({ blogPosts }),
    }),
    { name: "blogPosts" }
  )
);

