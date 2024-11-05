document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar ul li a, .suporte a");
    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const submenuToggle = document.querySelector(".submenu-toggle > a");
    const submenu = document.querySelector(".submenu");

    if (submenuToggle && submenu) {
        submenuToggle.addEventListener("click", function (event) {
            event.preventDefault();
            submenu.classList.toggle("active");
            if (submenu.classList.contains("active")) {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            } else {
                submenu.style.maxHeight = "0";
            }
        });

        document.addEventListener("click", function (event) {
            const target = event.target;
            if (!submenuToggle.contains(target)) {
                submenu.classList.remove("active");
                submenu.style.maxHeight = "0";
            }
        });
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("visible");
        main.classList.toggle("sidebar-visible");
    });

    if (window.innerWidth <= 900) {
        sidebar.classList.add("hidden");
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            sidebar.classList.remove("hidden");
            sidebar.classList.remove("visible");
        } else {
            sidebar.classList.add("hidden");
        }
    });
});
