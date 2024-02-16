import Post from "./Post";

interface IProps {
  articles: Array<any>;
}

export default function PostList({ articles }: IProps) {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 py-10">
      {articles.map(article=><Post key={article.title} article={article} />)}
    </section>
  );
}
