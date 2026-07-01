import test, { Page, expect } from "@playwright/test";
import {productSelectorPage} from "../page/productSelectionPage"
import testData from "../testdata/product.json"

type ProductData = 
{
    firstProduct : string
    Product_10_90_Count : number
    Product_14_90_Count : number
    Product_Count1 : number
    SizeS : string
    CardQuantity : number
    AfterCartRemoveMessage : string
    SfirstCartTotalAmount : string
}

type AllProduct1090 =
{
    Count1090Product:  number
    verifyIconCount1090: number
    TotalAmount1090 : string
    FistProduct1090: string
    SecondProduct1090: string
    ThirdProduct1090: string
    FourthProduct1090: string
}

type AllProduct1490 = 
{
    Count1490Product: number
    TotalAmount1490: string
    FistProduct1490: string
    SecondProduct1490: string
    FirstProductAmount1490: string
    SecondProductAmount1490: string
}

type ProductSelectionMorXL = 
{
    ProductCount : string
    IconCoutMXL: number
    ValidateProductSizeXL : string
    ValidateProductSizeM : string
    TotalAmountMXL : string
}

type UpdateCartQuantityXL = 
{
    verifyXLProductQuantity :  string
    UpdatedTotalAmountMXL : string
}

export class productSelectorAction 
{
    private readonly productSelectorPages : productSelectorPage;

    constructor(page:Page)
    {
        this.productSelectorPages = new productSelectorPage(page);
    }

    async productValidation(testData:ProductData)
    {
        // verify 1st product Identify products priced $10.90
        await expect(this.productSelectorPages.productVisible).toHaveText(testData.firstProduct)
        // verify products priced $10.90 count is 4
        await expect(this.productSelectorPages.countProduct).toHaveCount(testData.Product_10_90_Count)
        // verify products priced $14.90 count is 2
        await expect(this.productSelectorPages.productSecond).toHaveCount(testData.Product_14_90_Count)
        
    }

    async ProductSelectionSize_S(testData:ProductData)
    {
        // select size S
        await this.productSelectorPages.selectSizeS.click();
        // verify products priced $10.90
        await expect(this.productSelectorPages.productVisible).toHaveText(testData.firstProduct)
        // click Add to Cart button
        await this.productSelectorPages.AddToCartButton.click();
        // verify count 1 after add to cart
        await expect(this.productSelectorPages.count1ST).toHaveCount(testData.Product_Count1)
        // verify product size S
        await expect(this.productSelectorPages.sizeS).toHaveText(testData.SizeS)
        // verify Card Quantity 1
        await expect(this.productSelectorPages.cardQuantity).toHaveCount(testData.CardQuantity)
        // Verify total Amount
        await expect(this.productSelectorPages.totalAmount).toHaveText(testData.SfirstCartTotalAmount)
        // Remover the Cart
        await this.productSelectorPages.removeCart.click();
        // verify Message After cart remove
        await expect(this.productSelectorPages.afterCartRemoveMessage).toHaveText(testData.AfterCartRemoveMessage)

    }

    async selectAll_1090_Product(testData:AllProduct1090)
    {
        await expect(this.productSelectorPages.all1090Product).toHaveCount(testData.Count1090Product)
        const totalCount = await this.productSelectorPages.all1090Product.count()
        console.log(totalCount)
        
        const count = await this.productSelectorPages.AddToCartButtonAll1090.count();
        console.log(`Total 10.90 products: ${count}`);

        for (let i = 0; i < count; i++)
        {
            await this.productSelectorPages.AddToCartButtonAll1090.nth(i).click();
            await this.productSelectorPages.cancel.waitFor({ state: 'visible' });
            await this.productSelectorPages.cancel.click();
        }

        // verify icon count is 4 after add all the product which amount is 10.90
        // await this.productSelectorPages.verifyIconCount1090.waitFor({ state: 'visible' });
        await this.productSelectorPages.verifyIconCount1090.click()

        // Verify all product should be added successfully which amount is 10.90
        await expect(this.productSelectorPages.fistProduct1090).toHaveText(testData.FistProduct1090)
        await expect(this.productSelectorPages.secondProduct1090).toHaveText(testData.SecondProduct1090)
        await expect(this.productSelectorPages.thirdProduct1090).toHaveText(testData.ThirdProduct1090)
        await expect(this.productSelectorPages.fourthProduct1090).toHaveText(testData.FourthProduct1090)


        // verify total amount of added all the product which amount is 10.90
        await expect(this.productSelectorPages.totalAmount1090).toHaveText(testData.TotalAmount1090)
        
    }

