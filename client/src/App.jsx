//MUI IMPORTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//REACT IMPORTS
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
//COMPONENT IMPORTS
import ClientNav from "./components/client/clientNav";
import ContractorNav from "./components/contractor/contractorNav";
import Login from "./components/login";
import Register from "./components/register/register";
import ClientRegister from "./components/register/clientRegister";
import ContractorRegister from "./components/register/contractorRegister";
//SERVICE AND UTILITIES IMPORTS
import { getProjects } from "./service/projectService";
import auth from "./utils/auth";
import WebSorryScreen from "./components/WebSorryScreen";

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const [projects, setProjects] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 950px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 450px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  useEffect(() => {
    getProjects().then((projects) => {
      const filteredProjects = projects.filter(
        (pr) => pr.lifeCycle !== "closed"
      );
      setProjects(filteredProjects);
    });
  }, []);
  return (
    <div>
      {matches && (
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/register"
            element={<Register setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register/client"
            element={<ClientRegister setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register/contractor"
            element={
              <ContractorRegister setIsAuthenticated={setIsAuthenticated} />
            }
          />
          <Route
            path="/client/*"
            element={
              <ClientNav
                projects={projects}
                setIsAuthenticated={setIsAuthenticated}
                setProjects={setProjects}
              />
            }
          ></Route>
          <Route
            path="/contractor/*"
            element={
              <ContractorNav
                projects={projects}
                setIsAuthenticated={setIsAuthenticated}
                setProjects={setProjects}
              />
            }
          />
        </Routes>
      )}
      {!matches && <WebSorryScreen />}
    </div>
  );
}

export default App;
