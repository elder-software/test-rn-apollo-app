import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import CountryText from './components/CountryText';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: 'https://countries.trevorblades.com' });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CountryText />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
