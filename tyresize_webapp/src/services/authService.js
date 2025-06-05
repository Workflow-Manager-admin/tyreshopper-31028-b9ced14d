//
// User Authentication API Service
//
import { post, get } from "../apiClient";

// PUBLIC_INTERFACE
export async function loginUser(email, password) {
  return await post("/auth/login", {
    data: { email, password },
  });
}

// PUBLIC_INTERFACE
export async function registerUser({ email, password, name }) {
  return await post("/auth/register", {
    data: { email, password, name },
  });
}

// PUBLIC_INTERFACE
export async function fetchUserProfile(token) {
  return await get("/user/me", { token });
}
