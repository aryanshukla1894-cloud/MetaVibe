import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('metavibe_user')) || null,
    token: localStorage.getItem('metavibe_token') || null,

    login: (userData, token) => {
        localStorage.setItem('metavibe_user', JSON.stringify(userData));
        localStorage.setItem('metavibe_token', token);
        set({ user: userData, token });
    },

    logout: () => {
        localStorage.removeItem('metavibe_user');
        localStorage.removeItem('metavibe_token');
        set({ user: null, token: null });
    },

    updateUser: (userData) => {
        localStorage.setItem('metavibe_user', JSON.stringify(userData));
        set({ user: userData });
    }
}));

export default useAuthStore;
