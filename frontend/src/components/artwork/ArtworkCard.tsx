import {
  Heart,
  Bookmark,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

import {
  toggleLike,
  toggleWishlist,
} from "../../api/artwork.api";

type ArtworkCardProps = {
  id: string;
  image: string;
  title: string;
  artist: string;

  likesCount: number;

  isLiked?: boolean;
  isSaved?: boolean;
};

export default function ArtworkCard({
  id,
  image,
  title,
  artist,
  likesCount,
  isLiked = false,
  isSaved = false,
}: ArtworkCardProps) {
  const [liked, setLiked] =
    useState(isLiked);

  const [saved, setSaved] =
    useState(isSaved);

  const [likesCountState, setLikesCountState] =
    useState(likesCount);

  const handleLike = async (
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    try {
      const data =
        await toggleLike(id);

      setLiked(data.liked);

      setLikesCountState(
        data.likesCount
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    try {
      const data =
        await toggleWishlist(id);

      setSaved(data.saved);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Link to={`/artwork/${id}`}>
      <div className="group cursor-pointer">

        <div className="relative overflow-hidden rounded-[28px] border border-[#ECE6DB] bg-white shadow-sm">

          <img
            src={image}
            alt={title}
            className="
              h-[320px]
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          {/* ACTION BUTTONS */}

          <div className="absolute right-3 top-3 flex flex-col gap-2">

            {/* LIKE */}

            <button
              onClick={handleLike}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
              "
            >
              <Heart
                size={18}
                className={
                  liked
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700"
                }
              />
            </button>

            {/* SAVE */}

            <button
              onClick={handleSave}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-md
              "
            >
              <Bookmark
                size={18}
                className={
                  saved
                    ? "fill-[#D6A354] text-[#D6A354]"
                    : "text-gray-700"
                }
              />
            </button>

          </div>
        </div>

        {/* DETAILS */}

        <div className="mt-3 px-1">

          <h3 className="text-lg font-semibold text-[#1B1B1B]">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            by {artist}
          </p>

          {/* LIKE COUNT */}

          <div className="mt-2 flex items-center gap-2">

            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />

            <span className="text-sm text-gray-500">
              {likesCountState} likes
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}