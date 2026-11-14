const tailwindConfig = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060B16',
          900: '#0A1426',
          800: '#0F1E38',
          700: '#18305A',
          600: '#2A4775',
        },
        gold: {
          100: '#FCF4DB',
          200: '#F8E3A3',
          300: '#F5CF5C',
          400: '#F2BE2C',
          500: '#E0A91B',
          700: '#7E5A07',
        },
        mist: '#F4F6F9',
        line: '#E3E7EE',
        body: '#1E2633',
        muted: '#566173',
        danger: '#B42318',
        success: '#067647',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(6,11,22,0.04), 0 8px 24px -12px rgba(6,11,22,0.12)',
        lift: '0 2px 4px rgba(6,11,22,0.04), 0 18px 40px -16px rgba(6,11,22,0.22)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
};

export default tailwindConfig;
