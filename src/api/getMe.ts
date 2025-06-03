import { User } from "../types/types";

async function getMe(accessToken: string) {
        const response = await fetch("http://localhost:8080/api/users/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const data: User = await response.json();
        return data;
    }
    export default getMe;