type AddMemberProps = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};

async function addMember(data: AddMemberProps): Promise<void> {
    const payload = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password
    };

    const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Registration failed");
    }

    return;
}

export default addMember;
