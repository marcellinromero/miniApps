import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const quotesData = [
  { quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon" },
  { quote: "A única forma de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { quote: "A vida é realmente simples, mas insisti em torná-la complicada.", author: "Confúcio" },
  { quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
  { quote: "A única limitação das suas realizações de amanhã são suas dúvidas e hesitações de hoje.", author: "Ralph Waldo Emerson" },
  { quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
  { quote: "A melhor maneira de prever o futuro é criá-lo.", author: "Peter Drucker" },
  { quote: "Você só vive uma vez, mas se fizer tudo certo, uma vez é o suficiente.", author: "Mae West" },
  { quote: "A vida é 10% do que acontece conosco e 90% de como reagimos a isso.", author: "Charles R. Swindoll" },
  { quote: "O que você faz faz diferença, e você tem que decidir que tipo de diferença você quer fazer.", author: "Jane Goodall" },
];

export default function Citacao() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Função para gerar uma citação aleatória
  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex].quote);
    setAuthor(quotesData[randomIndex].author);
  };

  // Carrega uma citação aleatória ao montar o componente
  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.citacao}>
        <Text style={styles.title}>"{quote}"</Text>
        <Text style={styles.author}>- {author}</Text>
      </View>

      <Pressable style={styles.button} onPress={generateRandomQuote}>
        <View>
          <Text style={styles.buttonText}>Nova Citação</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    position: "absolute",
    bottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  citacao: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    padding: 20,
  },
});
