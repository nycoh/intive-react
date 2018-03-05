export default class User {
    name = '';
    surname = '';
    countries = '';
    birthday = '';

    constructor(obj) {
        Object.assign(this, obj);
    }
}
