import { useEffect } from "react";
import Home from "./pages/Home";
import { initSmoothScroll } from "./utils/smoothScroll";
import { SectionProvider } from "./context/SectionContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";

function App() {

  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SectionProvider> <Home /> </SectionProvider>}/>
        <Route path="/project/:id" element={<ProjectDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;