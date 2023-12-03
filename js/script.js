document.addEventListener('DOMContentLoaded', function() {
    openPopup();
});

function openPopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = 'none';
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.querySelector('.flip-card-inner').addEventListener('click', function() {
    document.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
  });

function openEmailTemplate() {
    // Specify the email address
    var emailAddress = 'kpnic@umich.edu';

    // Compose the mailto URL
    var mailtoURL = 'mailto:' + encodeURIComponent(emailAddress);

    // Open the email client
    window.location.href = mailtoURL;
}