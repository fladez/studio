
'use client'

import React from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";

type HistoryImage = {
    src: string;
    alt: string;
}

export function HistoryCarousel({ images }: { images: HistoryImage[] }) {
  return (
    <Carousel className="w-full max-w-2xl mx-auto my-8">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0 relative overflow-hidden rounded-lg">
                  <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
