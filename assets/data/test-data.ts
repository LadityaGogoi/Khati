export type QuestionOptionType = {
    option: string;
    isCorrect: boolean;
    isIt: "number" | "text";
}

export type QuestionType = {
    id: number;
    question: string;
    options: QuestionOptionType[];
}

export type SubjectType = {
    name: string;
    englishName: string;
    total: number;
    questions: QuestionType[];
}

export type QuestionPaperType = {
    id: number;
    type: "Grade IV - Class 8" | "Grade IV - Class 10" | "Grade III - Bachelor Degree" | "Grade III - HSSLC" | "Grade III - Driver";
    totalQuestions: number;
    durationMinutes: number;
    totalSubjects: number;
    bookmarked: boolean;
    isTaken: boolean;
    level: "easy" | "medium" | "hard"; // Added level of difficulty
    subjects: SubjectType[];
}

export const QuestionPapers: QuestionPaperType[] = [
    {
        id: 1,
        type: "Grade IV - Class 8",
        totalQuestions: 20,
        durationMinutes: 120,
        totalSubjects: 5,
        bookmarked: false,
        isTaken: false,
        level: "medium",
        subjects: [
            {
                name: "General Knowledge",
                englishName: "General Knowledge",
                total: 4,
                questions: [
                    {
                        id: 1,
                        question: "ভাৰতৰ ৰাজধানী কি?",
                        options: [
                            { option: "মুম্বাই", isCorrect: false, isIt: "text" },
                            { option: "দিল্লী", isCorrect: true, isIt: "text" },
                            { option: "কলকাতা", isCorrect: false, isIt: "text" },
                            { option: "চেন্নাই", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 2,
                        question: "ভাৰতৰ ৰাষ্ট্ৰীয় সংগীত কোনে লিখিছিল?",
                        options: [
                            { option: "ৰবীন্দ্ৰনাথ ঠাকুৰ", isCorrect: true, isIt: "text" },
                            { option: "সৰোজিনী নাইডু", isCorrect: false, isIt: "text" },
                            { option: "বংকিম চন্দ্ৰ চট্টোপাধ্যায়", isCorrect: false, isIt: "text" },
                            { option: "মহাত্মা গান্ধী", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 3,
                        question: "বিছলাৰ বনাত গছৰ কীট পায়?",
                        options: [
                            { option: "বট", isCorrect: true, isIt: "text" },
                            { option: "অশ্বত্থ", isCorrect: false, isIt: "text" },
                            { option: "নীম", isCorrect: false, isIt: "text" },
                            { option: "জাম", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 4,
                        question: "অসমৰ মুখ্য মন্ত্ৰী কোন?",
                        options: [
                            { option: "হিমন্ত বিশ্ব শর্মা", isCorrect: true, isIt: "text" },
                            { option: "তৰুণ গগৈ", isCorrect: false, isIt: "text" },
                            { option: "পদ্ম হাজৰিকা", isCorrect: false, isIt: "text" },
                            { option: "অজিত ভট্টাচাৰ্য্য", isCorrect: false, isIt: "text" }
                        ]
                    }
                ]
            },
            {
                name: "Mathematics",
                englishName: "Mathematics",
                total: 4,
                questions: [
                    {
                        id: 5,
                        question: "12 + 15 কিমান?",
                        options: [
                            { option: "25", isCorrect: false, isIt: "number" },
                            { option: "27", isCorrect: true, isIt: "number" },
                            { option: "30", isCorrect: false, isIt: "number" },
                            { option: "35", isCorrect: false, isIt: "number" }
                        ]
                    },
                    {
                        id: 6,
                        question: "25 - 5 কিমান?",
                        options: [
                            { option: "15", isCorrect: false, isIt: "number" },
                            { option: "20", isCorrect: true, isIt: "number" },
                            { option: "10", isCorrect: false, isIt: "number" },
                            { option: "30", isCorrect: false, isIt: "number" }
                        ]
                    },
                    {
                        id: 7,
                        question: "10 * 10 কিমান?",
                        options: [
                            { option: "100", isCorrect: true, isIt: "number" },
                            { option: "110", isCorrect: false, isIt: "number" },
                            { option: "120", isCorrect: false, isIt: "number" },
                            { option: "130", isCorrect: false, isIt: "number" }
                        ]
                    },
                    {
                        id: 8,
                        question: "50 / 2 কিমান?",
                        options: [
                            { option: "25", isCorrect: true, isIt: "number" },
                            { option: "20", isCorrect: false, isIt: "number" },
                            { option: "30", isCorrect: false, isIt: "number" },
                            { option: "15", isCorrect: false, isIt: "number" }
                        ]
                    }
                ]
            },
            {
                name: "Science",
                englishName: "Science",
                total: 4,
                questions: [
                    {
                        id: 9,
                        question: "পানীৰ ৰাসায়নিক চিহ্ন কি?",
                        options: [
                            { option: "O2", isCorrect: false, isIt: "text" },
                            { option: "H2O", isCorrect: true, isIt: "text" },
                            { option: "CO2", isCorrect: false, isIt: "text" },
                            { option: "H2", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 10,
                        question: "ভাৰতৰ ৰাষ্ট্ৰীয় পশু কোনটো?",
                        options: [
                            { option: "পোৱালী", isCorrect: false, isIt: "text" },
                            { option: "বাঘ", isCorrect: true, isIt: "text" },
                            { option: "গৰু", isCorrect: false, isIt: "text" },
                            { option: "হাতী", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 11,
                        question: "বিশ্বৰ আটাইতকৈ ওজনবিহীন পদাৰ্থ কি?",
                        options: [
                            { option: "পানী", isCorrect: false, isIt: "text" },
                            { option: "হাইড্ৰজেন", isCorrect: true, isIt: "text" },
                            { option: "হিলিয়াম", isCorrect: false, isIt: "text" },
                            { option: "নাইট্ৰ'জেন", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 12,
                        question: "সূৰ্য্যৰ পৰ্য্যন্ত কিমান গ্ৰহ আছে?",
                        options: [
                            { option: "7", isCorrect: false, isIt: "number" },
                            { option: "8", isCorrect: true, isIt: "number" },
                            { option: "9", isCorrect: false, isIt: "number" },
                            { option: "10", isCorrect: false, isIt: "number" }
                        ]
                    }
                ]
            },
            {
                name: "English",
                englishName: "English",
                total: 4,
                questions: [
                    {
                        id: 13,
                        question: "'happy' শব্দটোৰ সমার্থক শব্দ কি?",
                        options: [
                            { option: "দুখী", isCorrect: false, isIt: "text" },
                            { option: "আনন্দিত", isCorrect: true, isIt: "text" },
                            { option: "ৰাগী", isCorrect: false, isIt: "text" },
                            { option: "শান্ত", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 14,
                        question: "'fast' শব্দটোৰ সমার্থক শব্দ কি?",
                        options: [
                            { option: "ধীৰ", isCorrect: false, isIt: "text" },
                            { option: "তাতাৰ", isCorrect: true, isIt: "text" },
                            { option: "ঠাণ্ডা", isCorrect: false, isIt: "text" },
                            { option: "মৃত", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 15,
                        question: "'strong' শব্দটোৰ সমার্থক শব্দ কি?",
                        options: [
                            { option: "শক্তিশালী", isCorrect: true, isIt: "text" },
                            { option: "দুৰ্বল", isCorrect: false, isIt: "text" },
                            { option: "লাহান", isCorrect: false, isIt: "text" },
                            { option: "পাহাৰ", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 16,
                        question: "'big' শব্দটোৰ সমার্থক শব্দ কি?",
                        options: [
                            { option: "বৃহৎ", isCorrect: true, isIt: "text" },
                            { option: "লাহান", isCorrect: false, isIt: "text" },
                            { option: "চিকণ", isCorrect: false, isIt: "text" },
                            { option: "সৰু", isCorrect: false, isIt: "text" }
                        ]
                    }
                ]
            },
            {
                name: "Aptitude",
                englishName: "Aptitude",
                total: 4,
                questions: [
                    {
                        id: 17,
                        question: "এখন ৰেলগাড়ীয়ে ঘণ্টাত 60 কিমি বেগেৰে চলে। 2 ঘণ্টাত সেয়া কিমান দূৰ যাব?",
                        options: [
                            { option: "120 কিমি", isCorrect: true, isIt: "text" },
                            { option: "100 কিমি", isCorrect: false, isIt: "text" },
                            { option: "90 কিমি", isCorrect: false, isIt: "text" },
                            { option: "80 কিমি", isCorrect: false, isIt: "text" }
                        ]
                    },
                    {
                        id: 18,
                        question: "এজন লোকৰ 5 আপেল আছে আৰু সি 2 আপেল খাইছে। তাৰ পিছত কিমান আপেল বাকী থাকে?",
                        options: [
                            { option: "3", isCorrect: true, isIt: "number" },
                            { option: "2", isCorrect: false, isIt: "number" },
                            { option: "4", isCorrect: false, isIt: "number" },
                            { option: "5", isCorrect: false, isIt: "number" }
                        ]
                    },
                    {
                        id: 19,
                        question: "এখন দাগী কাগজৰ ওপৰত 4 তৰ্ক যুক্ত কৰিলেই 3য় স্থানে কিমান ছাঁ থাকে?",
                        options: [
                            { option: "2", isCorrect: false, isIt: "number" },
                            { option: "4", isCorrect: false, isIt: "number" },
                            { option: "6", isCorrect: true, isIt: "number" },
                            { option: "8", isCorrect: false, isIt: "number" }
                        ]
                    },
                    {
                        id: 20,
                        question: "হিমালয় কি?",
                        options: [
                            { option: "এখন পৰ্বতমালা", isCorrect: true, isIt: "text" },
                            { option: "এখন সাগৰ", isCorrect: false, isIt: "text" },
                            { option: "এখন নদী", isCorrect: false, isIt: "text" },
                            { option: "এখন বন", isCorrect: false, isIt: "text" }
                        ]
                    }
                ]
            }
        ]
    }
];


