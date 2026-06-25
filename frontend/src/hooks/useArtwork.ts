import { useEffect, useState } from "react";
import { getAllArtworks } from "../api/artwork.api";
import type { Artwork } from "../types/artwork";

export function useArtwork() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getAllArtworks();
      setArtworks(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    artworks,
    loading,
    reload: load,
  };
}