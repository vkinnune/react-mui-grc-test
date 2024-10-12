// vite.config.ts
import svgr from 'vite-plugin-svgr'

export default {
  // ...
  plugins: [
    svgr({
      include: '**/*.svg',
      exclude: '',
      svgrOptions: {
        dimensions: false, // Removes width and height attributes, keeps viewBox intact
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      // ...
    }),
  ],
}
