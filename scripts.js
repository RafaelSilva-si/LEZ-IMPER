window.onload = function() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 1000);
};

function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}