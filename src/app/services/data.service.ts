import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product-model';
import { Security } from '../utils/security-util';

@Injectable(
    //{providedIn: 'root'}
    // Sem o providedIn: root, fizemos a indicação da injeção em provoders no app.module.ts
)
export class DataService {
    private url = 'http://localhost:3000/v1/';
    constructor(
        private http: HttpClient
    ) { }

    private composeHeaders() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return headers;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}products`);
    }

    authenticate(data: any) {
        return this.http.post<Product[]>(`${this.url}accounts/authenticate`, data);
    }

    refreshToken() {
        return this.http.post<Product[]>(
            `${this.url}accounts/refresh-token`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    create(data: any) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data: any) {
        return this.http.post(`${this.url}/accounts/reset-password`, data)
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data: any) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }

}