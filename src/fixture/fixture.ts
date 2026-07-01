import { test as base, expect} from "playwright/test";
import {productSelectorAction} from "../action/productSelectionAction"
import testData from "../testdata/product.json"

type appActions = 
{
    product : productSelectorAction
}
type Fixtures = 
{
    appAction : appActions
}

export const test = base.extend<Fixtures>({
    appAction : async ({page}, use) => {
        await page.goto(testData.BaseURL);
    const appAction : appActions = 
    {
        product: new productSelectorAction(page)
    };
    await use(appAction);
}
})
export { expect } from "@playwright/test";