/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */



import React from 'react'
import {useEffect, useState} from 'react'
import { useContext } from 'react'
import { Context } from '../../../context/Context'
import { Text, View,StyleSheet,Image,Pressable,ScrollView,Alert,TextInput } from 'react-native'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Loading'

const CurrAmount = () => {

    // convert?to=INR&amount=50
    let {searchdata} = useContext(Context)
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const [data, setData] = useState('');
    const [currencycode, setCurrencyCode] = useState("")
    const [curramount,setCurrAmount] = useState("")
    const fetchData = async () => {
        searchdata.push(curramount)
        searchdata.push(currencycode)
      try {
        const response = await fetch(`https://api.fastforex.io/convert?to=${currencycode}&amount=${curramount}&api_key=365eb51c07-ec28b9d112-rv2tih` ,options);
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
    data.result ?
    content = JSON.stringify(data.result).split(",")
    :
""
}

  return (
    <>
         <Header text="Convert Currency Amount"/>
         <TextInput
      onChangeText={text => {setCurrencyCode(text)}}
      value={currencycode}
        style={styles.inputprof}
        underlineColorAndroid="transparent"
        placeholder="Enter Your Currency Code"
        placeholderTextColor="#979999"
        placeholderFontSize="20"
        autoCapitalize="none"
      />
      <TextInput
      onChangeText={text => {setCurrAmount(text)}}
      value={curramount}
        style={styles.inputprof}
        underlineColorAndroid="transparent"
        keyboardType = 'numeric'
        placeholder="Amount of USD to be converted"
        placeholderTextColor="#979999"
        placeholderFontSize="20"
        autoCapitalize="none"
      />   
      <Pressable title="Search" 
      style={styles.bbutton} 
      onPress={()=>{
     fetchData()        
      }}
      > 
     <Text style={{color:'#FFFFFF'}}>Convert</Text>
     </Pressable>

     {
        data.result ? 
        <>
        <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}> Know the value of {curramount} USD in your {currencycode}</Text>
        <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}> 
        Which is =  {content[0].substring(7, content[0].length)}</Text>
        <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}>at the Rate of {content[1].substring(7, content[1].length - 1)}</Text>
        </>
        :
        ""
     }
    </>
  )
}

export default CurrAmount

const styles = StyleSheet.create({
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
