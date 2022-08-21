window.addEventListener("load", function () {
    let takeoffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let abortButton = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

    let shuttleBackgroundStyle = window.getComputedStyle(shuttleBackground);
    let rocketInitialRight = 0.4 * parseInt(shuttleBackgroundStyle.width, 10);
    let rocketInitialTop = parseInt(shuttleBackgroundStyle.height, 10)
        - Number(rocket.getAttribute("height"));

    rocket.style.position = "absolute";
    rocket.style.top = String(rocketInitialTop).concat("px");
    rocket.style.right = String(rocketInitialRight).concat("px");

    takeoffButton.addEventListener("click", function () {
        let takeoffConfirmation = confirm("Confirm that the shuttle is ready for takeoff.");

        if (takeoffConfirmation) {
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            if (parseInt(rocket.style.top, 10) >= 10) {
                rocket.style.top = String(parseInt(rocket.style.top, 10) - 10).concat("px");
                shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
            }
        }
    });

    landButton.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerText = 0;
        rocket.style.top = String(rocketInitialTop).concat("px");
        rocket.style.right = String(rocketInitialRight).concat("px");
    });

    abortButton.addEventListener("click", function () {
        let abortConfirmation = confirm("Confirm that you want to abort the mission.");

        if (abortConfirmation) {
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerText = 0;
            rocket.style.top = String(rocketInitialTop).concat("px");
            rocket.style.right = String(rocketInitialRight).concat("px");
        }
    });

    upButton.addEventListener("click", function () {
        if (parseInt(rocket.style.top, 10) >= 0) {
            rocket.style.top = String(parseInt(rocket.style.top, 10) - 10).concat("px");
            shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
        }
    });

    downButton.addEventListener("click", function () {
        if (parseInt(rocket.style.top, 10) <= rocketInitialTop - 10) {
            rocket.style.top = String(parseInt(rocket.style.top, 10) + 10).concat("px");
            shuttleHeight.innerText = Number(shuttleHeight.innerText) - 10000;
        }
    });

    rightButton.addEventListener("click", function () {
        if (parseInt(rocket.style.right, 10) >= -10) {
            rocket.style.right = String(parseInt(rocket.style.right, 10) - 10).concat("px");
        }
    });

    leftButton.addEventListener("click", function () {
        if (parseInt(rocket.style.right, 10) - 10 <=
            parseInt(shuttleBackgroundStyle.width, 10) - Number(rocket.getAttribute("width"))) {

            rocket.style.right = String(parseInt(rocket.style.right, 10) + 10).concat("px");
        }
    });
});