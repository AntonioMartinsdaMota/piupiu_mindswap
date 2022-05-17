import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../models/User"

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const { username, password } = req.body;

    const db = await mongoose.connect(process.env.MONGO_URI);
    const user = await User.findOne({ name: username, password: password });
    // db.disconnect();

    console.log(req.body, username, password, user);


    if (!user) {
        return res.status(400).end();
    }

    const token = user.email

    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Max-Age=${60 * 60 * 24 * 7}`);

    res.status(200).end();
}


export default handler;




  





