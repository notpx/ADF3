import Image from 'next/image';
import icon from "../assets/icon.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png"
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
        <div className='flex flex-row justify-between bg-gradient-to-r from-[#FABC1F] to-[#7CA546]'>
        <div className='pt-[4vw] '>
            <h1 className='text-3xl ml-[10vw] max-w-[40vw] text-white pt-[30px] font-bold'>Lets discuss Your project</h1>
            <p className='text-sm pb-[60px] ml-[10vw] text-white max-w-[30vw] pt-[20px]'>Let's figure out how to create an effective application,
            its cost and terms of its development</p>
        </div>
        <div> 
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
                                    <div className='ml-[20px] rounded-lg '><button className='rounded-[12px] flex flex-row text-white text-sm px-3 py-1 bg-[#FFB900]'>Get consultation</button></div>
                                </div>
                            </div>

                        </CardHeader>

                    </Card>
        </div>
        </div>
    );
}