import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type CourseTopicType = {
    name: string;
    image: ImageSourcePropType;
    subject: number;
    total: number;
    solved: number;
    enrollment: number;
    topicId: number;
}

export const CourseTopics: CourseTopicType[] = [
    {
        name: "সাধাৰণ জ্ঞান - অসম, ভাৰত, বিশ্ব",
        image: Images.GeneralKnowledge,
        subject: 12,
        total: 1000,
        solved: 219,
        enrollment: 10234,
        topicId: 1
    },
    {
        name: "অংক",
        image: Images.GeneralKnowledge,
        subject: 11,
        total: 800,
        solved: 150,
        enrollment: 8543,
        topicId: 2
    },
    {
        name: "অসমীয়া ভাষা আৰু সাহিত্য",
        image: Images.GeneralKnowledge,
        subject: 13,
        total: 700,
        solved: 130,
        enrollment: 7450,
        topicId: 3
    },
    {
        name: "ইংৰাজী",
        image: Images.GeneralKnowledge,
        subject: 14,
        total: 600,
        solved: 200,
        enrollment: 6450,
        topicId: 4
    },
    {
        name: "অসমৰ ইতিহাস আৰু সংস্কৃতি",
        image: Images.GeneralKnowledge,
        subject: 15,
        total: 500,
        solved: 110,
        enrollment: 5678,
        topicId: 5
    },
    {
        name: "বিজ্ঞান আৰু পৰিবেশ",
        image: Images.GeneralKnowledge,
        subject: 16,
        total: 550,
        solved: 300,
        enrollment: 7890,
        topicId: 6
    },
    {
        name: "ভাৰতৰ সংবিধান আৰু ৰাজনৈতিক ধাৰা",
        image: Images.GeneralKnowledge,
        subject: 17,
        total: 400,
        solved: 170,
        enrollment: 4530,
        topicId: 7
    },
    {
        name: "ভাৰতীয় অৰ্থনীতি",
        image: Images.GeneralKnowledge,
        subject: 18,
        total: 350,
        solved: 145,
        enrollment: 3890,
        topicId: 8
    },
    {
        name: "কম্পিউটাৰ আৰু তথ্যপ্ৰযুক্তি",
        image: Images.GeneralKnowledge,
        subject: 19,
        total: 450,
        solved: 175,
        enrollment: 5890,
        topicId: 9
    }
];
