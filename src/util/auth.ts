export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("login failed");
  }

  const data = await response.json();

  localStorage.setItem("refreshToken", data.refreshToken);

  return data.accessToken;
}

let refreshInProgress: Promise<string> | null = null;

export async function refreshToken() {
  if (refreshInProgress) return refreshInProgress;

  refreshInProgress = (async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) throw new Error("No refresh token");

    const response = await fetch("http://localhost:8080/api/auth/token/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    refreshInProgress = null;

    if (!response.ok) throw new Error("Refresh failed");

    const data = await response.json();
    if (data.refreshToken) localStorage.setItem("refreshToken", data.refreshToken);
    return data.accessToken;
  })();

  return refreshInProgress;
}

export async function logout() {
  localStorage.removeItem("refreshToken");
}
