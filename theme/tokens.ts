/**
 * FitKit — Design Tokens
 * High-Tech Noir design system — extracted from AllFit
 * 
 * @package fitkit-rn
 */

// ─── Colors ──────────────────────────────────────────────────
export const colors = {
  // Primary accents
  electricCyan:  '#0AFFE0',
  acidLime:      '#B8FF00',
  emberOrange:   '#FF6B35',

  // Backgrounds
  deepCharcoal:  '#0D0F14',   // main background
  charcoalMid:   '#151821',   // card background
  charcoalLight: '#1E2230',   // dividers / borders

  // Glass (rgba — always use these, never hardcoded)
  glass:         'rgba(255,255,255,0.05)',
  glassBorder:   'rgba(255,255,255,0.09)',
  glassDark:     'rgba(0,0,0,0.4)',

  // Text
  textPrimary:   '#F0F4FF',
  textSecondary: 'rgba(240,244,255,0.5)',
  textMuted:     'rgba(240,244,255,0.25)',

  // Status
  success:       '#22C55E',
  warning:       '#F59E0B',
  danger:        '#FF4B4B',
  info:          '#60A5FA',
} as const

// ─── Fonts ───────────────────────────────────────────────────
export const fonts = {
  display: 'BebasNeue-Regular',     // headings, numbers, display text
  body:    'DMSans-Regular',        // body text, descriptions
  bodyMed: 'DMSans-Medium',         // labels, semi-bold body
  mono:    'JetBrainsMono-Regular', // code, data, metrics, badges
} as const

// ─── Spacing (8pt grid) ──────────────────────────────────────
export const spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
} as const

// ─── Border Radius ───────────────────────────────────────────
export const radius = {
  sm:   8,
  md:   12,
  lg:   16,
  xl:   20,
  full: 9999,
} as const

// ─── Blur Intensity ──────────────────────────────────────────
export const blur = {
  soft:   8,
  medium: 12,
  strong: 20,
} as const

// ─── Typography Scale ────────────────────────────────────────
export const textSizes = {
  display: { fontSize: 48, fontFamily: fonts.display, letterSpacing: 2 },
  h1:      { fontSize: 36, fontFamily: fonts.display, letterSpacing: 1.5 },
  h2:      { fontSize: 28, fontFamily: fonts.display, letterSpacing: 1 },
  h3:      { fontSize: 22, fontFamily: fonts.display, letterSpacing: 0.5 },
  body:    { fontSize: 16, fontFamily: fonts.body, lineHeight: 24 },
  bodyMed: { fontSize: 14, fontFamily: fonts.bodyMed, lineHeight: 20 },
  caption: { fontSize: 12, fontFamily: fonts.body, lineHeight: 16 },
  mono:    { fontSize: 11, fontFamily: fonts.mono, letterSpacing: 1 },
  badge:   { fontSize: 9,  fontFamily: fonts.mono, letterSpacing: 1.5, textTransform: 'uppercase' as const },
} as const

// ─── Gradient Presets ────────────────────────────────────────
export const gradients = {
  primary:    ['#0AFFE0', '#00D4B8'] as [string, string],
  secondary:  ['rgba(184,255,0,0.2)', 'rgba(184,255,0,0.05)'] as [string, string],
  danger:     ['rgba(255,75,75,0.2)', 'rgba(255,75,75,0.05)'] as [string, string],
  background: ['#0D0F14', '#13161E'] as [string, string],
  card:       ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)'] as [string, string],
} as const

// ─── Shadow Presets ──────────────────────────────────────────
export const shadows = {
  cyan: {
    shadowColor: '#0AFFE0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  lime: {
    shadowColor: '#B8FF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ember: {
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
} as const

export default { colors, fonts, spacing, radius, blur, textSizes, gradients, shadows }
