import { Redirect } from "expo-router"
import { useState } from "react"

const Index = () => {
    const [initial, setInitial] = useState(true)
    return (
        <>
            <Redirect href={!initial ? "/(auth)/welcome" : "/(auth)/onboarding"} />
        </>
    )
}

export default Index