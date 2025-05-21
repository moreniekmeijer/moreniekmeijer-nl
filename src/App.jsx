import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";

function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/*<Route path="*" element={<NotFoundPage/>}/>*/}
                </Routes>
            </main>
        </>
    )
}

export default App
