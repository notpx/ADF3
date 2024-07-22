import { AccordionDemo } from "../AccordionDemo";


export default function Page() {
    return (
        <div className="text-3xl ml-[10vw] gap-x-20 flex flex-row pt-[50px] font-bold">
           
            <div className="w-[33vw]">  <h1>FAQ</h1>  <AccordionDemo/></div>
            <div className="w-[33vw]"><AccordionDemo/></div>
           
           
            </div>
    );
}