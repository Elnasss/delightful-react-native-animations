import { ListItem, YGroup } from "@my/ui"
import { useRouter } from "solito/navigation"

export const HomeScreen = () => {
  const router = useRouter()
  return (
    <YGroup  size="$4">
      <YGroup.Item>
        <ListItem
          hoverTheme
          title="Animated Wind-swept Tree"
          subTitle="A natural-looking tree with realistic wind animations"
          onPress={() => {
            router.push('/tree')
          }}
        />
      </YGroup.Item>
    </YGroup>
  )
}
