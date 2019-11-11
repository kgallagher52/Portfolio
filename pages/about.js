import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const About = ({ user }) => {
	return (
		<Layout title="About Me">
			<p>{user.name}</p>
			<p>Bio: {user.bio}</p>
			<p>
				I am an extroverted person. I am always up for a new challenge, and it is the best way to grow. I
				graduated with my bachelors from Dixie State University, in Computer Information Technology, with an
				emphasis in Web Development. I am eager to learn and improve myself as a human. If you are not
				struggling, you are not learning.
			</p>

			<img src={user.avatar_url} alt="keaton avatar" height="200px" />
			<style jsx>
				{`
					p {
						width: 80%;
					}
				`}
			</style>
		</Layout>
	);
};

About.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/kgallagher52');
	const data = await res.json();
	return { user: data };
};
export default About;
