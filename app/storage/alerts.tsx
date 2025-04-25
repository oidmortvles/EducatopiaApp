import { create } from "zustand";


interface Alert {
  id: string;
  message: string;
  type?: "success" | "error" | "info";
}


interface AlertStore {
  alerts: Alert[];
  addAlert: (message: string, type?: Alert["type"]) => void;
  removeAlert: (id: string) => void;
}


const generateId = () => crypto.randomUUID();

const useAlert = create<AlertStore>((set) => ({
    alerts: [],

    addAlert: (message, type = "info") => {
      const newAlert: Alert = {
        id: generateId(),
        message,
        type,
      };
      set((state) => ({
        alerts: [...state.alerts, newAlert],
      }));
    },

    removeAlert: (id) =>
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      })),

  }));


export default useAlert;