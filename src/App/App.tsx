import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { msalConfig } from './../Auth/authConfig';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponent from '../Nav/NavComponent';
import { Home } from '../Home/Home';

const pca = new PublicClientApplication(msalConfig);
function App({ msalInstance }: any) {
  return (
    <Router>
      <MsalProvider instance={msalInstance}>
        <NavComponent />
        <AuthenticatedTemplate>
          <Home />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p>not authenticated</p>
        </UnauthenticatedTemplate>

      </MsalProvider>
    </Router>
  );
}

export default App;
