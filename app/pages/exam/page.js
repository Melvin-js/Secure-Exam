
import { redirect } from 'next/navigation';
import { getSession, logout } from '../../action';
import Navbar from '../../components/navbar/navbar';
import './global.css';
import QuestionBox from '@/app/components/question_box/question_box';
import FullscreenDialog from '@/app/components/screenHandler/FullscreenDialog';
import FullscreenWrapper from '@/app/components/screenHandler/FullscreenWrapper';
import PageUnloadHandler from '@/app/components/screenHandler/PageUnloadHandler';
import LogoutOnLoad from '@/app/components/screenHandler/LogoutOnLoad';

export default async function Exam() {

  const session = await getSession();
  if (!session.isLoggedin) {
    redirect('/');
  }

  
  return (
    <div> 
      <LogoutOnLoad />
      <FullscreenWrapper session={session} />
      <PageUnloadHandler />
      <Navbar />
      <div className='button_container'>
        {session.isLoggedin && (
          <form action={logout}>
            <button className='button'>
              Submit
            </button>
          </form>
        )}
      </div>
      
      <div className='container'>
        <QuestionBox />
      </div>
    </div>
  );
}
