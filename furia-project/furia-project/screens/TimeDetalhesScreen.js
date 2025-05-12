import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/Header';


const Estatistica = ({ label, valor, max }) => {
  const porcentagem = (valor / max) * 100;
  
  return (
    <View style={estatisticasStyles.container}>
      <Text style={estatisticasStyles.label}>{label}</Text>
      <View style={estatisticasStyles.barBackground}> {/* Fundo cinza */}
        <View 
          style={[
            estatisticasStyles.bar, 
            { width: `${porcentagem}%`, backgroundColor: '#ffffff' } /* Barra branca */
          ]}
        />
        <Text style={estatisticasStyles.valor}>{valor.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const TimeDetalhesScreen = ({ route }) => {
  const { time } = route.params;
  
  const dadosTimes = {
    cs2: {
      jogadores: [
        {
          id: 1,
          nome: 'KSCERATO',
          foto: require('../assets/furia-ks.webp'),
          funcao: 'Rifler (lurker)',
          kd: 1.18,       
        winRate: 58,    
        clutch: 67,     
        rating: 1.12    
        },
            {
          id: 2,
          nome: ' FalleN',
          foto: require('../assets/furia-fallen.webp'),
          funcao: 'In-game leader AWPer',
           kd: 1.02,       
        winRate: 53,
        clutch: 61,
        rating: 0.98   
        },
            {
          id: 3,
          nome: 'molodoy',
          foto: require('../assets/furia-molodoy.webp'),
          funcao: 'AWPer',
              kd: 1.12,
        winRate: 56,
        clutch: 63,
        rating: 1.08
        },
            {
          id: 4,
          nome: 'YEKINDAR',
          foto: require('../assets/furia-yekindar.webp'),
          funcao: 'Rifler (entry fragger)',
           kd: 1.09,       
        winRate: 60,
        clutch: 71,     
        rating: 1.10
        },
            {
          id: 5,
          nome: 'yurih',
          foto: require('../assets/furia-yurih.webp'),
          funcao: 'Rifler',
        kd: 1.14,
        winRate: 59,
        clutch: 65,
        rating: 1.09
        },
        
      ],
         estatisticasTime: {
      ranking: '#5 Mundial',
      vitorias: '64%',
      titulos: '3'
    }
    },
  valorant: {
      jogadores: [
        {
          id: 1,
          nome: 'havoc',
          foto: require('../assets/valorant-havoc.jpg'),
          funcao: 'Duelist',
           kd: 1.25,        
        winRate: 63,     
        clutch: 58,       
        rating: 1.18     
        },
              {
          id: 2,
          nome: 'heat',
          foto: require('../assets/valorant-heat.jpg'),
          funcao: 'Duelist',
           kd: 1.22,
        winRate: 61,
        clutch: 60,
        rating: 1.15
        },
              {
          id: 3,
          nome: 'khalil',
          foto: require('../assets/valorant-khalil.jpg'),
          funcao: 'Líder Tático (IGL - In-Game Leader)',
            kd: 1.05,      
        winRate: 59,
        clutch: 68,       
        rating: 1.02
        },
              {
          id: 4,
          nome: 'pryze',
          foto: require('../assets/valorant-pryze.jpg'),
          funcao: 'Sentinela ',
         kd: 1.10,
        winRate: 57,
        clutch: 72,       
        rating: 1.08
        },
              {
          id: 5,
          nome: 'raafa',
          foto: require('../assets/valorant-raafa.jpg'),
          funcao: 'Suporte ou Flex',
               kd: 1.12,
        winRate: 60,
        clutch: 65,
        rating: 1.10
        },
        
      ],
      estatisticasTime: {
        ranking: '#8 Mundial',   
      vitorias: '67%',         
      titulos: '3'
      }
    },
    r6: {
  jogadores: [
    {
      id: 1,
      nome: 'Jv92',
      foto: require('../assets/Jv92_in_Furia_grande.jpg'),
      funcao: 'Entry Fragger',
      kd: 1.12,
      winRate: 58,
      clutch: 42,
      rating: 1.08,
      utilSuccess: 68
    },
    {
      id: 2,
      nome: 'Kheyze',
      foto: require('../assets/Kheyze_in_Furia_grande.jpg'),
      funcao: 'Entry Fragger',
      kd: 1.09,
      winRate: 56,
      clutch: 45,
      rating: 1.05,
      utilSuccess: 72
    },
    {
      id: 3,
      nome: 'Nade',
      foto: require('../assets/Nade_in_Furia_garnde.jpg'), 
      funcao: 'Support',
      kd: 0.98, 
      winRate: 63,
      clutch: 68,
      rating: 1.02,
      utilSuccess: 85
    },
    {
      id: 4,
      nome: 'FelipoX',
      foto: require('../assets/FelipoX_in_Furia_grande.jpg'),
      funcao: 'In-Game Leader & Flex',
      kd: 1.05,
      winRate: 61,
      clutch: 65,
      rating: 1.10,
      utilSuccess: 78
    },
    {
      id: 5,
      nome: 'Herdsz',
      foto: require('../assets/Herdsz-grande.jpg'),
      funcao: 'Entry Fragger',
      kd: 1.14,
      winRate: 59,
      clutch: 50,
      rating: 1.12,
      utilSuccess: 65
    }
  ],
  estatisticasTime: {
    ranking: '#15 Mundial',
    vitorias: '60%',
    titulos: '1',
    plantSuccess: '73%', // Mantido do exemplo anterior
    defuseRate: '68%'
  }
}
  };
  const { jogadores, estatisticasTime } = dadosTimes[time.tipo];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerTime}>
          <Image source={time.imagem} style={styles.bannerTime} />
          <Text style={styles.nomeTime}>{time.nome}</Text>
          
          <View style={styles.estatisticasTime}>
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaLabel}>Ranking</Text>
              <Text style={styles.estatisticaValor}>{estatisticasTime.ranking}</Text>
            </View>
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaLabel}>Vitórias</Text>
              <Text style={styles.estatisticaValor}>{estatisticasTime.vitorias}</Text>
            </View>
            <View style={styles.estatisticaItem}>
              <Text style={styles.estatisticaLabel}>Títulos</Text>
              <Text style={styles.estatisticaValor}>{estatisticasTime.titulos}</Text>
            </View>
          </View>
        </View>

        {jogadores.map(jogador => (
          <View key={jogador.id} style={styles.cardJogador}>
            <View style={styles.infoJogador}>
              <Image source={jogador.foto} style={styles.fotoJogador} />
              <View style={styles.dadosJogador}>
                <Text style={styles.nomeJogador}>{jogador.nome}</Text>
                <Text style={styles.funcaoJogador}>{jogador.funcao}</Text>
              </View>
            </View>

            <View style={styles.estatisticas}>
              <Estatistica label="K/D Ratio" valor={jogador.kd} max={1.5} />
              <Estatistica label="Win Rate %" valor={jogador.winRate} max={100} />
              <Estatistica label="Clutch %" valor={jogador.clutch} max={100} />
              <Estatistica label="Rating" valor={jogador.rating} max={2.0} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const estatisticasStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: '#F5F5DC',
    fontSize: 12,
    marginBottom: 6,
    fontFamily: 'Roboto-Medium',
  },
  barBackground: {  // Corrigido para barBackground (igual ao usado no componente)
    height: 10,
    backgroundColor: '#333333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#FFFFFF', // Barra branca
    borderRadius: 5,
  },
  valor: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    position: 'absolute',
    right: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  headerTime: {
    alignItems: 'center',
    marginBottom: 25,
  },
  bannerTime: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderBottomWidth: 2,
    borderColor: '#d13639',
  },
  nomeTime: {
    color: '#d13639',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  estatisticasTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 15,
    padding: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
  },
  estatisticaItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  estatisticaLabel: {
    color: '#F5F5DC',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Roboto-Regular',
  },
  estatisticaValor: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  cardJogador: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#d13639',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoJogador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  fotoJogador: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  dadosJogador: {
    flex: 1,
  },
  nomeJogador: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    marginBottom: 4,
  },
  funcaoJogador: {
    color: '#F5F5DC',
    fontSize: 14,
    fontFamily: 'Roboto-Italic',
  },
  estatisticas: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
});

export default TimeDetalhesScreen;