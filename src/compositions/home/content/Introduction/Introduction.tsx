import { Typography } from '@mui/material';
import { IntroductionClassNames, IntroductionContainer } from './Introduction.styles';

export const Introduction = () => {
	return (
		<IntroductionContainer>
			<Typography variant='h6' className={IntroductionClassNames.Opacity}>
				Hi, my name is
			</Typography>

			<Typography variant='h1'>Natalia Kamieniak</Typography>

			<Typography variant='h1'>I am Frontend Developer</Typography>

			<Typography
				variant='h6'
				className={IntroductionClassNames.Opacity}
			>{`I'm a software engineer passionate about building elegant and modern websites.`}</Typography>
		</IntroductionContainer>
	);
};
