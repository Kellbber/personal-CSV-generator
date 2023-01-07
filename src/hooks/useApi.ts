import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost3000",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 3,
        name: "Kellbber",
        email: "kellbberbarcarolo@gmail.com",
      },
    };
    const response = await api.post("/validate", { token });
    return response.data;
  },

  signIn: async (email: string, password: string) => {
    return {
      user: {
        id: 3,
        name: "Kellbber",
        email: "kellbberbarcarolo@gmail.com",
      },
      token: "123456789",
    };
    const response = await api.post("/signIn", {
      email,
      password,
    });

    return response.data;
  },

  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
