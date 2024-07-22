import Image from 'next/image';
import Logo from "../assets/image2.png"
import kris from "../assets/kris.png"

export default function Page() {
    return (
        <div className='flex absolute max-w-[90vw] mt-8 ml-[6vw] flex-col bg-black rounded-[40px] pr-2 justify-between  text-white'>
            <div className=" text-center rounded-lg">
                <Image className='ml-[35vw] pt-14' src={Logo} height={90} weight={90} />
            </div>

            <div className='flex ml-[10vw]  gap-x-20 flex-row  pt-10 text-white'>
                <div className='flex flex-col text-white'><Image src={kris} height={75} width={95} /> <h2>+91 0000000000</h2></div>
                <div className='flex flex-col  px-10 text-white'><Image src={kris} height={75} width={95} /> <h2>demomail@mail.com</h2></div>
                
                <div className='flex flex-col  px-7 text-white'><Image src={kris} height={75} width={95} /> <h2>Mumbai, India</h2></div>
                
                <div className='flex flex-col px-7 text-white'><Image src={kris} height={75} width={95} /> <h2>Leave a Request</h2></div>
                

            </div>

            <div><h4 className=' text-xs text-gray-400 text-center mt-4'>We work throughout the world</h4></div>

        </div>
    );
}