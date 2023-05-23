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
import { Text, View,StyleSheet,Image,Pressable,ScrollView,Alert,TextInput } from 'react-native'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Loading'
import { useContext } from 'react'
import { Context } from '../../../context/Context'

const CurrCode = () => {
    let {searchdata} = useContext(Context)
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const [data, setData] = useState('');
    const [currencycode, setCurrencyCode] = useState("")
    const fetchData = async () => {
        searchdata.push(currencycode)
      try {
        const response = await fetch(`https://api.fastforex.io/currencies?api_key=365eb51c07-ec28b9d112-rv2tih` ,options);
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        Alert.alert("Error")
        console.error('Error fetching data:', error);
      }
    };
    useEffect(()=>{
fetchData();
    },[])
    let content;
{
    data ?
    content = JSON.stringify(data.currencies).split(",")
    :
""
}
let db = currencycode;
  return (
    <>
     <Header text="Find Currency Rates"/>
    <View style={styles.SearchContainer}>
    <TextInput
      onChangeText={text => {setCurrencyCode(text)}}
      value={currencycode}
        style={styles.inputprof}
        underlineColorAndroid="transparent"
        placeholder="Search Your Country's Currency Code"
        placeholderTextColor="#979999"
        placeholderFontSize="20"
        autoCapitalize="none"
      />
     <Pressable title="Search" 
      style={styles.bbutton} > 
     <Text style={{color:'#FFFFFF'}}>Search</Text>
     </Pressable>
    </View>
    <ScrollView>
        {
            data.currencies ?
       (     content.map((e)=>{
                if ( db === e.substring(1, 4)) {
                 return (
                    <View style={styles.table}>
                    <View style={styles.row}>
                      <Text style={styles.columnn}>{e.substring(0, 5)}</Text>
                      <Text style={styles.columnn}>{e.substring(6, e.length )}</Text>
                    </View>
                  </View>
                 )  
                }
else {

    return (
        <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.column}>{e.substring(0, 5)}</Text>
        <Text style={styles.column}>{e.substring(6, e.length )}</Text>
      </View>
    </View>
)
}
            })) 
            :
            <Loading/>
        }
    </ScrollView>
    </>
  )
}

export default CurrCode

const styles = StyleSheet.create({
    SearchContainer:{
        display:'flex',
        flexDirection:'row',
        marginBottom:20,
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
    table: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft:15,
        marginRight:15,
        marginVertical: 0,
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
      columnn: {
        flex: 1,
        borderWidth: 2,
        color:'red',
        fontSize:20,
        borderColor: 'red',
        padding: 10,
      },
    })
