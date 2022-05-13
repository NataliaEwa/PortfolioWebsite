import Head from 'next/head';
import { AboutMe } from './content/AboutMe/AboutMe';
import { ContactMe } from './content/Contact/ContactMe';
import { Introduction } from './content/Introduction/Introduction';
import { MyWork } from './content/MyWork/MyWork';
import { Skills } from './content/Skills/Skills';
import { HomeContainer } from './Home.styles';

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Natalia Kamieniak - Portfolio</title>
				<meta
					name='description'
					content={`Hi, my name is
Natalia Kamieniak
I am Frontend Developer
I'm a software engineer passionate about building elegant and modern websites.`}
				/>
			</Head>
			
			<HomeContainer>
				<Introduction />
				<AboutMe />
				<Skills />
				<MyWork />
				<ContactMe />
			</HomeContainer>
		</>
	);
}
