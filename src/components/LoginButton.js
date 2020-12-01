import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const LoginButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default LoginButton;
