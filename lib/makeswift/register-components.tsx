import { ReactRuntime } from "@makeswift/runtime/react";
import {
  Style,
  Slot,
  Select,
  TextInput,
  Image,
  List,
  Shape,
  Number,
  Checkbox,
  Color,
  TextArea,
  Link,
  RichText,
} from "@makeswift/runtime/controls";
import { Marquee } from "../../components/Marquee";
import { Navigation } from "../../components/Navigation";

// Register your components here!

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
        return logo?.logoAlt || "Untitled";
      },
    }),
    gap: Number({ label: "Gap", defaultValue: 48 }),
    fadeColor: Color({ label: "Fade color", defaultValue: "#ffffff" }),
    className: Style(),
  },
});

ReactRuntime.registerComponent(Navigation, {
  type: "navigation",
  label: "Navigation",
  props: {
    className: Style(),
    links: List({
      label: "Main navigation",
      type: Shape({
        type: {
          text: TextInput({
            label: "Text",
            defaultValue: "Link",
            selectAll: true,
          }),
          subnavGroups: List({
            label: "Subnav groups",
            type: Shape({
              type: {
                heading: TextInput({
                  label: "Heading",
                  defaultValue: "Heading",
                  selectAll: true,
                }),
                subnavLinks: List({
                  label: "Links",
                  type: Shape({
                    type: {
                      link: Link({ label: "On click" }),
                      icon: Image({
                        label: "Icon",
                        format: Image.Format.WithDimensions,
                      }),
                      linkText: TextInput({
                        label: "Link text",
                        defaultValue: "Link text",
                        selectAll: true,
                      }),
                      subtext: TextInput({
                        label: "Subtext",
                        defaultValue: "This is some subtext",
                        selectAll: true,
                      }),
                    },
                  }),
                  getItemLabel(subnavLink) {
                    return subnavLink?.linkText || "Link";
                  },
                }),
              },
            }),
            getItemLabel(subnavGroup) {
              return subnavGroup?.heading || "Heading";
            },
          }),
        },
      }),
      getItemLabel(mainNavLink) {
        return mainNavLink?.text || "Link";
      },
    }),
    ctaText: TextInput({
      label: "CTA text",
      defaultValue: "Request a demo",
      selectAll: true,
    }),
    ctaLink: Link({ label: "CTA on click" }),
  },
});
