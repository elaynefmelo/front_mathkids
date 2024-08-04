import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import Progresso from "@/src/components/Progresso";
import { AppConfig } from '@/src/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaProgresso() {
    const [progressData, setProgressData] = useState<any>(null);
    const [performance, setPerformance] = useState<string>('Ruim');

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    const parsedData = JSON.parse(userData);
                    const userId = parsedData.id;
                    const response = await fetch(`${AppConfig.baseUrl}/progress-user/${userId}`);
                    const data = await response.json();
                    const progress = data.progress;
                    setProgressData(progress);

                    const total = progress.videosWatched + progress.completedActivities + progress.completedReviews;
                    let performanceText = 'Ruim';

                    if (total >= 4 && total <= 5) {
                        performanceText = 'Bom';
                    } else if (total === 6) {
                        performanceText = 'Ótimo';
                    } else if (total >= 2) {
                        performanceText = 'Regular';
                    }

                    setPerformance(performanceText);
                }
            } catch (error) {
                console.error('Erro ao buscar progresso:', error);
            }
        };

        fetchProgressData();
    }, []);

    const getProgressText = (current: number, total: number) => {
        return `${current}/${total}`;
    };

    return (
        <View style={styles.container}>
            <Header
                title="Progresso"
                iconSource={require('@/src/assets/Growth.png')}
            />
            <ScrollView style={styles.conteinerSec}>
                <Progresso />
                <Text style={styles.textoT}>Progresso por atividade</Text>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Video.png')}
                        />
                        <Text style={styles.texto}>Vídeos assistidos</Text>
                        <Text style={styles.textoP}>
                            {progressData ? getProgressText(progressData.videosWatched, 3) : '0/3'}
                        </Text>
                    </View>
                </View>
                {/* Se você quiser ativar essas seções, descomente e ajuste os IDs e textos conforme necessário */}
                {/* <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Teacher.png')}
                        />
                        <Text style={styles.texto}>Aulas concluídas</Text>
                        <Text style={styles.textoP}>
                            {progressData ? getProgressText(progressData.completedActivities, 10) : '0/10'}
                        </Text>
                    </View>
                </View> */}
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Drawing.png')}
                        />
                        <Text style={styles.texto}>Práticas realizadas</Text>
                        <Text style={styles.textoP}>
                            {progressData ? getProgressText(progressData.completedActivities, 2) : '0/2'}
                        </Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Idea.png')}
                        />
                        <Text style={styles.texto}>Revisões realizadas</Text>
                        <Text style={styles.textoP}>
                            {progressData ? getProgressText(progressData.completedReviews, 1) : '0/1'}
                        </Text>
                    </View>
                </View>
                <View style={styles.progreEta}>
                    <View style={styles.barContainer}>
                        <Image
                            style={styles.imageV}
                            source={require('@/src/assets/Dinosauro.png')}
                        />
                        <Text style={styles.texto}>Seu rendimento é</Text>
                        <Text style={styles.textoP}>{performance}</Text>
                    </View>
                </View>
            </ScrollView>
            <Menu />
        </View>
    );
}
