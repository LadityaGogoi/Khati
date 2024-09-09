import { Images } from "@/constants";
import { router, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import Animated, { FadeInUp, FadeOutDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context"

const OnboardingSteps = [
    {
        id: 0,
        heading: "#1 ADRE platform",
        img: Images.Platform,
        subheading: "অসমৰ আটাইতকৈ সাধাৰণ আৰু পূৰ্বৰ প্ৰশ্নবোৰ অনুশীলন কৰাৰ একমাত্ৰ সম্পূৰ্ণ মঞ্চ, য'ত পৰীক্ষাৰ্থীসকলে বিনামূলীয়াভাৱে অতি প্ৰয়োজনীয় প্ৰস্তুতি গ্ৰহণ কৰিব পাৰে।"
    },
    {
        id: 1,
        heading: "Free Mock Tests",
        img: Images.Exam,
        subheading: "পৰীক্ষাৰ্থীসকলে বিনামূলীয়া মক টেষ্টৰ যোগেদি তেওঁলোকৰ জ্ঞানৰ পৰিসীমা বুজি পায় আৰু প্ৰস্তুতিত উন্নতি ঘটাব পাৰে।"
    },
    {
        id: 2,
        heading: "Performance Analysis",
        img: Images.Analysis,
        subheading: "মক টেষ্টৰ পিছত পৰীক্ষাৰ্থীসকলে নিজৰ পাৰফৰ্মেন্সৰ পৰিৱৰণ পোৱা যায়, য'ত সঠিক উত্তৰ আৰু ভুল উত্তৰৰ তথ্য উপস্থাপন কৰা হয়।"
    },
];


const OnboardingScreen = () => {
    const [index, setIndex] = useState(0)
    const step = OnboardingSteps[index]

    const handleClick = () => {
        if (index == OnboardingSteps.length - 1) {
            router.push('/(auth)/welcome')
        }
        setIndex((index + 1) % OnboardingSteps.length)
    }
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Stack.Screen options={{ headerShown: false }} />
            <View className="h-screen flex flex-col justify-between items-center">
                <View className="w-full pr-3 flex flex-row justify-end items-start">
                    <TouchableOpacity onPress={() => router.push('/(auth)/welcome')}>
                        <Text className="text-base font-extrabold text-slate-700">Skip</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View key={index} entering={FadeInUp.delay(100)} exiting={FadeOutDown} className="flex-1 justify-center items-center">
                    <Text className="text-center text-green-500 text-lg font-bold">{step.heading}</Text>
                    <View className="w-64 h-64">
                        <Image source={step.img} className="w-full h-full object-cover" />
                    </View>
                    <Text className="p-3 text-center font-assamese-regular text-slate-700 text-base">{step.subheading}</Text>
                </Animated.View>
                <View className="w-9/12 mb-3 flex flex-col justify-center items-center">
                    <TouchableOpacity className="w-full p-3 rounded-full bg-green-500 justify-center items-center" onPress={() => handleClick()}>
                        <Text className="text-lg font-bold text-white">{index !== OnboardingSteps.length - 1 ? 'Continue' : 'Get Started'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default OnboardingScreen