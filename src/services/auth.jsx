import { useState, useCallback } from "react";
import useApi from "../common/hooks/useApi";
import { Showtoast } from "../common/hooks/useToast";

export const useAuth = () => {
  const { postApi } = useApi();
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState("pending");
  // Utility functions for localStorage operations
  const getLocalStorageItem = (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  };

  const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
  };

  // State management
  const [authorized, setAuthorized] = useState(
    () => !!getLocalStorageItem("userToken")
  );
  const [role, setRole] = useState(() => getLocalStorageItem("role", "public"));

  // Login function
  const login = useCallback(
    async (data) => {
      try {
        const response = await postApi("user/login", data);
        if (response.success) {
          setAuthorized(true);
          setLocalStorageItem("userToken", response.data.token);
          setLocalStorageItem("role", response.data.role);
          setRole(response.data.role);
        }
        return response;
      } catch (error) {
        console.error("Login failed:", error);
        return { success: false, error: error.message };
      }
    },
    [postApi]
  );

  // Logout function
  const logout = useCallback(() => {
    removeLocalStorageItem("userToken");
    removeLocalStorageItem("role");
    setAuthorized(false);
    setRole("public");
  }, []);

  const handleResendMail = async (email) => {
    setloading(true);
    // Call the API to resend the verification email
    const response = await postApi(`user/email/resend`, {
      email,
    });
    const { success, message } = response;

    if (success) {
      Showtoast("success", "Email sent successfully");
    } else {
      Showtoast("error", message);
    }
    setloading(false);
  };

  const verifyToken = async (token) => {
    setloading(true);
    try {
      const response = await postApi("user/email/verify", { token });
      const { success } = response;
      setStatus(success ? "success" : "failed");
    } catch (error) {
      console.error("Error verifying token:", error);
      setStatus("failed");
    }
    setloading(false);
  };

  // Return optimized hook state and methods
  return {
    authorized,
    role,
    setRole, // Optional: Expose if dynamic role setting is needed
    login,
    logout,
    loading,
    handleResendMail,
    verifyToken,
    status,
  };
};
