import { useState } from 'react';
import { QuestionType } from "@/assets/data/course-data";
import { Icons } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
    item: QuestionType;
    index: number;
};

const PracticeQuestionCard = ({ index, item }: Props) => {
    const [showAnswer, setShowAnswer] = useState(item.isAttempted);

    const handleViewAnswer = () => {
        setShowAnswer(true);
    };

    return (
        <View className="w-full flex flex-col gap-y-3 p-3 my-1.5 bg-slate-100 rounded">
            <View className="flex flex-row gap-x-1.5">
                <View className="w-7 h-7 justify-center items-center bg-green-500 rounded-full">
                    <Text className="text-xs font-extrabold text-white">{index + 1}</Text>
                </View>
                <View className="flex flex-row justify-center items-center gap-x-1.5">
                    <Text className="font-extrabold text-xs bg-yellow-300 rounded p-0.5 text-white">grade |||</Text>
                    <Text className="font-extrabold text-xs bg-red-300 rounded p-0.5 text-white">grade IV</Text>
                </View>
            </View>
            <Text className="font-assamese-regular text-base text-dark-500">{item.question}</Text>
            <View className="flex flex-col justify-start items-end gap-y-1.5">
                {
                    item.options.map((option, optionIndex) => (
                        <View
                            key={optionIndex}
                            className={`w-full px-1 py-2 border-2 rounded ${showAnswer && option.isCorrect ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50'
                                } flex flex-row justify-start items-center gap-x-1.5`}
                        >
                            <View className={`border-2 w-6 h-6 ${showAnswer && option.isCorrect ? 'border-green-500 bg-green-500' : 'border-slate-300 bg-slate-100'} justify-center items-center rounded`}>
                                <Text className={`${showAnswer && option.isCorrect ? 'text-white' : 'text-dark-500'} font-extrabold text-xs`}>
                                    {String.fromCharCode(65 + optionIndex)}
                                </Text>
                            </View>
                            <Text className={`${option.isIt === 'text' ? 'font-assamese-regular' : 'font-extrabold'} text-base text-dark-500`}>
                                {option.option}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <View className="flex flex-row justify-between items-center">
                {!showAnswer ? (
                    <TouchableOpacity
                        className="w-1/2 p-2 rounded bg-green-500 justify-center items-center"
                        onPress={handleViewAnswer}
                    >
                        <Text className="text-base font-extrabold text-white">view answer</Text>
                    </TouchableOpacity>
                ) : (
                    <Text className="w-1/2 p-2 text-base font-extrabold text-green-500">Answer Revealed</Text>
                )}
                <View className="w-5 h-5">
                    <Image source={Icons.Bookmark} tintColor="#24AE7C" className="w-full h-full object-cover" />
                </View>
            </View>
        </View>
    );
};

export default PracticeQuestionCard;
