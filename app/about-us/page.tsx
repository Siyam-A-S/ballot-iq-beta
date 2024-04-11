import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default async function AboutUs(){
    return(
    <main>
        <h1 className="text-5xl">
            THIS IS ABOUT US
        </h1> 
        <div className="text-3xl flex min-h-screen flex-col items-center justify-between p-24">
            <p>
            <h1>#Problem</h1>
            We are tackling the problem of voter illiteracy and low voter-turn-out to ensure that each citizen can make informed decisions and feel involved in the whole election process. We are making a website which will display all the relevant information in an intuitive and beautiful way. Our work is aligned with the SDG16 which is Peace, Justice and Strong Institutions.

            <h1>#APIs Used</h1>
            <h1>1. Morphcast Emotion AI - A facial emotion recognition tool to track customer satisfaction in using the application and guide them accordingly.
            Github link : https://github.com/MorphCast/mph-sdk-integration-react</h1>

            2. OpenFEC API: openFEC API by FEC (Federal Election Commission) to gather all information regarding candidates
            Link: https://api.open.fec.gov/developers/


            </p>
        </div>   
           
    </main>
    )
}