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
        username: "himadri2110",
        createdAt: "2021-12-01",
        updatedAt: formatDate(),
        comments: [
            {
                comment: "I like your work. You wanna join Tesla?",
                _id: uuid(),
                username: "elonmusk",
                createdAt: "2022-01-02",
            },
        ],
    },
    {
        _id: uuid(),
        content: "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Nikhil_Belide",
        createdAt: "2021-05-15",
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "My new portfolio in Bio",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "VANESSA_HERE",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
        postImgUrl:
            "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652816334/Canary/Christina-Vanessa-Portfolio-Website-Example_umojac.jpg",
        imageAlt: "VANESSA_HERE",
    },
    {
        _id: uuid(),
        content: "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Nikhil_Belide",
        createdAt: "2020-05-15",
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 3,
            likedBy: [
                {
                    _id: uuid(),
                    username: "Adarsh_Balika",
                    fullName: "Adarsh Balika",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_two_kwishu.png",
                },
                {
                    _id: uuid(),
                    username: "elonmusk",
                    fullName: "elonmusk",
                    profileUrl:
                        "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
                },
                {
                    _id: uuid(),
                    username: "Pablo_Sells",
                    fullName: "Pablo Escobar",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652869915/Canary/Pablo_Escobar_Mug_fi6gr1.jpg",
                },
            ],
            dislikedBy: [],
        },
        username: "Pablo_Sells",
        createdAt: "2016-01-01",
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "I am the king!",
        likes: {
            likeCount: 2,
            likedBy: [
                {
                    _id: uuid(),
                    username: "VANESSA_HERE",
                    fullName: "Christiana Vanessa",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_six_roalff.webp",
                },
                {
                    _id: uuid(),
                    username: "himadri2110",
                    fullName: "Himadri Shah",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_five_p4ycdp.webp",
                },
            ],
            dislikedBy: [],
        },
        username: "elonmusk",
        createdAt: "2022-05-14",
        updatedAt: formatDate(),
        comments: [
            { comment: "Ha chal chal, patha hai", _id: uuid(), username: "Adarsh_Balika", createdAt: "2022-05-14" },
            { comment: "Nice Explanation", _id: uuid(), username: "himadri2110", createdAt: "2022-05-14" },
        ],
        postImgUrl: "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652791119/Canary/pdffy8cl64ll2f8hbqjh.webp",
        imageAlt: "pdffy8cl64ll2f8hbqjh",
    },
    {
        _id: uuid(),
        content:
            "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        likes: {
            likeCount: 1,
            likedBy: [
                {
                    _id: uuid(),
                    username: "Nikhil_Belide",
                    fullName: "Nikhil Belide",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
                },
            ],
            dislikedBy: [],
        },
        username: "himadri2110",
        createdAt: "2021-12-01",
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "Life is boring without drugs!",
        likes: {
            likeCount: 2,
            likedBy: [
                {
                    _id: uuid(),
                    username: "elonmusk",
                    fullName: "elonmusk",
                    profileUrl:
                        "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
                },
                {
                    _id: uuid(),
                    username: "Pablo_Sells",
                    fullName: "Pablo Escobar",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652869915/Canary/Pablo_Escobar_Mug_fi6gr1.jpg",
                },
            ],
            dislikedBy: [],
        },
        username: "Pablo_Sells",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [
            { comment: "I want drugs in Tesla", _id: uuid(), username: "elonmusk", createdAt: "2021-12-02" },
            {
                comment: "Don't do such things.",
                _id: uuid(),
                username: "Adarsh_Balika",
                createdAt: "2021-12-03",
            },
        ],
        postImgUrl:
            "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652813451/Canary/narcos_203_00873r1_wide-775f1c1b8a3fe57cb17da8361e5e1c165e90d12f_t7ryiq.jpg",
        imageAlt: "pablo",
    },
    {
        _id: uuid(),
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
        likes: {
            likeCount: 3,
            likedBy: [
                {
                    _id: uuid(),
                    username: "Adarsh_Balika",
                    fullName: "Adarsh Balika",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_two_kwishu.png",
                },
                {
                    _id: uuid(),
                    username: "elonmusk",
                    fullName: "elonmusk",
                    profileUrl:
                        "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
                },
                {
                    _id: uuid(),
                    username: "Pablo_Sells",
                    fullName: "Pablo Escobar",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652869915/Canary/Pablo_Escobar_Mug_fi6gr1.jpg",
                },
            ],
            dislikedBy: [],
        },
        username: "VANESSA_HERE",
        createdAt: "2022-05-15",
        updatedAt: formatDate(),
        comments: [
            { comment: "Ha chal chal, patha hai", _id: uuid(), username: "Nikhil_Belide", createdAt: "2022-05-15" },
            { comment: "Nice Explanation", _id: uuid(), username: "himadri2110", createdAt: "2022-05-15" },
        ],
    },
    {
        _id: uuid(),
        content:
            "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
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
        content: "If I were a book, what title would I have?",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Adarsh_Balika",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "Are we living, or are we dying?",
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
        content: "The hospital where you were born is the only building you left without entering.",
        likes: {
            likeCount: 1,
            likedBy: [
                {
                    _id: uuid(),
                    username: "Pablo_Sells",
                    fullName: "Pablo Escobar",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652869915/Canary/Pablo_Escobar_Mug_fi6gr1.jpg",
                },
            ],
            dislikedBy: [],
        },
        username: "VANESSA_HERE",
        createdAt: "2022-03-15",
        updatedAt: formatDate(),
        comments: [
            { comment: "I am better than you!", _id: uuid(), username: "Adarsh_Balika", createdAt: "2022-03-15" },
            { comment: "Nice Explanation", _id: uuid(), username: "himadri2110", createdAt: "2022-04-15" },
        ],
    },
    {
        _id: uuid(),
        content:
            "Always be a friend who will lend a hand in trouble. It’s easy to be a good friend when everything is great.",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Adarsh_Balika",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "Butter is a food lotion.",
        likes: {
            likeCount: 2,
            likedBy: [
                {
                    _id: uuid(),
                    username: "elonmusk",
                    fullName: "elonmusk",
                    profileUrl:
                        "https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg",
                },
                {
                    _id: uuid(),
                    username: "Pablo_Sells",
                    fullName: "Pablo Escobar",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652869915/Canary/Pablo_Escobar_Mug_fi6gr1.jpg",
                },
            ],
            dislikedBy: [],
        },
        username: "Pablo_Sells",
        createdAt: "2022-04-012",
        updatedAt: formatDate(),
        comments: [],
    },
    {
        _id: uuid(),
        content: "New profile Updated",
        likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
        },
        username: "Adarsh_Balika",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        comments: [],
        postImgUrl: "https://i.pinimg.com/736x/37/d3/12/37d31294582078493774ab798ff943f9.jpg",
        imageAlt: "Adarsh_Balika",
    },
    {
        _id: uuid(),
        content: "What would you do if you had to face your worst fear every day?",
        likes: {
            likeCount: 2,
            likedBy: [
                {
                    _id: uuid(),
                    username: "VANESSA_HERE",
                    fullName: "Christiana Vanessa",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278882/Canary/user_six_roalff.webp",
                },
                {
                    _id: uuid(),
                    username: "Nikhil_Belide",
                    fullName: "Nikhil Belide",
                    profileUrl:
                        "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652278883/Canary/user_four_efnglw.png",
                },
            ],
            dislikedBy: [],
        },
        username: "elonmusk",
        createdAt: "2022-05-14",
        updatedAt: formatDate(),
        postImgUrl:
            "https://res.cloudinary.com/dtelw4yz8/image/upload/v1652812832/Canary/hero-xpulse-200-modified-2021-price-3_ug9loc.jpg",
        imageAlt: "hero-xpulse-200",
        comments: [
            { comment: "Where is Roadster?", _id: uuid(), username: "Adarsh_Balika", createdAt: "2022-05-14" },
            {
                comment: "Where is my CyberTruck? U took my money and ran away Elon!",
                _id: uuid(),
                username: "himadri2110",
                createdAt: "2022-05-15",
            },
        ],
    },
];
