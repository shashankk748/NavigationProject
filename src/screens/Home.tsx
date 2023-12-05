import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

//React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Seperator';

// data
import {PRODUCTS_LIST} from '../data/contants';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  //when an object conforming to HomeProps is passed,navigation property is extracted
  //able to use navigation.navigate because of this prop
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
      <View style={styles.container2}>
        <View style={styles.buttonContainer}>
          <Button
            title="To Take Notes"
            onPress={() => {
              navigation.navigate('Notes');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="To Go To Increment and decrement option"
            onPress={() => {
              navigation.navigate('Count');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
