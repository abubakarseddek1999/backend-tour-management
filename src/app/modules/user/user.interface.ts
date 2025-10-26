import { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER",
    ADMIN = "ADMIN",
    GUIDE = "GUIDE"
}
export interface IAuthProvider {
    provider : string;
    providerId : string;

}
export enum IsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}


export interface IUser {
    _id: string;
    email: string;
    password ?: string;
    name: string;
    phone ?: string;
    picture ?: string;
    address ?: string;
    isAdmin: boolean;
    isDeleted ?: boolean;
    isActive ?: IsActive;
    isVerified ?: boolean;


    auths?: IAuthProvider[];
    role: Role;
    bookings ?: Types.ObjectId[];
    guides ?: Types.ObjectId[];
}