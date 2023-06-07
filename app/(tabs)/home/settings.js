import {View, Text, FlatList} from 'react-native';
import React from 'react';

import {useQuery} from '@apollo/client';
import {LIFTS_QUERY} from '../../../gql/Query';

const Settings = () => {
  const {data, loading} = useQuery(LIFTS_QUERY);

  const LiftItem = ({lifts}) => {
    const {
      title: reg_nr,
      crbLiftsUzstadisanasGads: gads,
      crbLiftsRupnNr: rupn_nr,
    } = lifts; //get the name of continent

    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>{reg_nr}</Text>
        <Text>{gads}</Text>
        <Text>{rupn_nr}</Text>
      </View>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text>; //while loading return this
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <FlatList
        data={data.lifti.nodes}
        // renderItem={({item}) => <ContinentItem continent={item} />}
        renderItem={({item}) => <LiftItem lifts={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Settings;
