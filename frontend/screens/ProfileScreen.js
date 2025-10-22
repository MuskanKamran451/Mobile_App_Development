import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles, COLORS, FONTS, SPACING, RADIUS } from '../styles/GlobalStyles';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('Login'); // resets navigation stack
  };

  return (
    <LinearGradient colors={['#FFE6EE', '#FFF5F8', COLORS.background]} style={GlobalStyles.screenContainer}>
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image
          source={require('../../assets/profile.png')} // make sure this image exists
          style={styles.profileImage}
        />

        {/* User Info */}
        <Text style={styles.name}>Muskan Kamran</Text>
        <Text style={styles.email}>muskan.kamran@example.com</Text>

        {/* Options Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={handleLogout}>
            <Text style={[styles.optionText, { color: COLORS.primary }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: SPACING.xl + 20,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginBottom: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },

  name: {
    fontSize: FONTS.size.lg + 4,
    fontWeight: '900',
    color: COLORS.primary,
  },

  email: {
    fontSize: FONTS.size.sm,
    color: COLORS.mutedText,
    marginBottom: SPACING.lg,
  },

  section: {
    width: '85%',
    marginTop: SPACING.lg,
  },

  option: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },

  optionText: {
    fontSize: FONTS.size.md,
    fontWeight: '600',
    color: COLORS.darkText,
  },
});
