import { redirect } from 'next/navigation';
import { getSession, logout } from '../../action';
import Navbar from '../../components/navbar/navbar';
import "./global.css";
import question_box from '@/app/components/question_box/question_box';

export default async function exam() {

    const session = await getSession();
    if (!session.isLoggedin) {
        redirect('/')
    }

    return (
        <div>
            <Navbar />

            <question_box />

            <div className='button_container'>
                {   
                    session.isLoggedin &&
                    <form action={logout}>
                        <button className='button'>
                            Submit
                        </button>
                    </form>
                }
            </div>
    


        </div>
    );

}