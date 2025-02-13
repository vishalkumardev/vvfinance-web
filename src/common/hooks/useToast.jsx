import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the styles!

const useToast = () => {
  // Success Toast with stylish font and contrast
  const showSuccess = (message, options = {}) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: options.autoClose || 2000,
      hideProgressBar: false,
      closeButton: true,
      draggable: true,
      pauseOnHover: true,
      theme: options.theme || "colored",
      icon: "✔️", // Success icon
      style: {
        fontFamily: "Roboto, Arial, sans-serif", // Custom font family
        fontSize: "14px", // Smaller font size for better contrast
        color: "#ffffff", // White text for high contrast
        backgroundColor: "#4CAF50", // Green background for success
        padding: "12px 18px", // Padding for a more compact toast
        borderRadius: "6px", // Rounded corners for smooth look
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
      },
      ...options, // Allow overriding options
    });
  };

  // Error Toast with stylish font and contrast
  const showError = (message, options = {}) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: options.autoClose || 2000,
      hideProgressBar: false,
      closeButton: true,
      draggable: true,
      pauseOnHover: true,
      theme: options.theme || "colored",
      icon: "❌", // Error icon
      style: {
        // fontFamily: "Roboto, Arial, sans-serif", // Custom font family
        fontSize: "14px", // Smaller font size
        color: "#ffffff", // White text for high contrast
        backgroundColor: "#F44336", // Red background for error
        padding: "12px 18px", // Padding for consistency
        borderRadius: "6px", // Rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
      },
      ...options, // Allow overriding options
    });
  };

  return {
    showSuccess,
    showError,
  };
};

export default useToast;

const Showtoast = (type, message) => {
  const { showSuccess, showError } = useToast();
  if (type === "success") {
    showSuccess(message);
  } else if (type === "error") {
    showError(message);
  }
};

export { Showtoast, useToast };
