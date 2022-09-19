import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    margin: 10,
    width: '90%',
    backgroundColor: "#2286c3",
  },
  text: {
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
  },
});
