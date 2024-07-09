import React from 'react';
import { View, Text, Image,ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
  iconSource: ImageSourcePropType; 
}

const Header: React.FC<HeaderProps> = ({ title, iconSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTitleContainer}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        source={require('@/src/assets/logo_completa.png')}
        style={styles.logo}
      />
    </View>
  );
};
  
export default Header;