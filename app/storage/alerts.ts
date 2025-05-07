import { create } from "zustand";

interface Alert {
  id: string;
  message: string;
  status?: "success" | "error" | "info";
}

interface AlertStore {
  alerts: Alert[];
  addAlert: (alert: Omit<Alert, "id">) => void;
  removeAlert: (id: string) => void;
}

const generateId = () => crypto.randomUUID();


const useAlert = create<AlertStore>((set) => ({
  alerts: [],
  
  addAlert: (alert) => {
    const newAlert: Alert = {
      id: generateId(),
      message:alert.message,
      status: alert.status,
    };
    set((state) => ({
      alerts: [...state.alerts, newAlert],
    }));

    setTimeout(() => {
      /* QUITAR ALERTAS DESPUÉS DE 4 SEGUNDOS */
      useAlert.getState().removeAlert(newAlert.id);
    }, 4000);
  },

  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    })),
}));

export default useAlert;
