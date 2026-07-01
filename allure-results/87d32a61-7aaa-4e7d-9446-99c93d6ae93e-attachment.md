# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.ts >> TC_06 Update Cart Quantity for XL Product and Verify Total Amount
- Location: tests\product.spec.ts:27:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//p[@class="sc-1h98xa9-9 jzywDV"]')
Expected: "$ 84.80"
Received: "$ 81.25"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//p[@class="sc-1h98xa9-9 jzywDV"]')
    14 × locator resolved to <p class="sc-1h98xa9-9 jzywDV">$ 81.25</p>
       - unexpected value "$ 81.25"

```

```yaml
- paragraph: $ 81.25
```

# Test source

```ts
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
  208 |         const updatedQuantity = await this.productSelectorPages.verifyXLProductQuantity.textContent();
  209 |         console.log("Updated XL Product Quantity:", updatedQuantity);
  210 | 
  211 |         // verify total amount
> 212 |         await expect(this.productSelectorPages.updatedTotalAmountMXL).toHaveText(testData.UpdatedTotalAmountMXL)
      |                                                                       ^ Error: expect(locator).toHaveText(expected) failed
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