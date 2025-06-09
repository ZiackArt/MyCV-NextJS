import { File } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6 italic">
        Bienvenue sur My<span className="text-primary">CV</span>
      </h1>
      <p className="text-xl mb-8">Créez votre CV professionnel en quelques clics</p>
      <Link href="/create-cv" className="btn btn-primary text-bold btn-lg">
        Commencer
        <File />
      </Link>
    </main>
  );
}
