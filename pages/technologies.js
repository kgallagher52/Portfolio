//REMOVE
import Layout from "../components/Layout";
import Link from "next/link";
import Tech from "./tech";
import { getTechData } from "../actions";

const Technologies = ({ data }) => {
  return (
    <Layout title="technologies">
      <div className="outer-container">
        {data.map(t => (
          <div className="container" key={t.slug}>
            <Link as={`/tech${t.slug}`} href={`/tech?slug=${t.slug}`}>
              <a>{t.title}</a>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .outer-container {
            display: flex;
            justify-content: center;
            width: 100%;
            flex-flow: row wrap;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 120px;
            height: 100px;
            margin: 12px;
            -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition:ease-in-out 0.4s;
            
          }
          .container:hover {
            background: lightgray;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
          }
          .container a {
            font-weight:900;
            font-size:18px;
            text-decoration: none;
            color: black;
            padding:8px;
          }
        `}
      </style>
    </Layout>
  );
};
Technologies.getInitialProps = async () => {
  const data = await getTechData();
  return { data };
};
export default Technologies;
