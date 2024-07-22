import Image from 'next/image';
import logosm from "../assets/logosm.png";

export default function Page() {
    return (
        <>
        
        <div className="itemsc bg-[#F2F4F7]">
        <h2 className='text-3xl pt-[40px] mb-[30px] max-w-[40vw] font-bold ml-[14vw] '>Developed more than 100 projects in 15 industries</h2>
            {/* <h1>
                Developed more than 100 projects in 15 industries
            </h1> */}
            <div className="flex text-l justify-items-strech flex-row ml-[14vw] gap-x-[10vw] mr-20 items-center">
                <div className="first-row px">
                   <h3 className='flex gap-x-2 py-4'><Image src={logosm} height={20} width={20} alt="logosm"/> Social Media</h3> 
                   <h3 className='flex gap-x-2 py-4'><Image src={logosm} height={20} width={20}  alt="logosm"/> Social Media</h3> 
                   <h3 className='flex gap-x-2 py-4'><Image src={logosm} height={20} width={20} alt="logosm"/> Social Media</h3> 
                   <h3 className='flex gap-x-2 py-4'><Image src={logosm} height={20} width={20} alt="logosm"/> Social Media</h3> 
                   <h3 className='flex gap-x-2 py-4'><Image src={logosm}  height={20} width={20} alt="logosm"/> Social Media</h3> 

                </div>

                <div className="first-row px-[10vw]">
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 

                </div>
                <div className="first-row mr-20">
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 
                <h3 className='flex gap-x-2 py-4'><Image src={logosm} alt="logosm"/> Social Media</h3> 

                </div>


            </div>
        </div>
        </>
    );
}