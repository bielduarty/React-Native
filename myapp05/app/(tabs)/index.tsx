import React from 'react';
import { ImageBackground, View, Text, StyleSheet, } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://static.dicionariodesimbolos.com.br/upload/6e/27/ampulheta-4_xl.jpeg' }}
    >{/* ImageBackground com estilo backgroundImage: Define uma imagem de fundo que cobre toda a tela. */}

      <View style={styles.overlay}>{/* View com estilo overlay: Adiciona um fundo semi-transparente ao redor do texto para aumentar o contraste com a imagem de fundo. */}

        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>{/* Text com estilo welcomeText: Exibe uma mensagem de boas-vindas centralizada e estilizada com fonte grande e em negrito. */}
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /*  // Fundo semi-transparente para melhor contraste */
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
/* Resultado Esperado

Este código renderiza uma tela de boas-vindas com uma imagem de fundo, e o texto de boas-vindas é centralizado na tela com um fundo escuro e semi-transparente para destacar a mensagem. */