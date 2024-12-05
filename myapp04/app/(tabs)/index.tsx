import React from 'react';
import { View, Image, Text, StyleSheet, } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}> {/* View com estilo postContainer: Cria o contorno do post com bordas arredondadas, sombra e espaçamento interno. */}

      <Text style={styles.userName}>Gabriel Rocha</Text>{/* Text com estilo userName: Mostra o nome do usuário no topo, em fonte maior e negrito. */}

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/164268065?s=400&u=60a5759678cc6728de847c207b547f639a7c4e77&v=4' }}
        style={styles.postImage}
      />{/* Image com estilo postImage: Exibe uma imagem do post, centralizada e com bordas arredondadas. */}

      <Text style={styles.postDescription}>Este é meu post pessoal servindo como exemplo</Text>{/* Text com estilo postDescription: Mostra uma breve descrição do post, com alinhamento justificado. */}

    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
  },
});
//Resultado Esperado - Esse código renderiza um post de rede social com o nome do usuário, uma imagem central e uma descrição estilizada.
