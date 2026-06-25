import api from "./api";

export interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (data: LoginPayload) => {
  const res = await api.post("/api/auth/login", data);
  return res.data.data;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
   
}) => {
  const res = await api.post("/api/auth/register", data);
  return res.data;
};

export const me = async () => {
  const res = await api.get("/api/auth/me");
  return res.data.data;
};

 