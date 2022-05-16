import Image from 'next/image';
import github from '/public/logos/github.png';
import materialui from '/public/logos/materialui.png';
import mysql from '/public/logos/mysql.svg';
import sql from '/public/logos/sql.png';
import next from '/public/logos/next.png';
import powerbi from '/public/logos/powerbi.png';
import react from '/public/logos/react.png';
import typescript from '/public/logos/typescript.png';
import { Typography } from '@mui/material';
import { SectionTitle } from '../Content.styles';
import { SkillsClassNames, SkillsContainer } from './Skills.styles';

export const Skills = () => {
	return (
		<>
			<SectionTitle id='skills'>
				<Typography variant='h4'>My Skills </Typography>
			</SectionTitle>

			<SkillsContainer>
				<div className={SkillsClassNames.ReactLogoContainer}>
					<Image src={react} alt='react' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.NextJsLogoContainer}>
					<Image src={next} alt='next' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.SquareImageContainer}>
					<Image src={typescript} alt='typescript' layout='intrinsic'></Image>
				</div>

				<div className={SkillsClassNames.SquareImageContainer}>
					<Image src={materialui} alt='materialui' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.SqlServerLogoContainer}>
					<Image src={sql} alt='sql' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.MySqlLogoContainer}>
					<Image src={mysql} alt='mysql' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.SquareImageContainer}>
					<Image src={github} alt='github' layout='fill'></Image>
				</div>

				<div className={SkillsClassNames.PowerBiContainer}>
					<div className={SkillsClassNames.SquareImageContainer}>
						<Image src={powerbi} alt='powerbi' layout='fill'></Image>
					</div>

					<Typography variant='h4'>Power BI </Typography>
				</div>
			</SkillsContainer>
		</>
	);
};
