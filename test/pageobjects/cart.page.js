import Page from './page.js';

class CartPage extends Page {
    get cartBadge() {
        return $('.shopping_cart_badge');
    }

    async getCartBadgeText() {
        return this.cartBadge.getText();
    }

    get cartOpenButton() {
        return $('.shopping_cart_link');
    }

    async openCart() {
        await this.cartOpenButton.waitForExist();
        await this.cartOpenButton.click();
    }

    async getCartItemsCount() {
        const cartItems = await $$('.cart_item');
        return cartItems.length;
    }
}

export default new CartPage();
