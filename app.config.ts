export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'rounded-none',
        label: 'text-lg font-bold',
      },
    },
    modal: {
      slots: {
        content: 'fixed divide-y divide-default flex flex-col  outline-2',
      },
    },
  },
})
