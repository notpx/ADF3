import Image from 'next/image';
import icon from "../assets/icon.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import mob from "../assets/mob.png";

export default function Page() {
    return (
        <div className='bg-[#F2F4F7] flex justify-items flex-row'>
            

            <div className="px-4 md:px-0 md:mx-auto md:max-w-7xl">
                <div className="text-center md:text-left">
                    <h1 className='text-3xl md:text-4xl font-bold pt-8 md:pt-16 ml-4 md:ml-[10vw]'>Projects we are proud of</h1>
                    <p className='mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                        Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center md:justify-start mt-8 md:mt-12 ml-2 md:ml-[9vw]'>
                    <h3 className='px-5 font-bold'>Project1</h3>
                    <h3 className='px-5 font-medium'>Project2</h3>
                    <h3 className='px-5 font-medium'>Project3</h3>
                    <h3 className='px-5 font-medium'>Project4</h3>
                </div>

                <div className='mt-8 md:mt-12'>
                    <h1 className='text-3xl md:text-4xl font-bold ml-4 md:ml-[10vw]'>Project 1</h1>
                    <p className='mt-4 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                        Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
                    </p>
                    <p className='mt-4 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                        Business analysis / iOS / Android / QA / UI/UX Design
                    </p>

                    <div className='flex flex-wrap mt-4 ml-4 md:ml-[10vw]'>
                        <p className='flex items-center mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw]'>
                            <Image src={icon} alt='icon' height={20} width={20} />
                            <span className='ml-2'>India</span>
                        </p>
                        <p className='flex items-center mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                            <Image src={icon} alt='icon' height={20} width={20} />
                            <span className='ml-2'>Real Estate</span>
                        </p>
                    </div>

                    <div className='flex mt-4 ml-4 md:ml-[10vw]'>
                        <p className='flex items-center text-xl md:text-2xl mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw]'>
                            400%
                        </p>
                        <p className='flex items-center text-xl md:text-2xl mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                            +200,000
                        </p>
                    </div>

                    <div className='flex mt-2 ml-10 md:ml-[7vw]'>
                        <p className='flex items-center text-sm md:text-base pl-8 mt-2 md:mt-4 max-w-[80vw] md:max-w-[50vw]'>
                            User Growth
                        </p>
                        <p className='flex items-center text-sm md:text-base mt-2 md:mt-4 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[10vw]'>
                            Active Users
                        </p>
                    </div>

                    <div className='flex mt-4 ml-4 md:ml-[10vw] pb-8 md:pb-12'>
                        <div className='flex items-center mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw]'>
                            <Image src={ios} alt='iOS' height={200} width={170} />
                        </div>
                        <div className='flex items-center mt-4 md:mt-6 max-w-[80vw] md:max-w-[50vw] ml-4 md:ml-[3vw]'>
                            <Image src={android} alt='Android' height={200} width={160} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-auto pb-[2vw] mr-[2vw] mt-[16vw]'><Image src={mob} alt='mob' height={550} width={550}/></div>
        </div>
    );
}
