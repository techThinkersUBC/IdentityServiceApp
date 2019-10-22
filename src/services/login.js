
export const getSessionToken = (appId, name, email, password) => {
    const request = new Request(`http://localhost:4000/sessions/token`, { method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({appId, name, email, password}) });
    return fetch(request);
};
