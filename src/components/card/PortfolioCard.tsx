import { CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Dimmed } from 'src/shared-styles/Images.styles';
import { PortfolioCardClassNames, PortfolioCardContainer } from './PortfolioCard.styles';

interface CardProps {
	title: string;
	description: string;
	image: StaticImageData;
	link: string;
}

export default function PortfolioCard({ description, title, image, link }: CardProps) {
	return (
		<PortfolioCardContainer>
			<Dimmed>
				<CardActionArea href={link} target='_blank' className={PortfolioCardClassNames.Height}>
					<div className={PortfolioCardClassNames.ImageContainer}>
						<Image src={image} alt='whatIDo' layout='intrinsic'></Image>
					</div>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div' className={PortfolioCardClassNames.Title}>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Dimmed>
		</PortfolioCardContainer>
	);
}
