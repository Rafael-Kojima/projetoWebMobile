import React from 'react';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Certifique-se de que o pacote esteja instalado
import styles from '../estilos/estiloForm';

export default function DeleteProductScreen({ route, navigation }) {
  const { productId } = route.params;

  const deleteProduct = () => {
    fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID: productId })
    })
    .then(response => response.text())
    .then(data => {
      Alert.alert('Sucesso', 'Produto excluído com sucesso!');
      navigation.goBack();
    })
    .catch(error => console.error('Erro ao excluir produto:', error));
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header}>Excluir Produto</Text>
      </View>

      <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>
        Tem certeza que deseja excluir o produto?
      </Text>
      <Button title="Excluir Produto" onPress={deleteProduct} color="#FF6347" />
    </View>
  );
}
