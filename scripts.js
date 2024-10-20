<script>
window.addEventListener("scroll", function() {
    const fadeInSection = document.querySelector("#contact");
    if (window.scrollY > window.innerHeight / 2) {
        fadeInSection.classList.add("fade-in-visible");
    } else {
        fadeInSection.classList.remove("fade-in-visible");
    }
});
</script>
