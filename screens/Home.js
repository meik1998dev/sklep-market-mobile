import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductsList from '../components/ProductsList';

export const Home = () => {
   return (
      <View style={styles.container}>
         <ProductsList />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
