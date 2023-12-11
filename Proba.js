import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Proba = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Próba képernyője</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Proba;