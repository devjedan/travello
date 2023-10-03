import { View, Text , Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  } , [])

  return (
    <SafeAreaView className=" bg-white flex-1">
      {/* First section */}
      <View className=" flex-row px-6 mt-8 space-x-2 items-center">
        <View className=" w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className=" text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className=" text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Seond section */}
        <View className=" px-6 mt-1 space-y-1">
          <Text className=" text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
          <Text className=" text-[#00bcc9] text-[38px] font-bold">Good Moments</Text>
          <Text className=" text-[#3c6072] text-base">
          Unlock Limitless Adventures with Our Ultimate Travel Companion .
          Your Gateway to Exquisite Destinations and Unforgettable Experiences!
          </Text>
        </View>

      {/* Circle section */}
      <View className=" w-[300px] h-[300px] bg-[#00bcc9] rounded-full absolute bottom-10 -right-36"></View>
      <View className=" w-[250px] h-[250px] bg-[#e99265] rounded-full absolute bottom-0 -left-12"></View> 

      {/* Image container */}
      <View className="  flex-1 relative items-center justify-center">
        <Image
         source={HeroImage} className=" w-full h-full object-cover "
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen