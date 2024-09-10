import { CourseTopics, CourseTopicType } from "@/assets/data/course-data"
import SubTopicCard from "@/components/card/subtopic-card"
import { Icons } from "@/constants"
import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Image, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SubjectScreen = () => {
    const { id } = useLocalSearchParams()

    const topicId = Number(id)

    const topic: CourseTopicType | undefined = CourseTopics.find(item => item.topicId === topicId)

    const percentage = topic ? parseFloat(((topic.solved / topic.total * 100).toFixed(1))) : 0



    return (
        <ScrollView contentContainerStyle={{ minHeight: '100%' }} className="flex flex-col gap-y-3 bg-white">
            <View className="flex flex-col w-full">
                <View className="w-full h-48">
                    <Image source={topic?.image} className="w-full h-full object-cover" />
                </View>
                <View className="flex flex-col gap-y-1.5 w-11/12 mx-auto py-3">
                    <View className="flex flex-row justify-between items-center gap-y-1.5">
                        <Text className="text-base font-extrabold text-dark-500">{topic?.englishName}</Text>
                        <View className="w-5 h-5">
                            <Image source={Icons.Bookmark} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                    </View>
                    <View className="flex flex-col gap-y-0.5 w-full mx-auto">
                        <View className="h-1.5 w-full rounded-full bg-green-300 flex flex-row justify-start items-center">
                            <View className="bg-green-500 h-full w-1/2 rounded-full" style={{ width: `${percentage}%` }}></View>
                        </View>
                        <View className="flex flex-row justify-between items-center">
                            <Text className="text-xs font-extrabold text-green-500">{topic?.solved}/{topic?.total}</Text>
                            <Text className="text-xs font-extrabold text-green-500">{percentage}% done</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View className="w-full flex flex-col gap-y-1.5">
                <View className="w-11/12 py-2 px-5 mx-auto flex flex-row justify-between items-center border-2 rounded-full border-dark-700">
                    <TextInput placeholder="Search your topic" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 text-base text-dark-700 font-bold" />
                    <View className="w-5 h-5">
                        <Image source={Icons.Search} tintColor="#363A3D" className="w-full h-full object-cover" />
                    </View>
                </View>
                <View className="pt-5">
                    {
                        topic?.subtopics.map((item, index) => (
                            <SubTopicCard key={index} item={item} />
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default SubjectScreen