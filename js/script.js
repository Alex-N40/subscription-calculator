// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result"); /* The cost of the subscription will appear here. */
var subType = "basic";  /* This is the default value for the Subscription drop-down list. */
var subDuration = 1; /* This is the default value for the Duration drop-down list. */

subTypeElement.addEventListener("change", function(e) {
    subType = e.target.value; /* The target is the option element in HTML. */
    console.log(subType);
})

