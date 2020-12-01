import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Error = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Error;
