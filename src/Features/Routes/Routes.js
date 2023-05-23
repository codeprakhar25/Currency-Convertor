/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Wishlist from '../Wishlist/Wishlist';

const Routes = () => {

    const Tab=createBottomTabNavigator()

  return (
    <>
    <Tab.Navigator>
    <Tab.Screen 
    name="home" 
    component={Home} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require('../../assets/Home.png') }                 
            />
       ), 
       tabBarLabel: 'Home' ,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       headerShown:false,            
      }}
    />
      <Tab.Screen 
    name="wishlist" 
    component={Wishlist} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require('../../assets/wishlist.png')  }                
            />
       ), 
       
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarLabel: 'Wishlist'        ,
       headerShown:false,     
      }}
    />
    <Tab.Screen 
    name="profile" 
    component={Profile} 
    options={{
        tabBarIcon: ({ color }) => (
          <Image
            source={require('../../assets/login.png')                  }
            />
       ), 
       
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarLabel: 'Profile'        ,
       headerShown:false,     
      }}
    />
      
   
  </Tab.Navigator>
  </>
  )
}

export default Routes

