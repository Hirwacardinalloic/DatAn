// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: process.env.VITE_BASE_PATH || "/DatAn",
// });



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // 👇 In dev use "/", in build use "/DatAn/"
    base: command === 'build' ? '/DatAn/' : '/',
    css: {
    // optional: ensures CSS is handled consistently
    preprocessorOptions: {
      css: {}
    }
  }
  }
})



