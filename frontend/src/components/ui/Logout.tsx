"use client";

import Button from "@/components/ui/Button";
import { setAccToken, setRefToken, setUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Logout() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <Button
            variant="primary"
            onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("accToken");
                localStorage.removeItem("refToken");

                dispatch(setUser(null));
                dispatch(setAccToken(""));
                dispatch(setRefToken(""));

                toast.success("Logout successfully");
                router.push("/role");
            }}
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Logout</span>
        </Button>
    );
}
