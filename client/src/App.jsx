import { useEffect, lazy, Suspense } from "react";
import { SectionProvider } from "./context/SectionContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
const ProjectDetail = lazy(()=> import("./pages/ProjectDetail"));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<SectionProvider> <Home /> </SectionProvider>}/>
          <Route path="/project/:id" element={<ProjectDetail/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;