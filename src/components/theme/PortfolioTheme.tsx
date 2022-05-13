import { ThemeProvider } from '@mui/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Theme } from '@mui/material';
import { ReactNode } from 'react';

interface PortfolioThemeProps {
	children: ReactNode;
	theme: Theme;
}

export default function PortfolioTheme({ children, theme }: PortfolioThemeProps) {
	return (
		<ThemeProvider theme={theme}>
			<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
		</ThemeProvider>
	);
}
