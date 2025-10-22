import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles, COLORS, SPACING, RADIUS } from '../styles/GlobalStyles';

export default function CartScreen() {
  // Dummy cart data
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Oud Royale (Men)', price: 5500, quantity: 1, image: require('../../assets/perfume3.png') },
    { id: '2', name: 'Velvet Rose', price: 5400, quantity: 2, image: require('../../assets/perfume6.png') },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <LinearGradient
      colors={['#FFE6EE', COLORS.background, '#FFFFFF']}
      style={GlobalStyles.screenContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Your Cart</Text>

        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty 🛍️</Text>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rs. {item.price}</Text>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <Ionicons name="remove-circle-outline" size={22} color={COLORS.primary} />
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <Ionicons name="add-circle-outline" size={22} color={COLORS.primary} />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Ionicons name="trash-outline" size={22} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          ))
        )}

        {cartItems.length > 0 && (
          <View style={styles.summary}>
            <Text style={styles.totalText}>Total: Rs. {total}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <LinearGradient
                colors={[COLORS.secondary, COLORS.primary]}
                style={styles.checkoutGradient}
              >
                <Text style={styles.checkoutText}>Proceed to Checkout</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
  },

  header: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: SPACING.sm,
    marginBottom: SPACING.lg,
  },

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.mutedText,
    marginTop: 40,
  },

  // Cart Cards
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    marginBottom: SPACING.md,
    padding: SPACING.sm + 4,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: RADIUS.md,
  },
  info: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },
  price: {
    fontSize: 14,
    color: COLORS.mutedText,
    marginVertical: 4,
  },

  // Quantity Controls
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkText,
  },

  // Summary
  summary: {
    marginTop: SPACING.lg,
    paddingVertical: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  checkoutButton: {
    alignSelf: 'center',
    width: '80%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  checkoutGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
