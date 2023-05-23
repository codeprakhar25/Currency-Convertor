/* eslint-disable prettier/prettier */
/* eslint-disable func-call-spacing */
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
import { Text, View,StyleSheet,Image,Pressable,ScrollView, Button,TextInput } from 'react-native'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Loading'
import { useContext } from 'react'
import { Context } from '../../../context/Context'
import Table from '../../../Components/Table'

const Rate = () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const [data, setData] = useState(null);
    const [currency, setCurrency] = useState("")
    let {searchdata} = useContext(Context)
    const fetchData = async () => {
        searchdata.push(currency)
      try {
        const response = await fetch(`https://api.fastforex.io/fetch-all?q=${currency}&api_key=365eb51c07-ec28b9d112-rv2tih` ,options);
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    let content;
    {
      data ? 
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
          onChangeText={text => {setCurrency(text)}}
          value={currency}
            style={styles.inputprof}
            underlineColorAndroid="transparent"
            placeholder="Enter Currency to know its conversion rates"
            placeholderTextColor="#979999"
            placeholderFontSize="20"
            autoCapitalize="none"
          />
         <Pressable title="Search" onPress={() => fetchData()} style={styles.bbutton} > 
         <Text style={{color:'#FFFFFF'}}>Search</Text>
         </Pressable>
        </View>
   
<ScrollView>
<View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.column}>Curr Code</Text>
        <Text style={styles.column}>Value</Text>
      </View>
    </View>
        {data ? (
        content.map((e)=>{

return (
        <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.column}>{e.substring(0, 5)}</Text>
        <Text style={styles.column}>{e.substring(6, e.length )}</Text>
      </View>
    </View>
)
        })
    
       ) : (
        <Loading/>
       )}
</ScrollView>


    </View>
  )
}

export default Rate

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
})
