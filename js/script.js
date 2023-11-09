// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result"); /* The cost of the subscription will appear here. */
var subType = "basic";  /* This is the default value for the Subscription drop-down list. */
var subDuration = 1; /* This is the default value for the Duration drop-down list. */

subTypeElement.addEventListener("change", function(e) {
    subType = e.target.value; /* The target is the option element in HTML. */
    //console.log(subType);
    updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function(e) {
    subDuration = Number(e.target.value);
    //console.log(subDuration);
    updateSubscriptionDiv();
});

var updateSubscriptionDiv = function() {
    var monthlyCost = 5; /*This is the monthly cost for a basic subscription, which is selected by default. */
    if(subType === "standard") {
        monthlyCost = 7;
    } else if(subType === "premium") {
        monthlyCost = 10;
    }
    var total = subDuration * monthlyCost;
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};