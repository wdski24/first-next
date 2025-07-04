//Module/Page styles defined in file
import Link from 'next/link';
import styles from './page.module.css';

//Naming Convention: Function Name = Folder Name = Route Name
export default function Impressum() {
  return (
    <div>
      <main>
        <h1>Impressum</h1>
        {/*https://nextjs.org/docs/app/getting-started/linking-and-navigating*/}
        <Link href='/'>Startseite</Link>
      </main>
    </div>
  );
}
