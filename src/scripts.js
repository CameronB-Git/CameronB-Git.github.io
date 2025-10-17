function copyEmail() {
      const email = "cameronbranston@gmail.com";

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
          const tooltip = document.querySelector(".tooltip");
          tooltip.textContent = "Copied!";
          setTimeout(() => (tooltip.textContent = "Click to Copy"), 1500);
        });
      } else {
        // fallback for insecure contexts (HTTP/file://)
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        const tooltip = document.querySelector(".tooltip");
        tooltip.textContent = "Copied!";
        setTimeout(() => (tooltip.textContent = "Click to Copy"), 1500);
      }
    }


function goToWebsite(url) {
    window.open(url, "_blank");
}

window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 300) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
