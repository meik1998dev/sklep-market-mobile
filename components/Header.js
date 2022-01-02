import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export const Header = () => {
   return (
      <View style={styles.header}>
         <Text style={styles.title}>Sklep</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      backgroundColor: Colors.navy,
      padding: 20,
   },
   title: {
      color: Colors.white,
      fontSize: 20,
      marginTop: 40,
   },
});
