import { useState } from "react";

export const useUserEmail = ():[string | null, (email: string) => void] => {
  const [storedEmail, setStoredEmail] = useState<string | null>((): string | null => window.localStorage.getItem("userEmail"));

  const setEmail = (email: string) => {
    window.localStorage.setItem("userEmail", email);
    setStoredEmail(email);
  }

  return [storedEmail, setEmail];
}