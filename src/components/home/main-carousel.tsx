'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { NewsArticle } from '@/data/get-news'

export function MainCarousel({ headlines }: { headlines: NewsArticle[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 11000, stopOnInteraction: false })
  );

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  if (headlines.length === 0) {
    return (
        <div className="relative aspect-video bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Nenhuma notícia em destaque no momento.</p>
        </div>
    )
  }

  return (
    <Carousel 
      setApi={setApi}
      className="w-full" 
      opts={{ loop: true, speed: 5 }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {headlines.map((item, index) => (
          <CarouselItem key={index}>
            <Link href={`/noticias/${item.slug}`}>
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                  data-ai-hint={item.dataAiHint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                  <Badge className="text-sm font-semibold bg-primary px-2 py-1 rounded">{item.category}</Badge>
                  <h2 className="text-xl md:text-4xl font-headline font-bold mt-2 max-w-4xl">{item.title}</h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 hidden md:flex" />
      <CarouselNext className="right-4 hidden md:flex" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 ease-in-out",
              current === i + 1 ? "w-4 bg-white" : "w-2 bg-white/50"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
