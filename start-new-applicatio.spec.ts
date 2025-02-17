import {test} from "@playwright/test";

test(`test the dropdown`,async ({page}) => {

//click an Start New Application

await page.getByLabel("Start New Application").click();

//enter an address 

await page.getByPlaceholder("Enter your street address").fill("650 N Pearl St, Dallas");


// enter an state 

await page.getByPlaceholder("Enter your state").fill("Texas");

// enter an city

await page.getByPlaceholder("Enter your city").fill("Dallas");

//enter an pincode 


await page.getByPlaceholder("Enter your zip code").fill("TX 75201");



// enter an country

await page.getByPlaceholder("Enter your country").fill("United States of America");
// click an next page 

await page.getByLabel("Next Page").click();

{
// addentry

await page.getByLabel("Add Entry").click();
}

})