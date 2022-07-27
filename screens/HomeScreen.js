import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env"
import { ATTEMPTTWO } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice"




const HomeScreen = () => {

console.log(GOOGLE_MAPS_API_KEY)

const dispatch = useDispatch()

  return (
    <SafeAreaView  className = " bg-white h-full">
      <View className = "p-5">
        <Image
         style={{width:100, height:100, resizeMode:"contain"}}
        source ={{
          uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        }}
        />
        <GooglePlacesAutocomplete 
        styles={{
          container:{
            flex:0,
          },textInput:{
            fontSize:18,
          },
        }}
        onPress={(data,details = null) =>{
          dispatch(setOrigin({
            location:details.geometry.location,
            description:data.description
          }))
         
          dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer = {false}
        query = {{
          key:GOOGLE_MAPS_API_KEY,
          language: 'en'
        }}

        minLength = {2}

         placeholder="Where from?"
         nearbyPlacesAPI = "GooglePlacesSearch"
         debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
