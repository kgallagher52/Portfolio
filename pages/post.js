//REMOVE

import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => {
	return (
		<Layout title={router.query.title}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi laboriosam ducimus
				debitis ut, labore eius cum temporibus ea ad fuga enim. Quibusdam totam doloremque dolor nemo hic
				debitis quis.
			</p>
		</Layout>
	);
};

export default withRouter(Post)

