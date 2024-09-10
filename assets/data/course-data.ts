import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type QuestionOptionType = {
    option: string;
    isCorrect: boolean;
    isIt: "number" | "text"; // To specify if the option is a number or text
};

export type QuestionType = {
    question: string;
    options: QuestionOptionType[];
    bookmarked: boolean;
    isAttempted: boolean;  // To track if the question has been attempted
};

export type SubtopicType = {
    name: string;
    englishName: string;
    total: number;
    solved: number;
    bookmarked: boolean; // Bookmark for subtopic
    questions: QuestionType[];
};

export type CourseTopicType = {
    name: string;
    englishName: string;
    image: ImageSourcePropType;
    subject: number;
    total: number;
    solved: number;
    enrollment: number;
    topicId: number;
    bookmarked: boolean; // Bookmark for subject
    subtopics: SubtopicType[];
};

export const CourseTopics: CourseTopicType[] = [
    {
        name: "সাধাৰণ জ্ঞান - অসম, ভাৰত, বিশ্ব",
        englishName: "General Knowledge - Assam, India, World",
        image: Images.GeneralKnowledge,
        subject: 12,
        total: 1000,
        solved: 219,
        enrollment: 10234,
        topicId: 1,
        bookmarked: false,
        subtopics: [
            {
                name: "অসম ইতিহাস",
                englishName: "Assam History",
                total: 200,
                solved: 50,
                bookmarked: true,
                questions: [
                    {
                        question: "প্ৰথম অসমীয়া ছাত্ৰ সংগঠন কোনখন আছিল?",
                        options: [
                            { option: "অসম ছাত্ৰ সন্থা", isCorrect: true, isIt: "text" },
                            { option: "অসম সাহিত্য সভা", isCorrect: false, isIt: "text" },
                            { option: "অসম মহিলা সন্থা", isCorrect: false, isIt: "text" },
                            { option: "অসম ভাষা সন্থা", isCorrect: false, isIt: "text" }
                        ],
                        bookmarked: false,
                        isAttempted: true
                    },
                    {
                        question: "প্ৰথম অসমীয়া ছাপা কাকত কোনটো আছিল?",
                        options: [
                            { option: "অৰুণোদয়", isCorrect: true, isIt: "text" },
                            { option: "জনজীৱন", isCorrect: false, isIt: "text" },
                            { option: "অসম মিলন", isCorrect: false, isIt: "text" },
                            { option: "নবজ্যোতি", isCorrect: false, isIt: "text" }
                        ],
                        bookmarked: false,
                        isAttempted: false
                    },
                    {
                        question: "অসমত শিৱসাগৰ জিলাৰ নামটো কেতিয়া দিয়া হৈছিল?",
                        options: [
                            { option: "1839", isCorrect: true, isIt: "number" },
                            { option: "1902", isCorrect: false, isIt: "number" },
                            { option: "1870", isCorrect: false, isIt: "number" },
                            { option: "1965", isCorrect: false, isIt: "number" }
                        ],
                        bookmarked: false,
                        isAttempted: false
                    }
                ]
            },
        ]
    },
    {
        name: "অংক",
        englishName: "Mathematics",
        image: Images.GeneralKnowledge,
        subject: 11,
        total: 800,
        solved: 150,
        enrollment: 8543,
        topicId: 2,
        bookmarked: false,
        subtopics: [
            {
                name: "বীজগণিত",
                englishName: "Algebra",
                total: 250,
                solved: 80,
                bookmarked: false,
                questions: [
                    {
                        question: "x^2 - 4 = 0 হলে x ৰ মান কি?",
                        options: [
                            { option: "x = 2", isCorrect: true, isIt: "number" },
                            { option: "x = -2", isCorrect: false, isIt: "number" },
                            { option: "x = 0", isCorrect: false, isIt: "number" },
                            { option: "x = 8", isCorrect: false, isIt: "number" }
                        ],
                        bookmarked: true,
                        isAttempted: false
                    },
                ]
            },
        ]
    },
    {
        name: "অসমীয়া ভাষা আৰু সাহিত্য",
        englishName: "Assamese Language and Literature",
        image: Images.GeneralKnowledge,
        subject: 13,
        total: 700,
        solved: 130,
        enrollment: 7450,
        topicId: 3,
        bookmarked: false,
        subtopics: [
            {
                name: "ব্যাকৰণ",
                englishName: "Grammar",
                total: 200,
                solved: 60,
                bookmarked: false,
                questions: [
                    {
                        question: "অসমীয়া ভাষাৰ ব্যাকৰণৰ প্ৰথম গ্ৰন্থ কোনটো?",
                        options: [
                            { option: "হেমকোষ", isCorrect: false, isIt: "text" },
                            { option: "আদি অসমীয়া ব্যাকৰণ", isCorrect: true, isIt: "text" },
                            { option: "অসমীয়া অভিধান", isCorrect: false, isIt: "text" },
                            { option: "ভাষা কলা", isCorrect: false, isIt: "text" }
                        ],
                        bookmarked: false,
                        isAttempted: false
                    },
                ]
            },
        ]
    },
];
