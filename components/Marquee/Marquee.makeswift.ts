import { ReactRuntime } from "@makeswift/runtime/react"
import { Marquee } from "./Marquee"
import {
  List,
  Shape,
  Image,
  TextInput,
  Number,
  Color,
  Style,
} from "@makeswift/runtime/controls"

ReactRuntime.registerComponent(Marquee, {
  type: "marquee",
  label: "Marquee",
  props: {
    logos: List({
      label: "Logos",
      type: Shape({
        type: {
          logoImage: Image({
            label: "Logo",
            format: Image.Format.WithDimensions,
          }),
          logoAlt: TextInput({ label: "Logo alt text", defaultValue: "Image" }),
          logoWidth: Number({
            label: "Width",
            defaultValue: 120,
            suffix: "px",
          }),
        },
      }),
      getItemLabel(logo) {
        return logo?.logoAlt || "Untitled"
      },
    }),
    gap: Number({ label: "Gap", defaultValue: 48 }),
    fadeColor: Color({ label: "Fade color", defaultValue: "#ffffff" }),
    className: Style(),
  },
})
