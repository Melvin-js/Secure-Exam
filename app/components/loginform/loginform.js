'use client'

import { getSession, login } from "@/app/action"
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'


export default function LoginForm() {

    const [state, formAction] = useFormState(login, undefined);

    const handleFullscreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    };
    
    
    return (
        <div className={styles.body}>

            {true &&
                <form className={styles.container} action={formAction}>
                    <h1>Welcome</h1>
                    <input className={styles.inputField} type="text" name='username' placeholder='Name'></input>
                    <button className={styles.button} onClick={handleFullscreen} type="submit">Proceed to Exam</button>
                    <div>
                        {state?.error && <p className={styles.error}>{state.error}</p>}
                    </div>
                </form>
            }

        </div>
    )
}

