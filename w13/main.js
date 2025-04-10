FORM = document.getElementById("form");
OUTPUT = document.getElementById("output");

function printTarget() {
    const exerciseList = document.getElementById("exerciseList");
    const exerciseType = exerciseList.options[exerciseList.selectedIndex].text; // Get the option name directly instead of printing the variable name: https://stackoverflow.com/a/1085810/21732439

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Start ${exerciseType} // Goal is ${FORM.repCount.value} reps`;
    OUTPUT.appendChild(paragraph);

    // I would actually make this time in minutes but why
    return new Promise((resolve, reject) => {
        if (typeof exerciseType == "string" && exerciseType !== "") {
            setTimeout(() => {
                resolve(exerciseType)
            }, parseInt(FORM.repTime.value) * 1000);
        } else {
            reject("Exercise Not Found.");
        }
    });
}

function repCompletion(data) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Stop ${data}`;
    OUTPUT.appendChild(paragraph);
}

function asyncFailure(data) {
    console.log(`asyncrhonous function failed: ${data}`)
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    printTarget()
        .then(repCompletion)
        .catch(asyncFailure);
});