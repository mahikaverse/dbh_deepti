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
  } catch (err) {
    console.error(err);
    setArtistStatus(null);
  } finally {
    setLoading(false);
  }
}
useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    setLoading(false);
    return;
  }

  refresh();
}, []);

  return {
    artistStatus,
    loading,
    refresh,
  };
}