import { Redirect } from "expo-router"
import { useState } from "react"

const Page = () => {
    const [user, setUser] = useState(true)

    return (
        <>
            <Redirect href={!user ? "/(tabs)" : "/(auth)"} />
        </>
    )
}

export default Page