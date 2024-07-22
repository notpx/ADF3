import Image from 'next/image';
import logos from "../assets/Logos.png"
export default function Page() {
    return (
        <div><Image src={logos}></Image></div>
    );
}