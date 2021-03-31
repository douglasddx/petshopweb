import { User } from "../models/user-model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('petshopuser', btoa(data));
        localStorage.setItem('petshoptoken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('petshopuser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('petshoptoken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('petshopuser');
        if (data) {
            const dataDecode = atob(data);
            return JSON.parse(dataDecode);
        } else {
            return new User('', '', '', '');
        }
    }

    public static getToken(): any {
        const data = localStorage.getItem('petshoptoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('petshopuser');
        localStorage.removeItem('petshoptoken');
    }
}