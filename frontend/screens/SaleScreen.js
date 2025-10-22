import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, COLORS, FONTS, SPACING, RADIUS } from '../styles/GlobalStyles';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 16px padding + 16px gap

const saleItems = [
  { id: '1', name: 'Winter Unstitched - 20% Off', image: require('../../assets/winterunstitched1.png'), price: '3600' },
  { id: '2', name: 'Summer Unstitched - 15% Off', image: require('../../assets/summerpret3.png'), price: '3150' },
  { id: '3', name: 'Amber Bloom (Women) - 10% Off', image: require('../../assets/perfume4.png'), price: '4800' },
  { id: '4', name: 'Velvet Rose Perfume - 25% Off', image: require('../../assets/perfume6.png'), price: '4200' },
];

export default function SaleScreen() {
  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Exclusive Sale</Text>

        {/* Grid of Sale Items */}
        <View style={styles.grid}>
          {saleItems.map((item) => (
            <View key={item.id} style={[styles.card, { width: cardWidth }]}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />

              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs. {item.price}</Text>

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

  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
  },

  details: {
    padding: SPACING.sm,
  },

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
