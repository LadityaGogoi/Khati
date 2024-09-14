import { Stack } from "expo-router"

const TestsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="test/[id]" options={{ headerShown: false }} />
        </Stack>
    )
}

export default TestsLayout