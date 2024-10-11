// vite.config.ts
import svgr from 'vite-plugin-svgr'

export default {
  // ...
  plugins: [
    svgr({
      include: '**/*.svg',
      exclude: '',
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      // ...
    }),
  ],
}
