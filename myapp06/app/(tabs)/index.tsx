import { Text, View, Image, StyleSheet, } from 'react-native';
import React from 'react';


export default function Quorepanel() {
  return (
    <View style={styles.panel}>{/* View com estilo panel: Cria um contêiner centralizado com bordas arredondadas, sombra e um layout limpo. */}
      <Text style={styles.quoteText}>{/* Text com estilo quoteText: Mostra a citação em fonte itálica e com alinhamento central. */}
        "A uníca maneira de fazer um excelente trabalho é amar oque você faz."
      </Text>
      <Image
       source={{uri: 'https://avatars.githubusercontent.com/u/164268065?v=4'}}
       style={styles.authorImage}/>{/* Image com estilo authorImage: Exibe uma imagem do autor com bordas circulares. */}

        <Text style={styles.authorName}>- Steve Jobs</Text>{/* Text com estilo authorName: Exibe o nome do autor com uma fonte destacada. */}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
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
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});

/* Resultado Esperado:

Este código renderiza um painel centralizado com uma citação inspiradora, a foto do autor (circular) e o nome do autor abaixo, tudo estilizado de forma harmoniosa. */