
export const getPermissions = (appId) => {
    const request = new Request(`http://localhost:4000/permissions/${appId}`, { method: 'GET' });
    return fetch(request);
};
