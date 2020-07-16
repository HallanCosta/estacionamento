import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';



const Home = () => {

  const navigation = useNavigation();

  function handleNavigationCreateSpace() {
    navigation.navigate('CreateSpace');
  }

  function handleNavigationDetail() {
    alert('Detail....');
  }

  function handleMessageOptions() {
    alert('Em estacionar carro você estaciona um carro em uma vaga.\n\nMostrar carros aparecerá uma lista de carros na vaga.');
  }

  return (
  
    <View style={styles.container}>
        
      <Text style={styles.title}>Estacione seu carro no melhor lugar de todos.</Text>

      <View style={styles.main}>
        <Text 
          style={styles.buttonTitle} 
          onPress={handleMessageOptions}
        >
          Escolha uma opção
        </Text>
        
        <RectButton 
          style={styles.button}
          onPress={handleNavigationCreateSpace}
        >
          <View style={styles.groupButtonIcon}>
            <Text style={styles.buttonText}>Estacionar carro</Text>
            <FontAwesome
              style={{ marginLeft: 10 }}
              name="car"
              color="#fff"
              size={20}
            />
          </View>
        </RectButton>

        <RectButton 
          style={styles.button} 
          onPress={handleNavigationDetail}
        >
          <View style={styles.groupButtonIcon}>
            <Text 
              style={styles.buttonText}>Mostrar os carros</Text>
            <FontAwesome 
              style={{ marginLeft: 10 }}
              name="car"
              color="#fff"
              size={20}
            />
            <FontAwesome 
              name="car"
              color="#fff"
              size={16}
            />
            <FontAwesome 
              name="car"
              color="#fff"
              size={20}
            />
          </View>
        </RectButton>
      </View>

    </View>
   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5',
  },

  title: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 50,
    marginTop: 64,
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },


  buttonTitle: {
    fontSize: 25,
    marginBottom: 30,
    textDecorationLine: 'underline',
  },

  button: {
    backgroundColor: '#0c0c0c',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  groupButtonIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium'
  },

  buttonIcon: {
    marginLeft: 10,  
    color: '#fff',
    fontSize: 20,
  }

});


export default Home;


