import Http from './http';


export default class UserService {
    static async fetchCountries() {
        const countries = await Http.get('https://restcountries.eu/rest/v2/all');
        return (countries);
    }

    static async save(user) {
        return {user};
    }
}
