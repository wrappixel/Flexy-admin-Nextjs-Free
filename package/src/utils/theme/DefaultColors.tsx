import { createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";

export const dm = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: '#1e4db7',
      light: '#e7ecf7',
      dark: '#173f98',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a97f5',
      light: '#EFF9FF',
      dark: '#1682d4',
      contrastText: '#ffffff',
    },
    success: {
      main: "#00c292",
      light: "#ebfaf2",
      dark: "#00964b",
      contrastText: "#ffffff",
    },
    info: {
      main: "#0bb2fb",
      light: "#dff8ff",
      dark: "#0bb2fb",
      contrastText: "#ffffff",
    },
    error: {
      main: "#fc4b6c",
      light: "#fdf3f5",
      dark: "#e45a68",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#fdc90f",
      light: '#fff4e5',
      dark: "#dcb014",
      contrastText: "#ffffff",
    },

    grey: {
      100: "#ecf0f2",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#767e89",
      500: "#5A6A85",
      600: "#2A3547",
    },

    text: {
      primary: "#11142d",
      secondary: "#777e89",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e9e9e9",

    background: {
      default: "#fafbfb",

      paper: "#fafbfb",
    },
  },

  typography: {
    fontFamily: dm.style.fontFamily,
    h1: {
      fontWeight: 500,
      fontSize: "1.875rem",
      lineHeight: "1.5",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.3125rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "none",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11) !important",
        },
        a: {
          textDecoration: "none",
          color: '#11142d'
        },
        ".simplebar-scrollbar:before": {
          background: " #DFE5EF!important",
        },
        ".MuiTypography-root, .MuiListSubheader-root, .MuiChip-label": {
          fontFamily: "'DM Sans', sans-serif !important"
        },
        ".rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path":
        {
          clipPath: "inset(0 0 5% 0 round 20px)",
        },
        ".MuiAlert-root .MuiAlert-icon": {
          color: "inherit!important",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledSuccess: {
          color: "white",
        },
        filledInfo: {
          color: "white",
        },
        filledError: {
          color: "white",
        },
        filledWarning: {
          color: "white",
        },
        standardSuccess: ({ theme }: any) => ({
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
        }),
        standardError: ({ theme }: any) => ({
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
        }),
        standardWarning: ({ theme }: any) => ({
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.main,
        }),
        standardInfo: ({ theme }: any) => ({
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.main,
        }),
        outlinedSuccess: ({ theme }: any) => ({
          borderColor: theme.palette.success.main,
          color: theme.palette.success.main,
        }),
        outlinedWarning: ({ theme }: any) => ({
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning.main,
        }),
        outlinedError: ({ theme }: any) => ({
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
        }),
        outlinedInfo: ({ theme }: any) => ({
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
        }),
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "7px",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },

        sizeSmall: {
          width: 30,
          height: 30,
          minHeight: 30,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          padding: "14px",
          margin: "10px",
          boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11) !important",

        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "30px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid #e5eaef`,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": {
            borderBottom: 0,
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          borderRadius: "7px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e5eaef !important',
          },
          borderRadius: "7px",
          '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1e4db7 !important'
          }
        },
      },
    },


  },
});

export { baselightTheme };
