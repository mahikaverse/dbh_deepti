import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type ArtworkCardProps = {
  id: number;
  image: string;
  title: string;
  artist: string;
  price: string;
};

export default function ArtworkCard({
  id,
  image,
  title,
  artist,
  price,
}: ArtworkCardProps) {
  return (
    <Link to={`/artwork/${id}`}>
      <div className="group cursor-pointer">

        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-sm border border-[#ECE6DB]">

          <img
            src={image}
            alt={title}
            className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          >
            <Heart size={18} />
          </button>

        </div>

        <div className="mt-3 px-1">

          <h3 className="text-lg font-semibold text-[#1B1B1B]">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            by {artist}
          </p>

          <p className="mt-1 font-semibold text-[#1B1B1B]">
            {price}
          </p>

        </div>

      </div>
    </Link>
  );
}