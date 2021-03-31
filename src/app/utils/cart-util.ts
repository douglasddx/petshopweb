import { CartItem } from "../models/cart-item-model";
import { Cart } from "../models/cart-model";

export class CartUtil {
    public static get(): Cart {
        // recupera do LocalStorage
        const data = localStorage.getItem('petshopcart');

        // caso não haja dados, retorna um novo carrinho
        if (!data)
            return new Cart();

        // caso haja dados, retorna o carrinho
        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string) {
        // obtém o carrinho
        let cart = this.get();

        // gera o novo item
        const item = new CartItem(id, product, quantity, price, image);

        // adiciona o item ao carrinho
        cart.items.push(item);

        // salva no LocalStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        // salva no LocalStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }

}