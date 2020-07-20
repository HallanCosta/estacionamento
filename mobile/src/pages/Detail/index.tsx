import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Detail = () => {

  const navigation = useNavigation();
  
  const [cars, setCars] = useState<object[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  async function loadCars() {
    if (loading) {
      return;
    }

    if (total > 0 && cars.length == total) {
      console.log('total nao sie o q')
      return;
    }

    setLoading(true);

    const response = await api.get(`cars?page=${currentPage}`)

    setCars([ ...cars, ...response.data.cars ]);
    setTotal(response.data.count);
    setCurrentPage(currentPage + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadCars();
  }, [total]);


  function handleNavigateBack() {
    navigation.navigate('Home');
  }

  function handleExitCar(vacancy: number) {
    Alert.alert(
      "Cuidado",
      `Você deseja realmente finalizar a vaga ${vacancy}? `,
      [
        {
          text: "Sim",
          onPress: () => removeCar(vacancy)
        },
        {
          text: "Não",
        }

      ],
      { cancelable: true }
    );
  }

  async function removeCar(vacancy: number) {
    const exit = await api.delete(`/cars/${vacancy}`);

    if (!exit) {
      Alert.alert('Alerta', 'Ooops... ocorreu um erro!');
      return;
    } 

    Alert.alert('Sucesso', `Carro retirado da vaga ${vacancy}`);

    const response = await api.get('/cars');

    setCars(response.data.cars);
    setTotal(response.data.count);
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

        <FlatList 
          style={styles.carList}
          data={cars}
          keyExtractor={car => String(car.id)}
          onEndReached={loadCars}
          onEndReachedThereshold={0.2}
          renderItem={({ item: car }) => (
            
            <TouchableOpacity 
              style={styles.cars}
              onPress={() => handleExitCar(car.id)}
            >
              <Text style={styles.name}>
                Vaga: 
                <Text style={styles.value}>
                  {car.id}
                </Text>
              </Text>
              <Text style={styles.name}>
                Nome: <Text style={styles.value}>{car.name}</Text>
              </Text>
              <Text style={styles.board}>
                Placa: <Text style={styles.value}>{car.board}</Text>
              </Text>
              <Text style={styles.entry}>
                Entrada: <Text style={styles.value}>{car.created_at}</Text>
              </Text>

            </TouchableOpacity>
           
          )}
        />

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

  carList: {
    marginTop: 20,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 10,
    backgroundColor: '#f0f0f5'
  },

  cars: {
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#0c0c0c',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff'
  },

  name: {
    fontSize: 22,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },


  board: {
    fontSize: 22,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },

  entry: {
    fontSize: 22,
    opacity: .8,
    fontFamily: 'Roboto_500Medium',
  },

  value: {
    fontFamily: 'Roboto_400Regular',
  }, 

});

export default Detail;