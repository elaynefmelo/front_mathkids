import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import Sair from '../../app/sair';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isSairVisible, setIsSairVisible] = useState<boolean>(false);
  const router = useRouter();

  const menuOptions = [
    { label: 'Aulas', icon: 'calculator-outline', route: '/telaAulas' },
    { label: 'Progresso', icon: 'bar-chart-outline', route: '/telaProgresso' },
    { label: 'Config', icon: 'settings-outline', route: '/telaConfig' },
    { label: 'Sair', icon: 'log-out-outline', route: '/login' },
  ];

  const handlePress = (label: string, route: string) => {
    if (label === 'Sair') {
      setIsSairVisible(true);
    } else {
      setSelectedOption(label);
      router.push(route);
    }
  };

  const handleCloseSair = () => {
    setIsSairVisible(false);
  };

  return (
    <View style={styles.menuContainer}>
      {menuOptions.map((option) => {
        const isSelected = selectedOption === option.label;
        return (
          <TouchableOpacity
            key={option.label}
            style={[styles.menuItem, isSelected && styles.menuItemSelected]}
            onPress={() => handlePress(option.label, option.route)}
          >
            <Icon name={option.icon} size={24} color={isSelected ? 'green' : 'white'} />
            <Text style={[styles.menuText, isSelected && styles.menuTextSelected]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      {isSairVisible && <Sair isVisible={isSairVisible} onClose={handleCloseSair} />}
    </View>
  );
};

export default Menu;
