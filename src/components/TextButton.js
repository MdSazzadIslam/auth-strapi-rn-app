import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TextButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: 'purple',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default TextButton;
