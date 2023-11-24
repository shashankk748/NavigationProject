import {View, Text} from 'react-native';
const User = props => {
  console.warn(() => props.name);
  return (
    <View>
      <Text style={{color: '#E3EB2F'}}>Hey there {props.name}</Text>
    </View>
  );
};

export default User;
