'use client'

import accountApiRequests from "@/apiRequests/account"
import { useEffect } from "react"

export default function Profile() {

    useEffect(() => {
        const fetchProfile = async () =>
            await accountApiRequests.meClient()
        fetchProfile()
    }, [])


    return (
        <div>profile</div>
    )
}
