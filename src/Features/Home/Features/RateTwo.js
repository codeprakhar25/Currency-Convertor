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


import { useContext } from 'react'
import { Context } from '../../../context/Context'
import React from 'react'
import {useEffect, useState} from 'react'
import { Text, View,StyleSheet,Image,Pressable,ScrollView,TextInput, Alert } from 'react-native'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Loading'

const RateTwo = () => {
    let {searchdata} = useContext(Context)
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const [data, setData] = useState('');
    const [currencycode, setCurrencyCode] = useState("")
    const [show, setShow] = useState(false)
    const fetchData = async () => {
        searchdata.push(currencycode)
        setShow(true);
      try {
        const response = await fetch(`https://api.fastforex.io/fetch-multi?to=${currencycode}&api_key=365eb51c07-ec28b9d112-rv2tih` ,options);
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        Alert.alert("Error")
        console.error('Error fetching data:', error);
      }
    };
    let content;
    {
      data.results  ? 
      content = JSON.stringify(data.results).split(",")
      :
  ""
    }
    
    console.log(content)  




  return (
    <View> 
         <Header text="Find Currency Rates"/>
    <View style={styles.SearchContainer}>
    <TextInput
      onChangeText={text => {setCurrencyCode(text)}}
      value={currencycode}
        style={styles.inputprof}
        underlineColorAndroid="transparent"
        placeholder="Enter Currency Code to compare with USD"
        placeholderTextColor="#979999"
        placeholderFontSize="20"
        autoCapitalize="none"
      />
     <Pressable title="Search" 
     
     onPress={() =>
        
        fetchData()} style={styles.bbutton} > 
     <Text style={{color:'#FFFFFF'}}>Search</Text>
     </Pressable>
    </View>
{
   data.results  ?
    <>
    <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}> Know the rate of 1 USD in {currencycode}</Text>
    <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}>{content[0].substring(7, content[0].length - 1)}</Text>
    </>
    :
    <Loading/>
}
    </View>
  )
}

export default RateTwo

const styles = StyleSheet.create({
    SearchContainer:{
        display:'flex',
        flexDirection:'row',
            },
            bbutton: {
                backgroundColor: 'blue',
                paddingTop: 14,
                paddingLeft:12,
                borderRadius: 5,
                height: 50,
                width:"18%",
                marginTop: 20,
              },
            inputprof: {
                marginLeft: "5%",
                width:"75%",
                height: 50,
                borderColor: "#7a42f4",
                borderWidth: 1,
                backgroundColor: "#F3F3F3",
                borderRadius: 1,
                padding: 15,
                marginTop: 20,
              },
})
