import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All fields are required" })
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });


    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        res.status(500).json("Internal server error: " + error);
    }
}