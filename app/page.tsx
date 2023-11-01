import HomePage from "./(components)/(home)/HomePage";
export default async function Home() {
  return (
    <main className="bg-page flex min-h-screen flex-col items-center justify-between">
      <HomePage />
    </main>
  );
}
