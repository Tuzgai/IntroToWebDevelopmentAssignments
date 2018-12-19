/*eslint-env browser*/
var isMouseTracking = false;

// We need a function to update the position
// On our front end, we have 2 labels -
// One for X, one for Y
function updateMousePosition() {
    // If tracking is enabled, update the labels
    // we can get the mouse positions with
    // event.clientX and event.clientY
    var positionX = document.getElementById("mousePositionX");
    var positionY = document.getElementById("mousePositionY");
    if (isMouseTracking) {
        // We can update the text of an HTML element with the
        // innerText property.
        positionX.innerText = event.clientX;
        positionY.innerText = event.clientY;
    }
}

function toggleTracking() {
    // If isMouseTracking is true, set it to false
    // Otherwise it is false, so set it to true
    isMouseTracking = !isMouseTracking;
    // Update the tracking status to show whether it is enabled
    if (isMouseTracking) {
        document.getElementById("trackingStatus").innerText = "TRACKING"
    } else {
        document.getElementById("trackingStatus").innerText = "NOT TRACKING";   
    } 
}