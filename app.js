//Create function to display message and info
function displayContact() {
    var comments = document.getElementById("comments").value;
    if (confirm("Are you sure you want to send : " + comments)) {
        alert("Message sent!")
    } else {
        alert("Message canceled!")
    }
 }




            