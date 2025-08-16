
import Image from "next/image";

// see readme.md

export default async function Home() {
  // let data = await fetch('https://api.vercel.app/blog', {cache: 'no-store'});
  let data = await fetch('https://api.vercel.app/blog', {next: { revalidate: 3600 }});
  let posts = await data.json()
  return (
    <>
    <ul>
 {    posts.map((post) => (
      <li key={post.id}>{post.title}</li>
        ))}
        </ul>
  </>);
}
// export const dynamic = 'force-dynamic';
