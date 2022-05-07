import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider, RequireAuth } from "./components/auth/auth";
import Careers from "./components/careers/Careers";
import Contact from "./components/contact/Contact";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import HomePage from "./components/homePage/HomePage";
import Methodology from "./components/methodology/Methodology";
import News from "./components/news/News";
import Pillars from "./components/pillars/Pillars";
import Services from "./components/services/Services";
import Sign from "./components/sign/Sign";
import Team from "./components/team/Team";
import { dashboard, login, registration } from "./components/utils/constants";
import Vision from "./components/vision/Vision";

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routes>
          <Route element={<Home />}>
            <Route path={login} element={<Sign />} />
            <Route path={registration} element={<Sign />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path={dashboard}
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="*" element={<div>There's nothing here!</div>} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
