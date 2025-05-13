import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button, Card, Label } from "@/components/ui";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [{ title: "Trending Now" }, { title: "Action" }, { title: "Romance" }, { title: "Sci-Fi" }];

const films = new Array(10).fill(null).map((_, idx) => ({
  id: idx,
  title: `Movie ${idx + 1}`,
  image: `https://via.placeholder.com/200x300?text=Movie+${idx + 1}`,
}));

export default function BrowsePage() {
  return (
    <div className="">
      {/* Featured Movie */}
      <Card className="relative w-full h-[400px] bg-primary rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
          alt="Featured Movie"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute top-6 right-6 text-white text-right">
          <h2 className="text-4xl font-bold">Epic Movie Title</h2>
          <p className="mt-2 text-lg">A thrilling adventure awaits.</p>
        </div>
        <div className="absolute bottom-6 left-6">
          <Button variant="default">Watch Now</Button>
        </div>
      </Card>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Label className="text-xl font-semibold text-textPrimary">{category.title}</Label>
              <div className="w-24 h-1 bg-red rounded-full cursor-ew-resize transition-transform hover:scale-x-110" />
            </div>
            <div className="flex items-center gap-1 text-textSecondary">
              <ChevronLeft className="cursor-pointer hover:text-white" />
              <ChevronRight className="cursor-pointer hover:text-white" />
            </div>
          </div>

          <Carousel>
            <CarouselContent>
              {films.map((film) => (
                <CarouselItem key={film.id} className="basis-1/4">
                  <div className="flex flex-col items-center text-center">
                    <Image src={film.image} alt={film.title} width={200} height={300} className="rounded-lg" />
                    <p className="mt-2 text-textPrimary font-medium">{film.title}</p>
                  </div>
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
