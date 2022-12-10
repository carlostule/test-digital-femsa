import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ProductCard = ({image = '', data = {}, navigation = null}) => {
  const [pointsProduct, setPointsProduct] = useState('0');

  useEffect(() => {
    let pointsP = '';
    if (data.is_redemption) {
      pointsP = `+${data.points}`;
    } else {
      pointsP = `-${data.points}`;
    }

    setPointsProduct(pointsP);
  }, [data]);

  const nameMonth = month => {
    switch (month) {
      case '01':
        return 'Enero';
      case '02':
        return 'Febrero';
      case '03':
        return 'Marzo';
      case '04':
        return 'Abril';
      case '05':
        return 'Mayo';
      case '06':
        return 'Junio';
      case '07':
        return 'Julio';
      case '08':
        return 'Agosto';
      case '09':
        return 'Septiembre';
      case '10':
        return 'Octubre';
      case '11':
        return 'Noviembre';
      case '12':
        return 'Diciembre';
    }
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.productImage}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.productData}>
        <View style={styles.productDataRow}>
          <Text style={styles.productName}>{data.product}</Text>
        </View>
        <View style={styles.productDataRow}>
          <Text style={styles.productDate}>{`${data.createdAt?.substring(8,10)} de ${nameMonth(data.createdAt.substring(5,7))}, ${data.createdAt.substring(0,4)}`}</Text>
        </View>
      </View>
      <View style={styles.productPoints}>
        <Text style={styles.pointsText}>{pointsProduct}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Product')}
          style={styles.buttonComponent}>
          <Text style={styles.textFlecha}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
  },
  productImage: {
    flex: 1,
    flexDirection: 'column',
  },
  productData: {
    flex: 3,
    flexDirection: 'column',
  },
  productDataRow: {
    flex: 1,
    flexDirection: 'row',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  productDate: {
    fontSize: 12,
    color: 'black',
  },
  productPoints: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonComponent: {
    backgroundColor: '#fff',
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
  },
  textFlecha: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default ProductCard;
