import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';

// Landing Pages
import LandingPageDivulgação from './Pages/LandingPages/LandingPageDivulgação';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPageDivulgação />} />
                <Route path="/header" element={<Header />}  />
            </Routes>
        </BrowserRouter>
    )
}