import { createTheme, ThemeOptions } from '@mui/material';

export const portfolioTheme = createTheme({
	palette: {
		mode: 'light',

		background: {
			paper: '#ffffff',
			default: '#f8faff'
		},
		primary: {
			main: '#91a3f5',
			light: '#c4d4ff',
			dark: '#5f75c2'
		},
		text: {
			primary: '#3a3a3a',
			secondary: '#646464'
		},
		skyBackground: {
			main: '#000a18'
		}
	},

	typography: {
		//fontFamily: 'Roboto'
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	}
} as ThemeOptions);

export const portfolioDarkTheme = createTheme({
	palette: {
		mode: 'dark',

		background: {
			paper: '#ffffff',
			default: '#05051a'
		},
		primary: {
			main: '#7e86c1',
			light: '#afb6f4',
			dark: '#4f5990'
		},
		text: {
			primary: '#ffffff',
			secondary: '#ffffffCC'
		},
		skyBackground: {
			main: '#000420'
		},
		powerBi: {
			main: '#eabc3eCC'
		}
	},

	typography: {
		//fontFamily: 'Roboto'
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	}
} as ThemeOptions);
