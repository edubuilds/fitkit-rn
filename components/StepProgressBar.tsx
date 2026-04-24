/**
 * FitKit — StepProgressBar Component
 * Multi-step onboarding progress indicator from AllFit
 * 
 * @package fitkit-rn
 * @license MIT (free tier) | See LICENSE
 */

import React, { useEffect, useRef } from 'react'
import { View, Text, Animated } from 'react-native'

interface Step {
  id: string
  title: string
  icon: string
}

interface StepProgressBarProps {
  steps: Step[]
  currentStep: number
  accentColor?: string
}

/**
 * StepProgressBar — Animated multi-step progress for onboarding flows
 * 
 * @example
 * const STEPS = [
 *   { id: 'welcome', title: 'BEM-VINDO', icon: '⚡' },
 *   { id: 'biometrics', title: 'SEU CORPO', icon: '📊' },
 *   { id: 'goals', title: 'OBJETIVOS', icon: '🎯' },
 * ]
 * 
 * <StepProgressBar steps={STEPS} currentStep={1} />
 */
export const StepProgressBar = ({
  steps,
  currentStep,
  accentColor = '#0AFFE0',
}: StepProgressBarProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(progressAnim, {
      toValue: currentStep / (steps.length - 1),
      useNativeDriver: false,
      tension: 60,
      friction: 12,
    }).start()
  }, [currentStep])

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  })

  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: 4 }}>
      {/* Step icons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        {steps.map((step, i) => (
          <View key={step.id} style={{ alignItems: 'center', flex: 1 }}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor:
                  i <= currentStep ? accentColor : 'rgba(255,255,255,0.08)',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: i === currentStep ? 2 : 0,
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              <Text style={{ fontSize: 12 }}>
                {i < currentStep ? '✓' : step.icon}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Progress track */}
      <View
        style={{
          height: 3,
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height: '100%',
            width: progressWidth,
            backgroundColor: accentColor,
            borderRadius: 2,
            shadowColor: accentColor,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
          }}
        />
      </View>

      {/* Current step label */}
      <View style={{ alignItems: 'center', marginTop: 8 }}>
        <Text
          style={{
            fontFamily: 'JetBrainsMono-Regular',
            fontSize: 9,
            letterSpacing: 2,
            color: accentColor,
            textTransform: 'uppercase',
          }}
        >
          {steps[currentStep]?.title ?? ''} · {currentStep + 1}/{steps.length}
        </Text>
      </View>
    </View>
  )
}

export default StepProgressBar
