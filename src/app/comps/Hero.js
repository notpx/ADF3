import Image from 'next/image';
import F from "../assets/1.png";
import Z from "../assets/Group 1.png";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Page() {
    return (
        <div className="pt-10  bg-gray-200">
            <div className="flex flex-col items-center px-4 md:flex-row md:items-start">
                <div className="ml-auto mt-4 md:max-w-md md:mr-8">
                    <h1 className="font-bold lg:text-4xl md:text-2xl pt-20 text-3xl pb-2">
                        <font className="text-yellow-500">User Center Excellence: </font>Our App Development services Tackles Your Pain Points
                    </h1>
                    <p className="max-w-md">
                    Experience a Seamless Digital Journey with <font className="font-medium text-green-700">Desun </font>- Where Every Line of Code Resolves Your Challenges and<font className="font-medium text-yellow-400"> Elevates Your App Experience </font>to Unparalleled Heights.
                    </p>
                    <Card className='mt-3  w-[670px] bg-white'>
                        <CardHeader className='flex flex-row justify-items'>
                            <div>
                                <CardTitle className='pb-3 w-[24vw]'>Leave your contacts and we will call you back
                                    within 30 minutes</CardTitle>
                                <CardDescription className='text-slate-400 text-xs'>Full name</CardDescription>
                                <CardDescription>My Name</CardDescription>

                                <CardDescription className='text-slate-400 text-xs'> Business name</CardDescription>
                                <CardDescription>ABC Technologies PVT LTD</CardDescription>
                            </div>

                            <div>

                                <CardDescription className='text-slate-400 pt-9  text-xs'>Phone number</CardDescription>
                                <CardDescription className='pb-4'>+91 0000000000</CardDescription>
                                <div className='flex flex-row'>
                                    <div>
                                        <CardDescription className='text-slate-400 text-xs'> Business email</CardDescription>
                                        <CardDescription>demoaccount@email.com</CardDescription>

                                    </div>
                                    <div className='ml-[20px] rounded-lg '><button className='rounded-[12px] flex flex-row text-white text-sm px-3 py-1 bg-[#80A948]'>Get consultation</button></div>
                                </div>
                            </div>

                        </CardHeader>

                    </Card>


                </div>
                <div className="mt-4 flex flex-col md:flex-row md:mt-0 md:ml-auto gap-4">
                    <div>
                        <Image src={Z} alt="Image 1" width={600} height={500} />
                    </div>

                </div>
            </div>
        </div>
    );
}
