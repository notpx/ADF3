import Image from 'next/image';
import icon from "../assets/icon.png";
import android from "../assets/android.png";
import people from "../assets/people.png"

export default function Page() {
    return (
        <div className=' bg-[#F2F4F7] flex flex-row justify-items-strech'>
        <div> <div>
            <h1 className='text-3xl ml-[10vw] pt-[50px] font-bold'>Project 1</h1>
            <p className='pt-[30px] max-w-[50vw] ml-[10vw]'>Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
            
        


            <div className='flex flex-row'>
                <p className='flex flex-row  pt-[30px] text-2xl max-w-[50vw] ml-[10vw] font-bold px-6 gap-x-2'>  28
                </p>
                <p className='flex flex-row  pt-[30px] text-2xl max-w-[50vw] ml-[10vw] font-bold px-6 gap-x-2'> +100
                </p>
                <p className='flex flex-row  pt-[30px] text-2xl max-w-[50vw] ml-[10vw] font-bold px-6 gap-x-2'> 7 Years 
                </p>

            </div>

            <div className='flex flex-row pb-[60px]'>
                <p className='flex flex-row  pt-[30px] text-sm max-w-[50vw] ml-[10vw]  px-6 gap-x-2'>  Team members 
                </p>
                <p className='flex flex-row  pt-[30px] text-sm max-w-[50vw] ml-[10vw]  px-5 '> Projects</p>
                <p className='flex flex-row  pt-[30px] text-sm max-w-[50vw] ml-[10vw]  px-5 '> IT Sphere
                </p>

            </div>
            

          



        </div>
        </div>
        <div>
            <Image src={people} alt='people' width={400} height={500} className='shadow-2xl pt-[20px] rounded'/>

        </div>

        </div>
    );
}