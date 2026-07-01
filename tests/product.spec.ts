import {test, expect} from "../src/fixture/fixture"
import testData from "../src/testdata/product.json" 

test('TC_01 Verify number of products priced at $10.90 and $14.90', async({appAction}) => {
  await appAction.product.productValidation(testData.ProductData)
}) 

test("TC_02 Validate Product Selection with Size S and Cart Calculation", async({appAction}) => {
    await appAction.product.ProductSelectionSize_S(testData.ProductData)
})

test("TC_03 Validate all Product Selection with Price $10.90, Add to Cart, and Verify Cart Details", 
  async({appAction}) =>{
    await appAction.product.selectAll_1090_Product(testData.AllProduct1090)
})

test("TC_04 Validate all Product Selection with Price $14.90, Add to Cart, and Verify Cart Details", 
  async({appAction}) =>{
    await appAction.product.selectAll_1490_Product(testData.AllProduct1490)
})

test("TC_05 Validate Product Selection with Size M and XL, Add to Cart, and Verify Cart Details",
  async({appAction}) =>{
    await appAction.product.filterProduct_M_XL(testData.ProductSelectionMorXL)
})

test('TC_06 Update Cart Quantity for XL Product and Verify Total Amount', async({appAction}) => {
    await appAction.product.updateCartQuantiy(testData.UpdateCartQuantityXL)
});

test('TC_07 Checkout Product and Verify Checkout Page', async({appAction}) => {
    await appAction.product.checkoutProduct()
});

test('TC_08 Remove Products from Cart and Verify Cart is Empty', async({appAction}) => {
    await appAction.product.removeCart(testData.RemoveCartProduct)
});