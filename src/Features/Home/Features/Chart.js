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
import { Context } from '../../../context/Context'
import { useContext } from 'react'
import { Text, View,StyleSheet,Image,Pressable,ScrollView,Alert } from 'react-native'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Loading'

const Chart = () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    let {searchdata} = useContext(Context)
    const [data, setData] = useState('');
    const [currencycode, setCurrencyCode] = useState("")
    const [curramount,setCurrAmount] = useState("")
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.fastforex.io/time-series?to=USD&start=2021-01-24&end=2021-01-30&api_key=365eb51c07-ec28b9d112-rv2tih` ,options);
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        Alert.alert("Error")
        console.error('Error fetching data:', error);
      }
    };
    let content;
useEffect(()=>{
    fetchData();
},[])
{
    data.result ?
    content = JSON.stringify(data.result).split(",")
    :
""
}
  return (
<View>
<Header text="Chart"/>
    <Text>Requires Access (Amount to be paid)</Text>

</View>
  )
}

export default Chart

const styles = StyleSheet.create({
})
