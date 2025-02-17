"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutUs = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation =()=>{
        if(isLoggedIn){
            router.push("/about/address")
        }
        else {
            router.push("/")
        }
    }
    return (
        <div>
            About us
            <Link href='/about/address'>Address</Link>
            <button className="bg-blue-500 rounded-md px-3 py-2" type="button" onClick={handleNavigation}>Address Page</button>
        </div>
    );
};

export default AboutUs;