import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/164268065?v=4' }}/* Minha imagem como Exemplo */
        style={styles.productImage}
      />
      <Text style={styles.productName}>Produto de Exemplo</Text>
      <Text style={styles.productPrice}>R$ 99,99</Text>
      <Button title="Comprar" onPress={() => alert('Produto adcionado ao carrinho')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
});