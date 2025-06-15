import { useCallback, useEffect, useState } from "react";

interface FetchError extends Error {
    status?: number | string;
    statusText?: string;
  }

  interface FetchResult<T> {
    data: T | any;
    error: FetchError | null;
    loading: boolean;
    fetchData: (fetchUrl: string, body?: any) => void;
  }

export const useDelete = <T>(): FetchResult<T> =>{
      const [data, setData] = useState(null);
      const [error, setError] = useState<FetchError | null>(null);
      const [loading, setLoading] = useState(false);
      const [request, setRequest] = useState<{ url: string; body?: any } | null>(null);


      
    
      const fetchData = useCallback((fetchUrl: string, body?: any) => {
        setRequest({ url: fetchUrl, body });
      }, []);
    
      useEffect(() => {
        if (!request) return;
    
        const abortController = new AbortController();
        const signal = abortController.signal;
    
        const fetchDataAsync = async () => {
          setLoading(true);
    
          try {
            const { url, body } = request;
    
            const res = await fetch(url, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              signal,
              body: body ? JSON.stringify(body) : undefined,
            });
    
            if (!res.ok) {
              const err: FetchError = new Error("Error en la petición Fetch");
              err.status = res.status || "00";
              err.statusText = res.statusText || "Ocurrió un error";
              throw err;
            }
    
            const json = await res.json();
    
    
            if (!signal.aborted) {
              setData(json);
              setError(null);
            }
    
          } catch (error) {
            if (!signal.aborted) {
              setData(null);
              setError(error as FetchError);
            }
            
          } finally {
            if (!signal.aborted) {
              setLoading(false);
              setRequest(null);
            }
          }
        };
    
        fetchDataAsync();
    
        return () => abortController.abort();
      }, [request]);
    
      return { data, error, loading, fetchData };
}