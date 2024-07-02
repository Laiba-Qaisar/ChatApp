import bcrypt from "bcryptjs";
import User from "../models/usermodel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signup = async (req, res) => {
    try {
        const { fullName, username,email, password, confirmPassword, gender } = req.body;

        console.log("Received signup request:", req.body);

        // Validate required fields
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        console.log("Passwords match");

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        console.log("Username is available");

        // Hash password
        const salt = await bcrypt.genSalt(10);
        if (!salt) {
            throw new Error("Salt generation failed");
        }
        const hashedPassword = await bcrypt.hash(password, salt);
        if (!hashedPassword) {
            throw new Error("Password hashing failed");
        }

        console.log("Password hashed");

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;

        console.log("Profile picture URL generated:", profilePic);

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            gender,
            profilePic,
        });

        console.log("New user created:", newUser);

        // Save user
        await newUser.save();
        
        console.log("New user saved to database");

        // Generate JWT token
        generateTokenAndSetCookie(newUser._id, res);
        
        console.log("Token generated and set");

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        });

        console.log("Signup process completed successfully");
    } catch (error) {
        console.error("Error in signup controller:", error.message, error.stack);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const logout = async(req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
export{signup,login,logout};