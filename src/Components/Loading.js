/* eslint-disable prettier/prettier */
/* eslint-disable quotes */


import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
   paddingTop:"50%",
   paddingLeft:"50%",
  },
});

export default Loading;
