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

const unstitchedProducts = [
  { id: '1', name: 'Linen 3-Piece Suit', price: 'Rs. 3,999', image: require('../../assets/winterunstitched1.png') },
  { id: '2', name: 'Khaddar 2-Piece Suit', price: 'Rs. 4,499', image: require('../../assets/winterunstitched2.png') },
  { id: '3', name: 'Wool Mix Fabric Set', price: 'Rs. 4,799', image: require('../../assets/winterunstitched3.png') },
  { id: '4', name: 'Cotton Embroidered Suit', price: 'Rs. 3,799', image: require('../../assets/winterunstitched4.png') },
];

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // padding and gap adjustment

export default function WinterUnstitchedScreen() {
  return (
    <LinearGradient
      colors={['#FFE6EE', '#FFF5F8', COLORS.background]}
      style={GlobalStyles.screenContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Winter Unstitched Collection</Text>

        <View style={styles.grid}>
          {unstitchedProducts.map((product) => (
            <View key={product.id} style={[styles.card, { width: cardWidth }]}>
              <Image source={product.image} style={styles.image} resizeMode="cover" />
              <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>

                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
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
  container: { padding: SPACING.md },
  
  header: {
    marginTop: SPACING.sm,
    fontSize: FONTS.size.xl,
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
  },

  button: {
    marginTop: SPACING.sm,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    borderRadius: RADIUS.lg,
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: FONTS.size.sm,
  },
});
