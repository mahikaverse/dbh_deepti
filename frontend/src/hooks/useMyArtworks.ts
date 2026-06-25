import { useEffect, useState } from "react";
import { getMyArtworks } from "../api/artist.api";
import type { Artwork } from "../types/artwork";

export function useMyArtworks() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getMyArtworks();
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