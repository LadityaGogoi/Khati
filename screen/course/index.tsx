import TopicCard from "@/components/card/topic-card"
import Footer from "@/components/footer/footer"
import { trendingTopics } from "@/assets/data/trending-topics"
import { Icons } from "@/constants"
import { StatusBar } from "expo-status-bar"
import { Image, ScrollView, Text, TextInput, View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CourseTopics } from "@/assets/data/course-data"

const CourseScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <ScrollView contentContainerStyle={{ minHeight: '100%' }} className="flex flex-col gap-y-3">
                <View className="justify-center items-center">
                    <Text className="text-xl font-extrabold text-dark-500">ADRE Course</Text>
                </View>
                <View className="w-11/12 py-2 px-5 mx-auto flex flex-row justify-between items-center border-2 rounded-full border-dark-700">
                    <TextInput placeholder="Search your topic" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 text-base text-dark-700 font-bold" />
                    <View className="w-5 h-5">
                        <Image source={Icons.Search} tintColor="#363A3D" className="w-full h-full object-cover" />
                    </View>
                </View>
                <View className="w-11/12 mx-auto flex flex-col">
                    {
                        CourseTopics.map((item, index) => (
                            <TopicCard key={index} item={item} />
                        ))
                    }
                </View>
                <Footer />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default CourseScreen