import { createContext } from "react"


export const themes = {
    light : {
        background: '#EEEEEE',
        color: 'black'
    },
    dark : {
        background: '#222222',
        color: 'white'
    }
}

// creating the context that the app will use
const ThemeContext = createContext(themes.light);
export default ThemeContext;