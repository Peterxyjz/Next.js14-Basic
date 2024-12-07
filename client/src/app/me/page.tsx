import accountApiRequests from "@/apiRequests/account"
import Profile from "@/app/me/profile"
import envConfig from "@/config"
import { cookies } from 'next/headers'
export default async function MeProfile() {
    const cookieToken = cookies()
    const sessionToken = cookieToken.get('sessionToken')

    const result = await accountApiRequests.me(sessionToken?.value ?? '')

    return (
        <div>
            <h1>Me Profile</h1>
            <div>Xin chào {result.payload.data.name}</div>
            <Profile />
        </div>
    )
}
