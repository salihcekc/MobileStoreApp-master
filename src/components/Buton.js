import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Buton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

export default Buton;

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderRadius: 8,
    padding: 7,
    marginTop: 10,
    width: width / 1.1,
    height: height / 12,
    backgroundColor: '#256D85',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
