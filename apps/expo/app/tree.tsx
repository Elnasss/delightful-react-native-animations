import { AnimatedTreeScreen } from 'app/features/tree/animated-tree'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Tree',
        }}
      />
      <AnimatedTreeScreen />
    </>
  )
}

