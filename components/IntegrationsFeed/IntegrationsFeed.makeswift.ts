import { ReactRuntime } from "@makeswift/runtime/react"
import { IntegrationsFeed } from "./IntegrationsFeed"
import { Style } from "@makeswift/runtime/controls"

ReactRuntime.registerComponent(IntegrationsFeed, {
  type: "integrationsFeed",
  label: "Integrations Feed",
  props: {
    className: Style(),
  },
})
