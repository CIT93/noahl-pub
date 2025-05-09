class Footprint {
    constructor(firstName, lastName, houseSize, houseHoldMembers, foodEvaluation, foodSource, waterConsumption, homePurchases, ownsBoth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.houseSize = houseSize;
        this.houseHoldMembers = houseHoldMembers;
        this.foodEvaluation = foodEvaluation;
        this.foodSource = foodSource;
        this.waterConsumption = waterConsumption; // Don't break edit
        this.waterConsumPoints = ownsBoth ? waterConsumption * 2 : waterConsumption;
        this.homePurchases = homePurchases;

        this.calculateHouseHoldPoints(); 
        this.calculateHouseSizePoints();
        this.calculateFoodPoints();
        this.calculateSourcePoints();
        this.calculateHomePurchasePoints();

        this.calculateTotal();
    }

    calculateHouseHoldPoints() {
        if (this.houseHoldMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseHoldMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseHoldMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseHoldMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseHoldMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseHoldMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseHoldMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }

    calculateHouseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
        } else if (this.houseSize === "medium") {
            this.houseSizePoints = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePoints = 2;
        }
    }

    calculateFoodPoints() {
        if (this.foodEvaluation === "domesticDaily") {
            this.foodPoints = 10;
        } else if (this.foodEvaluation === "domesticWeekly") {
            this.foodPoints = 8;
        } else if (this.foodEvaluation === "vegetarian") {
            this.foodPoints = 4;
        } else if (this.foodEvaluation === "vegan") {
            this.foodPoints = 2;
        }
    }

    calculateSourcePoints() {
        if (this.foodSource === "prepackaged") {
            this.foodSourcePoints = 12;
        } else if (this.foodSource === "balanced") {
            this.foodSourcePoints = 6;
        } else if (this.foodSource === "fresh") {
            this.foodSourcePoints = 2;
        }
    }

    calculateHomePurchasePoints() {
        if (this.homePurchases === "largeSpender") {
            this.purchasePoints = 10;
        } else if (this.homePurchases === "bigSpender") {
            this.purchasePoints = 8;
        } else if (this.homePurchases === "fairSpender") {
            this.purchasePoints = 6;
        } else if (this.homePurchases === "smallSpender") {
            this.purchasePoints = 4;
        } else if (this.homePurchases === "nonSpender") {
            this.purchasePoints = 2;
        }
    }

    calculateTotal() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodPoints + this.foodSourcePoints + this.waterConsumPoints + this.purchasePoints;
    }
}

export { Footprint }