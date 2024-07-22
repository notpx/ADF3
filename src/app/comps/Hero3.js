import chev from "../assets/chevron.png";
import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col  text-center md:text-left lg:text-left  md:flex-row mb-[6vw]">
            <div className="md:w-1/2 md:my-5 sm:text-center md:text-left lg:text-left md:pl-20 md:ml-[40px]">
                <h1 className="my-4 text-4xl font-bold">Full development cycle</h1>
                <h5 className="my-5 text-sm md:text-base">We use proven technologies</h5>

                <div className=" text-center md:text-left lg:text-left  mt-5">
                    <h2 className="text-lg font-medium">Web</h2>
                    <h4 className="max-w-[80vw] sm:w-auto md:max-w-[35vw] text-center md:text-left lg:text-left  text-sm md:text-base">
                        PHP / JavaScript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / Django / Python
                    </h4>
                </div>

                <div className="mt-5">
                    <h2 className="text-lg font-medium">Mobile</h2>
                    <h4 className="max-w-[80vw] md:max-w-[35vw] text-sm md:text-base">
                        Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
                    </h4>
                </div>
            </div>

            <div className="md:w-1/2 text-right lg:text-left md:mt-10 md:px-20 md:ml-auto md:mr-[70px]">
                <h3 className="flex sm:text-center py-4 text-sm md:text-base">iOS development <Image src={chev} width={25} height={25} className="ml-2" /></h3>
                <h3 className="flex sm:text-center py-4 text-sm md:text-base">Web development <Image src={chev} width={25} height={25} className="ml-2" /></h3>
                <h3 className="flex sm:text-center py-4 text-sm md:text-base">UI/UX Design <Image src={chev} width={25} height={25} className="ml-2" /></h3>
                <h3 className="flex sm:text-center py-4 text-sm md:text-base">Testing <Image src={chev} width={25} height={25} className="ml-2" /></h3>
                <h3 className="flex sm:text-center py-4 text-sm md:text-base">Launch <Image src={chev} width={25} height={25} className="ml-2" /></h3>
            </div>

        </div>
    );
}
