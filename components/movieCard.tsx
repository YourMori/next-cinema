import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({ id, title, imageUrl, rating }) => {
  return (
    <Link href={`/movie/${id}`} passHref>
      <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute flex items-center top-4 left-4 bg-green text-textPrimary text-base font-bold px-2 py-1 rounded-[4px] w-8 h-5">
          {rating}
        </div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full text-white text-center py-2 px-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
