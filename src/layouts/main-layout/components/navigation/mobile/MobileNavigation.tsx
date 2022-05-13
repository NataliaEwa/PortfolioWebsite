import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useCallback, useState } from 'react';
import { MobileNavigationClassNames, MobileNavigationContainer } from './MobileNavigation.styles';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SchoolIcon from '@mui/icons-material/School';
import DvrIcon from '@mui/icons-material/Dvr';
import PhoneIcon from '@mui/icons-material/Phone';

interface MobileNavigationProps {
	scrollPosition: number;
}

export default function MobileNavigation({ scrollPosition }: MobileNavigationProps) {
	const [value, setValue] = useState('about');

	const handleChange = (_: any, newValue: string) => {
		setValue(newValue);
	};

	const scrollToId = useCallback((id: string) => {
		let el = document.getElementById(id);
		el && window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
	}, []);

	return (
		<MobileNavigationContainer scrollPosition={scrollPosition}>
			<div className={MobileNavigationClassNames.Border} />

			<BottomNavigation className={MobileNavigationClassNames.Transparent} showLabels value={value} onChange={handleChange}>
				<BottomNavigationAction
					label='About'
					value='about'
					icon={<AutoAwesomeIcon />}
					onClick={() => {
						scrollToId('about-me');
					}}
				/>
				<BottomNavigationAction
					label='Skills'
					value='experience'
					icon={<SchoolIcon />}
					onClick={() => {
						scrollToId('skills');
					}}
				/>
				<BottomNavigationAction
					label='Experience'
					value='work'
					icon={<DvrIcon />}
					onClick={() => {
						scrollToId('experience');
					}}
				/>
				<BottomNavigationAction
					label='Contact'
					value='contact'
					icon={<PhoneIcon />}
					onClick={() => {
						scrollToId('contact');
					}}
				/>
			</BottomNavigation>
		</MobileNavigationContainer>
	);
}
