const localSave = cfpDataArray => {
    const serializedArr = JSON.stringify(cfpDataArray);
    localStorage.setItem("cfp", serializedArr);
}

const localLoad = () => {
    const retrievedArr = localStorage.getItem("cfp");

    if (retrievedArr !== null)
        return JSON.parse(retrievedArr);
    else
        return [];
}

const cfpDataArray = localLoad(); // Function call needs to be cast after as it's a variable now yay

export { localSave, localLoad, cfpDataArray };