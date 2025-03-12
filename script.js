document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    let count = 0;
    
    increaseBtn.addEventListener("click", function () {
        count++;
        counter.textContent = count;
    });
    
    decreaseBtn.addEventListener("click", function () {
        count--;
        counter.textContent = count;
    });
});