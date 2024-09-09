import { Images } from "@/constants";
import { ImageSourcePropType } from "react-native"

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Physics',
        image: Images.Platform,
        description: 'Platform'
    },
    {
        title: 'Chemistry',
        image: Images.Exam,
        description: 'All Exams'
    },
    {
        title: 'math',
        image: Images.Analysis,
        description: 'Proper Analysis'
    },
]