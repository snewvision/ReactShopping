import {Page, Locator} from "@playwright/test"

export class productSelectorPage
{
    readonly page : Page;
    readonly productVisible : Locator;
    readonly productFirst : Locator // 1st product Identify products priced $10.90
    readonly countProduct : Locator // verify products priced $10.90 count is 4

    readonly productSecond : Locator // 2nd product products priced $14.90 count is 2

    //click size S add a product which price is $10.90
    readonly selectSizeS : Locator
    readonly AddToCartButton : Locator
    readonly count1ST : Locator
    readonly sizeS : Locator
    readonly cardQuantity : Locator
    readonly removeCart : Locator
    readonly totalAmount : Locator
    readonly afterCartRemoveMessage : Locator

    //Select All 10.90 Product and Add To Cart
    readonly all1090Product : Locator
    readonly AddToCartButtonAll1090 : Locator
    readonly cancel : Locator
    readonly verifyIconCount1090 : Locator
    readonly totalAmount1090 : Locator
    readonly fistProduct1090: Locator
    readonly secondProduct1090: Locator
    readonly thirdProduct1090: Locator
    readonly fourthProduct1090 : Locator


    //Select All 14.90 Product and Add To Cart
    readonly all1490Product  : Locator
    readonly AddToCartButtonAll1490 : Locator
    readonly verifyIconCount1490: Locator
    readonly totalAmount1490: Locator
    readonly fistProduct1490 : Locator
    readonly secondProduct1490: Locator
    readonly firstProductAmount1490 : Locator
    readonly secondProductAmount1490 : Locator


    // Filter M , XL
    readonly selectSizeM : Locator
    readonly selectSizeXL : Locator
    readonly totalProductCount : Locator
    readonly addToCartButtonXL : Locator
    readonly addToCartButtonM : Locator 
    readonly iconCoutMXL : Locator
    readonly validateProductSizeXL : Locator
    readonly validateProductSizeM : Locator
    readonly totalAmountMXL : Locator


    // Update cart Quantity
    readonly updateCartQuantityXL : Locator
    readonly verifyXLProductQuantity : Locator
    readonly updatedTotalAmountMXL : Locator

    // checkout
    readonly checkoutButton : Locator


    constructor(page:Page)
    {
        this.page = page;
        this.productVisible = page.locator('//p[text() = "Cropped Stay Groovy off white"]')
        this.productFirst = page.locator('//small[text() = "S"]/parent::p[@class="sc-124al1g-6 ljgnQL"]')
        this.countProduct = page.locator('//b[text() = "10"]/parent::p')
        this.productSecond = page.locator('//b[text() = "14"]/parent::p/span[text() = ".90"]')

        this.selectSizeS = page.locator('//span[text() = "S"]')
        this.AddToCartButton = page.locator('//preceding::p[text() = "Black Batman T-shirt"]/parent::div/button[text() = "Add to cart"]')
        this.count1ST = page.locator('//div[text() = "1"]/parent::div')
        this.sizeS = page.locator('//p[contains(text(), "S |")]')
        this.cardQuantity = page.locator('//p[text() = "1"]')
        this.totalAmount = page.locator('//p[text() = "$ 10.90"]')
        this.removeCart = page.getByRole('button',{name: 'remove product from cart'})
        this.afterCartRemoveMessage = page.locator('//p[text() = "Add some products in the cart "]')

        //Select All 10.90 Product and Add To Cart
        this.all1090Product = page.locator('//span[text()= ".90"]/preceding-sibling::b[text() = "10"]')
        //this.AddToCartButtonAll1090 = page.locator('//span[text() = ".90"]/following::button[text() = "Add to cart"]/preceding::b[text() = "10"]')
        this.AddToCartButtonAll1090 = page.locator("//p[b='10' and span='.90']/parent::div/following-sibling::button")
        this.cancel = page.locator('//span[text() = "X"]')
        this.verifyIconCount1090 = page.locator('//div[text() = "4"]')
        this.totalAmount1090 = page.locator('//p[text() = "$ 43.60"]')
        this.fistProduct1090 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Cropped Stay Groovy off white"]')
        this.secondProduct1090 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Black Batman T-shirt"]')
        this.thirdProduct1090 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Ringer Hall Pass"]')
        this.fourthProduct1090 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Turtles Ninja T-shirt"]')
     
        
        //Select All 14.90 Product and Add To Cart
        this.all1490Product = page.locator('//span[text()= ".90"]/preceding-sibling::b[text() = "14"]')
        this.AddToCartButtonAll1490 = page.locator("//p[b='14' and span='.90']/parent::div/following-sibling::button")
        this.verifyIconCount1490 = page.locator('//div[@class="sc-1h98xa9-2 fGgnoG"]')
        this.fistProduct1490 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Grey T-shirt"]')
        this.secondProduct1490 = page.locator('//parent::div[@class="sc-11uohgb-1 buqxEg"]//p[text() = "Black T-shirt with white stripes"]')
        this.firstProductAmount1490 = page.locator('//button[@title="remove product from cart"]/preceding::p[text() = "$  14.90"]')
        this.secondProductAmount1490 = page.locator('//button[@title="remove product from cart"]/preceding::p[text() = "$  14.90"]')
        this.totalAmount1490 = page.locator('//p[text() = "$ 29.80"]')


        // Filter M , XL
        this.selectSizeM = page.locator('//span[text() = "M"]')
        this.selectSizeXL = page.locator('//span[text() = "XL"]')
        this.totalProductCount = page.locator('//main[@class="sc-ebmerl-4 iliWeY"]')
        this.addToCartButtonXL = page.locator('//parent::div[@class="sc-124al1g-2 ddJZtb"]//button[text() = "Add to cart"]')
        this.addToCartButtonM = page.locator('//parent::div[@class="sc-124al1g-2 keuquD"]//button[text() = "Add to cart"]')
        this.iconCoutMXL = page.locator('//div[@class="sc-1h98xa9-3 VLMSP"]')
        this.validateProductSizeXL = page.locator('//p[text() = "XL | Tony Hawk" and "1"]')
        this.validateProductSizeM = page.locator('//p[text() = "M | Tule" and "1"]')
        this.totalAmountMXL = page.locator('//p[contains(text() ,"$ 55.35")]')


        // Update cart Quantity
        this.updateCartQuantityXL = page.locator('//p[contains(text() , "SUBTOTAL")]/preceding::button[text() = "+"][2]')
        this.verifyXLProductQuantity = page.locator('//p[contains(text() , "XL | Tony Hawk") and "Quantity: " and "2"]')
        this.updatedTotalAmountMXL = page.locator('//p[@class="sc-1h98xa9-9 jzywDV"]')

        //checkout button
        this.checkoutButton = page.locator('//button[text() = "Checkout"]')
    }
}