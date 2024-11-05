import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Picker, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  
import styles from '../estilos/estiloForm';

export default function EditProductPartialScreen({ route, navigation }) {
  const { productId } = route.params;
  const [field, setField] = useState('Nome');
  const [newValue, setNewValue] = useState('');

  const updateProductPartial = () => {
    fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID: productId, Campo: field, Valor: newValue })
    })
    .then(response => response.text())
    .then(data => {
      Alert.alert('Sucesso', 'Produto atualizado parcialmente com sucesso!');
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

      <View style={styles.pickerContainer}>
        <Picker selectedValue={field} onValueChange={setField}>
          <Picker.Item label="Nome" value="Nome" />
          <Picker.Item label="Descrição" value="Descricao" />
          <Picker.Item label="Marca" value="Marca" />
          <Picker.Item label="Preço" value="Preco" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Novo valor"
        value={newValue}
        onChangeText={setNewValue}
      />
      <TouchableOpacity style={styles.button} onPress={updateProductPartial}>
        <Text style={styles.buttonText}>Salvar Alteração Parcial</Text>
      </TouchableOpacity>
    </View>
  );
}
