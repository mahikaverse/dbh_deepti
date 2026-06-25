import { useEffect, useState } from "react";
import { getArtistStatus } from "../api/artist.api";

export interface ArtistStatus {
  hasProfile: boolean;
  status: "PENDING" | "APPROVED" | "REJECTED" | null;
  rejectionReason: string | null;
}

export function useArtistStatus() {
  const [artistStatus, setArtistStatus] =
    useState<ArtistStatus | null>(null);

  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      const data = await getArtistStatus();
      setArtistStatus(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    artistStatus,
    loading,
    refresh,
  };
}