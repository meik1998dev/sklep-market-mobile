import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { ProductCard } from './ProductCard';

const ProductsList = () => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);

   const getProducts = async () => {
      try {
         const response = await fetch('https://fakestoreapi.com/products');
         const result = await response.json();
         setData(result);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getProducts();
   }, []);

   return (
      <View style={styles.container}>
         {isLoading ? (
            <ActivityIndicator />
         ) : (
            <FlatList
               contentContainerStyle={styles.productsList}
               data={data}
               numColumns={2}
               renderItem={({ item }) => <ProductCard productData={item} />}
            />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   productsList: {
      alignItems: "center"
   },
   container: { width: '100%' },
});

export default ProductsList;
