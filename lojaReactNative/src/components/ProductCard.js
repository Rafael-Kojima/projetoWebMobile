// components/ProductCard.js
import React from 'react';
import { View, Text, Button , Image} from 'react-native';

export default function ProductCard({ product, onEdit, onEditPartial, onDelete }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
      <Text>Nome: {product.Nome}</Text>
      <Text>Descrição: {product.Descricao}</Text>
      <Text>Preço: R$/ {product.Preco}</Text>
      <Button title="Editar" onPress={onEdit} />
      <Button title="Editar Parcialmente" onPress={onEditPartial} />
      <Button title="Excluir" onPress={onDelete} />
    </View>
  );
}
