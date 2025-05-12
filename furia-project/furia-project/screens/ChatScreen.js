import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'FURIA Gaming! Como podemos te ajudar hoje?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      // Adiciona mensagem do usuário
      setMessages(prev => [...prev, { id: Date.now(), text: inputText, sender: 'user' }]);
      setInputText('');
      
      // Resposta automática do bot após um delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: getBotResponse(inputText), 
          sender: 'bot' 
        }]);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage) => {
    const userMsg = userMessage.toLowerCase();
    
    if (userMsg.includes('oi') || userMsg.includes('olá') || userMsg.includes('ola')) {
      return 'Fala fúria! Tudo na paz?';
    } else if (userMsg.includes('time') || userMsg.includes('lineup')) {
      return 'Nosso line-up atual é composto pelos melhores jogadores do cenário!';
    } else if (userMsg.includes('jogo') || userMsg.includes('esports')) {
      return 'A FURIA compete em vários jogos como CS:GO, Valorant e LoL!';
    } else if (userMsg.includes('vencer') || userMsg.includes('campeão')) {
      return 'Sempre jogamos para vencer! #VEMFURIA';
    } else {
      const randomResponses = [
        'FURIA acima de tudo! Pode explicar melhor?',
        'Não entendi, mas pode contar com a FURIA!',
        'Vou verificar isso para você, fera!',
        'Ótima pergunta! #DIADEFURIA',
        'Como posso te ajudar ainda mais, fúria?'
      ];
      return randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessage : styles.botMessage
    ]}>
      <Text style={[
        styles.messageText,
        item.sender === 'user' ? styles.userMessageText : null
      ]}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.messagesList}
          inverted={false}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#999"
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  chatContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  messagesList: {
    padding: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#333333', 
  },
  messageText: {
    fontSize: 16,
    color: '#F5F5DC',
  },
  userMessageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: '#F5F5DC',
    backgroundColor: '#000',
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;