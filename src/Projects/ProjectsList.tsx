import { useMsal } from "@azure/msal-react";
import { useEffect, useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getTokenAndCallApi } from "../Api/Fetch";


export function ProjectsList() {
    const hasFetchedData = useRef(false);
    const { instance, accounts } = useMsal();
    const [projectData, setProjectData] = useState(Array<any>());

    useEffect(() => {
        if (!hasFetchedData.current) {
            getTokenAndCallApi(instance, accounts[0], '_api/web/lists').then((response) => {
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
                            return (
                                <tr>
                                    <td>{p.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>

        </>
    )


}