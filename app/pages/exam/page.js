
import { redirect } from 'next/navigation';
import { getSession, logout } from '../../action';
import Navbar from '../../components/navbar/navbar';
import './global.css';
import QuestionBox from '@/app/components/question_box/question_box';


export default async function Exam() {
  const session = await getSession();
  if (!session.isLoggedin) {
    redirect('/');
  }

  
  return (
    <div> 
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
