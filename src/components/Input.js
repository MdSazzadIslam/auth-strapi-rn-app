import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Header = ({style, ...props}) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      placeholderTextColor={'darkgray'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Header;
