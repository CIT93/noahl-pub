const cfpDataArray = localLoad();

function localSave(cfpDataArray) {
    const serializedArr = JSON.stringify(cfpDataArray);
    localStorage.setItem("cfp", serializedArr);
}

function localLoad() {
    const retrievedArr = localStorage.getItem("cfp");

    if (retrievedArr !== null)
        return JSON.parse(retrievedArr);
    else
        return [];
}

export { localSave, localLoad, cfpDataArray };