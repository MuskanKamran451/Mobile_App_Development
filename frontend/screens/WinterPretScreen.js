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

const pretProducts = [
  { id: '1', name: 'Velvet Fancy Shirt', price: 'Rs. 4,999', image: require('../../assets/winterpret1.png') },
  { id: '2', name: 'Woolen Long Coat', price: 'Rs. 7,499', image: require('../../assets/winterpret2.png') },
  { id: '3', name: 'Knit Sweater Dress', price: 'Rs. 5,299', image: require('../../assets/winterpret3.png') },
  { id: '4', name: 'Faux Fur Jacket', price: 'Rs. 6,199', image: require('../../assets/winterpret4.png') },
];

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // padding + gap

export default function WinterPretScreen() {
  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Winter Pret Collection</Text>

        <View style={styles.grid}>
          {pretProducts.map((product) => (
            <View key={product.id} style={[styles.card, { width: cardWidth }]}>
              <Image source={product.image} style={styles.image} resizeMode="cover" />
              <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>

                {/* Add to Cart Button */}
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.85}
                  onPress={() => alert(`${product.name} added to cart`)}
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
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 180,
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
