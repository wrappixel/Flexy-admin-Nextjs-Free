"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DashboardContextProvider } from './context/DashboardContext';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>Flexy React + Js + Mui</title>
      </head>
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <DashboardContextProvider>
            <CssBaseline />
            {children}
          </DashboardContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
