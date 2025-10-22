// frontend/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

// 🎨 Centralized Theme Variables
export const COLORS = {
  primary: '#C2185B', // Main deep rose pink
  secondary: '#F48FB1', // Light pink accent
  background: '#FFF5F8', // Soft light background
  card: '#FFFFFF',
  darkText: '#2B2B2B',
  mutedText: '#777',
  border: '#E5E5E5',
  shadow: 'rgba(194, 24, 91, 0.25)', // pink shadow tint
};

export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 28,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

// 💎 Reusable Global Styles
export const GlobalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },

  headerText: {
    fontSize: FONTS.size.xl,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 0.5,
  },

  subHeaderText: {
    fontSize: FONTS.size.md,
    color: COLORS.mutedText,
    marginBottom: SPACING.lg,
    fontWeight: '500',
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: SPACING.md,
  },

  cardTitle: {
    fontSize: FONTS.size.lg,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
    padding: SPACING.md,
  },

  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: FONTS.size.md,
    fontWeight: '700',
  },

  mutedText: {
    color: COLORS.mutedText,
    fontSize: FONTS.size.sm,
  },
});
