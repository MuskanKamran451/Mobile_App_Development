import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, COLORS, SPACING, RADIUS, FONTS } from '../styles/GlobalStyles';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding + 16px gap

const categories = [
  { key: 'winter', title: 'Winter Collection', image: require('../../assets/winter1.png') },
  { key: 'summer', title: 'Summer Collection', image: require('../../assets/summer1.png') },
  { key: 'perfumes', title: 'Perfumes', image: require('../../assets/perfume1.png') },
  { key: 'sale', title: 'Exclusive Sale', image: require('../../assets/sale1.png') },
];

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <LinearGradient colors={[COLORS.background, '#FFF5F8', '#FFFFFF']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>StyleEase</Text>
          <Text style={styles.subtitle}>Elegance • Fragrance • Fashion</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={COLORS.mutedText}
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Welcome Card */}
        <LinearGradient colors={['#FFF0F6', '#FFE6EE']} style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>✨ Welcome to StyleEase ✨</Text>
          <Text style={styles.tagline}>
            Discover the finest collections crafted for your unique style.
          </Text>
        </LinearGradient>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Collections</Text>
          <View style={styles.line} />
        </View>

        {/* Grid Categories */}
        <View style={styles.grid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate(cat.key.charAt(0).toUpperCase() + cat.key.slice(1))
              }
              style={styles.cardContainer}
            >
              <LinearGradient colors={['#FFFFFF', '#FCE4EC']} style={styles.card}>
                <Image source={cat.image} style={styles.image} resizeMode="cover" />
              </LinearGradient>
              <Text style={styles.cardTitle}>{cat.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { padding: SPACING.lg, alignItems: 'center' },

  // Header
  headerContainer: { alignItems: 'center', marginTop: SPACING.md, marginBottom: SPACING.sm },
  logo: {
    fontSize: 36,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.mutedText,
    fontWeight: '500',
    marginTop: 4,
  },

  // Search Bar
  searchContainer: {
    width: '100%',
    marginVertical: SPACING.md,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    height: 42,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    paddingHorizontal: SPACING.md,
    fontSize: 14,
    color: COLORS.darkText,
    borderWidth: 2,
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Welcome Card
  welcomeCard: {
    width: '100%',
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 14,
    color: COLORS.mutedText,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },

  // Section Header
  sectionHeader: { alignItems: 'center', marginVertical: SPACING.lg },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  line: {
    width: 70,
    height: 3,
    backgroundColor: COLORS.primary,
    marginTop: 5,
    borderRadius: 2,
  },

  // Grid Categories
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardContainer: { width: cardWidth, marginBottom: SPACING.lg, alignItems: 'center' },
  card: {
    width: '100%',
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
    marginBottom: SPACING.sm,
  },
  image: { width: '100%', height: 160 },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    textAlign: 'center',
  },
});
