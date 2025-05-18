import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Header';

const TimesScreen = ({ navigation }) => {
  const times = [
    {
      id: 1,
      nome: 'COUNTER-STRIKE',
      descricao: 'Nossa equipe principal com cinco títulos internacionais',
      imagem: require('../assets/cs2.webp'),
       tipo: 'cs2'
    },
    {
      id: 2,
      nome: 'VALORANT',
      descricao: 'Nossos ágeis competidores no shooter tático',
      imagem: require('../assets/valorant.jpg'),
      tipo: 'valorant'
    },
    {
      id: 3,
      nome: 'RAINBOW SIX',
      descricao: 'Nossa equipe estratégica no jogo tático',
      imagem: require('../assets/r6x.webp'),
       tipo: 'r6'
    }
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>CONHEÇA NOSSAS EQUIPES</Text>
        <Text style={styles.descricao}>
          A FURIA é uma organização multi-gaming com times de ponta em diversos 
          esports. Selecione uma de nossas equipes para conhecer mais sobre 
          nossos jogadores e suas conquistas.
        </Text>

        {times.map(time => (
      <TouchableOpacity 
        key={time.id}
        style={styles.timeCard}
        onPress={() => navigation.navigate('TimeDetalhes', { time })}
      >
            <Image source={time.imagem} style={styles.timeImagem} />
            <View style={styles.timeInfo}>
              <Text style={styles.timeNome}>{time.nome}</Text>
              <Text style={styles.timeDescricao}>{time.descricao}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  descricao: {
    color: '#F5F5DC',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  timeCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  timeImagem: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  timeInfo: {
    padding: 15,
  },
  timeNome: {
    color: '#d13639',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeDescricao: {
    color: '#F5F5DC',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TimesScreen;