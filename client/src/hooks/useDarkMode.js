import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues = {}) => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", initialValues);

    useEffect(() => {
        if(someValue) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [someValue]);
    return [someValue, setSomeValue];
}