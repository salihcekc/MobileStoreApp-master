import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Input = ({placeholder, onChangeText, value, iconName}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} />
      <Icon name={iconName} size={35} style={styles.icon} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF6FF',
    flexDirection: 'row',
    width: width / 1.1,
    height: height / 12,
    borderRadius: 8,
    margin: 10,
  },
  input: {
    flex: 9,
    width: '90%',
    padding: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
});
