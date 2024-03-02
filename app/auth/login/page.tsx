import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const page = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-[#61d7dd] to-[#df39f5]">
            <div className="bg-white min-w-80 md:max-w-96 text-black px-8 py-14 md:rounded-lg h-screen md:h-fit">
                <h1 className="text-4xl font-extrabold text-center">Login</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full"
                />
                <div className=" flex justify-end">
                    <Link className="hover:underline" href={"/forgot-password"}>
                        forgot password?
                    </Link>
                </div>
                <button className="text-white font-medium w-full py-2 text-sm rounded-full bg-gradient-to-r from-[#61d7dd] to-[#df39f5]">
                    LOGIN
                </button>
                <p className="text-center text-sm">Or Login Using</p>
                <div className="flex justify-center gap-2">
                    <button className="bg-[#4267B2] w-8 h-8 rounded-full flex justify-center items-center">
                        <FaFacebookF className="text-white" />
                    </button>
                    <button className="bg-[#1da1f2] w-8 h-8 rounded-full flex justify-center items-center">
                        <FaTwitter className="text-white" />
                    </button>
                    <button className="bg-[#FF3D00] w-8 h-8 rounded-full flex justify-center items-center">
                        <FaGoogle className="text-white" />
                    </button>
                </div>
                <p className="text-center text-sm">Or Sign Up Using</p>
                <div className="flex justify-center">
                    <Link
                        href={"/auth/signup"}
                        className="text-sm hover:underline"
                    >
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
