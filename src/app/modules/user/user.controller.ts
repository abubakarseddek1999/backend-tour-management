import e, { Request, Response } from "express"
import { User } from "./user.model";
import httpstatus from "http-status-codes";

const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;
        const user = await User.create({
            email,
            password,
            name
        });
       
        res.status(httpstatus.CREATED).json({
            message: "User created successfully",
            user
        });

    } catch (err: any) {
        res.status( httpstatus.INTERNAL_SERVER_ERROR).json({
            message: `Something went wrong ${err.message}`,
            err
        });

    }

}

const getUser = async (req: Request, res: Response) => {

}

const updateUser = async (req: Request, res: Response) => {

}

const deleteUser = async (req: Request, res: Response) => {

}

const getAllUsers = async (req: Request, res: Response) => {

}

export {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
}