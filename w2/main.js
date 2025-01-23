console.log("JS Script Loaded");

const houseMembersImpact = 8;
const houseSizeImpact = 7;
const foodChoiceImpact = 14;
const waterConsumptionImpact = 3;
const householdPurchaseImpact = 2;
const wasteProduceImpact = 20;
const recyclingWastImpact = 4;
const transportationImpact = 16;

const totalCarbonImpact = houseMembersImpact + houseSizeImpact + 
foodChoiceImpact + waterConsumptionImpact + householdPurchaseImpact +
wasteProduceImpact + recyclingWastImpact + transportationImpact;

const myHeading = document.querySelector("span");
myHeading.textContent = totalCarbonImpact;