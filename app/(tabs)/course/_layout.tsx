import { Stack } from "expo-router"

const CourseLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="subject/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="topic/[id]" options={{ headerShown: false }} />
        </Stack>
    )
}

export default CourseLayout