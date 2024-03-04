import Input from "@/components/ui/input";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const page = () => {
    return (
        <div className="flex flex-col justify-center w-full md:max-w-96 h-screen md:h-fit bg-white pb-5 pt-14 px-8 md:rounded-lg">
            <h4 className="text-black text-4xl font-extrabold text-center mb-9">
                Sign Up
            </h4>
            <Input label="name" name="name" placeholder="type your name" />
            <Input label="Email" name="email" placeholder="type your Email" />
            <Input
                label="password"
                name="password"
                type="password"
                placeholder="type your password"
            />

            <button className="text-white py-2 w-full border rounded-full bg-gradient-to-r from-[#61d7dd] to-[#df39f5] mt-8 mb-3">
                Sign Up
            </button>
            <p className="text-center text-sm mb-6">Or Sign up Using</p>

            <div className="flex justify-center gap-3">
                <button className="bg-[#4267B2] w-8 h-8 flex justify-center items-center rounded-full">
                    <FaFacebookF className="text-white" />
                </button>
                <button className="bg-[#1da1f2] w-8 h-8 rounded-full flex justify-center items-center">
                    <FaTwitter className="text-white" />
                </button>
                <button className="bg-[#FF3D00] w-8 h-8 rounded-full flex justify-center items-center">
                    <FaGoogle className="text-white" />
                </button>
            </div>
            <p className="text-center text-sm mt-16">Or Sign up Using</p>

            <div className="flex justify-center ">
                <Link href={"/auth/login"} className="hover:underline text-sm">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default page;
