
function onClick() {
    let dateInput = document.getElementById("leaveDate")
    let leaveDate = new Date(dateInput.value)
    let currentDate = new Date()
    let timeDifference = leaveDate - currentDate
    let daysAway = Math.round(timeDifference / (1000 * 60 * 60 * 24))
    let daysTill = daysAway + 1

    document.getElementById("daysAway").innerText = daysTill
}
// document.addEventListener("DOMContentLoaded", () => {
//     document.body.style = "color: red; background-color: yellow"
//     alert("Are you ready for the page to change colors?")
// })

document.getElementById("submitBtn").addEventListener("click", onClick);