    async selectAll_1490_Product(testData:AllProduct1490)
    {
        await expect(this.productSelectorPages.all1490Product).toHaveCount(testData.Count1490Product)
        const totalCount = await this.productSelectorPages.all1490Product.count()
        console.log("Total 14.90 products:",totalCount)

        const count = await this.productSelectorPages.AddToCartButtonAll1490.count();
        console.log(`Total 14.90 products: ${count}`);

        for (let i = 0; i < count; i++)
        {
            await this.productSelectorPages.AddToCartButtonAll1490.nth(i).click();
            await this.productSelectorPages.cancel.waitFor({ state: 'visible' });
            await this.productSelectorPages.cancel.click();
        }
        // verify icon count is 2 after add all the product which amount is 14.90
        await this.productSelectorPages.verifyIconCount1490.click()

        // Verify all product should be added successfully which amount is 10.90
        await expect(this.productSelectorPages.fistProduct1490).toHaveText(testData.FistProduct1490)
        await expect(this.productSelectorPages.secondProduct1490).toHaveText(testData.SecondProduct1490)

        // verify all product amount should be added successfully which amount is 14.90
        await expect(this.productSelectorPages.firstProductAmount1490).toHaveText(testData.FirstProductAmount1490)

        // verify total amount of added all the product which amount is 14.90
        await expect(this.productSelectorPages.totalAmount1490).toHaveText(testData.TotalAmount1490)
    }

    async filterProduct_M_XL(testData:ProductSelectionMorXL)
    {
        // select product size M and XL
        await this.productSelectorPages.selectSizeM.click()
        await this.productSelectorPages.selectSizeXL.click()

        // verify total product count after filter M and XL
        await expect(this.productSelectorPages.totalProductCount).toHaveText(testData.ProductCount)
        const totalCount = await this.productSelectorPages.totalProductCount.count()
        console.log("Total Product Count after filter M and XL:",totalCount)

        // click Add to Cart button for size M
        await this.productSelectorPages.addToCartButtonM.click()

        // click Add to Cart button for size XL
        await this.productSelectorPages.addToCartButtonXL.click()
       
        //click the icon to verify the product size M and XL
        await this.productSelectorPages.page.waitForTimeout(3000)
        await this.productSelectorPages.iconCoutMXL.click()

        // verify product size XL
        await expect(this.productSelectorPages.validateProductSizeXL).toHaveText(testData.ValidateProductSizeXL)
        // verify product size M
        await expect(this.productSelectorPages.validateProductSizeM).toHaveText(testData.ValidateProductSizeM)
        // verify total amount
        await expect(this.productSelectorPages.totalAmountMXL).toHaveText(testData.TotalAmountMXL)
    }
       
    async updateCartQuantiy(testData:UpdateCartQuantityXL)
    {
        // select product size M and XL
        await this.productSelectorPages.selectSizeM.click()
        await this.productSelectorPages.selectSizeXL.click()

        // click Add to Cart button for size M
        await this.productSelectorPages.addToCartButtonM.click()

        // click Add to Cart button for size XL
        await this.productSelectorPages.addToCartButtonXL.click()
       
        //click the icon to verify the product size M and XL
        await this.productSelectorPages.page.waitForTimeout(5000)
        await this.productSelectorPages.iconCoutMXL.click()

        // update XL product quantity to 2
        await this.productSelectorPages.updateCartQuantityXL.click();
        // verify product quantity should be 2 for XL product
        await this.productSelectorPages.page.waitForTimeout(5000)
        await expect(this.productSelectorPages.verifyXLProductQuantity).toBeVisible()
        const updatedQuantity = await this.productSelectorPages.verifyXLProductQuantity.textContent();
        console.log("Updated XL Product Quantity:", updatedQuantity);

        // verify total amount
        await expect(this.productSelectorPages.updatedTotalAmountMXL).toHaveText(testData.UpdatedTotalAmountMXL)
    }

    async checkoutProduct()
    {
        // select product size M and XL
        await this.productSelectorPages.selectSizeM.click()
        await this.productSelectorPages.selectSizeXL.click()

        // click Add to Cart button for size M
        await this.productSelectorPages.addToCartButtonM.click()

        // click Add to Cart button for size XL
        await this.productSelectorPages.addToCartButtonXL.click()
       
        //click the icon to verify the product size M and XL
        await this.productSelectorPages.page.waitForTimeout(5000)
        await this.productSelectorPages.iconCoutMXL.click()

        // handle the dialog event and accept it       
        await this.productSelectorPages.page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
        });
    
        // click checkout button
        await this.productSelectorPages.checkoutButton.click();    

    }
}



