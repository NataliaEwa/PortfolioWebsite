import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import PortfolioTheme from 'src/components/theme/PortfolioTheme';
import Layout from 'src/layouts/main-layout/Layout';
import { portfolioDarkTheme } from 'src/theme/ThemeProvider';

export const StyledApp = styled.div`
	//font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: ${props => props.theme.palette.text.primary};

	a {
		text-decoration: none !important;
	}
`;

function MyApp({ Component, pageProps }: AppProps) {
	console.log('app');
	return (
		<>
			<Head>
				<link rel='icon' href='/portfolio-logo.png' />
			</Head>

			<Script src='https://www.googletagmanager.com/gtag/js?id=G-PFGS0C39D7' />

			<Script id='ga-analytics'>
				{`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		
			gtag('config', 'G-PFGS0C39D7');		
		`}
			</Script>
			<Global
				styles={css`
					* {
						//font-family: 'Roboto';
					}
				`}
			/>

			<PortfolioTheme theme={portfolioDarkTheme}>
				<StyledApp>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</StyledApp>
			</PortfolioTheme>
		</>
	);
}

export default MyApp;
