const borderControl = document.querySelector("#border")
const blurControl = document.querySelector("#blur")
const colorControl = document.querySelector("#color")

function addEventListeners() {
    borderControl.addEventListener("change", changeVariable);
    blurControl.addEventListener("change", changeVariable);
    colorControl.addEventListener("change", changeVariable);
}

function changeVariable() {
    let value = this.value;
    let suffix = this.dataset.suffix || "";

    document.documentElement.style.setProperty("--" + this.id, value + suffix);
}

addEventListeners();