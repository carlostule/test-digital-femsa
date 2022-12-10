import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import CardPoints from '../components/CardPoints/CardPoints';
import ProductList from '../components/ProductList/ProductList';

const HomeScreen = ({navigation}) => {
  const [productData, setProductData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [allFlag, setAllFlag] = useState(false);
  const [month, setMonth] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    let add = 0;
    const fetchData = async () => {
      try {
        const data = await fetch(
          'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
        );
        const jsonData = await data.json();

        jsonData.forEach(item => {
          if (item.is_redemption) {
            add += item.points;
          }
        });

        setTotalPoints(add);
        setProductData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    nameMonth(new Date().getMonth() + 1);
  }, []);

  const positiveFilter = () => {
    const updatePData = productData?.filter(item => item.is_redemption);
    setFilterData(updatePData);
    setAllFlag(true);
  };

  const negativeFilter = () => {
    const updatePData = productData?.filter(item => !item.is_redemption);
    setFilterData(updatePData);
    setAllFlag(true);
  };

  const showAll = () => {
    setAllFlag(false);
  };

  const nameMonth = numberMonth => {
    switch (numberMonth) {
      case 1:
        setMonth('Enero');
        break;
      case 2:
        setMonth('Febrero');
        break;
      case 3:
        setMonth('Marzo');
        break;
      case 4:
        setMonth('Abril');
        break;
      case 5:
        setMonth('Mayo');
        break;
      case 6:
        setMonth('Junio');
        break;
      case 7:
        setMonth('Julio');
        break;
      case 8:
        setMonth('Agosto');
        break;
      case 9:
        setMonth('Septiembre');
        break;
      case 10:
        setMonth('Octubre');
        break;
      case 11:
        setMonth('Noviembre');
        break;
      case 12:
        setMonth('Diciembre');
        break;
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.nameText}>Carlos Tule</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>TUS PUNTOS</Text>
      </View>
      <View style={styles.monthPoints}>
        <CardPoints month={month} points={`${totalPoints}`} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>TUS MOVIMIENTOS</Text>
      </View>
      <View style={styles.listContainer}>
        {productData && (
          <ProductList
            data={allFlag ? filterData : productData}
            navigation={navigation}
          />
        )}
      </View>
      <View style={styles.buttonArea}>
        {!allFlag ? (
          <>
            <View style={styles.colButton}>
              <TouchableOpacity onPress={positiveFilter} style={styles.button}>
                <Text style={styles.buttonText}>Ganados</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.colButton}>
              <TouchableOpacity onPress={negativeFilter} style={styles.button}>
                <Text style={styles.buttonText}>Canjeados</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <TouchableOpacity onPress={showAll} style={styles.button}>
            <Text style={styles.buttonText}>Todos</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  welcome: {
    flex: 0.5,
    flexDirection: 'row',
    padding: 10,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  name: {
    flex: 0.5,
    flexDirection: 'row',
    padding: 10,
  },
  nameText: {
    fontSize: 14,
    color: 'black',
  },
  monthPoints: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    marginLeft: 70,
    marginRight: 70,
  },
  listContainer: {
    flex: 7,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  buttonArea: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    width: '90%',
    backgroundColor: '#334ffa',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    flex: 0.5,
    flexDirection: 'row',
    padding: 10,
  },
  sectionText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;
