import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import { useRef, useState } from 'react';

export default function Counter() {

  const [count, setCount] = useState(0);
  const rotation = useRef(new Animated.Value(0.5)).current; 

  const startRotation = () => {
    Animated.timing(rotation, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0.5);
    });
  };

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    count === 0 ? null : setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
    startRotation();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttons}>
        <Pressable style={[styles.button, { backgroundColor: "#000" }]} onPress={decrement}>
          <Text style={styles.buttonText}>Subtrair</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: "#000" }]} onPress={increment}>
          <Text style={styles.buttonText}>Aumentar</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: "#fff", borderWidth: 1, borderColor: "#000" }]} onPress={reset}>
          <Text style={[styles.buttonText, { color: "#000" }]}>Resetar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: { 
    fontSize: 150,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: "column",
    marginTop: 40,
    gap: 15, 
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
