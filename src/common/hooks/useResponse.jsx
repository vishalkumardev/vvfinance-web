import { Showtoast } from "./useToast";

const useResponse = async (response) => {
  const res = await response.json();

  if (res.statusCode == 201) {
    Showtoast("success", res?.message);
  }

  const getMessage = (messages) => {
    let message = "";
    if (typeof messages === "string") {
      message = messages;
    } else if (messages?.errors) {
      const keys = Object.keys(messages.errors);
      message = messages.errors[keys[0]]?.[0] ?? "";
    }
    return message;
  };

  if (res.statusCode != 200 && res.statusCode != 201) {
    Showtoast("error", getMessage(res?.errors?.length > 0 || res?.message));
  }

  return {
    data: res?.data,
    success: res?.success,
    message: getMessage(res?.message ?? res?.errors),
  };
};

export default useResponse;
