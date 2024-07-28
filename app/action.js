'use server'

import { getIronSession } from "iron-session"
import { sessionOptions, sessionData, defaultSession } from "./lib"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';


export const getSession = async () => {

    const session = await getIronSession(cookies(), sessionOptions)

    if(!session.isLoggedin){
        session.isLoggedin = defaultSession.isLoggedin;
    }
    return session;
}

export const login = async (prevState, FormData) => {
    const session = await getIronSession(cookies(), sessionOptions);
    session.isLoggedin = true;
    if(FormData.get('username') !== 'Melvin')
        return { error: "Wrong Credentials! Try: Melvin" };

    await session.save();
    redirect('/pages/exam');
  };

export const logout = async () => {
    const session = await getSession()
    session.destroy();
    redirect('/')
}