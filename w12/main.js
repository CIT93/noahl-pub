FORM = document.getElementById("form");
OUTPUT = document.getElementById("output");

function printTarget() {
    const exerciseList = document.getElementById("exerciseList");
    const exerciseType = exerciseList.options[exerciseList.selectedIndex].text; // Get the option name directly instead of printing the variable name: https://stackoverflow.com/a/1085810/21732439

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Start ${exerciseType} // Goal is ${FORM.repCount.value} reps`;
    OUTPUT.appendChild(paragraph);
    
    // I would actually make this time in minutes but why
    setTimeout(() => {
        printStop(exerciseType)
    }, parseInt(FORM.repTime.value) * 1000);

    setTimeout(() => {
        easterEgg(FORM.repTime.value)
    }, parseInt(FORM.repTime.value) * 60000);
}

function printStop(exerciseType) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Stop ${exerciseType}`;
    OUTPUT.appendChild(paragraph);
}

function easterEgg(repTime) {
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    paragraph1.innerHTML = `You actually waited a whole ${repTime == 1 ? 'minute' : `${repTime} minutes`}, wow`;
    paragraph2.innerHTML = 'Yeah, I got nothing special for you this time. Sorry'
    OUTPUT.appendChild(paragraph1);
    OUTPUT.appendChild(paragraph2);
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    printTarget();
});