import { QuestionPapers, QuestionPaperType } from "@/assets/data/test-data"
import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Test = () => {
    const { id } = useLocalSearchParams()

    const questionPaperId = Number(id)
    const findQuestionPaperById = (id: number): QuestionPaperType | undefined => {
        return QuestionPapers.find(questionPaper => questionPaper.id === id)
    }
    const questionPaper = findQuestionPaperById(questionPaperId)
    
    return (
        <SafeAreaView>
            <View>
                <Text>{questionPaper?.durationMinutes}</Text>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default Test