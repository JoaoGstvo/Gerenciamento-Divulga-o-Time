import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Landing Pages
// import LandingPageDivulgação from './Pages/LandingPages/LandingPageDivulgação';
import MenuADM from './Components/MenuADM/index.js';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuADM />} />
            </Routes>
        </BrowserRouter>
    )
}