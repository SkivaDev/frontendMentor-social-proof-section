/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "very-dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
      },
      colors: {
        "very-dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
      },
    },
  },
  plugins: [],
};
