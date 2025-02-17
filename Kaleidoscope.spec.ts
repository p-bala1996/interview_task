import {test} from "@playwright/test";

test(`test the dropdown`,async ({page}) => {

  //  await page.waitForTimeout(3000);
    await page.goto("https://apply.mykaleidoscope.com/login");

    // enter an email address
    await page.getByPlaceholder("Email Address").fill("varunbala0@gmail.com");
    // click an  next page 

    await page.click(".cta-button__text");
    // enter an password 
    await page.getByPlaceholder("Password").fill("Hondashine@4036");
     // sign in page 
    await page.click(".cta-button__text");
     // clcik an view program deatil 

    


      





    





  })