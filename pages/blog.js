
//REMOVE
import Layout from '../components/Layout';
import Link from 'next/link';
import Post from './post';


const PostLink = ({ title }) => (
  <li>
  <Link href={`/post?title=${title}`}>
    <a>{title}</a>
  </Link>
</li>
)


 const Blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
       <PostLink title="React"/>
       <PostLink title="Next"/>
       <PostLink title="HTML"/>
       <PostLink title="CSS"/>
       <PostLink title="Javascript"/>

      </ul>
    </Layout>
  )
}
export default Blog