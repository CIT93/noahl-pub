class Footprint {
    constructor(firstName, lastName, houseSize, houseHoldMembers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.houseSize = houseSize;
        this.houseHoldMembers = houseHoldMembers;

        this.houseHoldPoints(); 
        this.houseSizePoints();
        this.calculateTotal();
    }

    houseHoldPoints() {
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

    houseSizePoints() {
        if(this.houseSize === "large") {
            this.houseSizePoints = 10;
        } else if(this.houseSize === "medium") {
            this.houseSizePoints = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePoints = 2;
        }
    }

    calculateTotal() {
        this.total = this.houseHoldPoints + this.houseSizePoints;
    }
}

export { Footprint }