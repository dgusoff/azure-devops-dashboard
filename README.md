# Azure Devops Dashboard

This is a React Single Page App intentded to work with the Azure Devops APIs to show backlogs, sprints, work items, and maybe other stuff like pipelines and source control.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting this running

To run this project,

* Make sure your DevOps tenant is connected to Azure AD (this won't work otherwise)
* Clone this repo and `npm install`
* Create an Azure AD app registration. Give it the `user_impersonation` delegated API permission. Add a SPA redirect URL of `http://localhost:3000`
* Copy the `.env.sample` into a new file `.env`
* Add the client id, tenant id, and redirect URL into `.env`
* `npm run start`

