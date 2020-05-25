import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_CONTINENT = gql`
query {
  continent(code: "NA") {
    countries {
      name
    }
  }
}
`;

const CountryText: React.FC = () => {
  const [getCountry, { loading, data }] = useLazyQuery(GET_CONTINENT);

  return (
    <View>
      {loading && <ActivityIndicator />}
      <Text>{data && data.continent.countries[0].name}</Text>
      <TouchableOpacity onPress={() => getCountry()}>
        <Text>Fetch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryText;
