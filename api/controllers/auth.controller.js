import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"));
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
        next(error);
    }
}


export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, "User not found"));
        }
        const isPasswordCorrect = bcryptjs.compareSync(password, validUser.password);
        if (!isPasswordCorrect) {
            return next(errorHandler(400, "Wrong password"));
        }

        const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

        const { password:pass, ...others } = validUser._doc;
        res.status(200).cookie("token", token, { httpOnly: true }).json(others);
    } catch (error) {
        next(error);
    }
}