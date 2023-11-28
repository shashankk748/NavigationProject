import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import AddNote from './AddNote';
import {useIsFocused} from '@react-navigation/native';
import MyNotes from '../store/MyNotes';

type NoteProps = NativeStackScreenProps<RootStackPramList, 'Notes'>;

interface NoteItem {
  id: string;
  title: string;
}

const Notes: React.FC<NoteProps> = ({navigation}) => {
  const navigateToAddNote = () => {
    navigation.navigate('AddNote');
  };

  const isFocused = useIsFocused();
  const [notes, setNotes] = useState<NoteItem[]>([]);

  useEffect(() => {
    const tempNotes = MyNotes.notes;
    setNotes(tempNotes);
  }, [isFocused]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={notes}
        renderItem={({item, index}) => (
          <View
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              marginTop: 20,
              elevation: 5,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: index === notes.length - 1 ? 20 : 0,
            }}>
            <Text>{item.title}</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 20,
                top: 10,
                borderColor: 'black',
              }}
              onPress={() => {
                MyNotes.deleteMyNote(item.id);
                setNotes([...MyNotes.notes]);
              }}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={navigateToAddNote}>
        <Text style={styles.buttonText}>Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'purple',
    marginTop: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
