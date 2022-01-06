import { Route, Routes } from "react-router-dom";
import { ProjectHome } from "../Projects/ProjectHome";
import { ProjectsList } from "../Projects/ProjectsList";


export function Home() {
    return (
        <>
            <p>home component</p>

            <Routes>
            <Route path="projects" element={<ProjectsList />} />
            <Route path="projects/:id" element={<ProjectHome />} />
            </Routes>
        </>
    )
}