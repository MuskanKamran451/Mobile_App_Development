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

const winterCollections = [
  {
    id: '1',
    name: 'Winter Pret',
    image: require('../../assets/winterpret.png'),
    screen: 'WinterPret',
  },
  {
    id: '2',
    name: 'Winter Unstitched',
    image: require('../../assets/winterunstitched.png'),
    screen: 'WinterUnstitched',
  },
];

export default function WinterScreen({ navigation }) {
  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Winter Collection</Text>
          <Text style={styles.subtitle}>Cozy • Elegant • Timeless</Text>
        </View>

        {/* Category Cards */}
        {winterCollections.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.9}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image source={item.image} style={styles.image} resizeMode="cover" />

            {/* Soft pink bar below image */}
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
    marginTop: SPACING.sm,
  },
  logo: {
    fontSize: FONTS.size.xl,
    fontWeight: '900',
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: FONTS.size.sm,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  // Category Cards
  card: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.xl,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
  },

  // Pink gradient bar under image
  bottomBar: {
    width: '100%',
    backgroundColor: COLORS.accentLight, // from global theme
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: RADIUS.xl,
    borderBottomRightRadius: RADIUS.xl,
  },
  name: {
    color: COLORS.white,
    fontSize: FONTS.size.lg,
    fontWeight: '700',
  },
});
