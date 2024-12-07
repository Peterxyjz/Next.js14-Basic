'use client'

import accountApiRequests from "@/apiRequests/account"
import { sessionToken } from "@/lib/http"
import { useEffect } from "react"

export default function Profile() {

    useEffect(() => {
        console.log(sessionToken);

        const fetchProfile = async () =>
            await accountApiRequests.me(sessionToken.value)
        fetchProfile()
    }, [])


    return (
        <div>profile</div>
    )
}
