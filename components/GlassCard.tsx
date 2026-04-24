/**
 * FitKit — GlassCard Component
 * Glassmorphism card extracted from AllFit production code
 * 
 * @package fitkit-rn
 * @license MIT (free tier) | See LICENSE
 */

import React from 'react'
import { View, ViewStyle } from 'react-native'
import { BlurView } from 'expo-blur'

interface GlassCardProps {
  children: React.ReactNode
  style?: ViewStyle
  intensity?: number
  noBorder?: boolean
  className?: string
}

/**
 * GlassCard — Glassmorphism card using expo-blur BlurView
 * 
 * @example
 * <GlassCard>
 *   <Text>Hello FitKit</Text>
 * </GlassCard>
 * 
 * @example with custom intensity
 * <GlassCard intensity={20} noBorder>
 *   <Text>More blur</Text>
 * </GlassCard>
 */
export const GlassCard = ({
  children,
  style,
  intensity = 12,
  noBorder = false,
  className,
}: GlassCardProps) => (
  <BlurView
    intensity={intensity}
    tint="dark"
    style={[
      {
        borderRadius: 20,
        overflow: 'hidden',
        ...(noBorder
          ? {}
          : {
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.09)',
            }),
      },
      style,
    ]}
  >
    {children}
  </BlurView>
)

export default GlassCard
