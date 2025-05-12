import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import styles from '../styles/landingStyles';

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.title}>FURIA</Text>
        <Text style={styles.description}>
          Uma das maiores organizações de esports do Brasil, com times competindo em diversos jogos e representando o país internacionalmente.
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Chat')} 
        >
          <Text style={styles.buttonText}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}