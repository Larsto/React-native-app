import React from 'react';
import { View, Text } from 'react-native';

const Attributes = () => {
  const { buttonStyle, textStyle } = styles;
  return (
  <View style={buttonStyle} >
    <Text style={textStyle}>BS WS S T W A Ld</Text>
  </View>
  );
};

const styles = {
  textStyle: {
    marginLeft: 10,
    alignSelf: 'stretch',
    color: '#00000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#585858',
    alignSelf: 'stretch',
    borderColor: '#007aff',
    flex: 1,
    flexDirection: 'row'
  }
};

export default Attributes;
