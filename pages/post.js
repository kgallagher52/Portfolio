//REMOVE

import Layout from '../components/Layout';

const Post = ({url}) => {
	return (
		<Layout title={url.query.title}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi laboriosam ducimus
				debitis ut, labore eius cum temporibus ea ad fuga enim. Quibusdam totam doloremque dolor nemo hic
				debitis quis.
			</p>
		</Layout>
	);
};

export default Post

