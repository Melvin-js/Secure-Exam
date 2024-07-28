
import Link from 'next/link';
import { getSession, login, logout } from './action';
import { ClientPageRoot } from 'next/dist/client/components/client-page';
import Navbar from './components/navbar/navbar';
import styles from './page.module.css'
import LoginForm from './components/loginform/loginform.js';
import { redirect } from 'next/navigation';

export default async function Home() {

  const session = await getSession();
  
  if(session.isLoggedin){
    redirect('/pages/exam')
  }

  return (

    <div>
      <Navbar />
      <div className={styles.container}>
 
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

