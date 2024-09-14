import { QuestionPaperType } from "@/assets/data/test-data"
import { Icons } from "@/constants"
import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"

const getBackgroundColor = (level: "easy" | "medium" | "hard") => {
    switch (level) {
        case "easy":
            return "bg-green-500"
        case "medium":
            return "bg-blue-500"
        case "hard":
            return "bg-red-500"
        default:
            return "bg-gray-500"
    }
}

type Props = {
    paper: QuestionPaperType
}

const TestCard = ({ paper }: Props) => {
    return (
        <View className="w-11/12 mx-auto my-5 flex flex-col gap-y-1.5 p-3 rounded bg-green-50">
            <View className="w-full flex flex-row justify-between items-center">
                <View className="flex flex-row justify-start items-center gap-x-1.5">
                    <Text className="p-0.5 bg-blue-500 rounded text-xs text-white font-extrabold">{paper.type}</Text>
                    <Text className={`p-0.5 ${getBackgroundColor(paper.level)} rounded text-xs text-white font-extrabold`}>{paper.level}</Text>
                </View>
                <View className="w-5 h-5">
                    <Image source={Icons.Bookmark} tintColor="#24AE7C" className="w-full h-full object-cover" />
                </View>
            </View>
            <Text className="text-lg font-extrabold text-dark-500">Question Paper {paper.id}</Text>
            <View className="flex flex-col gap-y-1.5">
                <View className="flex flex-row justify-between">
                    <View className="flex flex-row justify-center items-center gap-x-1.5">
                        <View className="w-5 h-5">
                            <Image source={Icons.Question} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-sm font-extrabold text-green-500">{paper.totalQuestions} Questions</Text>
                    </View>
                    <View className="flex flex-row justify-center items-center gap-x-1.5">
                        <View className="w-5 h-5">
                            <Image source={Icons.Time} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-sm font-extrabold text-green-500">{paper.durationMinutes} Minutes</Text>
                    </View>
                </View>
                <View className="flex flex-row justify-between">
                    <View className="flex flex-row justify-center items-center gap-x-1.5">
                        <View className="w-5 h-5">
                            <Image source={Icons.Book} tintColor="#24AE7C" className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-sm font-extrabold text-green-500">{paper.totalSubjects} Subjects</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push(`/test/${paper.id}`)} className="px-3 py-1.5 rounded-full bg-green-500 justify-center items-center">
                <Text className="text-base font-extrabold text-white">View Paper</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestCard
