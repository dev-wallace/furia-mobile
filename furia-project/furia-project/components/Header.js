import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo à esquerda */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../logo_furia.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>FURIA</Text>
      </View>

      {/* Menu centralizado */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.menuItem}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Times')} 
          style={styles.menuButton} 
        >
          <Text style={styles.menuItem}>TIMES</Text>
        </TouchableOpacity>
      </View>

      {/* Botão à direita */}
      <TouchableOpacity 
        style={styles.chatButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Text style={styles.chatText}>ENTRAR NO CHAT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    color: '#fff',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuButton: {
    // Estilo adicional para o botão de times se necessário
  },
  chatButton: {
    backgroundColor: '#1a1a1a',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chatText: {
    color: '#fff',
    fontSize: 12,
  },
});