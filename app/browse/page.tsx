import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button, Card, Label } from "@/components/ui";
import Image from "next/image";
import { MovieCard } from "@/components/index";

const categories = [{ title: "Trending Now" }, { title: "Action" }, { title: "Romance" }, { title: "Sci-Fi" }];

const films = new Array(10).fill(null).map((_, idx) => ({
  id: idx,
  title: `Movie ${idx + 1}`,
  rating: 7.9,
  image: "/111.jpg",
}));

export default function BrowsePage() {
  return (
    <div className="w-full">
      {/* Featured Movie */}
      <Card className="relative w-full h-[400px] mb-[32px] bg-primary rounded-xl">
        <Image src="/111.jpg" alt="Featured Movie" layout="fill" objectFit="cover" className="opacity-60" />
        <div className="text-textPrimary mt-6 ml-8">
          <h2 className="text-xl font-bold">Epic Movie Title</h2>
          <p className="mt-2 text-lg">A thrilling adventure awaits.</p>
        </div>
        <div className="absolute bottom-6 left-8">
          <Button variant="default">Watch Now</Button>
        </div>
      </Card>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-[32px]">
          <Label className="text-lg font-semibold text-textPrimary mb-[14px]">{category.title}</Label>
          <Carousel>
            <CarouselContent className="ml-0">
              {films.map((film) => (
                <CarouselItem key={film.id} className="basis-1/4 mr-8">
                  <MovieCard id={film.id} title={film.title} imageUrl={film.image} rating={film.rating} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 opacity-10 hover:opacity-60 transition-opacity" />
            <CarouselNext className="right-0 opacity-10 hover:opacity-60 transition-opacity" />
          </Carousel>
        </div>
      ))}
    </div>
  );
}
