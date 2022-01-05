import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavComponent from '../Nav/NavComponent';
import { Home } from '../Home/Home';

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
