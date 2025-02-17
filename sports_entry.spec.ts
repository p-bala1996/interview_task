import {test} from "@playwright/test";

test(`test the dropdown`,async ({page}) => {




//enter an activity name 

await page.getByPlaceholder("Short Input").fill("Coding competitions");
// total numbers involved 
await page.locator("text").fill("4");

// list of any ideas
await page.getByPlaceholder("Long Input").fill("1. Integrity  2. Self-Awareness  3. Growth Mindset   4. Communication   5. Empathy");

// Description of Involvement 

await page.locator(`//*[@id="mantine-n0cdqfsxw"]`).fill(" Naturally, integrity is at the top of the list as one of the most critical leadership qualities.");
// click an add button 
await page.getByPlaceholder("Add").click();


// entry number 2

{
await page.getByLabel("Add Entry").click();

//enter an activity name 

await page.getByPlaceholder("Short Input").fill("Sports ");
// total numbers involved 
await page.locator("text").fill("10");

// list of any ideas
await page.getByPlaceholder("Long Input").fill("VolleyBalll");

// Description of Involvement 

await page.locator(`//*[@id="mantine-n0cdqfsxw"]`).fill("volleyball, Game played by two teams of six players each, in which an inflated ball is volleyed over a high net. Each team tries to make the ball touch the court within the opposing side's playing areas before it can be returned. A team is allowed to touch the ball three times before returning it");
// click an add button 
await page.getByPlaceholder("Add").click();



// next button

await page.getByLabel("Next Page").click();
}
})