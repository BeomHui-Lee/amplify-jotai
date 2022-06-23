const defaultTheme = require("tailwindcss/defaultTheme");
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./feature/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    // 디폴트 값
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1900px",
    },
    minHeight: {
      400: "400px",
      450: "450px",
      700: "700px",
    },
    // 추가 커스텀
    extend: {
      margin: {
        4.5: "1.125rem" /** 18px */,
        15: "3.625rem" /** 54px */,
      },
      width: {
        17: "4.25rem" /** 64px */,
        18: "4.5rem" /** 68px */,
        19: "4.75rem" /** 72px */,
        19.5: "4.825rem" /** 74px */,
      },
      colors: {
        "gl-primary": "#12B564",
        "gl-secondary": "#3BBD5A",
        "gl-accent": "#FED925",
        gray: {
          50: "#F7F7F7",
          100: "#F2F2F2",
          150: "#ECECEC",
          200: "#E5E5E5",
          250: "#D9D9D9",
          300: "#CCCCCC",
          400: "#B2B2B2",
          500: "#999999",
          600: "#727272",
          700: "#4C4C4C",
          800: "#262626",
          900: "#121212",
        },
        green: {
          50: "#EBFDED",
          100: "#D5FCD9",
          150: "#C3FBC9",
          200: "#A8F8B8",
          250: "#8EF2A6",
          270: "#8BEDA8",
          300: "#7AEA9C",
          400: "#44D27D",
          500: "#12B564",
          600: "#0D9B63",
          700: "#09825E",
          800: "#056855",
          900: "#03564E",
        },
        light: withOpacity("--color-light"),
        dark: withOpacity("--color-dark"),
        accent: withOpacity("--color-accent"),
        "accent-hover": withOpacity("--color-accent-hover"),
        "accent-300": withOpacity("--color-accent-300"),
        "accent-400": withOpacity("--color-accent-400"),
        "accent-500": withOpacity("--color-accent-500"),
        "accent-600": withOpacity("--color-accent-600"),
        "accent-700": withOpacity("--color-accent-700"),
        "border-50": withOpacity("--color-border-50"),
        "border-100": withOpacity("--color-border-100"),
        "border-200": withOpacity("--color-border-200"),
        "border-base": withOpacity("--color-border-base"),
        "border-400": withOpacity("--color-border-400"),
        primary: "rgba(40, 199, 111, 0.9)",
        active: "rgba(40, 199, 111, 0.7)",
        border: "rgba(10, 182, 85, 0.4)",
        focused: "rgb(10, 182, 85)",
        social: {
          facebook: "#3b5998",
          "facebook-hover": "#35508a",
          twitter: "#1da1f2",
          instagram: "#e1306c",
          youtube: "#ff0000",
          google: "#4285f4",
          "google-hover": "#3574de",
        },
      },
      lineHeight: {
        6.5: "1.625rem" /** 26px */,
        7.5: "1.875rem" /** 30px */,
        8.5: "2.125rem" /** 34px */,
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
      },
      borderWidth: {
        13: "13px",
        16: "16px",
      },

      /* Most of the time we customize the font-sizes,
       so we added the Tailwind default values here for
       convenience */
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        smb: ".9375rem",
        base: "1rem",
        md: "1.063rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      /* We override the default font-families with our own default prefs  */
      fontFamily: {
        sans: ["Noto Sans KR", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "Roboto Mono", "SFMono-Regular", "Segoe UI", "Courier", "monospace"],
        body: ["Open Sans", "system-ui", "sans-serif"],
        heading: ["Open Sans", "system-ui", "sans-serif"],
      },
      minWidth: {
        "4/5": "80%",
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/5": "20%",
        ...defaultTheme.minWidth,
      },
      textColor: {
        body: withOpacity("--text-base"),
        "body-dark": withOpacity("--text-base-dark"),
        muted: withOpacity("--text-muted"),
        "muted-light": withOpacity("--text-muted-light"),
        heading: withOpacity("--text-heading"),
        "sub-heading": withOpacity("--text-sub-heading"),
        bolder: withOpacity("--text-text-bolder"),
      },

      height: {
        13: "3.125rem",
        double: "200%",
      },
      maxWidth: {
        5: "1.25rem",
      },
      maxHeight: {
        5: "1.25rem",
      },
      spacing: {
        22: "5.5rem",
      },

      borderRadius: {
        DEFAULT: "5px",
      },

      boxShadow: {
        base: "rgba(0, 0, 0, 0.16) 0px 4px 16px",
        primary: "rgba(40, 199, 111, 0.7) 0 0 10px 1px",
      },

      gridTemplateColumns: {
        fit: "repeat(auto-fit, minmax(0, 1fr))",
      },
      customForms: theme => ({
        default: {
          checkbox: {
            "&:indeterminate": {
              background:
                "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgba(40, 199, 111, 0.9)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
          },
        },
      }),
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
