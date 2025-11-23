import { Canvas, Group, Line, Path } from '@shopify/react-native-skia'
import { generateLSystemString } from './utils'
import { Dimensions } from 'react-native'
import { View } from '@my/ui'
import {
  type SharedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'

const idealTree = {
  axiom: 'F',
  rules: {
    F: 'FF+[+F-F-F]-[-F+F+F]',
  },
  iterations: 4,
}

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height - 118

function generateTree() {
  const tree = generateLSystemString(idealTree.axiom, idealTree.rules, idealTree.iterations)
  let length = 10
  const rotateAngle = (25 / 180) * Math.PI
  let angle = Math.PI / 2
  let origin = { x: WINDOW_WIDTH / 2 - 50, y: WINDOW_HEIGHT - 100 }

  let savedInfos: { angle: number; origin: { x: number; y: number }; depth: number }[] = []
  let depth = 0
  const maxDepth = idealTree.iterations

  const lines: {
    p1: { x: number; y: number }
    p2: { x: number; y: number }
    depth: number
  }[] = []

  for (const char of tree) {
    if (char === '+') {
      angle -= rotateAngle
    } else if (char === '-') {
      angle += rotateAngle
    } else if (char === '[') {
      savedInfos.push({
        angle: angle,
        origin: { ...origin },
        depth: depth,
      })
      depth++
    } else if (char === ']') {
      const savedInfo = savedInfos.pop()
      if (savedInfo) {
        angle = savedInfo.angle
        origin = savedInfo.origin
        depth = savedInfo.depth
      }
    } else if (char === 'F') {
      const x1 = origin.x
      const y1 = origin.y
      const normalizedDepth = depth / maxDepth
      const easedDepth = 1 - (1 - normalizedDepth) ** 3
      const currentLength = length * (1 - easedDepth * 0.2)
      const x2 = x1 + currentLength * Math.cos(angle)
      const y2 = y1 - currentLength * Math.sin(angle)
      origin = { x: x2, y: y2 }
      lines.push({ p1: { x: x1, y: y1 }, p2: { x: x2, y: y2 }, depth })
    }
  }
  return { lines, maxDepth }
}

const generatedTree = generateTree()

export const HomeScreen = () => {
  const windVariable = useSharedValue(1)

  useEffect(() => {
    windVariable.value = withRepeat(
      withSequence(withTiming(200, { duration: 200 }), withTiming(1, { duration: 200 })),
      -1,
      false
    )
  }, [])

  return (
    <View flex={1}>
      <Canvas style={{ flex: 1 }}>
        {generatedTree.lines?.map((line, index) => (
          <Branch
            windVariable={windVariable}
            key={index}
            line={line}
            maxDepth={generatedTree.maxDepth}
          />
        ))}
      </Canvas>
    </View>
  )
}

interface Line {
  line: {
    p1: { x: number; y: number }
    p2: { x: number; y: number }
    depth: number
  }
  maxDepth: number
  windVariable: SharedValue<number>
}

function Branch(props: Line) {
  const { line, maxDepth, windVariable } = props

  const normalizedDepth = line.depth / maxDepth
  const easedDepth = normalizedDepth * 0.7 + normalizedDepth ** 2 * 0.3
  const strokeWidth = Math.max(1.2, 3.5 * (1 - easedDepth * 0.6))
  const r = Math.round(100 + (180 - 100) * easedDepth)
  const g = Math.round(150 + (220 - 150) * easedDepth)
  const b = Math.round(20 + (50 - 20) * easedDepth)

  const color = `rgb(${r}, ${g}, ${b})`
  const path = `M ${line.p1.x} ${line.p1.y} L ${line.p2.x} ${line.p2.y}`

  return <Path path={path} color={color} strokeWidth={strokeWidth} style="stroke" />
}
