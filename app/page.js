// Server Component (default). Accepts searchParams.
export default async function Page({ params, searchParams }) {
  const name = searchParams?.name || "World";
  return (
    <main style={{ padding: 20 }}>
      <h1>Hello {name}!</h1>
      <p>Try query params:</p>
      <ul>
        <li><code>/?name=Dio</code></li>
      </ul>
    </main>
  );
}
