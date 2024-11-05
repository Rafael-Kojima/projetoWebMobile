import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e',
    padding: 10,
  },
  headerContainer: {
    backgroundColor: '#2A2FE6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  estiloScroll: {
    height: 300,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  cardBrand: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',  
    alignItems: 'center',  
    padding: 5,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#2A2FE6',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },headerContainer: {
    backgroundColor: '#2A2FE6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButtonText: {
    marginLeft: 5, // Margem à esquerda para dar espaço entre o ícone e o texto
    fontSize: 16,
    color: '#000', // Altere a cor conforme necessário
  },

});

