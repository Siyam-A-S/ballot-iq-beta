import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



//Default function 
export default async function CarouselDemo() {
  return (
    <div className="text-3xl flex min-h-screen flex-col items-center justify-between p-24">
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    
                    <p>//Sample Questionnaire in each page//</p>
                    </CardContent>
                </Card>
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
