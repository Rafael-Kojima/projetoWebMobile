import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../estilos/estiloForm';

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [marca, setMarca] = useState('');

  const addProduct = () => {
    fetch('http://localhost/projetoLoja/loja/controller/produto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Nome: name, Descricao: description, Preco: price, Marca: marca }),
    })
      .then((response) => response.text())
      .then((data) => {
        Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
        navigation.navigate('Home');
      })
      .catch((error) => console.error('Erro ao adicionar produto:', error));
  };

  return (
    <View style={styles.formContainer}>  
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Adicionar Produto</Text>
      </View>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição do produto"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Preço</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o preço do produto"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Marca</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a marca do produto"
        value={marca}
        onChangeText={setMarca}
      />

      <TouchableOpacity style={styles.button} onPress={addProduct}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );

}
