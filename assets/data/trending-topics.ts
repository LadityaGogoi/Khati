import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type TrendingTopicType = {
    name: string;
    image: ImageSourcePropType;
    total: number,
    solved: number,
    enrollment: number;
    topicId: number;
}

export const trendingTopics: TrendingTopicType[] = [
    {
        name: "সাধাৰণ জ্ঞান - অসম, ভাৰত, বিশ্ব",
        image: Images.GeneralKnowledge,
        total: 1000,
        solved: 219,
        enrollment: 10234,
        topicId: 1
    },
    {
        name: "অসমৰ ইতিহাস আৰু সংস্কৃতি",
        image: Images.GeneralKnowledge, // Default image
        total: 800,
        solved: 340,
        enrollment: 8900,
        topicId: 2
    },
    {
        name: "ভাৰতৰ সংবিধান আৰু ৰাজনীতি",
        image: Images.GeneralKnowledge, // Default image
        total: 700,
        solved: 410,
        enrollment: 7600,
        topicId: 3
    },
    {
        name: "গণিত আৰু যুক্তি পৰীক্ষা",
        image: Images.GeneralKnowledge, // Default image
        total: 500,
        solved: 295,
        enrollment: 6800,
        topicId: 4
    },
    {
        name: "ইংৰাজী ভাষা আৰু বাচনিকতা",
        image: Images.GeneralKnowledge, // Default image
        total: 600,
        solved: 350,
        enrollment: 7400,
        topicId: 5
    },
    {
        name: "বিজ্ঞান আৰু প্ৰযুক্তিবিদ্যা",
        image: Images.GeneralKnowledge, // Default image
        total: 550,
        solved: 320,
        enrollment: 7200,
        topicId: 6
    },
    {
        name: "অসম চৰকাৰৰ অধীনস্থ চাকৰি",
        image: Images.GeneralKnowledge, // Default image
        total: 450,
        solved: 220,
        enrollment: 5000,
        topicId: 7
    }
];
