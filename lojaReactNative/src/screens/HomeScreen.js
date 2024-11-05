import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../estilos/styles";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/projetoLoja/loja/controller/produto.php")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Loja DKTP</Text>
      </View>
      <FlatList
        data={products}
        style={styles.estiloScroll}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.Nome}</Text>
            <Text style={styles.cardDescription}>{item.Descricao}</Text>
            <Text style={styles.cardBrand}>Marca: {item.Marca}</Text>
            <Text style={styles.cardPrice}>Preço: R$ {item.Preco}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit Product", { productId: item.ID })
                }
                style={styles.iconButton}
              >
                <FontAwesome name="edit" size={24} color="#0000CD" />
                <Text style={styles.iconButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit Product Partial", {
                    productId: item.ID,
                  })
                }
                style={styles.iconButton}
              >
                <FontAwesome name="cog" size={24} color="#FF9800" />
                <Text style={styles.iconButtonText}>Editar Parcialmente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Delete Product", { productId: item.ID })
                }
                style={styles.iconButton}
              >
                <FontAwesome name="trash" size={24} color="#F44336" />
                <Text style={styles.iconButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add Product")}
      >
        <FontAwesome name="plus" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}
