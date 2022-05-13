import { Typography } from '@mui/material';
import { SectionTitle } from '../Content.styles';
import PortfolioCard from 'src/components/card/PortfolioCard';
import portfolio from '/public/images/portfolio.png';
import softflix from '/public/images/softflix.png';
import skillsive from '/public/images/skillsive.png';
import inoxie from '/public/images/inoxie.png';
import { MyWorkContainer } from './MyWork.styles';

export const MyWork = () => {
	return (
		<>
			<SectionTitle id='experience'>
				<Typography variant='h4'>My Work</Typography>
			</SectionTitle>

			<MyWorkContainer>
				<PortfolioCard
					image={portfolio}
					title='Portfolio'
					link='https://github.com/NataliaEwa/PortfolioWebsite'
					description='Website created and designed by me with NextJs (Material UI) and Vercel deployement server. Website is optimized for search engine traffic, mobile devices, it is fully responsible with SEO included.'
				/>

				<PortfolioCard
					image={skillsive}
					title='skillsive'
					link='https://www.skillsive.com'
					description='Digital platform for virtual reality trainings, which includes a web application, API and SDK for Unity. The web application consists of admin panel (customer management), dev panel (course configuration) and client panel (results preview). In this application, we used WebSockets which allowed remote control of VR applications from the client panel level.'
				/>

				<PortfolioCard
					image={softflix}
					title='softflix'
					link='https://www.softflix.com'
					description='Digital selling platform. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.'
				/>

				<PortfolioCard
					image={inoxie}
					title='inoxie'
					link='https://www.inoxiesoft.com'
					description='Website created by me with NextJs (Ant Design) and Vercel deployement server. Website is optimized for search engine traffic, mobile devices, it is fully responsible with SEO included.'
				/>
			</MyWorkContainer>
		</>
	);
};
