import { Typography } from '@mui/material';
import { SectionTitle } from '../Content.styles';
import Image from 'next/image';
import whatIDo from '/public/images/whatido.jpg';
import { WhatIDoClassNames, WhatIDoContainer } from './WhatIDo.styles';
import { portfolioTheme } from 'src/theme/ThemeProvider';
import useWindowSize from 'src/hooks/useWindowSize';
import { Dimmed } from 'src/shared-styles/Images.styles';

export const WhatIDo = () => {
	const { width } = useWindowSize();

	return (
		<>
			{width && width >= portfolioTheme.breakpoints.values.md && (
				<SectionTitle>
					<Typography variant='h4'>What I do ?</Typography>
				</SectionTitle>
			)}

			<Dimmed>
				<WhatIDoContainer>
					<div className={WhatIDoClassNames.Typography}>
						<Typography>I build and design modern websites using React.js, next.js and TypeScript.</Typography>
					</div>

					<div className={WhatIDoClassNames.ImageContainer}>
						<Image src={whatIDo} alt='whatIDo' className={WhatIDoClassNames.Opacity}></Image>

						{width && width < portfolioTheme.breakpoints.values.md && (
							<Typography variant='h4' className={WhatIDoClassNames.CenteredText}>
								What I do ?
							</Typography>
						)}
					</div>
				</WhatIDoContainer>
			</Dimmed>
		</>
	);
};
