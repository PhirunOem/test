//component imports

import SignIn from "@/app/components/auth/login";
import { Suspense } from "react";

export default function LoginPage() {
    return <Suspense>
        <SignIn />
    </Suspense>;
}