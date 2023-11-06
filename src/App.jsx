import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import ExpertisePage from "./Pages/ExpertisePage";
import NotFound from "./Pages/NotFoundPage";
import Layout from "./components/layout/Layout";
import Projects from "./Pages/ProjectsPage";
import Ahmed from "./components/projects/projectsList/Ahmed";
import Kolo from "./components/projects/projectsList/Kolo";
import CovidSafe from "./components/projects/projectsList/CovidSafe";
import HeroGame from "./components/projects/projectsList/HeroGame";
import Synth from "./components/projects/projectsList/Synth";
import VrMusic from "./components/projects/projectsList/VrMusic";
import ContactMe from "./components/contactme/ContactMe";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<ExpertisePage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/Ahmed" element={<Ahmed />} />
        <Route path="/Projects/Kolo" element={<Kolo />} />
        <Route path="/Projects/Synth" element={<Synth />} />
        <Route path="/Projects/VRMusicGame" element={<VrMusic />} />
        <Route path="/Projects/2DHeroGame" element={<HeroGame />} />
        <Route path="/Projects/CovidSafe" element={<CovidSafe />} />
        <Route path="/Experience" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
