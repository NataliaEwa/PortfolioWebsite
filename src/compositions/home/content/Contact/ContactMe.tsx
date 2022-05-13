import { Typography } from '@mui/material';
import useWindowSize from 'src/hooks/useWindowSize';
import { portfolioTheme } from 'src/theme/ThemeProvider';
import { SectionTitle } from '../Content.styles';
import { ContactMeContainer } from './ContactMe.styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';

export const ContactMe = () => {
	const { width } = useWindowSize();

	const mailtoHref = 'mailto:Natalia.Ewa.Kamieniak@gmail.com';
	const callToHref = 'tel:+48519165492';

	return (
		<>
			<SectionTitle id='contact'>
				<Typography variant={width && width < portfolioTheme.breakpoints.values.md ? 'h5' : 'h4'}>Contact Me</Typography>
			</SectionTitle>

			<ContactMeContainer>
				<a href={mailtoHref}>
					<AlternateEmailIcon />
					<Typography>Natalia.Ewa.Kamieniak@gmail.com</Typography>
				</a>

				<a href={callToHref}>
					<CallIcon />
					<Typography>+48 519165492</Typography>
				</a>

				<Link href='https://www.linkedin.com/in/natalia-kamieniak-55a323207'>
					<a target='_blank' rel='noopener noreferrer'>
						<LinkedInIcon />
						<Typography>https://www.linkedin.com/in/natalia-kamieniak-55a323207</Typography>
					</a>
				</Link>

				<Link href='https://github.com/NataliaEwa'>
					<a target='_blank' rel='noopener noreferrer'>
						<GitHubIcon />
						<Typography>https://github.com/NataliaEwa</Typography>
					</a>
				</Link>
			</ContactMeContainer>
		</>
	);
};
