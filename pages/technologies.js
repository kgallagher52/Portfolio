//REMOVE
import Layout from "../components/Layout";
import Link from "next/link";
import Tech from "./tech";
import { getTechData } from "../actions";

const Technologies = ({data}) => {
  return (
    <Layout title="My Technologies">
      <ul>
        {data.map(t => (
          <li key={t.id}>
            <Link as={`/tech${t.id}`} href={`/tech?id=${t.id}`}>
              <a>{t.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            text-decoration: none;
            color: black;
            list-style: none;
            outline: none;
          }
          li,
          a {
            text-decoration: none;
            color: black;
            list-style: none;
            outline: none;
          }
        `}
      </style>
    </Layout>
    
  );
};
Technologies.getInitialProps = async () => {
	const data = await getTechData();
	return {data};
};
export default Technologies;
