import PostList from "@/components/PostsList";
import Image from "next/image";

const articles = [
  {
    title: "Статья",
    text: "dfhduf ddihfidhf d difhidh idf id df dhifhdifh fhidh f hdi hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 2 ",
    text: "hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 3",
    text: "dfhduf ddihfidhf d difhidh idf id df dhifhdifh  dfhduf ddihfidhf d difhidh idf id df dhifhdifh f fhidh f hdi hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 4",
    text: "dfhduf ddihfidhf d difhidh idf id df dhifhdifh fhidh f hdi hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 5 ",
    text: "hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 6",
    text: "dfhduf ddihfidhf d difhidh idf id df dfhduf ddihfidhf d difhidh idf id df dhifhdifh  dfhduf ddihfidhf d difhidh idf id dhifhdifh  dfhduf ddihfidhf d difhidh idf id df dhifhdifh f fhidh f hdi hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
  {
    title: "Статья 7",
    text: "dfhduf ddihfidhf d difhidh idf id df dhifhdifh fhidh f hdi hdi hfdi hfi hfidhfidhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf idhf",
  },
];

export default function Home() {
  return (
    <main className=" bg-zinc-50 flex min-h-screen flex-col items-center justify-between">
      <PostList articles={articles} />
    </main>
  );
}
