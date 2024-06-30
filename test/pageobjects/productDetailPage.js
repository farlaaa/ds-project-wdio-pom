import Page from './page.js';

class ProductDetailPage extends Page {
    get addToCartButton() {
        return $('.btn_inventory');
    }

    async addToCart() {
        await this.addToCartButton.waitForExist();
        await this.addToCartButton.click();
    }
}

export default new ProductDetailPage();