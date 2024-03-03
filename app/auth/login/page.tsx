import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const page = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-[#61d7dd] to-[#df39f5]">
            <div className="bg-white min-w-80 md:max-w-96 text-black px-8 pt-14 pb-5 md:rounded-lg h-screen md:h-fit flex items-center">
                <div>
                    <h1 className="text-4xl font-extrabold text-center mb-9 ">
                        Login
                    </h1>
                    <label htmlFor="username" className="mb-1 inline-block">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        className="w-full border p-2"
                    />
                    <label htmlFor="password" className="inline-block my-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border p-2"
                    />
                    <div className=" my-1 flex justify-end">
                        <Link
                            className="hover:underline"
                            href={"/forgot-password"}
                        >
                            forgot password?
                        </Link>
                    </div>
                    <button className="text-white font-medium w-full py-2 text-sm rounded-full bg-gradient-to-r from-[#61d7dd] to-[#df39f5] mt-7 mb-3">
                        LOGIN
                    </button>
                    <p className="text-center text-sm mb-2">Or Login Using</p>
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
                    <p className="text-center text-sm mt-16">
                        Or Sign Up Using
                    </p>
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
        </div>
    );
};

export default page;
