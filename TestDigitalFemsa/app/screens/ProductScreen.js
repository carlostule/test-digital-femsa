import {View, Text, Button} from 'react-native';

const ProductScreen = ({navigation}) => {
  return(
    <View>
      <Text>Mundo</Text>
      <Button title="Regresar a Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductScreen;
