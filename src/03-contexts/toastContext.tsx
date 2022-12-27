import Toast from "@components/Toast";
import { createContext, useContext, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type ToastType = "success" | "error" | "warning" | "info" | null;

type ModalContextType = {
  visible: boolean;
  content: React.ReactNode | null;
  showToast: (content: React.ReactNode, type: ToastType) => void;
  hideToast: () => void;
};

export const ToastContentContext = createContext<ModalContextType>({
  visible: false,
  showToast: () => {},
  hideToast: () => {},
  content: null,
});

export const ToastContentProvider = ({ children }: ProviderProps) => {
  const [content, setContent] = useState<ModalContextType["content"]>(null);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<ToastType>(null);

  const showToast = (content: React.ReactNode, type: ToastType) => {
    setContent(content);
    setType(type);
    setVisible(true);
  };

  const hideToast = () => {
    setContent(null);
    setVisible(false);
    setType(null);
  };

  return (
    <ToastContentContext.Provider
      value={{ content, visible, hideToast, showToast }}
    >
      {children}
      <Toast
        show={visible}
        toastType={type}
        hideToast={hideToast}
        children={content}
      />
    </ToastContentContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContentContext);
