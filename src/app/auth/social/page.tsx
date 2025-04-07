//component imports
import SocialAuth from "@/app/components/auth/socialAuth";
import { Suspense } from "react";

export default function SocialAuthPage() {
    return <Suspense>
        <SocialAuth />;
    </Suspense>
}