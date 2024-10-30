// vite.config.ts
import svgr from "vite-plugin-svgr";

export default {
  // ...
  plugins: [
    svgr({
      include: "**/*.svg",
      exclude: "",
      svgrOptions: {
        dimensions: false, // Removes width and height attributes, keeps viewBox intact
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        replaceAttrValues: {
          currentColor: "currentColor", // Retain currentColor for stroke (if needed)
          "#000": "currentColor", // If black (#000) is used, replace with currentColor
        },
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: "(fill)", // Remove any fill attribute from the SVG
              },
            },
          ],
          floatPrecision: 2,
        },
      },
      // ...
    }),
  ],
};
