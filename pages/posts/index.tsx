import Link from "next/link";
import Heading from "../../components/Heading";
import Head from "next/head";

//функция для асинхронного запроса
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {posts: data},
    }
};

const Posts = ({ posts }) => {
    return (
      <div>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading text="Posts List:" tag=""/>
        <ul>
          {posts && posts.map(({ id, title }) => (   
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>       
          ))}
        </ul>
      </div>
    );
};

export default Posts;