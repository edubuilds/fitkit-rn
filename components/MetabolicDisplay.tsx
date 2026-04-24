/**
 * FitKit — MetabolicDisplay Component
 * Animated TMB/TDEE stat card with Mifflin-St Jeor formula
 * Extracted from AllFit production biometrics flow
 * 
 * @package fitkit-rn
 * @license MIT (free tier) | See LICENSE
 */

import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated } from 'react-native'
import { BlurView } from 'expo-blur'

interface MetabolicData {
  tmb: number    // Basal Metabolic Rate (kcal)
  tdee: number   // Total Daily Energy Expenditure (kcal)
  goal: number   // Target calories (tdee ± adjustment)
}

interface MetabolicDisplayProps {
  data: MetabolicData
  accentColor?: string
  label?: string
}

/**
 * Calculate TMB using Mifflin-St Jeor formula
 * Male:   TMB = (10 × kg) + (6.25 × cm) − (5 × age) + 5
 * Female: TMB = (10 × kg) + (6.25 × cm) − (5 × age) − 161
 */
export function calculateTMB(params: {
  weight: number
  height: number
  age: number
  sex: 'male' | 'female' | 'other'
  activityLevel: 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extra_active'
  fitnessGoal?: 'fat_loss' | 'muscle_gain' | 'recomposition' | 'health' | 'performance'
}): MetabolicData {
  const { weight, height, age, sex, activityLevel, fitnessGoal } = params

  const base = (10 * weight) + (6.25 * height) - (5 * age)
  const tmb = Math.round(sex === 'male' ? base + 5 : sex === 'female' ? base - 161 : base - 78)

  const multipliers: Record<string, number> = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extra_active: 1.9,
  }
  const tdee = Math.round(tmb * (multipliers[activityLevel] ?? 1.55))

  const goalAdjustments: Record<string, number> = {
    fat_loss: -500,
    muscle_gain: +300,
    performance: +200,
    recomposition: 0,
    health: 0,
  }
  const goal = tdee + (goalAdjustments[fitnessGoal ?? 'health'] ?? 0)

  return { tmb, tdee, goal }
}

// Animated number counter hook
function useAnimatedNumber(target: number, duration = 1200) {
  const anim = useRef(new Animated.Value(0)).current
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    anim.setValue(0)
    Animated.timing(anim, {
      toValue: target,
      duration,
      useNativeDriver: false,
    }).start()
    const listener = anim.addListener(({ value }) => setDisplay(Math.round(value)))
    return () => anim.removeListener(listener)
  }, [target])

  return display
}

/**
 * MetabolicDisplay — Animated stat card showing TMB/TDEE/Goal calories
 * 
 * @example
 * const metabolic = calculateTMB({
 *   weight: 80, height: 175, age: 28,
 *   sex: 'male', activityLevel: 'moderately_active',
 *   fitnessGoal: 'fat_loss'
 * })
 * 
 * <MetabolicDisplay data={metabolic} />
 */
export const MetabolicDisplay = ({
  data,
  accentColor = '#0AFFE0',
  label = 'ANÁLISE METABÓLICA',
}: MetabolicDisplayProps) => {
  const tmb = useAnimatedNumber(data.tmb)
  const tdee = useAnimatedNumber(data.tdee)
  const goal = useAnimatedNumber(data.goal)

  return (
    <BlurView
      intensity={12}
      tint="dark"
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.09)',
        padding: 16,
      }}
    >
      {/* Label */}
      <Text
        style={{
          fontFamily: 'JetBrainsMono-Regular',
          fontSize: 9,
          color: accentColor,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 12,
        }}
      >
        ◉ {label}
      </Text>

      {/* Stats row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* TMB */}
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 38,
              color: '#F0F4FF',
              letterSpacing: 1,
            }}
          >
            {tmb.toLocaleString()}
          </Text>
          <Text
            style={{
              fontFamily: 'JetBrainsMono-Regular',
              fontSize: 9,
              color: 'rgba(240,244,255,0.4)',
              letterSpacing: 1,
              marginTop: 4,
            }}
          >
            TMB / KCAL
          </Text>
        </View>

        {/* Divider */}
        <View
          style={{
            width: 1,
            height: 48,
            backgroundColor: 'rgba(255,255,255,0.09)',
          }}
        />

        {/* TDEE */}
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 38,
              color: '#B8FF00',
              letterSpacing: 1,
            }}
          >
            {tdee.toLocaleString()}
          </Text>
          <Text
            style={{
              fontFamily: 'JetBrainsMono-Regular',
              fontSize: 9,
              color: 'rgba(240,244,255,0.4)',
              letterSpacing: 1,
              marginTop: 4,
            }}
          >
            TDEE / KCAL
          </Text>
        </View>

        {/* Divider */}
        <View
          style={{
            width: 1,
            height: 48,
            backgroundColor: 'rgba(255,255,255,0.09)',
          }}
        />

        {/* Goal */}
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              fontSize: 38,
              color: '#FF6B35',
              letterSpacing: 1,
            }}
          >
            {goal.toLocaleString()}
          </Text>
          <Text
            style={{
              fontFamily: 'JetBrainsMono-Regular',
              fontSize: 9,
              color: 'rgba(240,244,255,0.4)',
              letterSpacing: 1,
              marginTop: 4,
            }}
          >
            META / KCAL
          </Text>
        </View>
      </View>
    </BlurView>
  )
}

export default MetabolicDisplay
