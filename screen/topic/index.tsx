import { CourseTopics, SubtopicType } from "@/assets/data/course-data";
import PracticeQuestionCard from "@/components/card/practice-question-card";
import { Icons } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const TopicScreen = () => {
    const offset = useSharedValue(0);
    const { id } = useLocalSearchParams();
    const [filter, setFilter] = useState<"all" | "bookmark">("all");

    const subtopic: SubtopicType | undefined = CourseTopics.find(topic =>
        topic.subtopics.find(sub => sub.englishName === id)
    )?.subtopics.find(sub => sub.englishName === id);

    const percentage = subtopic ? parseFloat(((subtopic.solved / subtopic.total) * 100).toFixed(1)) : 0;

    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(offset.value * 255, {
                        damping: 20,
                        stiffness: 90,
                    }),
                },
            ],
        };
    });

    const handleSwitch = (option: "all" | "bookmark") => {
        setFilter(option); // Update filter state
        if (option === "all") {
            offset.value = 0;
        } else {
            offset.value = 0.6;
        }
    };

    // Filter questions based on bookmark status
    const filteredQuestions = filter === "all"
        ? subtopic?.questions
        : subtopic?.questions.filter(question => question.bookmarked);

    return (
        <SafeAreaView className="bg-white">
            <ScrollView contentContainerStyle={{ minHeight: '100%' }} className="flex flex-col">
                <View className="w-11/12 mx-auto flex flex-col gap-y-1.5">
                    <View className="w-full mx-auto flex flex-row justify-between items-center">
                        <Text className="text-lg font-extrabold text-dark-500">{subtopic?.englishName}</Text>
                        <View className="w-5 h-5">
                            <Image source={Icons.Bookmark} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-end items-center gap-x-1.5">
                        <Text className="font-extrabold text-xs bg-yellow-300 rounded p-0.5 text-white">grade |||</Text>
                        <Text className="font-extrabold text-xs bg-red-300 rounded p-0.5 text-white">grade IV</Text>
                    </View>
                    <View className="flex flex-col gap-y-0.5 w-full">
                        <View className="h-1.5 w-full rounded-full bg-green-300 flex flex-row justify-start items-center">
                            <View className="bg-green-500 h-full w-1/2 rounded-full" style={{ width: `${percentage}%` }}></View>
                        </View>
                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-xs font-extrabold text-green-500">{subtopic?.solved}/{subtopic?.total}</Text>
                            <Text className="text-xs font-extrabold text-green-500">{percentage}% done</Text>
                        </View>
                    </View>
                </View>

                <View className="relative flex flex-row justify-evenly items-center w-80 mx-auto my-3 bg-green-300 p-1 rounded-full">
                    <TouchableOpacity onPress={() => handleSwitch("all")} className="w-1/2 flex flex-row justify-center items-center gap-x-1 p-3 rounded-full relative z-10">
                        <View className="w-3 h-3">
                            <Image source={Icons.Question} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-sm font-extrabold text-dark-500">All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSwitch("bookmark")} className="w-1/2 flex flex-row justify-center items-center gap-x-1 p-3 rounded-full relative z-10">
                        <View className="w-3 h-3">
                            <Image source={Icons.Bookmark} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-sm font-extrabold text-dark-500">Bookmark</Text>
                    </TouchableOpacity>
                    <Animated.View className="absolute z-0 top-0 left-0 w-1/2 m-1 h-full bg-white rounded-full" style={customSpringStyles}></Animated.View>
                </View>

                <View className="w-11/12 mx-auto flex flex-col mt-5">
                    {
                        filteredQuestions?.map((item, index) => (
                            <PracticeQuestionCard key={index} index={index} item={item} />
                        ))
                    }
                </View>
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default TopicScreen;
