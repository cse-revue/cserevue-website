import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import image from "next/image";

export default function CarouselOptions() {
  return (
    <div className="w-full p-6 flex justify-center">
      <Carousel
        className="w-full max-w-[75%]"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: gallery.length }).map((_, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center object-cover" key={index}>
              <div className="p-1">
                <img
									src={gallery[index]}
									alt={`photo ${index}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const gallery: string[] = [
  "/images/teams/band.012ea31f.jpg",
  "/images/teams/cast.b91cf1d8.jpg",
  "/images/teams/choreos.5b919d8d.jpg",
  "/images/teams/costumes.f6241d2b.jpg",
  "/images/teams/foh.c419396c.jpg",
  "/images/teams/fundraising.772ec2cf.jpg",
  "/images/teams/promos.8c968f75.jpg",
  "/images/photossss/IMG_0126.jpg",
  "/images/photossss/IMG_4181.jpg",
  "/images/photossss/2024-25 exec.JPEG",
  "/images/photossss/44150F16-AF6E-4C62-991A-2FBD2480677F.jpeg",
  "/images/photossss/20251030_221616.jpg",
  "/images/photossss/20251030_221627.jpg",
  "/images/photossss/F45B9413-DD88-411E-8F62-C5AEBD82B540.jpeg",
  "/images/photossss/IMG_0291.jpg",
]