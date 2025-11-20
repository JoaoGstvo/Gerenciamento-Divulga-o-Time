import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Landing Pages
import LandingPageDivulgação from './Pages/LandingPages/LandingPageDivulgação';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPageDivulgação />} />
            </Routes>
        </BrowserRouter>
    )
}