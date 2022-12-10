import React from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({data = [], navigation = null}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (<ProductCard image={item.image} data={item} navigation={navigation} />)}
      keyExtractor={(_, index) => `${index}-item-product`}
    />
  );
};

export default ProductList;
