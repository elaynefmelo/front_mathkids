import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface SairProps {
  isVisible: boolean;
  onClose: () => void;
}

const Sair: React.FC<SairProps> = ({ isVisible, onClose }) => {
  const router = useRouter();

  const handleLogout = () => {
    onClose();
    router.navigate('/login'); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image source={require('../../assets/Logout.png')} style={styles.icon} />
          <Text style={styles.text}>Tem certeza que quer sair?</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button, styles.buttonYes]} onPress={handleLogout}>
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNo]} onPress={onClose}>
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(117, 0, 181, 1.00)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 300,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonYes: {
    backgroundColor: '#57E447',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonNo: {
    backgroundColor: 'rgba(117, 0, 181, 1.00)',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Sair;
