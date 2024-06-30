import cartPage from '../pageobjects/cart.page.js';
import catalogPage from '../pageobjects/catalog.page.js';
import loginPage from '../pageobjects/login.page.js';
import productDetailPage from '../pageobjects/productDetailPage.js';

describe('Add Items to Cart', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login(process.env.sd_username, process.env.sd_password);
        await catalogPage.validateOnPage();
    });

    after(async () => {
        await browser.pause(5000);
    });

    it('add item to the cart from catalog page', async () => {
        await catalogPage.addToCartFromCatalog(0);
        expect(await cartPage.getCartBadgeText()).toEqual('1');
    });

    it('add item to the cart from product detail page', async () => {
        await catalogPage.catalogItems[1].$('.inventory_item_img a').click();
        await browser.pause(3000);

        await productDetailPage.addToCart();

        expect(await cartPage.getCartBadgeText()).toEqual('2');

        await cartPage.openCart();
        expect(await cartPage.getCartItemsCount()).toEqual(2);
    });
});
