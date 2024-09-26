import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Timer() {
  const [tempo, setTempo] = useState(0); 
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setTempo((tempo) => tempo + 10);
      }, 10); 
    } else if (!ativo && tempo !== 0) {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo, tempo]);

  const iniciar = () => {
    setAtivo(true);
  };

  const pausar = () => {
    setAtivo(false);
  };

  const resetar = () => {
    setAtivo(false);
    setTempo(0);
  };

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60000); 
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milissegundos = Math.floor((tempo % 1000) / 10);

    return `${minutos.toString().padStart(2, '0')}:${segundos
      .toString()
      .padStart(2, '0')}.${milissegundos.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatarTempo(tempo)}</Text>

      <View style={styles.buttons}> 
        <Pressable style={[styles.button, { backgroundColor: "#4CAF50"}]} onPress={iniciar}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: "#FF5722" }]} onPress={pausar}> 
          <Text style={styles.buttonText}>Pausar</Text>
        </Pressable>

        <Pressable style={[styles.button, { backgroundColor: "#2196F3" }]} onPress={resetar}>
          <Text style={styles.buttonText}>Resetar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50, 
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    paddingVertical: 10,  
    paddingHorizontal: 20,
    borderRadius: 10, 
    elevation: 3,
    backgroundColor: 'white',
    borderColor: "black",
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: "row", 
    margin: 20,
    gap: 15,
    position: "absolute",
    bottom: 40,
  },
});
