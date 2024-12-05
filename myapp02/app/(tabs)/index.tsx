import React from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>{/* View com estilo de card: Cria o contorno e o fundo arredondado do cartão. */}
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/164268065?v=4' }}
        style={styles.profileImage}/* Image com estilo profileImage: Exibe a foto de perfil com bordas arredondadas. */
        />
        <text style={styles.name}> Gabriel Duarte </text>
        {/* Text com estilos name e description: Mostra o nome em negrito e a descrição do usuário. */}
        <text style={styles.description}>
          Desenvolvedor de software apaixonado por tecnologia e inovação.
        </text>
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
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  }
});
/* Resultado Esperado:
Esse código exibe um cartão de perfil centralizado com a foto, o nome e uma breve descrição estilizados. */