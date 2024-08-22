import { useState } from 'react';
import toast from 'react-hot-toast'; // Import missing toast
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // Use context to update authentication state

    const login = async (username, password) => {

        const success = handleInputErrors({username, password})
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }) // Include body with JSON
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data);

            // Handle successful login, e.g., update context, localStorage, etc.
        } catch (error) {
            toast.error(error.message); // Show error message
        } finally {
            setLoading(false);
        }
    };
    return { login, loading };
};

export default useLogin;

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error('Please fill in all fields')
        return false;
    }

    return true
}