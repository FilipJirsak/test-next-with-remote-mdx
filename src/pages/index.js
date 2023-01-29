
export default function Home() {
  return (
    <>
      <h1>Test Next.js s next-mdx-remote</h1>
      <h2>Static pages</h2>
      <ul>
        <li><a href="/posts/test-1">Stránka v MDX s React komponentami</a></li>
        <li><a href="/posts/sub/test">Stránka v MDX z podadresáře</a></li>
      </ul>

      <h2>SSR pages</h2>
      <ul>
        <li><a href="/ssr-posts/test-1">Stránka v MDX s React komponentami</a></li>
        <li><a href="/ssr-posts/test-2">Stránka neexistuje, když se vytvoří, začne ji Next poskytovat</a> (např. přejmenováním test-3.mdx na test-2.mdx)</li>
        <li><a href="/ssr-posts/sub/test">Stránka v MDX z podadresáře</a></li>
      </ul>
    </>
  )
}
