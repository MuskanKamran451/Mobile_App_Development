import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GlobalStyles, COLORS, FONTS, SPACING, RADIUS } from '../styles/GlobalStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    navigation.replace('Main');
  };

  return (
    <LinearGradient colors={['#FFE6EE', COLORS.background, '#FFFFFF']} style={GlobalStyles.screenContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* App Branding */}
        <Text style={styles.logo}>StyleEase</Text>
        <Text style={styles.subtitle}>Elegance • Fragrance • Fashion</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.mutedText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={COLORS.mutedText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient colors={['#E91E63', '#C2185B']} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => Alert.alert('Info', 'Forgot password tapped!')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },

  logo: {
    fontSize: 36,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: SPACING.xs,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: FONTS.size.md,
    color: COLORS.mutedText,
    marginBottom: SPACING.xl,
    fontWeight: '500',
  },

  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.card,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: RADIUS.lg,
    marginBottom: SPACING.md,
    fontSize: FONTS.size.md,
    color: COLORS.darkText,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  button: {
    width: '100%',
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    marginTop: SPACING.sm,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: RADIUS.lg,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: FONTS.size.md,
  },

  forgotText: {
    color: COLORS.primary,
    fontSize: FONTS.size.sm,
    marginTop: SPACING.md,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
