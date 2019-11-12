
//REMOVE
import Layout from '../components/Layout';
import Link from 'next/link';
import Post from './post';


const PostLink = ({ title, slug }) => (
  <li>
  <Link as={`blog/${slug}`} href={`/post?title=${title}`}>
    <a>{title}</a>
  </Link>
</li>
)


 const Blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
       <PostLink slug="react-post" title="React"/>
       <PostLink slug="next-post" title="Next"/>
       <PostLink slug="html-post" title="HTML"/>
       <PostLink slug="css-post" title="CSS"/>
       <PostLink slug="javascript-post" title="Javascript"/>

      </ul>
    </Layout>
  )
}
export default Blog