import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Nikhil_Belide",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },

    {
        _id: uuid(),
        content: "At vero eos et accusamus et iusto odio dignissimos  sunt in culpa qui officia  repellat.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Nikhil_Belide",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Pablo_Sells",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "elonmusk",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [
            { comment: "Ha chal chal, patha hai", _id: uuid(), username: "Adarsh_Balika" },
            { comment: "Nice Explanation", _id: uuid(), username: "himadri2110" },
        ],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "himadri2110",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Pablo_Sells",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [
            { comment: "I want drugs in Tesla", _id: uuid(), username: "elonmusk" },
            { comment: "Don't do such things Elon Bhaiya.", _id: uuid(), username: "Adarsh_Balika" },
        ],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "VANESSA_HERE",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [
            { comment: "Ha chal chal, patha hai", _id: uuid(), username: "Nikhil_Belide" },
            { comment: "Nice Explanation", _id: uuid(), username: "himadri2110" },
        ],
    },
];
