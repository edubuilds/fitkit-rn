<div align="center">

<img src="https://via.placeholder.com/120x120/0D0F14/0AFFE0?text=⚡" width="80" height="80" style="border-radius: 20px" />

# FitKit — React Native UI Kit for Fitness Apps

**30+ production-ready components • Expo SDK 52+ • NativeWind v4 • TypeScript • Supabase-ready**

[![License: MIT](https://img.shields.io/badge/License-MIT-0AFFE0.svg)](LICENSE)
[![Expo SDK](https://img.shields.io/badge/Expo-SDK%2052+-B8FF00.svg)](https://expo.dev)
[![NativeWind](https://img.shields.io/badge/NativeWind-v4-0AFFE0.svg)](https://nativewind.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-B8FF00.svg)](https://typescriptlang.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-FF6B35.svg)](CONTRIBUTING.md)

> **Free starter kit.** [Get the full PRO version →](https://yourstore.lemonsqueezy.com)

</div>

---

## ✨ Demo

![FitKit Demo](https://via.placeholder.com/800x400/0D0F14/0AFFE0?text=ADD+YOUR+GIF+HERE)

> 🎯 **[View live Expo Snack demo](https://snack.expo.dev)** · **[Buy PRO — $99](https://yourstore.lemonsqueezy.com)**

---

## 🧩 What's Inside (Free Tier)

This starter kit includes **8 production-ready components** extracted from a real fitness app (AllFit) currently in development.

| Component | Description | TypeScript | Dark Mode |
|-----------|-------------|-----------|-----------|
| `GlassCard` | Glassmorphism card with BlurView | ✅ | ✅ |
| `GlassButton` | Primary / secondary CTA buttons | ✅ | ✅ |
| `MetabolicDisplay` | TMB/TDEE stat card with animated counters | ✅ | ✅ |
| `GoalCard` | Selectable fitness goal card grid | ✅ | ✅ |
| `ActivityPill` | Activity level pill selector | ✅ | ✅ |
| `OnboardingSlide` | Animated onboarding screen shell | ✅ | ✅ |
| `StepProgressBar` | Multi-step progress indicator | ✅ | ✅ |
| `BottomTabBar` | Custom glassmorphism tab bar | ✅ | ✅ |

---

## 🔒 PRO Version — $99 (lifetime)

> **[→ Get FitKit PRO on Lemon Squeezy](https://yourstore.lemonsqueezy.com)**

The PRO version includes everything in the free tier **plus**:

### 30+ Components
- `WorkoutCard` — exercise card with sets/reps/rest timer
- `MacroRing` — animated SVG macro tracker (protein/carbs/fat)
- `CalorieCounter` — real-time calorie progress bar
- `NutritionLabel` — FDA-style nutrition info card
- `MealPlanCard` — daily meal plan with photo + macros
- `GroceryListItem` — checkable grocery list row
- `ProgressRing` — animated circular progress indicator
- `WeightHistoryChart` — recharts weight trend line
- `WorkoutTimer` — rest timer with haptic feedback
- `ExerciseLibraryCard` — searchable exercise library item
- `SubscriptionPlanCard` — paywall plan selector (3 tiers)
- `UrgencyTimer` — countdown timer for urgency CTA
- `AnimatedCounter` — number count-up animation
- `BiometricInputRow` — height/weight slider input
- `MedicalToggleList` — injury/condition toggle grid
- `HealthKitSync` — Apple Health / Google Fit sync card
- `SleepTracker` — sleep quality input card
- `HydrationTracker` — water intake tracker
- `BodyFatSlider` — body composition visual slider
- `DeliveryCartCard` — grocery delivery cart item
- `PartnerLogoRow` — iFood/Rappi/UberEats logos row
- `AIAssistantBubble` — chat bubble for AI responses

### 10 Complete Screens
- `WelcomeScreen` — animated splash with brand identity
- `BiometricsScreen` — full biometric data collection
- `GoalsScreen` — fitness goal selection
- `MedicalScreen` — health conditions + injury protocol
- `HealthSyncScreen` — HealthKit/Google Fit authorization
- `PaywallScreen` — 3 variations (social proof / scarcity / guarantee)
- `DashboardScreen` — home with macro ring + workout card
- `WorkoutScreen` — active workout tracker
- `NutritionScreen` — daily meal plan + grocery list
- `ProgressScreen` — weight history + body metrics

### Extras
- 🎨 **Figma source file** — all components, auto-layout, variables
- 🌙 **Dark + Light themes** — token-based theming system
- 🗄️ **Supabase schema** — production PostgreSQL schema included
- 🔑 **CLAUDE.md** — AI coding assistant pre-configured rules
- 📱 **Expo Router v3** — file-based navigation pre-wired
- 📦 **RevenueCat-ready** — IAP subscription boilerplate
- 📧 **Email support** — 30 days included

---

## 🚀 Quick Start (Free Tier)

```bash
# Clone the repo
git clone https://github.com/edubuilds/fitkit-rn.git
cd fitkit-rn

# Install dependencies
npm install

# Start Expo
npx expo start
```

**Requirements:** Node 18+, Expo CLI, iOS Simulator or Android Emulator

---

## 🎨 Design System

Built on the **High-Tech Noir** aesthetic — the same design language used in AllFit.

```ts
// theme/tokens.ts
export const colors = {
  electricCyan:  '#0AFFE0',   // primary accent
  acidLime:      '#B8FF00',   // secondary accent  
  emberOrange:   '#FF6B35',   // CTA / warning
  deepCharcoal:  '#0D0F14',   // background
  charcoalMid:   '#151821',   // card background
  charcoalLight: '#1E2230',   // border / divider
}

export const fonts = {
  display: 'BebasNeue-Regular',    // headings
  body:    'DMSans-Regular',       // body text
  mono:    'JetBrainsMono-Regular' // data / code
}
```

---

## 📁 Project Structure

```
fitkit-rn/
├── components/
│   ├── GlassCard.tsx
│   ├── GlassButton.tsx
│   ├── MetabolicDisplay.tsx
│   ├── GoalCard.tsx
│   ├── ActivityPill.tsx
│   ├── OnboardingSlide.tsx
│   ├── StepProgressBar.tsx
│   └── BottomTabBar.tsx
├── screens/         # [PRO] 10 complete screens
├── theme/
│   ├── tokens.ts    # color + font tokens
│   └── tailwind.ts  # NativeWind config
├── assets/
│   └── fonts/       # Bebas Neue, DM Sans, JetBrains Mono
├── app.json
├── tailwind.config.js
├── tsconfig.json
└── CLAUDE.md        # AI coding rules [PRO]
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native + Expo SDK 52 |
| Styling | NativeWind v4 (Tailwind for RN) |
| Language | TypeScript 5.x |
| Navigation | Expo Router v3 |
| Animations | Reanimated 3 + Moti |
| Blur | expo-blur (BlurView) |
| Icons | @expo/vector-icons (Ionicons) |
| Charts | Victory Native / Recharts (PRO) |
| Database | Supabase + PostgreSQL (PRO) |
| IAP | RevenueCat (PRO) |
| AI | Google Gemini API (PRO) |

---

## 💡 Why FitKit?

Most React Native UI kits are either:
- ❌ Generic (no domain logic)
- ❌ Outdated (React Native CLI, no NativeWind)
- ❌ Demo-only (won't survive real users)

FitKit is different — every component was built for **AllFit**, a production fitness app with:
- ✅ Real bioengineering logic (Mifflin-St Jeor TMB calculation)
- ✅ Medical safety protocol (injury + condition handling)
- ✅ Subscription paywall (3 variants, high-conversion)
- ✅ Delivery integration ready (iFood/Rappi/UberEats JSON)

---

## 📊 Component Status

| Component | Free | PRO | Supabase | RevenueCat |
|-----------|------|-----|---------|-----------|
| GlassCard | ✅ | ✅ | — | — |
| MetabolicDisplay | ✅ | ✅ | ✅ | — |
| PaywallScreen | — | ✅ | ✅ | ✅ |
| WorkoutCard | — | ✅ | ✅ | — |
| MacroRing | — | ✅ | ✅ | — |
| DashboardScreen | — | ✅ | ✅ | — |

---

## 🌟 Used In

> **FitKit powers AllFit** — an AI fitness app in development.
> 
> Built by [@edu_builds](https://twitter.com/edu_builds) · Building in public 🔨

---

## 📄 License

MIT © [Your Name](https://github.com/edubuilds)

Free tier: MIT license — use in personal and commercial projects.  
PRO tier: Single-project license. [See PRO terms →](https://yourstore.lemonsqueezy.com)

---

<div align="center">

**[⭐ Star this repo](https://github.com/edubuilds/fitkit-rn)** to support development

**[→ Get FitKit PRO — $99 lifetime](https://yourstore.lemonsqueezy.com)**

Made with ⚡ by [@edu_builds](https://twitter.com/@edu_builds)

</div>
