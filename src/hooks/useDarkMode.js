import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialState, key) => {
    const [dark, setDark] = useLocalStorage(initialState, key);

    
}