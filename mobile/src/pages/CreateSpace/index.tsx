import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'; 

import api from '../../services/api';

const CreateSpace = () => {

  const [formData, setFormData] = useState({
    name: '',
    board: '',
  });

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.navigate('Home');
  }

  function handleBoardCharacters(value: string) {
    if (value.length == 3) {
      value += '-';
      setFormData({ ...formData, board: value.toUpperCase() });
    }

    setFormData({ ...formData, board: value.toUpperCase() });
  }


  async function handleCreationCar() {

    const { name, board } = formData; 

    const schema = yup.object().shape({
      name: yup.string().required(),
      board: yup
        .string()
        .min(7)
        .max(7)
        .required()
    });

    const valid = await schema.isValid({
      name: name,
      board: board,
    });

    if (!valid) {
      return alert("Dados ínvalidos!");
    }
  
    const data = {
      name,
      board
    };

    await api.post('/cars', data);

    Alert.alert('Vaga', 'Carro estacionado!');
    setFormData({
      name: '',
      board: ''
    });
  }



  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={ Platform.OS == 'ios' ? 'padding' : 'position'} 
      enabled
    >

      <TouchableOpacity 
        style={styles.buttonBack} 
        onPress={handleNavigateBack}
      >
        <Icon  
          name="arrow-left" 
          size={20} 
          color="#0c0c0c"
        />
      </TouchableOpacity>

      <View style={styles.main}>
        <Text style={styles.title1}>Estacione</Text>
        <Text style={styles.title2}>um</Text>
        <Text style={styles.title3}>Carro</Text>
      </View>


      <View style={styles.form}>
        <View style={styles.fieldSet}>

          <View style={styles.field}>
            <Text style={styles.fieldText}>Nome do veículo</Text>
            <TextInput 
              style={styles.fieldInput}
              autoFocus={true}
              autoCorrect={false}
              placeholder="Chevrolet"
              onChangeText={value => setFormData({ ...formData, name: value })}
              value={formData.name}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>Placa do veículo</Text>
            <TextInput 
              style={styles.fieldInput}
              autoCorrect={false}    
              placeholder="XXX-XXX" 
              onChangeText={value => handleBoardCharacters(value)}
              value={formData.board}
              maxLength={7}
            />
          </View>

          <View style={styles.buttonContainer}>
            <RectButton 
              style={styles.button}
              onPress={handleCreationCar}
            >
              <Text style={styles.buttonText}>Estacionar</Text>
            </RectButton>
          </View>

        </View>
      </View>

    </KeyboardAvoidingView>

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
    marginBottom: 50, 
  },

  main: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#0c0c0c',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    // padding: 10
    // paddingBottom: 25
  },

  title1: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Ubuntu_700Bold',
    opacity: .8,
  },

  title2: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Ubuntu_700Bold',
    opacity: .8,
  },

  title3: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Ubuntu_700Bold',
    opacity: .8,
  },

  form: {
    marginTop: 50,
  },

  fieldset: {},

  field: {
    marginTop: 5,
  },

  fieldText: {
    fontSize: 18,
    marginBottom: 5,
    opacity: .7,
    fontFamily: 'Roboto_400Regular',
  },

  fieldInput: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: '#fff',
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 16,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto_500Medium',
    height: 60,
    width: 150,
    backgroundColor: '#0c0c0c',
    borderRadius: 5
  },

  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});

export default CreateSpace;