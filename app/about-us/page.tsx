import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default async function AboutUs(){
    return(
    <main>
        <h1 className="text-9xl">
            THIS IS ABOUT US
        </h1> 
        <div className="text-3xl flex min-h-screen flex-col items-center justify-between p-24">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            

        </div>   
        <div className="text-3xl flex flex-col items-center justify-between p-24">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            

        </div>    
    </main>
    )
}