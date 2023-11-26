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
      {/* <View>
        <Button
          title="For To Do List"
          onPress={() => {
            navigation.navigate('ToDoList');
          }}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
