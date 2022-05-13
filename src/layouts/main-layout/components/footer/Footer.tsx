import { Typography } from '@mui/material';
import { FooterClassNames, FooterContainer } from './Footer.styles';

export default function Footer(): JSX.Element {
	return (
		<FooterContainer>
			<div className={FooterClassNames.Border} />

			<div className={FooterClassNames.Container}>
				<Typography align='center' className={FooterClassNames.Typography}>
					{'Designed & Built by Natalia Kamieniak'}
				</Typography>
			</div>
		</FooterContainer>
	);
}
