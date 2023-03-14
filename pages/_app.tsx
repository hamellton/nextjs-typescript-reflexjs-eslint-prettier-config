import '@/styles/globals.css';
import { reflexTheme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider as ReflexThemeProvider } from 'reflexjs';

interface Itest<T> {
  name: string;
  test: T;
}

interface Itest<T> {
  name: string;
  digital: T;
}

// const test: Itest<number> = {
const test: Itest<number> = {
  name: 'string',
  digital: 10,
};

const test1 = 'test';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReflexThemeProvider theme={reflexTheme}>
      <Component {...pageProps} />
    </ReflexThemeProvider>
  );
}
