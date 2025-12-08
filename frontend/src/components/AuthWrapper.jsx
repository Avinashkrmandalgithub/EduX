import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

const AuthWrapper = ({ children }) => {
  const loadUser = useAuthStore((state) => state.loadUser);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    loadUser(); // auto-load user on refresh
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return children;
};

export default AuthWrapper;
