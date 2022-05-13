export { default } from 'src/compositions/home/Home';

export async function getStaticProps() {
	console.log('server');
	return {
		props: {},

		revalidate: 3600
	};
}
