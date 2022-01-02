import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export const ProductCard = ({ productData }) => {
   return (
      <View style={styles.productCard}>
         <Image style={styles.image} source={{ uri: productData.image }} />
         <Text>{productData.title}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   productCard: {
      width: 150,
      backgroundColor: Colors.white,
      margin:20,
      alignItems: 'center'
   },
   image: {
      width: 130,
      height: 130,
   },
});
