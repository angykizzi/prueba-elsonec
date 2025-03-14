import { useState, useMemo } from "react";
import { usePosts } from "./usePosts";
import { filterPostsBySearch } from "@/lib/filtersPosts";
import { sortPostsByTitle } from "@/lib/sortPost";

export const useFilteredPosts = () => {
  const { data: posts = [], isLoading, error, isError } = usePosts();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

  const filteredPosts = useMemo(
    () => filterPostsBySearch(posts, search),
    [posts, search]
  );
  const sortedPosts = useMemo(
    () => sortPostsByTitle(filteredPosts, sortOrder),
    [filteredPosts, sortOrder]
  );

  return {
    posts: sortedPosts,
    isLoading,
    search,
    sortOrder,
    setSearch,
    setSortOrder,
    error,
    isError,
  };
};
