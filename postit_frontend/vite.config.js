import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        sourcemap: true,
      },
      injectRegister: "inline",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "PostIt",
        short_name: "PostIt",
        start_url: "https://postitmedia.netlify.app",
        id: "https://postitmedia.netlify.app",
        display: "standalone",
        background_color: "#262626",
        theme_color: "#262626",
        lang: "en-us",
        scope: "/",
        display_override: ["window-controls-overlay"],
        protocol_handlers: [{ protocol: "mailto", url: "/newEmail?to=%s" }],
        shortcuts: [
          {
            name: "Create a Post",
            short_name: "Post",
            description:
              "Post an image",
            url: "/create-pin/",
            icons: [
              {
                src: "../postit_frontend/src/assets/send.png",
                sizes: "96x96",
              },
            ],
          },
        ],
        screenshots: [
          {
            src: "/screenshots/screenshot-1.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "PostIt Home Screen",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-2.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "Pin Details",
          },
          {
            src: "/screenshots/screenshot-3.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "Create Pin",
          },
        ],
        description: "PostIt - Your image sharing social media platform",
        icons: [
          {
            src: "windows11/SmallTile.scale-100.png",
            sizes: "71x71",
            type: "image/png",
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            sizes: "89x89",
            type: "image/png",
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            sizes: "107x107",
            type: "image/png",
          },
          {
            src: "windows11/SmallTile.scale-200.png",
            sizes: "142x142",
            type: "image/png",
          },
          {
            src: "windows11/SmallTile.scale-400.png",
            sizes: "284x284",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-125.png",
            sizes: "188x188",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-150.png",
            sizes: "225x225",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300",
            type: "image/png",
          },
          {
            src: "windows11/Square150x150Logo.scale-400.png",
            sizes: "600x600",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-125.png",
            sizes: "388x188",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-150.png",
            sizes: "465x225",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300",
            type: "image/png",
          },
          {
            src: "windows11/Wide310x150Logo.scale-400.png",
            sizes: "1240x600",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-100.png",
            sizes: "310x310",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-125.png",
            sizes: "388x388",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-150.png",
            sizes: "465x465",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620",
            type: "image/png",
          },
          {
            src: "windows11/LargeTile.scale-400.png",
            sizes: "1240x1240",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.scale-125.png",
            sizes: "55x55",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.scale-150.png",
            sizes: "66x66",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.scale-400.png",
            sizes: "176x176",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-100.png",
            sizes: "50x50",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            sizes: "63x63",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-150.png",
            sizes: "75x75",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            sizes: "200x200",
            type: "image/png",
          },
          {
            src: "windows11/SplashScreen.scale-100.png",
            sizes: "620x300",
            type: "image/png",
          },
          {
            src: "windows11/SplashScreen.scale-125.png",
            sizes: "775x375",
            type: "image/png",
          },
          {
            src: "windows11/SplashScreen.scale-150.png",
            sizes: "930x450",
            type: "image/png",
          },
          {
            src: "windows11/SplashScreen.scale-200.png",
            sizes: "1240x600",
            type: "image/png",
          },
          {
            src: "windows11/SplashScreen.scale-400.png",
            sizes: "2480x1200",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-20.png",
            sizes: "20x20",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-24.png",
            sizes: "24x24",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-30.png",
            sizes: "30x30",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-36.png",
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-40.png",
            sizes: "40x40",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-44.png",
            sizes: "44x44",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-60.png",
            sizes: "60x60",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-80.png",
            sizes: "80x80",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            sizes: "20x20",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            sizes: "24x24",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            sizes: "30x30",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            sizes: "40x40",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            sizes: "44x44",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            sizes: "60x60",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            sizes: "80x80",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            sizes: "63x63",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            sizes: "200x200",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-24.png",
            sizes: "24x24",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-30.png",
            sizes: "30x30",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-36.png",
            sizes: "36x36",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-40.png",
            sizes: "40x40",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "monochrome",
          },
        ],

        orientation: "portrait",
        categories: ["social media"],
        dir: "ltr",
      },
    }),
  ],
});
