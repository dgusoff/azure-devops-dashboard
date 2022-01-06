import { useParams } from "react-router-dom";


export function ProjectHome() {
    let params = useParams();
        return (
            <p>this is a project home. {params.id}</p>
        )
    }
