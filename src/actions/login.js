export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_NAME = "SET_NAME";

export const setEmail = (email = "") => ({
    type: SET_EMAIL,
    email,
});

export const setPassword = (password = "") => ({
    type: SET_PASSWORD,
    password,
});

export const setName = (name = "") => ({
   type: SET_NAME,
   name,
});

