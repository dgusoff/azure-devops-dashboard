import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getTokenAndCallApi } from "../Api/Fetch";


export function ProjectsList() {
    const { instance, accounts } = useMsal();
    const [projectData, setProjectData] = useState(Array<any>());

    useEffect(() => {
        getTokenAndCallApi(instance, accounts[0], 'projects?api-version=6.1-preview.4').then((response) => {
            console.log(response);
            setProjectData(response.value);
        });
    }, []);

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
                            return(
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