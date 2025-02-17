import {test} from "@playwright/test";

test(`test the dropdown`,async ({page}) => {



// High school information 

await page.getByPlaceholder("Please enter the name of your current High School").fill("North Central Texas College");
await page.getByPlaceholder("Enter additional high school address (e.g. PO Box)").fil("Bowie Corinth Gainesville");
await page.getByPlaceholder("Enter high school city").fill("Dallas");

await page.locator(`//*[@id="mantine-z4379517m"]`).fill("77579");

await page.getByPlaceholder("Enter your current GPA").fill("7");

await page.locator(`//*[@id="mantine-nuju4g4um"]`).fill(`2024`);

await page.getByLabel("Upload File").click();

//await page.locator('input[name="file-upload"]').click();

// Upload fixture.pdf
await page.getByLabel("Upload File").setInputFiles('./tests/fixtures/fixture.zip');


// Click text=fixture.pdf
await page.locator('text=fixture.zip').click();

await page.getByLabel("Next Page").click();

await page.locator('//*[@id="mantine-sd0dr31ci"]').click();

await page.locator('//*[@id="mantine-3502h86y7"]').click();

await page.locator('#mantine-mjvxo7k3p').click();

await page.locator('//*[@id="mantine-1glhnf8k7"]').click();
await page.getByLabel("Next Page").click();

await page.getByPlaceholder("Long Input").fill("An automobile is a usually four-wheeled vehicle designed primarily for passenger transportation and commonly propelled by an internal-combustion engine using a volatile fuel. (Read Henry Ford's 1926 Britannica essay on mass production.) Byname: auto. Also called: motorcar or car.");

await page.locator('//*[@id="mantine-dy5poxzlh"]').fill("Animals are living things that move, eat, and react to their environment. They are multicellular eukaryotes with muscles and collagen binding their cells together");
 await page.locator("#mantine-8nl4tfbgb").fill("Schools are organized spaces purposed for teaching and learning. The classrooms where teachers teach and students learn are of central importance. Classrooms may be specialized for certain subjects, such as laboratory classrooms for science education and workshops for industrial arts education.");

 await page.locator("#mantine-8nl4tfbgb").fill("College- a place for specialized education after the age of 16 or 18, where people study and train to get technical skills or knowledge for a particular type of job: a teacher training college");
{
await page.getByLabel("Submit").click();
await page.screenshot({ path: 'screenshot.png', fullPage: true });
}

await page.click(".application-card-main-container__view-award-program-and-complete-application__view-award-program");

// clcik an view application

await page.getByLabel("View Applications").click();





})