/**
 * FitKit — GlassButton Component
 * High-conversion CTA button extracted from AllFit production code
 * 
 * @package fitkit-rn
 * @license MIT (free tier) | See LICENSE
 */

import React from 'react'
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface GlassButtonProps {
  label: string
  onPress: () => void
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  style?: ViewStyle
  textStyle?: TextStyle
  icon?: React.ReactNode
}

const VARIANTS: Record<ButtonVariant, {
  colors: [string, string, ...string[]]
  textColor: string
  borderColor?: string
}> = {
  primary: {
    colors: ['#0AFFE0', '#00D4B8'],
    textColor: '#0D0F14',
  },
  secondary: {
    colors: ['rgba(184,255,0,0.15)', 'rgba(184,255,0,0.08)'],
    textColor: '#B8FF00',
    borderColor: 'rgba(184,255,0,0.3)',
  },
  ghost: {
    colors: ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)'],
    textColor: 'rgba(240,244,255,0.7)',
    borderColor: 'rgba(255,255,255,0.1)',
  },
  danger: {
    colors: ['rgba(255,75,75,0.2)', 'rgba(255,75,75,0.1)'],
    textColor: '#FF4B4B',
    borderColor: 'rgba(255,75,75,0.3)',
  },
}

/**
 * GlassButton — High-conversion CTA button with glassmorphism
 * 
 * @example Primary CTA
 * <GlassButton label="Start Now" onPress={handleStart} />
 * 
 * @example Secondary
 * <GlassButton label="Learn More" variant="secondary" onPress={handleLearn} />
 * 
 * @example Loading state
 * <GlassButton label="Saving..." loading={isLoading} onPress={handleSave} />
 */
export const GlassButton = ({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
  textStyle,
  icon,
}: GlassButtonProps) => {
  const v = VARIANTS[variant]

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        {
          width: fullWidth ? '100%' : undefined,
          opacity: disabled ? 0.5 : 1,
          borderRadius: 16,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <LinearGradient
        colors={v.colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 16,
            paddingHorizontal: 24,
            gap: 8,
            ...(v.borderColor
              ? { borderWidth: 1, borderColor: v.borderColor }
              : {}),
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color={v.textColor} size="small" />
        ) : (
          <>
            {icon}
            <Text
              style={[
                {
                  fontFamily: 'BebasNeue-Regular',
                  fontSize: 18,
                  letterSpacing: 2,
                  color: v.textColor,
                },
                textStyle,
              ]}
            >
              {label}
            </Text>
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GlassButton
