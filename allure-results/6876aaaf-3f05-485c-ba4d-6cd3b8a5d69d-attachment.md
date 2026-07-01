# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.ts >> TC_03 Validate all Product Selection with Price $10.90, Add to Cart, and Verify Cart Details
- Location: tests\product.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//p[b=\'10\' and span=\'.90\']/parent::div/following-sibling::button').first()
    - locator resolved to <button tabindex="-1" class="sc-124al1g-0 jCsgpZ">Add to cart</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "View source on Github":
    - /url: https://github.com/jeffersonRibeiro/react-shopping-cart
    - img [ref=e4] [cursor=pointer]
  - generic [ref=e8]:
    - img "Jeremy Akeze - Doghouse IT Recruitment" [ref=e10]
    - generic [ref=e11]:
      - heading "Work in the Netherlands" [level=4] [ref=e12]: Work in the Netherlands
      - paragraph [ref=e14]:
        - text: Hi! I'm Jeremy Akeze from Doghouse IT Recruitment and I'm looking for skilled Software Engineers like you. If you wish to move abroad,
        - link "follow me on Linkedin." [ref=e15] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/jeremy-akeze-9542b396/
  - main [ref=e16]:
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Sizes:" [level=4] [ref=e19]
        - generic [ref=e21] [cursor=pointer]:
          - checkbox "XS" [ref=e22]
          - generic [ref=e23]: XS
        - generic [ref=e25] [cursor=pointer]:
          - checkbox "S" [ref=e26]
          - generic [ref=e27]: S
        - generic [ref=e29] [cursor=pointer]:
          - checkbox "M" [ref=e30]
          - generic [ref=e31]: M
        - generic [ref=e33] [cursor=pointer]:
          - checkbox "ML" [ref=e34]
          - generic [ref=e35]: ML
        - generic [ref=e37] [cursor=pointer]:
          - checkbox "L" [ref=e38]
          - generic [ref=e39]: L
        - generic [ref=e41] [cursor=pointer]:
          - checkbox "XL" [ref=e42]
          - generic [ref=e43]: XL
        - generic [ref=e45] [cursor=pointer]:
          - checkbox "XXL" [ref=e46]
          - generic [ref=e47]: XXL
      - generic [ref=e48]:
        - paragraph [ref=e49]: Leave a star on Github if this repository was useful :)
        - link "Star jeffersonRibeiro/react-shopping-cart on GitHub" [ref=e50] [cursor=pointer]:
          - /url: https://github.com/jeffersonRibeiro/react-shopping-cart
          - text: Star
    - main [ref=e51]:
      - main [ref=e52]:
        - paragraph [ref=e53]: 16 Product(s) found
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: Free shipping
          - paragraph [ref=e58]: Cropped Stay Groovy off white
          - generic [ref=e59]:
            - paragraph [ref=e60]: $10.90
            - paragraph [ref=e61]:
              - generic [ref=e62]: or 9 x
              - generic [ref=e63]: $1.21
          - button "Add to cart" [ref=e64] [cursor=pointer]
        - generic [ref=e65]:
          - generic [ref=e66]: Free shipping
          - paragraph [ref=e68]: Basic Cactus White T-shirt
          - generic [ref=e69]:
            - paragraph [ref=e70]: $13.25
            - paragraph [ref=e71]:
              - generic [ref=e72]: or 3 x
              - generic [ref=e73]: $4.42
          - button "Add to cart" [ref=e74] [cursor=pointer]
        - generic [ref=e75]:
          - paragraph [ref=e77]: Skater Black Sweatshirt
          - generic [ref=e78]:
            - paragraph [ref=e79]: $25.90
            - paragraph [ref=e80]:
              - generic [ref=e81]: or 12 x
              - generic [ref=e82]: $2.16
          - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - generic [ref=e85]: Free shipping
          - paragraph [ref=e87]: Black Tule Oversized
          - generic [ref=e88]:
            - paragraph [ref=e89]: $29.45
            - paragraph [ref=e90]:
              - generic [ref=e91]: or 5 x
              - generic [ref=e92]: $5.89
          - button "Add to cart" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - generic [ref=e95]: Free shipping
          - paragraph [ref=e97]: Black Batman T-shirt
          - generic [ref=e98]:
            - paragraph [ref=e99]: $10.90
            - paragraph [ref=e100]:
              - generic [ref=e101]: or 9 x
              - generic [ref=e102]: $1.21
          - button "Add to cart" [ref=e103] [cursor=pointer]
        - generic [ref=e104]:
          - generic [ref=e105]: Free shipping
          - paragraph [ref=e107]: Blue T-Shirt
          - generic [ref=e108]:
            - paragraph [ref=e109]: $9.00
            - paragraph [ref=e110]:
              - generic [ref=e111]: or 3 x
              - generic [ref=e112]: $3.00
          - button "Add to cart" [ref=e113] [cursor=pointer]
        - generic [ref=e114]:
          - generic [ref=e115]: Free shipping
          - paragraph [ref=e117]: Loose Black T-shirt
          - generic [ref=e118]:
            - paragraph [ref=e119]: $14.00
            - paragraph [ref=e120]:
              - generic [ref=e121]: or 5 x
              - generic [ref=e122]: $2.80
          - button "Add to cart" [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - generic [ref=e125]: Free shipping
          - paragraph [ref=e127]: Ringer Hall Pass
          - generic [ref=e128]:
            - paragraph [ref=e129]: $10.90
            - paragraph [ref=e130]:
              - generic [ref=e131]: or 9 x
              - generic [ref=e132]: $1.21
          - button "Add to cart" [ref=e133] [cursor=pointer]
        - generic [ref=e134]:
          - generic [ref=e135]: Free shipping
          - paragraph [ref=e137]: Grey T-shirt
          - generic [ref=e138]:
            - paragraph [ref=e139]: $14.90
            - paragraph [ref=e140]:
              - generic [ref=e141]: or 7 x
              - generic [ref=e142]: $2.13
          - button "Add to cart" [ref=e143] [cursor=pointer]
        - generic [ref=e144]:
          - generic [ref=e145]: Free shipping
          - paragraph [ref=e147]: Black T-shirt with white stripes
          - generic [ref=e148]:
            - paragraph [ref=e149]: $14.90
            - paragraph [ref=e150]:
              - generic [ref=e151]: or 7 x
              - generic [ref=e152]: $2.13
          - button "Add to cart" [ref=e153] [cursor=pointer]
        - generic [ref=e154]:
          - paragraph [ref=e156]: Turtles Ninja T-shirt
          - generic [ref=e157]:
            - paragraph [ref=e158]: $10.90
            - paragraph [ref=e159]:
              - generic [ref=e160]: or 9 x
              - generic [ref=e161]: $1.21
          - button "Add to cart" [ref=e162] [cursor=pointer]
        - generic [ref=e163]:
          - generic [ref=e164]: Free shipping
          - paragraph [ref=e166]: Slim black T-shirt
          - paragraph [ref=e168]: $49.90
          - button "Add to cart" [ref=e169] [cursor=pointer]
        - generic [ref=e170]:
          - generic [ref=e171]: Free shipping
          - paragraph [ref=e173]: Blue Sweatshirt
          - generic [ref=e174]:
            - paragraph [ref=e175]: $22.50
            - paragraph [ref=e176]:
              - generic [ref=e177]: or 4 x
              - generic [ref=e178]: $5.63
          - button "Add to cart" [ref=e179] [cursor=pointer]
        - generic [ref=e180]:
          - paragraph [ref=e182]: White T-shirt Gucci
          - generic [ref=e183]:
            - paragraph [ref=e184]: $18.70
            - paragraph [ref=e185]:
              - generic [ref=e186]: or 4 x
              - generic [ref=e187]: $4.67
          - button "Add to cart" [ref=e188] [cursor=pointer]
        - generic [ref=e189]:
          - generic [ref=e190]: Free shipping
          - paragraph [ref=e192]: Tropical Wine T-shirt
          - generic [ref=e193]:
            - paragraph [ref=e194]: $134.90
            - paragraph [ref=e195]:
              - generic [ref=e196]: or 5 x
              - generic [ref=e197]: $26.98
          - button "Add to cart" [ref=e198] [cursor=pointer]
        - generic [ref=e199]:
          - generic [ref=e200]: Free shipping
          - paragraph [ref=e202]: Marine Blue T-shirt
          - generic [ref=e203]:
            - paragraph [ref=e204]: $49.00
            - paragraph [ref=e205]:
              - generic [ref=e206]: or 9 x
              - generic [ref=e207]: $5.44
          - button "Add to cart" [ref=e208] [cursor=pointer]
  - button "0" [ref=e210] [cursor=pointer]:
    - generic "Products in cart quantity" [ref=e212]: "0"
```

# Test source

```ts
  7   |     firstProduct : string
  8   |     Product_10_90_Count : number
  9   |     Product_14_90_Count : number
  10  |     Product_Count1 : number
  11  |     SizeS : string
  12  |     CardQuantity : number
  13  |     AfterCartRemoveMessage : string
  14  |     SfirstCartTotalAmount : string
  15  | }
  16  | 
  17  | type AllProduct1090 =
  18  | {
  19  |     Count1090Product:  number
  20  |     verifyIconCount1090: number
  21  |     TotalAmount1090 : string
  22  |     FistProduct1090: string
  23  |     SecondProduct1090: string
  24  |     ThirdProduct1090: string
  25  |     FourthProduct1090: string
  26  | }
  27  | 
  28  | type AllProduct1490 = 
  29  | {
  30  |     Count1490Product: number
  31  |     TotalAmount1490: string
  32  |     FistProduct1490: string
  33  |     SecondProduct1490: string
  34  |     FirstProductAmount1490: string
  35  |     SecondProductAmount1490: string
  36  | }
  37  | 
  38  | type ProductSelectionMorXL = 
  39  | {
  40  |     ProductCount : string
  41  |     IconCoutMXL: number
  42  |     ValidateProductSizeXL : string
  43  |     ValidateProductSizeM : string
  44  |     TotalAmountMXL : string
  45  | }
  46  | 
  47  | type UpdateCartQuantityXL = 
  48  | {
  49  |     verifyXLProductQuantity :  string
  50  |     UpdatedTotalAmountMXL : string
  51  | }
  52  | 
  53  | export class productSelectorAction 
  54  | {
  55  |     private readonly productSelectorPages : productSelectorPage;
  56  | 
  57  |     constructor(page:Page)
  58  |     {
  59  |         this.productSelectorPages = new productSelectorPage(page);
  60  |     }
  61  | 
  62  |     async productValidation(testData:ProductData)
  63  |     {
  64  |         // verify 1st product Identify products priced $10.90
  65  |         await expect(this.productSelectorPages.productVisible).toHaveText(testData.firstProduct)
  66  |         // verify products priced $10.90 count is 4
  67  |         await expect(this.productSelectorPages.countProduct).toHaveCount(testData.Product_10_90_Count)
  68  |         // verify products priced $14.90 count is 2
  69  |         await expect(this.productSelectorPages.productSecond).toHaveCount(testData.Product_14_90_Count)
  70  |         
  71  |     }
  72  | 
  73  |     async ProductSelectionSize_S(testData:ProductData)
  74  |     {
  75  |         // select size S
  76  |         await this.productSelectorPages.selectSizeS.click();
  77  |         // verify products priced $10.90
  78  |         await expect(this.productSelectorPages.productVisible).toHaveText(testData.firstProduct)
  79  |         // click Add to Cart button
  80  |         await this.productSelectorPages.AddToCartButton.click();
  81  |         // verify count 1 after add to cart
  82  |         await expect(this.productSelectorPages.count1ST).toHaveCount(testData.Product_Count1)
  83  |         // verify product size S
  84  |         await expect(this.productSelectorPages.sizeS).toHaveText(testData.SizeS)
  85  |         // verify Card Quantity 1
  86  |         await expect(this.productSelectorPages.cardQuantity).toHaveCount(testData.CardQuantity)
  87  |         // Verify total Amount
  88  |         await expect(this.productSelectorPages.totalAmount).toHaveText(testData.SfirstCartTotalAmount)
  89  |         // Remover the Cart
  90  |         await this.productSelectorPages.removeCart.click();
  91  |         // verify Message After cart remove
  92  |         await expect(this.productSelectorPages.afterCartRemoveMessage).toHaveText(testData.AfterCartRemoveMessage)
  93  | 
  94  |     }
  95  | 
  96  |     async selectAll_1090_Product(testData:AllProduct1090)
  97  |     {
  98  |         await expect(this.productSelectorPages.all1090Product).toHaveCount(testData.Count1090Product)
  99  |         const totalCount = await this.productSelectorPages.all1090Product.count()
  100 |         console.log(totalCount)
  101 |         
  102 |         const count = await this.productSelectorPages.AddToCartButtonAll1090.count();
  103 |         console.log(`Total 10.90 products: ${count}`);
  104 | 
  105 |         for (let i = 0; i < count; i++)
  106 |         {
> 107 |             await this.productSelectorPages.AddToCartButtonAll1090.nth(i).click();
      |                                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  108 |             await this.productSelectorPages.cancel.waitFor({ state: 'visible' });
  109 |             await this.productSelectorPages.cancel.click();
  110 |         }
  111 | 
  112 |         // verify icon count is 4 after add all the product which amount is 10.90
  113 |         // await this.productSelectorPages.verifyIconCount1090.waitFor({ state: 'visible' });
  114 |         await this.productSelectorPages.verifyIconCount1090.click()
  115 | 
  116 |         // Verify all product should be added successfully which amount is 10.90
  117 |         await expect(this.productSelectorPages.fistProduct1090).toHaveText(testData.FistProduct1090)
  118 |         await expect(this.productSelectorPages.secondProduct1090).toHaveText(testData.SecondProduct1090)
  119 |         await expect(this.productSelectorPages.thirdProduct1090).toHaveText(testData.ThirdProduct1090)
  120 |         await expect(this.productSelectorPages.fourthProduct1090).toHaveText(testData.FourthProduct1090)
  121 | 
  122 | 
  123 |         // verify total amount of added all the product which amount is 10.90
  124 |         await expect(this.productSelectorPages.totalAmount1090).toHaveText(testData.TotalAmount1090)
  125 |         
  126 |     }
  127 | 
  128 |     async selectAll_1490_Product(testData:AllProduct1490)
  129 |     {
  130 |         await expect(this.productSelectorPages.all1490Product).toHaveCount(testData.Count1490Product)
  131 |         const totalCount = await this.productSelectorPages.all1490Product.count()
  132 |         console.log("Total 14.90 products:",totalCount)
  133 | 
  134 |         const count = await this.productSelectorPages.AddToCartButtonAll1490.count();
  135 |         console.log(`Total 14.90 products: ${count}`);
  136 | 
  137 |         for (let i = 0; i < count; i++)
  138 |         {
  139 |             await this.productSelectorPages.AddToCartButtonAll1490.nth(i).click();
  140 |             await this.productSelectorPages.cancel.waitFor({ state: 'visible' });
  141 |             await this.productSelectorPages.cancel.click();
  142 |         }
  143 |         // verify icon count is 2 after add all the product which amount is 14.90
  144 |         await this.productSelectorPages.verifyIconCount1490.click()
  145 | 
  146 |         // Verify all product should be added successfully which amount is 10.90
  147 |         await expect(this.productSelectorPages.fistProduct1490).toHaveText(testData.FistProduct1490)
  148 |         await expect(this.productSelectorPages.secondProduct1490).toHaveText(testData.SecondProduct1490)
  149 | 
  150 |         // verify all product amount should be added successfully which amount is 14.90
  151 |         await expect(this.productSelectorPages.firstProductAmount1490).toHaveText(testData.FirstProductAmount1490)
  152 | 
  153 |         // verify total amount of added all the product which amount is 14.90
  154 |         await expect(this.productSelectorPages.totalAmount1490).toHaveText(testData.TotalAmount1490)
  155 |     }
  156 | 
  157 |     async filterProduct_M_XL(testData:ProductSelectionMorXL)
  158 |     {
  159 |         // select product size M and XL
  160 |         await this.productSelectorPages.selectSizeM.click()
  161 |         await this.productSelectorPages.selectSizeXL.click()
  162 | 
  163 |         // verify total product count after filter M and XL
  164 |         await this.productSelectorPages.page.waitForTimeout(3000)
  165 |         await expect(this.productSelectorPages.totalProductCount).toHaveText(testData.ProductCount)
  166 |         const totalCount = await this.productSelectorPages.totalProductCount.count()
  167 |         console.log("Total Product Count after filter M and XL:",totalCount)
  168 | 
  169 |         // click Add to Cart button for size M
  170 |         await this.productSelectorPages.addToCartButtonM.click()
  171 | 
  172 |         // click Add to Cart button for size XL
  173 |         await this.productSelectorPages.addToCartButtonXL.click()
  174 |        
  175 |         //click the icon to verify the product size M and XL
  176 |         await this.productSelectorPages.page.waitForTimeout(3000)
  177 |         await this.productSelectorPages.iconCoutMXL.click()
  178 | 
  179 |         // verify product size XL
  180 |         await expect(this.productSelectorPages.validateProductSizeXL).toHaveText(testData.ValidateProductSizeXL)
  181 |         // verify product size M
  182 |         await expect(this.productSelectorPages.validateProductSizeM).toHaveText(testData.ValidateProductSizeM)
  183 |         // verify total amount
  184 |         await expect(this.productSelectorPages.totalAmountMXL).toHaveText(testData.TotalAmountMXL)
  185 |     }
  186 |        
  187 |     async updateCartQuantiy(testData:UpdateCartQuantityXL)
  188 |     {
  189 |         // select product size M and XL
  190 |         await this.productSelectorPages.selectSizeM.click()
  191 |         await this.productSelectorPages.selectSizeXL.click()
  192 | 
  193 |         // click Add to Cart button for size M
  194 |         await this.productSelectorPages.addToCartButtonM.click()
  195 | 
  196 |         // click Add to Cart button for size XL
  197 |         await this.productSelectorPages.addToCartButtonXL.click()
  198 |        
  199 |         //click the icon to verify the product size M and XL
  200 |         await this.productSelectorPages.page.waitForTimeout(5000)
  201 |         await this.productSelectorPages.iconCoutMXL.click()
  202 | 
  203 |         // update XL product quantity to 2
  204 |         await this.productSelectorPages.updateCartQuantityXL.click();
  205 |         // verify product quantity should be 2 for XL product
  206 |         await this.productSelectorPages.page.waitForTimeout(5000)
  207 |         await expect(this.productSelectorPages.verifyXLProductQuantity).toBeVisible()
```