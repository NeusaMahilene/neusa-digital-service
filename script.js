```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU MOBILE
    ========================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileMenu.classList.toggle("open");

            menuButton.textContent = isOpen ? "×" : "☰";
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );
            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Fechar menu quando clicar num link */

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Abrir menu");
                menuButton.setAttribute("aria-expanded", "false");

            });

        });


        /* Fechar menu ao clicar fora */

        document.addEventListener("click", event => {

            const clickedMenu = mobileMenu.contains(event.target);
            const clickedButton = menuButton.contains(event.target);

            if (
                !clickedMenu &&
                !clickedButton &&
                mobileMenu.classList.contains("open")
            ) {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Abrir menu");
                menuButton.setAttribute("aria-expanded", "false");

            }

        });


        /* Fechar menu ao aumentar o ecrã */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 780) {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Abrir menu");
                menuButton.setAttribute("aria-expanded", "false");

            }

        });

    }


    /* =========================
       ANO AUTOMÁTICO
    ========================= */

    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       FECHAR MENU COM ESC
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                mobileMenu.classList.remove("open");

                if (menuButton) {
                    menuButton.textContent = "☰";
                    menuButton.setAttribute("aria-label", "Abrir menu");
                    menuButton.setAttribute("aria-expanded", "false");
                }

            }

        }

    });

});
