// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listener for menu items
document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const sectionId = event.target.getAttribute('href').slice(1); // Get the ID of the section to scroll to
        scrollToSection(sectionId);
    });
});

// Show or hide the back-to-top button based on scroll position
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

// Smooth scrolling when clicking the back-to-top button
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
