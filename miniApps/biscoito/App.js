import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

const fortuneCookies = [
  "A felicidade é uma escolha, e hoje você escolheu ser feliz.",
  "Você é mais forte do que pensa.",
  "Boas coisas vêm para aqueles que esperam.",
  "A vida é uma aventura, aproveite-a.",
  "Um amigo fiel é um dos maiores tesouros da vida.",
  "Você está a caminho de realizar seus sonhos.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Sua paciência será recompensada.",
  "Você está prestes a receber boas notícias.",
  "A mudança é a única constante na vida.",
];

export default function BiscoitoDaSorte() {
  const [frase, setFrase] = useState("");
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);

  const gerarFraseAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * fortuneCookies.length);
    setFrase(fortuneCookies[indiceAleatorio]);
  };

  const alternarBiscoito = () => {
    if (!biscoitoAberto) {
      gerarFraseAleatoria();
    }
    setBiscoitoAberto(!biscoitoAberto);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={alternarBiscoito}>
        <Image 
          source={{ uri: biscoitoAberto 
            ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Fortune_cookie_broken_20040628_223252_1.jpg/1200px-Fortune_cookie_broken_20040628_223252_1.jpg' 
            : 'https://bdasorte.vercel.app/favicon.png' }} 
          style={styles.image} 
        />
      </Pressable>
      {biscoitoAberto && <Text style={styles.fortuneText}>{frase}</Text>}
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
  image: {
    width: 200,
    height: 200,
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

