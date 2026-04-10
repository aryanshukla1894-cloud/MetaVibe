import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE,
    headers: { 'Content-Type': 'application/json' },
});

// Attach token to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('metavibe_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Auth
export const loginAPI = (data) => api.post('/auth/login', data);
export const registerAPI = (data) => api.post('/auth/register', data);
export const getProfileAPI = () => api.get('/auth/profile');

// Courses
export const getCoursesAPI = () => api.get('/courses');
export const createCourseAPI = (data) => api.post('/courses', data);
export const submitQuizResultAPI = (data) => api.post('/courses/quiz-results', data);

// Wellbeing
export const submitMoodAPI = (data) => api.post('/wellbeing/mood', data);
export const getMoodLogsAPI = () => api.get('/wellbeing/mood');

// AI
export const getRecommendationsAPI = () => api.get('/ai/recommendations');
export const chatWithAIAPI = (data) => api.post('/ai/chat', data);

// Communications
export const getNotificationsAPI = () => api.get('/communications/notifications');
export const markNotificationReadAPI = (id) => api.put(`/communications/notifications/${id}/read`);
export const sendMessageAPI = (data) => api.post('/communications/message', data);

export default api;
