import { useState } from "react";
import { QuestionType } from "@/assets/data/test-data";
import { Icons } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
    item: QuestionType;
    subject: string;
};

const TestQuestionCard = ({ item, subject }: Props) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionSelect = (optionIndex: number) => {
        if (selectedOption === optionIndex) {
            setSelectedOption(null);
        } else {
            setSelectedOption(optionIndex);
        }
    };

    return (
        <View className="w-full flex flex-col gap-y-1.5 p-3 my-1.5 bg-slate-100 rounded">
            <View className="flex flex-row gap-x-1.5">
                <View className="w-7 h-7 justify-center items-center bg-green-500 rounded-full">
                    <Text className="text-xs font-extrabold text-white">{item.id}</Text>
                </View>
                <View className="flex flex-row justify-center items-center gap-x-1.5">
                    <Text className="font-extrabold text-xs bg-blue-500 rounded p-0.5 text-white">{subject}</Text>
                </View>
            </View>
            <Text className="font-assamese-regular text-base text-dark-500">{item.question}</Text>
            <View className="flex flex-col justify-start items-end gap-y-1.5">
                {item.options.map((option, optionIndex) => (
                    <TouchableOpacity
                        key={optionIndex}
                        onPress={() => handleOptionSelect(optionIndex)}
                        className={`w-full px-1 py-2 border-2 rounded ${selectedOption === optionIndex ? 'border-green-500 bg-green-100' : 'border-slate-200 bg-slate-50'
                            } flex flex-row justify-start items-center gap-x-1.5`}
                    >
                        <View className={`border-2 w-6 h-6 ${selectedOption === optionIndex ? 'border-green-500 bg-green-500' : 'border-slate-300 bg-slate-100'} justify-center items-center rounded`}>
                            <Text className={`${selectedOption === optionIndex ? 'text-white' : 'text-dark-500'} font-extrabold text-xs`}>
                                {String.fromCharCode(65 + optionIndex)}
                            </Text>
                        </View>
                        <Text className={`${option.isIt === 'text' ? 'font-assamese-regular' : 'font-extrabold'} text-base text-dark-500`}>
                            {option.option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default TestQuestionCard;
