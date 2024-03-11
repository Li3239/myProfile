function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        // Hide all content divs
        var contents = document.getElementsByClassName('content');
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        // Show the selected content div
        content.style.display = "block";
    }
}