/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

/* eslint-disable eol-last */
/* eslint-disable semi */


import React from 'react'
import {useEffect, useState} from 'react'
import { Text, View,StyleSheet,Image,Pressable,ScrollView,Alert,TextInput,
FlatList } from 'react-native'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'


const Wishlist = () => {
  const data = [
    { id: 1, title: 'EUR/USD: Euro to US Dollar' },
    { id: 2, title: 'USD/JPY: US Dollar to Japanese Yen' },
    { id: 3, title: 'GBP/USD: British Pound to US Dollar' },
    { id: 4, title: 'USD/CAD: US Dollar to Canadian Dollar' },
    { id: 5, title: 'AUD/USD: Australian Dollar to US Dollar' },
  ];

  const renderItem = ({ item }) => (
    <View>
      <Text    style={{ fontSize: 16,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}>{item.title}</Text>
    </View>
  );
  return (
    <>
    <Header text="WishList"/>
    <View>
      <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}>
        Top 5 Searched Currency Pairs :
      </Text>
      <FlatList
   
      data={data}
      renderItem={renderItem}

      keyExtractor={(item) => item.id.toString()}
    />
    </View>
    </>
  )
}

export default Wishlist