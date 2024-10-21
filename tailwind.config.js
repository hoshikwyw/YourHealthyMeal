/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "paleGreen": "#E4F4C3",
      "ButtonGreen": "#11867B",
      "NotiRed": "#FE3D3A",
      "hoverGreen": "#C6E0C9",
    }
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },

}

