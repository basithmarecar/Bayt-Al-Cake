/* ============================================================
   BAYT AL CAKE
   SCRIPT PRINCIPAL
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       NAVBAR — EFFET AU SCROLL
    ======================================================== */

    const navbar = document.querySelector(".navbar");

    const updateNavbar = () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    };

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();



    /* ========================================================
       FERMER LE MENU MOBILE APRÈS UN CLIC
    ======================================================== */

    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    if (navbarCollapse && navLinks.length > 0) {

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                if (
                    navbarCollapse.classList.contains("show") &&
                    typeof bootstrap !== "undefined"
                ) {

                    const collapse =
                        bootstrap.Collapse.getInstance(navbarCollapse) ||
                        new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });

                    collapse.hide();
                }

            });

        });

    }



    /* ========================================================
       LIENS INTERNES — SCROLL FLUIDE
    ======================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });



    /* ========================================================
       3D — CARTES PRODUITS
    ======================================================== */

    const productCards =
        document.querySelectorAll(".product-card");

    const supportsHover =
        window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {

        productCards.forEach((card) => {

            const link =
                card.querySelector(".product-link");

            const imageWrapper =
                card.querySelector(".product-image-wrapper");

            if (!link || !imageWrapper) {
                return;
            }


            card.addEventListener("mousemove", (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                const rotateX =
                    ((centerY - y) / centerY) * 5;


                link.style.transform = `
                    translateY(-12px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                `;


                imageWrapper.style.transform = `
                    translateZ(18px)
                `;


                /*
                 * Position de la lumière 3D
                 */
                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            });


            card.addEventListener("mouseleave", () => {

                link.style.transform = "";

                imageWrapper.style.transform = "";

            });

        });

    }



    /* ========================================================
       3D — HERO
    ======================================================== */

    const heroVisual =
        document.querySelector(".hero-visual");

    const heroCard =
        document.querySelector(".hero-image-card");

    if (
        supportsHover &&
        heroVisual &&
        heroCard
    ) {

        heroVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 7;

                const rotateX =
                    ((centerY - y) / centerY) * 5;


                heroCard.style.animation =
                    "none";

                heroCard.style.transform = `
                    perspective(1400px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    rotateZ(1deg)
                    translateY(-8px)
                `;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                heroCard.style.transform = "";

                heroCard.style.animation =
                    "";

            }
        );

    }



    /* ========================================================
       EFFET 3D — IMAGE PRESENTATION
    ======================================================== */

    const presentationVisual =
        document.querySelector(".presentation-visual");

    const presentationCard =
        document.querySelector(".presentation-image-card");

    if (
        supportsHover &&
        presentationVisual &&
        presentationCard
    ) {

        presentationVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    presentationVisual.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                const rotateX =
                    ((centerY - y) / centerY) * 3;


                presentationCard.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                `;

            }
        );


        presentationVisual.addEventListener(
            "mouseleave",
            () => {

                presentationCard.style.transform = "";

            }
        );

    }



    /* ========================================================
       EFFET 3D — PRODUIT SIGNATURE
    ======================================================== */

    const featuredImage =
        document.querySelector(".featured-product-image");

    if (
        supportsHover &&
        featuredImage
    ) {

        featuredImage.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    featuredImage.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                const rotateX =
                    ((centerY - y) / centerY) * 3;


                featuredImage.style.transform = `
                    perspective(1200px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)
                `;

            }
        );


        featuredImage.addEventListener(
            "mouseleave",
            () => {

                featuredImage.style.transform = "";

            }
        );

    }



    /* ========================================================
       REVEAL AU SCROLL
    ======================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-content, " +
            ".section-heading, " +
            ".product-card, " +
            ".category-heading, " +
            ".featured-product-content, " +
            ".contact-card, " +
            ".order-card"
        );


    /*
     * On ajoute une classe de préparation.
     */

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    /*
     * Intersection Observer
     */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("reveal-visible");
        });

    }



    /* ========================================================
       ANIMATION DES CARTES AVEC RETARD
    ======================================================== */

    const cards =
        document.querySelectorAll(
            ".catalogue-category .product-card"
        );

    cards.forEach((card, index) => {

        card.style.setProperty(
            "--reveal-delay",
            `${(index % 4) * 0.08}s`
        );

    });



    /* ========================================================
       PARALLAXE DES DÉCORATIONS HERO
    ======================================================== */

    const decorations =
        document.querySelectorAll(
            ".hero-decoration"
        );

    if (
        supportsHover &&
        decorations.length > 0
    ) {

        const heroSection =
            document.querySelector(".hero-section");

        if (heroSection) {

            heroSection.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        heroSection.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const moveX =
                        (x / rect.width - 0.5) * 25;

                    const moveY =
                        (y / rect.height - 0.5) * 25;


                    decorations.forEach(
                        (decoration, index) => {

                            const multiplier =
                                (index + 1) * 0.35;

                            decoration.style.transform = `
                                translate3d(
                                    ${moveX * multiplier}px,
                                    ${moveY * multiplier}px,
                                    0
                                )
                            `;

                        }
                    );

                }
            );


            heroSection.addEventListener(
                "mouseleave",
                () => {

                    decorations.forEach(
                        (decoration) => {

                            decoration.style.transform =
                                "";

                        }
                    );

                }
            );

        }

    }



    /* ========================================================
       ANIMATION DU LOGO
    ======================================================== */

    const logo =
        document.querySelector(".navbar-logo");

    if (logo) {

        logo.addEventListener(
            "mouseenter",
            () => {

                logo.style.transform =
                    "scale(1.05) rotate(-1deg)";

            }
        );


        logo.addEventListener(
            "mouseleave",
            () => {

                logo.style.transform = "";

            }
        );

    }



    /* ========================================================
       ACCESSIBILITÉ — PREFERS REDUCED MOTION
    ======================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (prefersReducedMotion) {

        document.documentElement.style.scrollBehavior =
            "auto";

        document.body.classList.add(
            "reduced-motion"
        );

    }



    /* ========================================================
       LOG
    ======================================================== */

    console.log(
        "Bayt Al Cake — site initialisé."
    );

});