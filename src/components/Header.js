import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
