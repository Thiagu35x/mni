import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

// Criando o componente Profile diretamente aqui dentro para evitar erro de pasta
const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <Image 
        source={{ uri: 'https://github.com/Thiagu35x.png' }} 
        style={styles.image} 
      />
      <Text style={styles.name}>Thiago Carvalho de Castro</Text>
      <Text style={styles.bio}>
        Estudante de Sistemas para Internet. 
        Interessado em desenvolvimento mobile e novas tecnologias.
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          App criado para a disciplina Programação para Dispositivos Móveis
        </Text>
      </View>
      
      <Profile />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});