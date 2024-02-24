import { Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/main.css";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import SkillsPage from "./pages/SkillsPage";
import ContactsPage from "./pages/ContactsPage";

import { createContext } from "react";
import { projectsList } from "./helpers/projectList";
import ScrollToTop from "./utils/scrollToTop";


export const ProjectContext = createContext(null);

function App() {
  return (
    <>
      <ScrollToTop />
      <ProjectContext.Provider value={projectsList}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:id" element={<ProjectDetailPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </ProjectContext.Provider>
    </>
  );
}

export default App;
