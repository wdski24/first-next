import Link from 'next/link';
import styles from './page.module.css';
import Forms from './components/Forms/Forms';
import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Startpage</h1>
        <HeadingAndButton heading='Heading' text='Text' buttonText='button' />
        {/*https://nextjs.org/docs/app/getting-started/linking-and-navigating*/}
        <Link href='/impressum'>Impressum</Link>

        <Forms />
      </main>
    </div>
  );
}
