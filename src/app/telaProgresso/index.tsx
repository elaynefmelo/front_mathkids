import React from "react";
import { View, Text, FlatList, Image} from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import Progresso from "@/src/components/Progresso";

const progressoInd = [
    {
        id: 'video',
        task:'1/10'
    },
    {
        id: 'aulas',
        task:'1/10'
    },
    {
        id: 'pratica',
        task:'1/10'
    },
    {
        id: 'revisão',
        task:'1/10'
    },
    {
        id: 'rende',
        task:'Bom'
    },
]

export default function TelaProgresso() {

    const item1 = progressoInd[0];
    const item2 = progressoInd[1];
    const item3 = progressoInd[2];
    const item4 = progressoInd[3];
    const item5 = progressoInd[4];

    return(
        <View style={styles.container}>
             <Header
                title="Progresso"
                iconSource={require('@/src/assets/Growth.png')}
            />
            <Progresso/>
            <View style={styles.conteinerSec}>
                <Text style={styles.textoT}>Progresso por atividade</Text>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Video.png')}
                        />
                        <Text style={styles.texto}>Vídeos assistidos</Text>
                        <Text style={styles.textoP}>{item1.task}</Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Teacher.png')}
                        />
                        <Text style={styles.texto}>Aulas concluídas</Text>
                        <Text style={styles.textoP}>{item2.task}</Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Drawing.png')}
                        />
                        <Text style={styles.texto}>Práticas realizadas</Text>
                        <Text style={styles.textoP}>{item3.task}</Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Idea.png')}
                        />
                        <Text style={styles.texto}>Revisões realizadas</Text>
                        <Text style={styles.textoP}>{item4.task}</Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Dinosauro.png')}
                        />
                        <Text style={styles.texto}>Seu rendimento é</Text>
                        <Text style={styles.textoP}>{item5.task}</Text>
                    </View>
                </View>
            </View>
            <Menu />
        </View>
    )
}