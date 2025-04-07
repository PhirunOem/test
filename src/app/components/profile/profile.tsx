'use client'

import { useSession } from "next-auth/react"

export default function Profile() {
    const session = useSession();
    console.log(session)
    return <div>
        <h2>This is profile. {session?.data?.user?.id}</h2>
    </div>
}