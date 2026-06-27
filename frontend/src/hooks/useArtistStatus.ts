import { useEffect, useState } from "react";
import { getArtistStatus } from "../api/artist.api";
import { getAccessToken } from "../utils/authStorage";

const ARTIST_STATUS_UPDATED_EVENT =
  "artist-status-updated";

export interface ArtistStatus {
  hasProfile: boolean;
  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | null;

  rejectionReason: string | null;
}

let cachedArtistStatus:
  | ArtistStatus
  | null = null;

function broadcastArtistStatus(
  status: ArtistStatus | null
) {
  cachedArtistStatus = status;

  if (
    typeof window === "undefined"
  ) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(
      ARTIST_STATUS_UPDATED_EVENT,
      {
        detail: status,
      }
    )
  );
}

export function clearArtistStatusCache() {
  cachedArtistStatus = null;
}

export function useArtistStatus() {
  const [
    artistStatus,
    setArtistStatus,
  ] = useState<
    ArtistStatus | null
  >(cachedArtistStatus);

  const [loading, setLoading] =
    useState(
      cachedArtistStatus === null
    );

  const refresh =
    async () => {
      try {
        setLoading(true);

        const data =
          await getArtistStatus();

        broadcastArtistStatus(
          data
        );

        setArtistStatus(data);

        return data;
      } catch (err) {
        console.error(
          "Failed to fetch artist status:",
          err
        );

        return (
          cachedArtistStatus
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    const handleStatusUpdate = (
      event: Event
    ) => {
      const customEvent =
        event as CustomEvent<
          ArtistStatus | null
        >;

      setArtistStatus(
        customEvent.detail
      );

      setLoading(false);
    };

    window.addEventListener(
      ARTIST_STATUS_UPDATED_EVENT,
      handleStatusUpdate
    );

    return () => {
      window.removeEventListener(
        ARTIST_STATUS_UPDATED_EVENT,
        handleStatusUpdate
      );
    };
  }, []);

  useEffect(() => {
   const token =
  getAccessToken();

    if (!token) {
  setLoading(false);
  return;
}

    if (
      cachedArtistStatus ===
      null
    ) {
      refresh();
    }
  }, []);

  return {
    artistStatus,
    loading,
    refresh,
    fetchArtistStatus:
      refresh,
  };
}