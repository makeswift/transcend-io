import { MakeswiftApiHandler } from "@makeswift/runtime/next";

export default MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY!, {
  apiOrigin: process.env.MAKESWIFT_API_ORIGIN,
  appOrigin: process.env.MAKESWIFT_APP_ORIGIN,
  getFonts() {
    return [
      {
        family: "Neue Haas Grotesk",
        variants: [
          {
            weight: "300",
            style: "normal",
            src: "/fonts/NeueHaasDisplay-Light.woff2",
          },
          {
            weight: "400",
            style: "normal",
            src: "/fonts/NeueHaasDisplay-Roman.woff2",
          },
          {
            weight: "700",
            style: "normal",
            src: "/fonts/NeueHaasDisplay-Bold.woff2",
          },
        ],
      },
    ];
  },
});
