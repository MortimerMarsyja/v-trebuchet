import reducerFunction from "@utils/reducerFunction";

export function toastInit() {
  return {
    show: false,
    type: "none",
    content: undefined,
  };
}

interface ToastPayloadInterface {
  content: React.ReactNode | null;
  type: "success" | "error" | "warning" | "notification" | "none";
  show: boolean;
}

export interface ActionInterface {
  type:
    | "success_toast"
    | "notification_toast"
    | "warning_toast"
    | "error_toast"
    | "hide_toast";
  payload?: ToastPayloadInterface;
}

const cases = {
  success_toast: (state: any, action: ActionInterface) => {
    console.log("success_toast", { action });
    return action.payload!!;
  },
  notification_toast: (state: any, action: ActionInterface) => {
    return action.payload!!;
  },
  warning_toast: (state: any, action: ActionInterface) => {
    return action.payload!!;
  },
  error_toast: (state: any, action: ActionInterface) => {
    return action.payload!!;
  },
  hide: (state: any, action: ActionInterface) => {
    return toastInit();
  },
};

export const toastReducer = (state: any, action: ActionInterface): any => {
  return reducerFunction(state, action, cases);
};
