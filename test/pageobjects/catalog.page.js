import Page from './page.js';

class CatalogPage extends Page {
    open() {
        return super.open('inventory.html');
    }

    get cartIcon() {
        return $('#shopping_cart_container');
    }

    get inventoryContainer() {
        return $('#inventory_container');
    }

    async validateOnPage() {
        await this.inventoryContainer.waitForDisplayed({ timeout: 5000 });
        await expect(this.inventoryContainer).toBeDisplayed();

        await this.cartIcon.waitForDisplayed({ timeout: 5000 });
        await expect(this.cartIcon).toBeDisplayed();
    }

    get catalogItems() {
        return $$('.inventory_item');
    }

    async addToCartFromCatalog(index) {
        const item = this.catalogItems[index];
        const addToCartButton = await item.$('.btn_inventory');
        await addToCartButton.click();
    }
}

export default new CatalogPage();
