import Profile from "@/app/me/profile"
import envConfig from "@/config"
import { cookies } from 'next/headers'
export default async function MeProfile() {
    const cookieToken = cookies()
    const sessionToken = cookieToken.get('sessionToken')

    const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/account/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken?.value}`
        },
    }).then(async (res) => {
        const payload = await res.json()
        const data = {
            status: res.status,
            payload
        }
        if (!res.ok) {
            throw data
        }
        return data
    })

    return (
        <div>
            <h1>Me Profile</h1>
            <div>Xin chào {result.payload.data.name}</div>
            <Profile />
        </div>
    )
}
