export const globalPolyfill = () => {
  const global = window
  if (window) {
    window.global = global
  }
}
