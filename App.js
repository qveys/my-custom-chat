import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const FEATURES = [
  {
    title: '🗣️ Chat humain-robot',
    description: 'Discutez en temps réel avec des utilisateurs humains et des robots intelligents.'
  },
  {
    title: '🤖 Réponses IA avancées',
    description: "Profitez d'une intelligence artificielle capable de générer des réponses pertinentes et naturelles."
  },
  {
    title: '🔒 Messagerie sécurisée',
    description: 'Vos conversations sont chiffrées de bout en bout pour une confidentialité maximale.'
  },
  {
    title: '🌐 Support multilingue',
    description: 'Communiquez dans plusieurs langues grâce à la traduction intégrée.'
  },
  {
    title: '🎨 Personnalisation du robot',
    description: 'Créez vos propres personnalités de robots pour des discussions sur mesure.'
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.mainTitle}>My Custom Chat</Text>
      <Text style={styles.subtitle}>
        L\'application de discussion qui connecte humains et robots
      </Text>
      {FEATURES.map((item, index) => (
        <View key={index} style={styles.feature}>
          <Text style={styles.featureTitle}>{item.title}</Text>
          <Text style={styles.featureText}>{item.description}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Rejoindre la bêta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 20
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  feature: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 6
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  featureText: {
    fontSize: 16
  },
  ctaButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#0084ff',
    borderRadius: 6,
    alignItems: 'center'
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
