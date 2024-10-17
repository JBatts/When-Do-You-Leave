function getDays(when) {
    const now = new Date();
    const diff = when.getTime() - now.getTime()
    const msPerDay = 1000 * 60 * 60 * 24
    const days = (diff / msPerDay)
    const rounded = Math.ceil(days)

    // This can all be replaced by line 17

    // let text = ""; 
    // if(rounded === 1) {
    //     text = " day"
    // } else {
    //     text = " days"
    // }

    // Ternary (Three-Way)
    let text = rounded === 1 ? " day" : " days"
    
    return rounded + text
}
document.addEventListener("DOMContentLoaded", () => {
    // DOM == Document Object Model
    document.body.style = "color: red; background-color: yellow"
    alert("Are you ready for the page to change colors?")

    submitDate.addEventListener("click", () => {
        const when = new Date(travelDate.value)
        daysMessage.innerText = getDays(when);
    })
});
