// import antfu from '@antfu/eslint-config'

// const myConfig = (...args) => {
//   return antfu({
//     stylistic: {
//       indent: 2,
//       overrides: {
//         // 'no-console': 'off'
//         // 'no-debugger': false,
//         // 'valid-v-slot': 1,
//       }
//     },
//     vue: true,
//     typescript: true,
//     rules: {
//       'vue/valid-v-slot': ['error', { allowModifiers: true }],
//     },
//     ignores: [
//       '**/fixtures',
//     ],
//     formatters: {
//       css: true,
//       html: true,
//       markdown: 'prettier',
//     },
//   }, {
//   }, ...args)
// }

// export default myConfig

import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2,

      overrides: {
        // 'no-console': 'off'
        // 'no-debugger': false,
        // 'valid-v-slot': 1,
      },
    },
    vue: true,
    typescript: true,
    rules: {
      'vue/valid-v-slot': ['error', { allowModifiers: true }],
    },
    ignores: [
      '**/fixtures',
    ],
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
)
