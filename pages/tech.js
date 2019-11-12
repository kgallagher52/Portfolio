//REMOVE

import Layout from "../components/Layout";
import { getTechBySlug } from "../actions";
import Link from "next/link";

const Tech = ({ technology }) => {
  return (

    <Layout title={technology.title}>
      <img src={technology.image} href={technology.title} />
      <a href={technology.resources.url}>{technology.resources.title}</a>
      <p>{technology.def}</p>

      <Link href="/technologies/" as="/technologies">
        <a id="backLink">Go Back</a>
      </Link>
      <style jsx>
        {`
          img {
            max-width:240px;
            max-height:135px;
          }
         
          p{
            width:80%;
            text-align:center;
            font-size:2rem;
          }
          #backLink {
            text-decoration:none;
          }
          a {
            color:black;
            font-weight:900;
            text-transform:uppercase;
            padding-top:8px;
          }
         
          a:hover {
            color:gray;
            text-decoration:none;
          }
          `}
      </style>
    </Layout>
  );
};

Tech.getInitialProps = async context => {
  const { slug } = context.query;
  var technology = await getTechBySlug(slug);
  return { technology };
};

export default Tech;
