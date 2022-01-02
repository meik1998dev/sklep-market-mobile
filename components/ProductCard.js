import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export const ProductCard = ({ productData }) => {
   const navigation = useNavigation();

   return (
      <View style={styles.card}>
         <TouchableOpacity
         style={styles.imageContainer}
            onPress={() => navigation.navigate('ProductDetails' , {
               productId : productData.id
            })}>
            <Image
               resizeMode='center'
               style={styles.image}
               source={{ uri: productData.image }}
            />
         </TouchableOpacity>
         <View style={styles.textContainer}>
            <Text>{productData.title.slice(0, 30)}</Text>
         </View>
         <Text style={styles.price}>{productData.price}$</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   card: {
      width: 170,
      height: 250,
      backgroundColor: '#ffff',
      margin: 20,
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      shadowColor: '#0000005e',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
   },
   textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
   },
   price: {
      position: 'absolute',
      right: 5,
      bottom: 5,
      color: Colors.navy,
      opacity: 0.6,
      fontWeight: 'bold',
   },
   image: {
      width:"100%",
      height: "100%"
   },
   imageContainer:{
      width: '100%',
      height: '60%',
   }
});
