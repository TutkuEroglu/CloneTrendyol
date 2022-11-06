import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ProximaNovaRegular from "../assets/fonts/ProximaNova-Regular.otf";
import ProximaNovaLight from "../assets/fonts/ProximaNova-Light.otf";
import ProximaNovaSemiBold from "../assets/fonts/ProximaNova-Semibold.otf";
import ProximaNovaBold from "../assets/fonts/ProximaNova-Bold.otf";
import React, { useMemo } from "react";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pregular';
    src: url(${ProximaNovaRegular});
  }
  @font-face {
    font-family: 'Plight';
    src: url(${ProximaNovaLight});
  }
  @font-face {
    font-family: 'Psemibold';
    src: url(${ProximaNovaSemiBold});
  }
  @font-face {
    font-family: 'Pbold';
    src: url(${ProximaNovaBold});
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

const breakPoints = {
  xs: 468,
  sm: 600,
  m: 768,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const baseColors = {
  orange: "#F95700",
  white: "#FFFFFF",
  black: "#000000",
}

export const themeLight = {
  dark: false,
  colors: {
    searchBarPlaceholder: "#C6C6C6",
    titleColor: baseColors.orange,
    cardTextColor: baseColors.black,
    cardColor: baseColors.white,
    modalColor: "#22303C",
    cardTitles: "#1b1b1b",
    white: baseColors.white,
    black: baseColors.black,
    noBgTextColor: baseColors.black,
    todoTitles: baseColors.white,
    successColor: "#28A745",
    dangerColor: "#DC3545",
    warningColor: "#E0A800",
    infoColor: "#17A2B8",
    orange: baseColors.orange,
    red: "#FF0000",
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(156, 156, 156)",
    text: "rgb(60, 60, 60)",
    border: "#ececec",
    notification: "rgb(255, 69, 58)",
    mobileMenuLinks: "#fff",
    menuActiveColor: "#fcfcfc",
    newOrange: "#F27A1A",
    newBg: "#333333",
    whiteBg: "#ffffff",
    inputBg: "#f3f3f3",
    inputColor: "#333",
    iconBg: "#f3f3f3",
  },
  backgrounds: {
    drawerHeaderBackground: baseColors.orange,
    modalBackground: "#15202B",
    menuBackground: baseColors.white,
    profileAccordions: "#b4b4b4",
    cardBackground: baseColors.white,
    todoAccordions: "rgb(0, 76, 153)",
    onlineUsers: "rgb(0, 76, 153)",
    commentsArea: "#F8F9FA",
    questionModal: baseColors.white,
    headerButtonBackgrounds: "rgba(239,239,239,0.77)",
    mobileMenuBg: baseColors.orange,
  },
  fonts: {
    regular: "Pregular",
    light: "Plight",
    semibold: "Psemibold",
    bold: "Pbold"
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    stiny: "13px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
    titleLarge: "26px",
    titleExtraLarge: "32px",
  },
  darkModal: baseColors.white,
  buttonColors: {
    dark: "#22303c",
  },
  invert: "invert(0)",
  breakPoints
};

export const themeDark = {
  dark: true,
  colors: {
    searchBarPlaceholder: baseColors.white,
    titleColor: baseColors.white,
    cardTextColor: baseColors.white,
    cardColor: "#222B45",
    modalColor: "#22303C",
    cardTitles: "#1b1b1b",
    white: baseColors.white,
    black: baseColors.black,
    noBgTextColor: baseColors.white,
    todoTitles: baseColors.white,
    successColor: "#28A745",
    dangerColor: "#DC3545",
    warningColor: "#E0A800",
    infoColor: "#17A2B8",
    orange: baseColors.orange,
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(156, 156, 156)",
    text: "rgb(60, 60, 60)",
    border: "#ececec",
    notification: "rgb(255, 69, 58)",
  },
  backgrounds: {
    drawerHeaderBackground: "rgb(32, 35, 39)",
    modalBackground: "#FFFDF9",
    menuBackground: "rgb(32, 35, 39)",
    profileAccordions: "#3c4b75",
    cardBackground: "#222B45",
    todoAccordions: "rgb(0, 30, 60)",
    onlineUsers: "rgb(0, 30, 60)",
    commentsArea: "#1F2739",
    questionModal: "#22303C",
    headerButtonBackgrounds: "rgba(239,239,239,0.77)"
  },
  darkModal: "#222B45",
  fonts: {
    regular: "Pregular",
    light: "Plight",
    semibold: "Psemibold",
    bold: "Pbold"
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
    titleLarge: "26px",
    titleExtraLarge: "32px",
  },
  buttonColors: {
    dark: "#22303c",
  },
  invert: "invert(1)",
  breakPoints
};

export const AppContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
`;

export const AppContainerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black};
  opacity: ${({ navbarOpen }) => (navbarOpen ? 0.5 : 0)};
  transition: all 1s;
`;

const CustomThemeProvider = ({ children }) => {

  return useMemo(() => {
    return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }, [children]);
};

export default CustomThemeProvider;