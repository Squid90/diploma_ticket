import path from 'path';
import { VitePluginRadar } from 'vite-plugin-radar'

import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
//import 'dotenv/config';

const metrica = ((id?: string) => {
  if (!id) {
    return;
  }
  return [
    {
      id,
      config: {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      }
    }
  ]
})(process.env.APP_METRIKA_ID);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    svgr(), 
    react(),
    VitePluginRadar({
      enableDev: false,
      metrica
    })
  ],
  base: '/diploma_ticket',
  build: {
    outDir: 'dist'
  },
  preview: {
    port: 8080
  },
  assetsInclude: [
    '**/*.ttf'
  ]
})