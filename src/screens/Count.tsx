// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, Button} from 'react-native';
// import {useStore} from '../root-store/RootStoreContext';
// import {observer} from 'mobx-react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackPramList} from '../App';

// type CountProps = NativeStackScreenProps<RootStackPramList, 'Count'>;
// const Count = observer(({navigation}: CountProps) => {
//   const CountStore = useStore();
//   if (!CountStore) {
//     return <Text>Loading...</Text>;
//   }

//   const onIncrement = () => {
//     CountStore.CountStore.increment();
//   };

//   const onDecrement = () => {
//     CountStore.CountStore.decrement();
//   };

//   // const CountValue = () => {
//   //   return CountStore.CountStore.getCountValue();
//   // };

//   return (
//     <View>
//       {/* <Text>Count: {CountValue()}</Text> */}

//       <View style={{flexDirection: 'row', marginTop: 10}}>
//         <TouchableOpacity
//           onPress={onIncrement}
//           style={{padding: 10, backgroundColor: 'green', marginRight: 10}}>
//           <Text style={{color: 'white'}}>+</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={onDecrement}
//           style={{padding: 10, backgroundColor: 'red'}}>
//           <Text style={{color: 'white'}}>-</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Button
//           title="Go To Home"
//           onPress={() => navigation.navigate('Home')}
//         />
//       </View>
//     </View>
//   );
// });

// export default Count;
////////////////////////////////new ///////////////////////////
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useRootStore} from '../root-store/root-store-context';

const Count = observer(() => {
  const {counterStore} = useRootStore();
  const {count, increment, decrement} = counterStore;

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
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
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Count;
