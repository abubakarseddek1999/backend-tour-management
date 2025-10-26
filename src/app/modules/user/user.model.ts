import { model, Schema } from "mongoose";
import { IsActive, IUser, Role } from "./user.interface";



const userschema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    // name: {
    //     type: String,
    //     required: true,
    // },
    phone: {
        type: String,
        // required: false,
    },
    picture: {
        type: String,
        // required: false,
    },
    bookings: {
        type: [Schema.Types.ObjectId],
        required: false,
    },

    guides: {
        type: [Schema.Types.ObjectId],
        required: false,
        //  default: null,
    },
    auths: {
        type: [
            {
                provider: String,
                providerId: String,
            },
        ],
        required: false,
    },
    role: {
        type: String,
        required: true,
        enum: ["SUPER_ADMIN", "USER", "ADMIN", "GUIDE"],
        default: Role.USER,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false,
    },
    isActive: {
        type: String,
        required: false,
        enum: ["ACTIVE", "INACTIVE", "BLOCKED"],
        default: IsActive.ACTIVE,
    },
    isVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});


export const User = model<IUser>("User", userschema);