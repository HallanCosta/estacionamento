import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Detail = () => {

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.buttonBack}
        onPress={handleNavigateBack}
      >
        <Icon 
          name="arrow-left" 
          size={24} 
          color="#0c0c0c"
        />
      </TouchableOpacity>

      <View style={styles.main}>

        <Text style={styles.title}>Carros estacionados</Text>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>

        <View style={styles.cars}>
          <Text style={styles.name}>
            Nome: <Text style={styles.nameValue}>Camaro</Text>
          </Text>
          <Text style={styles.board}>
            Placa: <Text style={styles.boardValue}>XXX-XXX</Text>
          </Text>
          <Text style={styles.entry}>
            Entrada: <Text style={styles.entryValue}>16/07/2002</Text>
          </Text>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5'
  },

  buttonBack: {
    marginTop: 20, 
    marginBottom: 20, 
  },

  main: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Ubuntu_700Bold',
    textDecorationLine: 'underline',
  },

  cars: {
    marginTop: 20,
    borderWidth: 3,
    borderColor: '#0c0c0c',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white'
  },

  name: {
    fontSize: 25,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },

  nameValue: {
    fontFamily: 'Roboto_400Regular',
  },

  board: {
    fontSize: 25,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },

  boardValue: {
    fontFamily: 'Roboto_400Regular',
  }, 

  entry: {
    fontSize: 25,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },

  entryValue: {
    fontFamily: 'Roboto_400Regular',
  }, 

});

export default Detail;