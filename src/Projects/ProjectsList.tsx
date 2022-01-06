import { useMsal } from "@azure/msal-react";
import { useEffect, useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTokenAndCallApi } from "../Api/Fetch";


export function ProjectsList() {
    const hasFetchedData = useRef(false);
    const { instance, accounts } = useMsal();
    const [projectData, setProjectData] = useState(Array<any>());

    useEffect(() => {
        if (!hasFetchedData.current) {
            getTokenAndCallApi(instance, accounts[0], 'projects?api-version=6.1-preview.4').then((response) => {
                console.log(response);
                setProjectData(response.value);
            });
        }
    }, [instance, accounts]);

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData.map(p => {
                            const to = `${p.id}`;
                            return (
                                <tr>
                                     <td> <Link to={to}>{p.name}</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>

        </>
    )


}