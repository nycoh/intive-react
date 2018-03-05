/* global fetch */
export default class Http {
    static async get(url) {
        const response = await fetch(url, {
            credentials: 'same-origin',
            headers: {
            }
        });
        return response.json();
    }
}
