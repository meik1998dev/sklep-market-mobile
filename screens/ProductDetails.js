import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export const ProductDetails = ({ route }) => {
   const { productId } = route.params;
   const [data, setData] = useState();
   const [isLoading, setLoading] = useState(true);

   const getProduct = async () => {
      try {
         const response = await fetch('https://fakestoreapi.com/products/'+productId);
         const result = await response.json();
         setData(result);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getProduct();
   }, []);

   console.log(data);

   return <View></View>;
};
