import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider
      client={
        new ApolloClient({
          uri: process.env.REACT_APP_SERVER_URL,
          cache: new InMemoryCache(),
        })
      }
    >
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
