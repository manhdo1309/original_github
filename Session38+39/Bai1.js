let steps = document.querySelectorAll(".step");
let progressBar = document.querySelector(".bar");
let buttons = document.querySelectorAll("button");

let currentStep = 0;

function updateSteps(increase) {
    currentStep += increase;
    currentStep = Math.max(0, Math.min(currentStep, steps.length - 1));

    steps.forEach((step, index) => {
        step.classList.add("active");
    });

    for (let i = currentStep + 1; i < steps.length; i++) {
        steps[i].classList.remove("active");
    }

    progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;

    buttons[0].disabled = currentStep === 0;
    buttons[1].disabled = currentStep === steps.length - 1;
};

buttons.forEach((button, index) => {
    button.addEventListener("click", () => updateSteps(index === 0 ? -1 : 1));
});


