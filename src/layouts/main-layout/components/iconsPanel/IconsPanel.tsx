import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import { IconsPanelContainer } from './IconsPanel.styles';

export default function IconsPanel(): JSX.Element {
	const mailtoHref = 'mailto:Natalia.Ewa.Kamieniak@gmail.com';
	const callToHref = 'tel:+48519165492';

	return (
		<IconsPanelContainer>
			<Link href='https://github.com/NataliaEwa'>
				<a target='_blank' rel='noopener noreferrer'>
					<GitHubIcon />
				</a>
			</Link>

			<Link href='https://www.linkedin.com/in/natalia-kamieniak-55a323207'>
				<a target='_blank' rel='noopener noreferrer'>
					<LinkedInIcon />
				</a>
			</Link>

			<Link href='https://www.instagram.com/awewiktoria/'>
				<a target='_blank' rel='noopener noreferrer'>
					<InstagramIcon />
				</a>
			</Link>

			<a href={mailtoHref}>
				<AlternateEmailIcon />
			</a>

			<a href={callToHref}>
				<CallIcon />
			</a>
		</IconsPanelContainer>
	);
}
