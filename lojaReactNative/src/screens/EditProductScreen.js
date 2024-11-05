import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import styles from '../estilos/estiloForm';

export default function EditProductScreen({ route, navigation }) {
  const { productId } = route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [marca, setMarca] = useState('');

  useEffect(() => {
    
  }, [productId]);

  const updateProduct = () => {
    fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID: productId, Nome: name, Descricao: description, Preco: price, Marca: marca })
    })
    .then(response => response.text())
    .then(data => {
      Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      navigation.goBack();
    })
    .catch(error => console.error('Erro ao atualizar produto:', error));
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Editar Produto</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />
      <TouchableOpacity style={styles.button} onPress={updateProduct}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}
