import React from 'react';
import { View, Text, Image,ImageSourcePropType} from 'react-native';
import { styles } from './styles'

interface BlocoQuestoesProps {
  title: string; 
}

const BlocoQuestoes: React.FC<BlocoQuestoesProps> = ({ title }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BlocoQuestoes;