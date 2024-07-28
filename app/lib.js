

let sessionData = {
    userName: null,
    isLoggedin: null
};

export const defaultSession = {
    isLoggedin: false
}

export const sessionOptions = {
    password: process.env.SECRET_KEY,
    cookieName: "my-session",
    cookieOptions:{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
}

