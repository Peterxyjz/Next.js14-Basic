'use client'
import { sessionToken } from "@/lib/http";
import { useLayoutEffect } from "react";


export default function AppProvider({ children, initialSessionToken = '' }: { children: React.ReactNode, initialSessionToken?: string }) {
    useLayoutEffect(() => {
        sessionToken.value = initialSessionToken
    }, [initialSessionToken])
    return (
        <>
            {children}
        </>
    )
}