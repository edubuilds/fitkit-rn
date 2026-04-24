# FitKit — CLAUDE.md (AI Coding Assistant Rules)

> This file configures Claude, Cursor, and other AI coding tools
> to understand the FitKit project conventions and generate consistent code.

## Project Identity
- **Name**: FitKit — React Native UI Kit for Fitness Apps
- **Stack**: Expo SDK 52+, NativeWind v4, TypeScript 5.x, Expo Router v3
- **Style**: High-Tech Noir (Electric Cyan #0AFFE0, Acid Lime #B8FF00, Ember Orange #FF6B35, Deep Charcoal #0D0F14)
- **Fonts**: Bebas Neue (display), DM Sans (body), JetBrains Mono (data/code)

## Design Rules (NEVER break these)
1. ALL backgrounds use `#0D0F14` (Deep Charcoal) — never white
2. Cards use `rgba(255,255,255,0.05)` glass + `rgba(255,255,255,0.09)` border
3. Primary CTA always Electric Cyan `#0AFFE0` with dark text `#0D0F14`
4. ALL components must support dark mode (default) — light mode is secondary
5. Use `BlurView intensity={12} tint="dark"` for glassmorphism cards
6. Animations: Reanimated 3 + Moti only — never Animated.Value for new code

## Component Conventions
```tsx
// CORRECT component pattern
import { View, Text } from 'react-native'
import { BlurView } from 'expo-blur'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export const GlassCard = ({ children, className, intensity = 12 }: GlassCardProps) => (
  <BlurView 
    intensity={intensity} 
    tint="dark"
    className={`rounded-2xl border border-white/10 overflow-hidden ${className}`}
  >
    {children}
  </BlurView>
)
```

## Token Reference
```ts
// Always import from theme/tokens — never hardcode hex values
import { colors, fonts, spacing } from '@/theme/tokens'

const colors = {
  electricCyan:  '#0AFFE0',
  acidLime:      '#B8FF00',
  emberOrange:   '#FF6B35',
  deepCharcoal:  '#0D0F14',
  charcoalMid:   '#151821',
  charcoalLight: '#1E2230',
  glass:         'rgba(255,255,255,0.05)',
  glassBorder:   'rgba(255,255,255,0.09)',
  textPrimary:   '#F0F4FF',
  textSecondary: 'rgba(240,244,255,0.5)',
  textMuted:     'rgba(240,244,255,0.25)',
}
```

## File Naming
- Components: `PascalCase.tsx` (e.g., `GlassCard.tsx`, `WorkoutCard.tsx`)
- Screens: `[name]Screen.tsx` (e.g., `DashboardScreen.tsx`)
- Hooks: `use[Name].ts` (e.g., `useWorkout.ts`)
- Utils: `camelCase.ts` (e.g., `calculateTMB.ts`)

## Bioengineering Rules (CRITICAL — do not change)
- TMB always uses Mifflin-St Jeor formula:
  - Male:   `(10 × kg) + (6.25 × cm) − (5 × age) + 5`
  - Female: `(10 × kg) + (6.25 × cm) − (5 × age) − 161`
- If `knee_meniscus === true` → never suggest jump/impact exercises
- If `diabetes_type2 === true` → prioritize low glycemic load meals

## What NOT to generate
- ❌ Inline styles (use NativeWind className)
- ❌ `Animated.Value` (use Reanimated 3)
- ❌ `StyleSheet.create` (use NativeWind)
- ❌ White backgrounds
- ❌ Non-TypeScript files
- ❌ Class components
