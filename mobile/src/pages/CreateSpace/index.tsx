import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const CreateSpace = () => {

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>

      <RectButton style={{ marginTop: 20 }} onPress={handleNavigateBack}>
        <Icon  
          name="arrow-left" 
          size={20} 
          color="#0c0c0c"
        />
      </RectButton>

      <View style={styles.header}>
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
              placeholder="Chevrolet"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>Placa do veículo</Text>
            <TextInput 
              style={styles.fieldInput} 
              placeholder="XXX-XXX" 
            />
          </View>

          <View style={styles.buttonContainer}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Estacionar</Text>
            </RectButton>
          </View>

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

  header: {
    marginTop: 32,
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
    padding: 10
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
    marginTop: 64,
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