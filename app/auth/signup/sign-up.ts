"use server";

const signUp = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    // Validate the form data and save it to the database

    console.log({ username, password });
};

export default signUp;
