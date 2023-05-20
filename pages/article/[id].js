import Head from 'next/head';
import { articles } from '../../db/articles';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const article_id = router.query.id;
  const articlePosition = articles.findIndex(
    (article) => article.id == article_id
  );

  return <p>{articles[articlePosition]?.title}</p>;
}
