import { theme } from '@/src/thema';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';

interface BlocoNiveisProps {
  title: string;
  iconSource: ImageSourcePropType; 
}

const BlocoNiveis: React.FC<BlocoNiveisProps> = ({ title, iconSource }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.green_p, 
    padding: 20,
    margin: 20,
    borderRadius: theme.borderRadius.md, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    width: screenWidth - 50, 
    marginHorizontal: 10, 
   
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: theme.colors.purple_p, 
  },
});

export default BlocoNiveis;