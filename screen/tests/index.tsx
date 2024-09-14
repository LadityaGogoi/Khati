import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { QuestionPapers } from "@/assets/data/test-data";
import TestCard from "@/components/card/test-card";

const sections = [
    "Grade IV - Class 8",
    "Grade IV - Class 10",
    "Grade III - Bachelor Degree",
    "Grade III - HSSLC",
    "Grade III - Driver",
];

const TestsScreen = () => {
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    // Filter question papers based on the selected section
    const filteredQuestionPapers = QuestionPapers.filter(
        (paper) => paper.type === selectedSection
    );

    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
                <View className="justify-center items-center">
                    <Text className="text-lg font-extrabold text-dark-500">
                        Test Series - ADRE
                    </Text>
                </View>
                <View className="flex flex-row justify-center items-center flex-wrap w-11/12 mx-auto">
                    {sections.map((section) => (
                        <TouchableOpacity
                            key={section}
                            onPress={() => setSelectedSection(section)}
                            className={`m-1.5 rounded-full px-3 py-1.5 ${selectedSection === section
                                ? "bg-green-500"
                                : "bg-green-100"
                                }`}
                        >
                            <Text
                                className={`text-sm font-extrabold ${selectedSection === section ? "text-white" : "text-green-500"
                                    }`}
                            >
                                {section}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className="mt-4">
                    {filteredQuestionPapers.map((paper, index) => (
                        <TestCard key={index} paper={paper} />
                    ))}
                </View>
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default TestsScreen;