import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    // user one
    {
        _id: uuid(),
        username: "Adarsh_Balika",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Adarsh Balika",
        bio: "Mai hu neog ka Inspiration!",
        website: "https://adarshbalika.netlify.app/",
        profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_two_kwishu.png",
        followers: [],
        following: [],
    },
    // user two
    {
        _id: uuid(),
        username: "Nikhil_Belide",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Nikhil Belide",
        bio: "Ces't la Vie!",
        website: "https://nikhil-belide.netlify.app/",
        profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
        followers: [
            {
                _id: uuid(),
                username: "elonmusk",
                fullName: "elonmusk",
                profileUrl:
                    "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
            },
            {
                _id: uuid(),
                username: "himadri2110",
                fullName: "Himadri Shah",
                profileUrl:
                    "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_five_p4ycdp.webp",
            },
        ],
        following: [
            {
                _id: uuid(),
                username: "VANESSA_HERE",
                fullName: "Christiana Vanessa",
                profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_six_roalff.webp",
            },
        ],
    },

    {
        _id: uuid(),
        username: "elonmusk",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "elonmusk",
        bio: "X-AE-12 is my son!",
        website: "https://www.tesla.com/elon-musk",
        profileUrl:
            "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
        followers: [],
        following: [
            {
                _id: uuid(),
                username: "Nikhil_Belide",
                fullName: "Nikhil Belide",
                profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
            },
        ],
    },
    {
        _id: uuid(),
        username: "himadri2110",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Himadri Shah",
        bio: "Web Developer",
        website: "https://himadrishah.tech/",
        profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_five_p4ycdp.webp",
        followers: [],
        following: [
            {
                _id: uuid(),
                username: "Nikhil_Belide",
                fullName: "Nikhil Belide",
                profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
            },
        ],
    },
    {
        _id: uuid(),
        username: "VANESSA_HERE",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Christiana Vanessa",
        bio: "Visual Communicator | Creative Production | Graphic Designer",
        website: "https://www.christinavanessa.com/",
        profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_six_roalff.webp",
        followers: [
            {
                _id: uuid(),
                username: "Nikhil_Belide",
                fullName: "Nikhil Belide",
                profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
            },
        ],
        following: [],
    },
    {
        _id: uuid(),
        username: "Pablo_Sells",
        password: "Password@123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        fullName: "Pablo Escobar",
        bio: "I make and sell drugs!",
        website: "https://escobarinc.com/",
        profileUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652280230/Canary/pablo_esc_tpvmi8.jpg",
        followers: [],
        following: [],
    },
];
