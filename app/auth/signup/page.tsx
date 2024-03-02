import Link from "next/link";
import signUp from "./sign-up";

const page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    action={signUp}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-[500px]"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="******************"
                        />
                        <p className="text-red-500 text-xs italic">
                            Please choose a password.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <Link
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="/forgot-password"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default page;
