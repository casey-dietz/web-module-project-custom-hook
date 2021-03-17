import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, false);
    return [darkMode, setDarkMode]
}

export default useDarkMode;