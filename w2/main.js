console.log("JS Script Loaded");

const houseMembersImpact = 8; // Impact from number of people I live with
const houseSizeImpact = 7; // Impact from the size of my house
const foodChoiceImpact = 14; // Impact from the food I eat
const waterConsumptionImpact = 3; // Impact from dishwasher/washing machine
const householdPurchaseImpact = 2; // Impact from furnature purchases
const wasteProduceImpact = 20; // Impact from trash thrown away
const recyclingWastImpact = 4; // Impact from recycling
const transportationImpact = 16; // Impact from driving/flying

// Total Carbon Footprint
const totalCarbonImpact = houseMembersImpact + houseSizeImpact + 
foodChoiceImpact + waterConsumptionImpact + householdPurchaseImpact +
wasteProduceImpact + recyclingWastImpact + transportationImpact;

// Run accross span so it keeps h1 size without directly affecting the rest of the h1 tag
const myHeading = document.querySelector("span");
myHeading.textContent = totalCarbonImpact;