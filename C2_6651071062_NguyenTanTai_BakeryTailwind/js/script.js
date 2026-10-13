// Xử lý sự kiện Toggle Menu Mobile trên Tailwind CSS
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            // Chuyển đổi giữa lớp 'hidden' và 'flex'
            if (mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.remove("hidden");
                mobileMenu.classList.add("flex");
            } else {
                mobileMenu.classList.remove("flex");
                mobileMenu.classList.add("hidden");
            }
        });
    }
});