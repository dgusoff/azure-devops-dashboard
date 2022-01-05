import { Route, Routes } from "react-router-dom";
import { ProjectsList } from "../Projects/ProjectsList";


export function Home() {
    return (
        <>
            <p>home component</p>

            <Routes>
            <Route path="projects" element={<ProjectsList />} />
            </Routes>
        </>
    )
}