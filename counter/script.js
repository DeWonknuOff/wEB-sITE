const objective = new Date("2026-04-01T00:00:00");

setInterval(() => {
    const now = new Date();
    const difference = objective - now;

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);

    let text;
    text = "this is a bug";

    if (difference > 1) {
    text = "En: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }

    document.getElementById("time").textContent = text;

}, 1000);
