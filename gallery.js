

// Function triggered when an image is hovered or focused
function upDate(previewPic) {
    console.log("Event triggered: upDate (mouse over / focus)");
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

    var displayBox = document.getElementById("image");

    // Update background image
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";

    // Update text content
    displayBox.innerHTML = previewPic.alt;
}

// Function triggered when focus or mouse leaves an image
function undo() {
    console.log("Event triggered: undo (mouse leave / blur)");

    var displayBox = document.getElementById("image");

    // Reset background image
    displayBox.style.backgroundImage = "url('')";

    // Reset text content
    displayBox.innerHTML = "Hover or focus over an image below to display here.";
}

// Function triggered on page load to set tabindex for keyboard navigation
function addTabindex() {
    console.log("Page loaded: addTabindex function executed.");

    // Query all preview images
    var images = document.querySelectorAll(".preview");

    // Loop through each image and set the tabindex attribute
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Successfully added tabindex='0' to image #" + (i + 1));
    }
}