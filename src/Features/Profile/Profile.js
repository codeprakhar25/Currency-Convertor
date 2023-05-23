/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */

import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Header from '../../Components/Header'
import { Context } from '../../context/Context'

const Profile = () => {
  let {searchdata} = useContext(Context)
  console.log(searchdata)
  return (
    <View>
          <Header text="PROFILE"/>
          <Text style={{ fontSize: 24,  alignContent: "center", fontWeight: 600, fontFamily: 'Quicksand',width:"90%",marginLeft: "5%",marginTop:"5%"}}>
       Recent Searches:
      </Text>
      {
        searchdata.map((e)=>{

      <Text>
        {e}
      </Text>
        })
      }
         </View>
  )
}

export default Profile