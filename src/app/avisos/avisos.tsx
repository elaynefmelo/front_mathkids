import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  imageSource?: any;
  buttonText?: string;
}

const PopUp: React.FC<PopUpProps> = ({
  isVisible,
  onClose,
  title,
  subtitle,
  imageSource,
  buttonText,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {imageSource && <Image source={imageSource} style={styles.icon} />}
          <Text style={styles.text}>{title}</Text>
          {subtitle && <Text style={styles.text}>{subtitle}</Text>}
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button, styles.buttonYes]} onPress={onClose}>
              <Text style={styles.buttonText}>{buttonText}</Text>
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
    justifyContent: 'center',
    width: '100%',
  },
});

export default PopUp;
