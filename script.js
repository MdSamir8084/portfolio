/* =========================================================
   MD SAMIR — PORTFOLIO JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const pageLoader = document.getElementById("pageLoader");
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const cursorGlow = document.getElementById("cursorGlow");

const particlesContainer =
    document.getElementById("particlesContainer");

const devopsVisual =
    document.getElementById("devopsVisual");

const skillsContainer =
    document.getElementById("skillsContainer");

const projectsGrid =
    document.getElementById("projectsGrid");

const contactForm =
    document.getElementById("contactForm");

const characterCount =
    document.getElementById("characterCount");

const messageInput =
    document.getElementById("message");

const submitButton =
    document.getElementById("submitButton");

const formStatus =
    document.getElementById("formStatus");

const backToTop =
    document.getElementById("backToTop");


/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        pageLoader?.classList.add("loaded");

    }, 700);

});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function toggleMenu() {

    const isOpen =
        navMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );
}


menuToggle?.addEventListener(
    "click",
    toggleMenu
);


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =========================================================
   BACKGROUND PARTICLES
   ========================================================= */

function createParticles() {

    if (!particlesContainer) return;

    const fragment =
        document.createDocumentFragment();

    const particleCount =
        window.innerWidth < 700 ? 25 : 55;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "bg-particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${12 + Math.random() * 20}s`;

        particle.style.animationDelay =
            `${Math.random() * -20}s`;

        particle.style.opacity =
            `${0.15 + Math.random() * 0.5}`;

        fragment.appendChild(particle);

    }

    particlesContainer.appendChild(fragment);

}

createParticles();


/* =========================================================
   CURSOR GLOW
   ========================================================= */

if (
    cursorGlow &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener(
        "pointermove",
        event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        },
        { passive: true }
    );

}


/* =========================================================
   HERO PARALLAX
   ========================================================= */

