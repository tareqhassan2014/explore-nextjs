import Input from "@/components/ui/input";
import Link from "next/link";

const page = () => {
    return (
        <div className=" flex justify-center items-center w-full h-screen bg-gradient-to-tr from-[#61d7dd] to-[#df39f5]">
            <div className=" flex flex-col justify-center min-w-80 md:max-w-96 md:h-fit h-screen bg-white md:rounded-xl px-8 pt-10 pb-4 ">
                <h4 className="text-4xl font-extrabold text-center ">
                    Forgot Password
                </h4>
                <p className="mt-9 text-sm text-start mb-8">
                    Enter the email address associated with your account and
                    we&apos;ll send you a link to reset your password.
                </p>

                <Input
                    label="email"
                    type="email"
                    name="name"
                    placeholder="type your email"
                />

                <button className=" mt-8 rounded-full bg-gradient-to-r from-[#61d7dd] to-[#df39f5] w-full py-2 text-sm text-white font-medium">
                    Continue
                </button>
                <div className="flex justify-center mt-20">
                    <p className="text-sm">Don&apos;t have an account?</p>
                    <Link
                        href={"/auth/signup"}
                        className="text-sm hover:underline"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;
