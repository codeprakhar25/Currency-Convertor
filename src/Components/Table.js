/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable eol-last */
/* eslint-disable semi */


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = (prop) => {
   let props = prop.item;
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.column}>Column 1</Text>
        <Text style={styles.column}>Column 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});

export default Table;
