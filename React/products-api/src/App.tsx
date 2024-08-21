import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { AppBar, Box, Button, FormControlLabel, Switch, Toolbar } from "@mui/material";
import ThemeContext, { themes } from "./contexts/themes";
import { useState } from "react";

export default function App() {


    /**
     * REACT ROUTER DOM
     *      client side routing
     *          can change pages without making calls to the server
     *          potentially, no page refreshes
     * 
     *      BrowserRouter
     *          History API - gives access to back, forward, urls
     * 
     *      Links and Routes
     *          links allow you to create specific url paths
     *          routes decide what content to display at a certain path
     * 
     */

    const navItems = [
        <Link to='/' key="Home">Home</Link>,      // use link from react router dom, not MUI
        <Link to='/products' key="Products">Products</Link>
    ]

    const [currentTheme, setCurrentTheme] = useState(themes.light);
    function toggleTheme() {
        const newTheme = (currentTheme === themes.light) ? themes.dark : themes.light;
        setCurrentTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={currentTheme}>
            <BrowserRouter basename="/">    {/** setting browser router to default to home page */}
                <AppBar component="nav">
                    <Toolbar>
                        <Box>
                            {navItems.map((item) => (
                                <Button key={item.key}>{item}</Button>
                            ))}
                        </Box>
                        <Box>
                            <FormControlLabel control={<Switch color="default" onChange={toggleTheme} />} label="Dark Theme"/>
                        </Box>
                    </Toolbar>
                </AppBar>
            
                {/** depending on the path, different elements will be rendered at this location */}            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}