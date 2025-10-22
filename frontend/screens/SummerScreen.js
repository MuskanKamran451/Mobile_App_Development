import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, COLORS, FONTS, SPACING, RADIUS } from '../styles/GlobalStyles';

const summerCollections = [
  {
    id: '1',
    name: 'Summer Pret',
    image: require('../../assets/summerpret.png'),
    screen: 'SummerPret',
  },
  {
    id: '2',
    name: 'Summer Unstitched',
    image: require('../../assets/summerunstitched.png'),
    screen: 'SummerUnstitched',
  },
];

export default function SummerScreen({ navigation }) {
  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Summer Collection</Text>
          <Text style={styles.subtitle}>Breezy • Vibrant • Stylish</Text>
        </View>

        {/* Category Cards */}
        {summerCollections.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.image} style={styles.image} resizeMode="cover" />

            {/* Soft gradient bar */}
            <View style={styles.bottomBar}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    alignItems: 'center',
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
    marginTop: SPACING.md,
  },
  logo: {
    fontSize: FONTS.size.lg + 4,
    fontWeight: '900',
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: FONTS.size.md,
    color: COLORS.mutedText,
    marginTop: SPACING.xs,
    fontWeight: '500',
  },

  // Cards
  card: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
  },

  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
  },

  bottomBar: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm + 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: RADIUS.xl,
    borderBottomRightRadius: RADIUS.xl,
  },

  name: {
    color: '#fff',
    fontSize: FONTS.size.lg,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
