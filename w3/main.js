function carbonFootprintCalculator(numberInHousehold) {
    if (numberInHousehold === 1) {
        carbonFootprint += 14;
    }
    else if (numberInHousehold === 2) {
        carbonFootprint += 12;
    }
    else if (numberInHousehold === 3) {
        carbonFootprint += 10;
    }
    else if (numberInHousehold === 4) {
        carbonFootprint += 8;
    }
    else if (numberInHousehold === 5) {
        carbonFootprint += 6;
    }
    else if (numberInHousehold === 6) {
        carbonFootprint += 4;
    }
    else if (numberInHousehold > 6) {
        carbonFootprint += 2;
    }
    else {
        console.log("Points did not update"); // Edgecase
    }

    console.log(`With a household of ${numberInHousehold} members, the total carbon footprint would equate to roughly ${carbonFootprint} points`);
}

let carbonFootprint = 0;
carbonFootprintCalculator(3);
carbonFootprintCalculator(4);