# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.ts >> TC_06 Update Cart Quantity for XL Product and Verify Total Amount
- Location: tests\product.spec.ts:27:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//parent::div[@class="sc-124al1g-2 keuquD"]//button[text() = "Add to cart"]')
    - locator resolved to <button tabindex="-1" class="sc-124al1g-0 jCsgpZ">Add to cart</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is not visible
  - retrying click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
          - checkbox "M" [checked] [ref=e30]
          - generic [ref=e31]: M
        - generic [ref=e33] [cursor=pointer]:
          - checkbox "ML" [ref=e34]
          - generic [ref=e35]: ML
        - generic [ref=e37] [cursor=pointer]:
          - checkbox "L" [ref=e38]
          - generic [ref=e39]: L
        - generic [ref=e41] [cursor=pointer]:
          - checkbox "XL" [checked] [active] [ref=e42]
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
        - paragraph [ref=e53]: 10 Product(s) found
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
          - paragraph [ref=e67]: Skater Black Sweatshirt
          - generic [ref=e68]:
            - paragraph [ref=e69]: $25.90
            - paragraph [ref=e70]:
              - generic [ref=e71]: or 12 x
              - generic [ref=e72]: $2.16
          - button "Add to cart" [ref=e73] [cursor=pointer]
        - generic [ref=e74]:
          - generic [ref=e75]: Free shipping
          - paragraph [ref=e77]: Blue T-Shirt
          - generic [ref=e78]:
            - paragraph [ref=e79]: $9.00
            - paragraph [ref=e80]:
              - generic [ref=e81]: or 3 x
              - generic [ref=e82]: $3.00
          - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - generic [ref=e85]: Free shipping
          - paragraph [ref=e87]: Loose Black T-shirt
          - generic [ref=e88]:
            - paragraph [ref=e89]: $14.00
            - paragraph [ref=e90]:
              - generic [ref=e91]: or 5 x
              - generic [ref=e92]: $2.80
          - button "Add to cart" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - generic [ref=e95]: Free shipping
          - paragraph [ref=e97]: Ringer Hall Pass
          - generic [ref=e98]:
            - paragraph [ref=e99]: $10.90
            - paragraph [ref=e100]:
              - generic [ref=e101]: or 9 x
              - generic [ref=e102]: $1.21
          - button "Add to cart" [ref=e103] [cursor=pointer]
        - generic [ref=e104]:
          - paragraph [ref=e106]: Turtles Ninja T-shirt
          - generic [ref=e107]:
            - paragraph [ref=e108]: $10.90
            - paragraph [ref=e109]:
              - generic [ref=e110]: or 9 x
              - generic [ref=e111]: $1.21
          - button "Add to cart" [ref=e112] [cursor=pointer]
        - generic [ref=e113]:
          - generic [ref=e114]: Free shipping
          - paragraph [ref=e116]: Slim black T-shirt
          - paragraph [ref=e118]: $49.90
          - button "Add to cart" [ref=e119] [cursor=pointer]
        - generic [ref=e120]:
          - paragraph [ref=e122]: White T-shirt Gucci
          - generic [ref=e123]:
            - paragraph [ref=e124]: $18.70
            - paragraph [ref=e125]:
              - generic [ref=e126]: or 4 x
              - generic [ref=e127]: $4.67
          - button "Add to cart" [ref=e128] [cursor=pointer]
        - generic [ref=e129]:
          - generic [ref=e130]: Free shipping
          - paragraph [ref=e132]: Tropical Wine T-shirt
          - generic [ref=e133]:
            - paragraph [ref=e134]: $134.90
            - paragraph [ref=e135]:
              - generic [ref=e136]: or 5 x
              - generic [ref=e137]: $26.98
          - button "Add to cart" [ref=e138] [cursor=pointer]
        - generic [ref=e139]:
          - generic [ref=e140]: Free shipping
          - paragraph [ref=e142]: Marine Blue T-shirt
          - generic [ref=e143]:
            - paragraph [ref=e144]: $49.00
            - paragraph [ref=e145]:
              - generic [ref=e146]: or 9 x
              - generic [ref=e147]: $5.44
          - button "Add to cart" [ref=e148] [cursor=pointer]
  - button "0" [ref=e150] [cursor=pointer]:
    - generic "Products in cart quantity" [ref=e152]: "0"
```

# Test source

```ts
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
  107 |             await this.productSelectorPages.AddToCartButtonAll1090.nth(i).click();
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
> 194 |         await this.productSelectorPages.addToCartButtonM.click()
      |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  208 |         const updatedQuantity = await this.productSelectorPages.verifyXLProductQuantity.textContent();
  209 |         console.log("Updated XL Product Quantity:", updatedQuantity);
  210 | 
  211 |         // verify total amount
  212 |         await expect(this.productSelectorPages.updatedTotalAmountMXL).toHaveText(testData.UpdatedTotalAmountMXL)
  213 |     }
  214 | 
  215 |     async checkoutProduct()
  216 |     {
  217 |         // select product size M and XL
  218 |         await this.productSelectorPages.selectSizeM.click()
  219 |         await this.productSelectorPages.selectSizeXL.click()
  220 | 
  221 |         // click Add to Cart button for size M
  222 |         await this.productSelectorPages.addToCartButtonM.click()
  223 | 
  224 |         // click Add to Cart button for size XL
  225 |         await this.productSelectorPages.addToCartButtonXL.click()
  226 |        
  227 |         //click the icon to verify the product size M and XL
  228 |         await this.productSelectorPages.page.waitForTimeout(5000)
  229 |         await this.productSelectorPages.iconCoutMXL.click()
  230 | 
  231 |         // handle the dialog event and accept it       
  232 |         await this.productSelectorPages.page.on('dialog', async (dialog) => {
  233 |         console.log(dialog.message());
  234 |         await dialog.accept();
  235 |         });
  236 |     
  237 |         // click checkout button
  238 |         await this.productSelectorPages.checkoutButton.click();    
  239 | 
  240 |     }
  241 | }
  242 | 
  243 | 
  244 | 
  245 | 
```