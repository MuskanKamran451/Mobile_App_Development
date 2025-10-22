import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, COLORS, FONTS, SPACING, RADIUS } from '../styles/GlobalStyles';

const perfumes = [
  { id: '1', name: 'Oud Royale (Men)', price: 'Rs. 5,500', image: require('../../assets/perfume3.png') },
  { id: '2', name: 'Amber Bloom (Women)', price: 'Rs. 5,300', image: require('../../assets/perfume4.png') },
  { id: '3', name: 'Musk Noir', price: 'Rs. 5,600', image: require('../../assets/perfume5.png') },
  { id: '4', name: 'Velvet Rose', price: 'Rs. 5,400', image: require('../../assets/perfume6.png') },
];

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding + 16px gap

export default function PerfumesScreen() {
  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Perfume Collection</Text>

        {/* Grid of Perfumes */}
        <View style={styles.grid}>
          {perfumes.map((item) => (
            <View key={item.id} style={[styles.card, { width: cardWidth }]}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.9}
                  onPress={() => alert(`${item.name} added to cart`)}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
  },

  header: {
    marginTop: 10,
    fontSize: FONTS.size.lg + 4,
    fontWeight: '900',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 5,
  },

  image: { width: '100%', height: 180, borderTopLeftRadius: RADIUS.lg, borderTopRightRadius: RADIUS.lg },

  details: { padding: SPACING.sm },

  name: {
    fontSize: FONTS.size.md,
    fontWeight: '700',
    color: COLORS.darkText,
  },

  price: {
    fontSize: FONTS.size.sm,
    color: COLORS.primary,
    marginTop: 4,
    fontWeight: '600',
  },

  button: {
    marginTop: SPACING.sm,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: FONTS.size.sm,
  },
});
