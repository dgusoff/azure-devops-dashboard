export const callApiWithToken = async (accessToken: string, apiEndpoint: string) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    console.log(accessToken);

    headers.append("Authorization", bearer);
    headers.append('Content-Type', 'application/json;odata=verbose');
    headers.append('Accept', 'application/json;odata=verbose');

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const postApiWithToken = async (accessToken: string, apiEndpoint: string, data: any) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "POST",
        headers: headers,
        body: data
    };

    return fetch(apiEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const getTokenAndCallApi = async (instance: any, account: any, url: string) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}${url}`;
    console.log(apiUrl);
    const token = await instance.acquireTokenSilent({
        scopes: [process.env.REACT_APP_SCOPES || ''],
        account: account
    });

    const response: any = await callApiWithToken(token.accessToken, apiUrl);

    return response;

}