if (
    devopsVisual &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    devopsVisual.addEventListener(
        "pointermove",
        event => {

            const rect =
                devopsVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            devopsVisual.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    devopsVisual.addEventListener(
        "pointerleave",
        () => {

            devopsVisual.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   SKILLS DATA
   ========================================================= */

const skillCategories = [

    {
        title: "Cloud",
        description: "AWS cloud infrastructure and services",
        icon: "fa-solid fa-cloud",

        skills: [

            {
                name: "AWS",
                icon: "fa-brands fa-aws"
            },

            {
                name: "EC2",
                icon: "fa-solid fa-server"
            },

            {
                name: "S3",
                icon: "fa-solid fa-database"
            },

            {
                name: "VPC",
                icon: "fa-solid fa-network-wired"
            },

            {
                name: "IAM",
                icon: "fa-solid fa-user-shield"
            },

            {
                name: "RDS",
                icon: "fa-solid fa-table"
            },

            {
                name: "Load Balancer",
                icon: "fa-solid fa-scale-balanced"
            },

            {
                name: "Auto Scaling",
                icon: "fa-solid fa-arrows-up-down"
            },

            {
                name: "CloudWatch",
                icon: "fa-solid fa-chart-line"
            }

        ]
    },


    {
        title: "DevOps",
        description: "Automation, containers and CI/CD",
        icon: "fa-solid fa-gears",

        skills: [

            {
                name: "Git",
                icon: "fa-brands fa-git-alt"
            },

            {
                name: "GitHub",
                icon: "fa-brands fa-github"
            },

            {
                name: "Jenkins",
                icon: "fa-solid fa-gears"
            },

            {
                name: "Docker",
                icon: "fa-brands fa-docker"
            },

            {
                name: "Kubernetes",
                icon: "fa-solid fa-dharmachakra"
            },

            {
                name: "Terraform",
                icon: "fa-solid fa-cubes"
            },

            {
                name: "Ansible",
                icon: "fa-solid fa-bolt"
            },

            {
                name: "CI/CD",
                icon: "fa-solid fa-arrows-rotate"
            }

        ]
    },


    {
        title: "System & Networking",
        description: "Infrastructure and system fundamentals",
        icon: "fa-solid fa-network-wired",

        skills: [

            {
                name: "Linux",
                icon: "fa-brands fa-linux"
            },

            {
                name: "Networking",
                icon: "fa-solid fa-network-wired"
            },

            {
                name: "Terminal",
                icon: "fa-solid fa-terminal"
            },

            {
                name: "Troubleshooting",
                icon: "fa-solid fa-screwdriver-wrench"
            }

        ]
    },


    {
        title: "Programming & Database",
        description: "Programming and data technologies",
        icon: "fa-solid fa-code",

        skills: [

            {
                name: "Python",
                icon: "fa-brands fa-python"
            },

            {
                name: "SQL",
                icon: "fa-solid fa-database"
            },

            {
                name: "MongoDB",
                icon: "fa-solid fa-leaf"
            }

        ]
    }

];


/* =========================================================
   RENDER SKILLS
   ========================================================= */

function renderSkills() {

    if (!skillsContainer) return;

    const fragment =
        document.createDocumentFragment();

    skillCategories.forEach(category => {

        const categoryElement =
            document.createElement("article");

        categoryElement.className =
            "skill-category reveal";


        categoryElement.innerHTML = `

            <div class="skill-category-header">

                <div class="skill-category-icon">

                    <i class="${category.icon}"></i>

                </div>

                <div>

                    <h3>${category.title}</h3>

                    <p>${category.description}</p>

                </div>

            </div>


            <div class="skill-list">

                ${category.skills.map(skill => `

                    <div
                        class="skill-item"
                        title="${skill.name}"
                    >

                        <i class="${skill.icon}"></i>

                        <strong>
                            ${skill.name}
                        </strong>

                    </div>

                `).join("")}

            </div>

        `;

        fragment.appendChild(categoryElement);

    });

    skillsContainer.appendChild(fragment);

}

renderSkills();


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [

    {
        number: "01",
        icon: "fa-solid fa-cloud",
        title: "AWS Cloud Project",
        description:
            "A cloud-focused project demonstrating AWS infrastructure, deployment and practical cloud concepts.",
        technologies:
            ["AWS", "Linux", "Git", "EC2"],
        github: "#",
        live: "#"
    },


    {
        number: "02",
        icon: "fa-brands fa-linux",
        title: "Linux Project",
        description:
            "A practical Linux project focused on command-line operations, system administration and troubleshooting.",
        technologies:
            ["Linux", "Shell", "Networking"],
        github: "#",
        live: "#"
    },


    {
        number: "03",
        icon: "fa-solid fa-gears",
        title: "CI/CD Automation Project",
        description:
            "A DevOps workflow exploring Git, Jenkins, Docker and automated application delivery.",
        technologies:
            ["Git", "GitHub", "Jenkins", "Docker"],
        github: "#",
        live: "#"
    },


    {
        number: "04",
        icon: "fa-solid fa-cubes",
        title: "Cloud Deployment Project",
        description:
            "A deployment-focused project combining containers, infrastructure and cloud technologies.",
        technologies:
            ["Docker", "Kubernetes", "Terraform", "AWS"],
        github: "#",
        live: "#"
    }

];


/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects() {

    if (!projectsGrid) return;

    const fragment =
        document.createDocumentFragment();

    projects.forEach(project => {

        const card =
            document.createElement("article");

        card.className =
            "project-card reveal";


        card.innerHTML = `

            <span class="project-number">
                PROJECT ${project.number}
            </span>


            <div class="project-icon">

                <i class="${project.icon}"></i>

            </div>


            <h3>
                ${project.title}
            </h3>


            <p>
                ${project.description}
            </p>


            <div class="project-tech">

                ${project.technologies.map(
                    technology =>
                        `<span>${technology}</span>`
                ).join("")}

            </div>


            <div class="project-links">

                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-github"></i>
                    GitHub
                </a>


                <a
                    href="${project.live}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                </a>

            </div>

        `;

        fragment.appendChild(card);

    });

    projectsGrid.appendChild(fragment);

}

renderProjects();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


function observeRevealElements() {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            revealObserver.observe(element);

        });

}

observeRevealElements();


/* =========================================================
   CONTACT FORM
   ========================================================= */

function setError(fieldId, message) {

    const errorElement =
        document.getElementById(
            `${fieldId}Error`
        );

    if (errorElement) {
        errorElement.textContent =
            message;
    }

}


function clearErrors() {

    [
        "name",
        "email",
        "phone",
        "message"
    ].forEach(field => {

        setError(field, "");

    });

}


function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


function validatePhone(phone) {

    const cleaned =
        phone.replace(/[\s\-()+]/g, "");

    return /^\d{10,15}$/.test(cleaned);

}


function validateContactForm() {

    clearErrors();

    let valid = true;


    const name =
        document.getElementById("name")
            ?.value.trim();


    const email =
        document.getElementById("email")
            ?.value.trim();


    const phone =
        document.getElementById("phone")
            ?.value.trim();


    const message =
        document.getElementById("message")
            ?.value.trim();


    /* NAME */

    if (!name) {

        setError(
            "name",
            "Please enter your name."
        );

        valid = false;

    } else if (name.length < 2) {

        setError(
            "name",
            "Name must contain at least 2 characters."
        );

        valid = false;

    }


    /* EMAIL */

    if (!email) {

        setError(
            "email",
            "Please enter your email."
        );

        valid = false;

    } else if (!validateEmail(email)) {

        setError(
            "email",
            "Please enter a valid email address."
        );

        valid = false;

    }


    /* PHONE */

    if (!phone) {

        setError(
            "phone",
            "Please enter your phone number."
        );

        valid = false;

    } else if (!validatePhone(phone)) {

        setError(
            "phone",
            "Please enter a valid phone number."
        );

        valid = false;

    }


    /* MESSAGE */

    if (!message) {

        setError(
            "message",
            "Please enter a message."
        );

        valid = false;

    } else if (message.length < 10) {

        setError(
            "message",
            "Message must contain at least 10 characters."
        );

        valid = false;

    }


    return valid;

}


/* =========================================================
   CHARACTER COUNTER
   ========================================================= */

messageInput?.addEventListener(
    "input",
    () => {

        const length =
            messageInput.value.length;

        characterCount.textContent =
            `${length} / 1000`;

    }
);


/* =========================================================
   CONTACT FORM SUBMIT
   ========================================================= */

contactForm?.addEventListener(
    "submit",
    async event => {

        event.preventDefault();

        formStatus.textContent = "";
        formStatus.className = "form-status";


        const valid =
            validateContactForm();


        if (!valid) {

            formStatus.textContent =
                "Please correct the highlighted fields.";

            formStatus.classList.add("error");

            return;

        }


        /*
         * IMPORTANT:
         *
         * This frontend is ready for an email service
         * such as Formspree / EmailJS / custom backend.
         *
         * Do not fake a successful email submission.
         *
         * Add your real endpoint here when configured.
         */

        const FORM_ENDPOINT = "";


        if (!FORM_ENDPOINT) {

            formStatus.textContent =
                "Form validated successfully. Connect an email service to receive this message.";

            formStatus.classList.add("success");

            return;

        }


        submitButton.classList.add("loading");


        try {

            const formData =
                new FormData(contactForm);


            const response =
                await fetch(
                    FORM_ENDPOINT,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Message could not be sent."
                );

            }


            contactForm.reset();

            characterCount.textContent =
                "0 / 1000";

            clearErrors();


            formStatus.textContent =
                "Message sent successfully!";

            formStatus.classList.add(
                "success"
            );


        } catch (error) {

            formStatus.textContent =
                "Something went wrong. Please try again later.";

            formStatus.classList.add(
                "error"
            );

        } finally {

            submitButton.classList.remove(
                "loading"
            );

        }

    }
);


/* =========================================================
   BACK TO TOP
   ========================================================= */

function updateBackToTop() {

    if (window.scrollY > 600) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}

window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


backToTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   TECH NODE INTERACTION
   ========================================================= */

document
    .querySelectorAll(".tech-node")
    .forEach(node => {

        node.addEventListener(
            "mouseenter",
            () => {

                const tech =
                    node.dataset.tech;

                node.setAttribute(
                    "aria-label",
                    tech
                );

            }
        );

    });


/* =========================================================
   PROJECT CARD TILT
   ========================================================= */

if (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    document.addEventListener(
        "mousemove",
        event => {

            const card =
                event.target.closest(
                    ".project-card"
                );

            if (!card) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - 0.5) * -4;

            const rotateY =
                ((x / rect.width) - 0.5) * 4;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            const card =
                event.target.closest(
                    ".project-card"
                );

            if (!card) return;


            if (
                event.relatedTarget &&
                card.contains(event.relatedTarget)
            ) {
                return;
            }


            card.style.transform = "";

        }
    );

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            navMenu?.classList.remove("open");

            menuToggle?.classList.remove(
                "active"
            );

            menuToggle?.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   RESIZE SAFETY
   ========================================================= */

let resizeTimer;

window.addEventListener(
    "resize",
    () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            if (
                window.innerWidth > 760
            ) {

                navMenu?.classList.remove(
                    "open"
                );

                menuToggle?.classList.remove(
                    "active"
                );

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }, 200);

    }
);

/* =========================================================
   CONTINUOUS WORD BY WORD HERO ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const roleText = document.querySelector(".role-text");

    if (!roleText) return;

    const words = roleText.textContent.trim().split(/\s+/);

    roleText.innerHTML = "";

    words.forEach(word => {

        const span = document.createElement("span");

        span.className = "word";
        span.textContent = word;

        roleText.appendChild(span);

    });

});