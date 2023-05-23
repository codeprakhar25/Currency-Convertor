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

import React from 'react'
import {useEffect, useState} from 'react'
import { Text, View,StyleSheet,Image,Pressable,ScrollView } from 'react-native'
import Header from '../../Components/Header'
import Loading from '../../Components/Loading'

const Home = ({navigation}) => {

return (
    <View>
          <Header text="HOME"/>
          <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}> Know the currency and currency conversion rates in seconds </Text> 

<View style={styles.TabsContainer}>
<Pressable style={styles.pressContainer} onPress={()=>{
navigation.navigate("rate") 
}} >
<View style={styles.textcontainer}>
<Text style={{fontWeight:700, color:"#2E2E2E",fontSize:15}}>Currency Conversion Rate</Text>
<Text  style={{width:"80%"}}>Know the rate of conversion of a currency in different currencies</Text>
</View>
<Image
style={{position:'absolute',right:10}}
     source={require('../../assets/arrows.png') }
     />
</Pressable>
 <Pressable style={styles.pressContainer}
 onPress={()=>{
  navigation.navigate("ratetwo") 
 }}
 >
<View style={styles.textcontainer}>
<Text style={{fontWeight:700, color:"#2E2E2E",fontSize:15}}>Currency Conversion </Text>
<Text style={{width:"80%"}}>Know the rate of conversion of a currency in another currency</Text>
</View>
<Image
style={{position:'absolute',right:10}}
     source={require('../../assets/arrows.png') }
     />
 </Pressable>
 <Pressable style={styles.pressContainer}
 onPress={()=>{
  navigation.navigate("chart") 
 }}
 >
<View style={styles.textcontainer}>
<Text style={{fontWeight:700, color:"#2E2E2E",fontSize:15}}>Rate Chart </Text>
<Text style={{width:"80%"}}>Exchange rate chart between the 2 currencies</Text>
</View>
<Image
style={{position:'absolute',right:10}}
     source={require('../../assets/arrows.png') }
     />
 </Pressable>
 <Pressable style={styles.pressContainer}
 onPress={()=>{
  navigation.navigate("currcode") 
 }}
 >
<View style={styles.textcontainer}>
<Text style={{fontWeight:700, color:"#2E2E2E",fontSize:15}}>Currency Code  </Text>
<Text style={{width:"80%"}}>Know the currency code of a country</Text>
</View>
<Image
style={{position:'absolute',right:10}}
     source={require('../../assets/arrows.png') }
     />
 </Pressable>
 <Pressable style={styles.pressContainer}
 onPress={()=>{
  navigation.navigate("curramount") 
 }}
 >
<View style={styles.textcontainer}>
<Text style={{fontWeight:700, color:"#2E2E2E",fontSize:15}}>Currency Amount  </Text>
<Text style={{width:"80%"}}>Covert the currency amount into amount of other currency </Text>
</View>
<Image
style={{position:'absolute',right:10}}
     source={require('../../assets/arrows.png') }
     />
 </Pressable>
</View>

   
        </View>
  )
}

export default Home


const styles = StyleSheet.create({
  profilecontainer:{
    height:142,
   backgroundColor: "linear-gradient(180deg, #0F623D 0%, #28863A 100%), #F9F9FB",
   display:'flex',
  flexDirection:"row",
  
  },
  ImageWrapper:{
    borderColor:"#FFFFFF",
    border: "50px solid #FFFFFF",
    borderStyle:"solid",
  },
  ImageContainer:{
    borderRadius:60,
    margin:20,
    marginTop:21,
    marginLeft:50,
    height:100, width:100,
    backgroundColor:"#C4C4C4",   
  },
  userdetails:{
    marginLeft:10,
    marginTop:34,
    fontFamily: 'Quicksand',
    fontStyle: "normal",
     color: "#FFFFFF",
  
  },
  pressContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:'center',
  textAlign:'center',
    height:60,
  marginLeft:"7%",
  width:"85%",
  marginTop:30,
  },textcontainer:{
    marginLeft:10,
  }
    });