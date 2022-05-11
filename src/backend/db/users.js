import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    {
        _id: uuid(),
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Adarsh Balika",
    },
    {
        firstName: "Nikhil",
        lastName: "Belide",
        username: "Nikhil_Belide",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Nikhil Belide",
    },
];
