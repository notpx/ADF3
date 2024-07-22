import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  
  export function AccordionDemo() {
    return (<>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long will development take?</AccordionTrigger>
          <AccordionContent className="font-medium">
          Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.

Average development time from start to finished application:
Medium projects up to 3 months.
Large projects about 4-6 months.
To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How long will development take?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </>
    )
  }
  