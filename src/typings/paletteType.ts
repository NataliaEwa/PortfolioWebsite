declare module '@mui/material/styles/createPalette' {
	interface Palette {
		backgroundColor: Palette['primary'];
		skyBackground: Palette['primary'];
		powerBi: Palette['primary'];
	}

	interface PaletteOptions {
		backgroundColor: PaletteColorOptions;
		skyBackground: PaletteColorOptions;
		powerBi: PaletteColorOptions;
	}
}

export {};
