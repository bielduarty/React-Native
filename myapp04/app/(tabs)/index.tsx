import { View, Text, Image, StyleSheet, } from 'react-native';
import React from 'react';


export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Gabriel Duarte</Text>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/164268065?v=4' }}
        style=
    </View>
  );
}

const styles = StyleSheet.create({

});
