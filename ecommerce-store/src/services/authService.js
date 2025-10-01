const STORAGE_KEY = 'ecom_user';

const authService = {
  login: async (email, password) => {
    // Mock API delay
    await new Promise((r) => setTimeout(r, 300));
    const user = { id: Date.now(), email, name: email.split('@')[0] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },
  signup: async ({ name, email, password }) => {
    await new Promise((r) => setTimeout(r, 300));
    const user = { id: Date.now(), email, name };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },
  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
  getCurrentUser: () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  },
};

export default authService;
