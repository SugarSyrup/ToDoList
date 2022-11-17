import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from "recoil";

import App from './App';
import {darkTheme, lightTheme} from './theme';
import { useRecoilValue } from "recoil";

import { isDarkAtom } from "./atoms";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const isDark = useRecoilValue(isDarkAtom);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);