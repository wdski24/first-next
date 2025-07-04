import Link from 'next/link';
import styles from './page.module.css';
import Forms from './components/Forms/Forms';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Startpage</h1>
        {/*https://nextjs.org/docs/app/getting-started/linking-and-navigating*/}
        <Link href='/impressum'>Impressum</Link>
        <Forms />
      </main>
    </div>
  );
}
