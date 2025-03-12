// Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.createElement("div")
  loadingScreen.className = "loading-screen"

  const loader = document.createElement("div")
  loader.className = "loader"

  loadingScreen.appendChild(loader)
  document.body.appendChild(loadingScreen)

  // Hide loading screen after content is loaded
  setTimeout(() => {
    loadingScreen.classList.add("fade-out")
    setTimeout(() => {
      loadingScreen.remove()
    }, 500)
  }, 1500)

  // Create background elements
  createBackgroundElements()

  // Create particles
  createParticles()

  // Initialize animations
  initAnimations()

  // Add scroll to top button
  addScrollToTopButton()
})

// Create floating background elements
function createBackgroundElements() {
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const bgElement1 = document.createElement("div")
    bgElement1.className = "bg-element bg-element-1"

    const bgElement2 = document.createElement("div")
    bgElement2.className = "bg-element bg-element-2"

    section.appendChild(bgElement1)
    section.appendChild(bgElement2)
  })
}

// Create particle effect for hero section
function createParticles() {
  const heroSection = document.querySelector(".hero")
  const particlesContainer = document.createElement("div")
  particlesContainer.className = "particles"

  // Create 50 particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("span")
    particle.className = "particle"

    // Random position
    const posX = Math.random() * 100
    const posY = Math.random() * 100

    // Random size
    const size = Math.random() * 5 + 2

    // Random animation delay
    const delay = Math.random() * 5

    particle.style.left = `${posX}%`
    particle.style.top = `${posY}%`
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.animationDelay = `${delay}s`

    particlesContainer.appendChild(particle)
  }

  heroSection.appendChild(particlesContainer)
}

// Initialize animations for elements
function initAnimations() {
  // Animate elements when they come into view
  const animateOnScroll = () => {
    // Section titles
    document.querySelectorAll(".section-title").forEach((title) => {
      if (isElementInViewport(title) && !title.classList.contains("animate")) {
        title.classList.add("animate")
      }
    })

    // About content
    const aboutContent = document.querySelector(".about-content")
    if (aboutContent && isElementInViewport(aboutContent) && !aboutContent.classList.contains("animate")) {
      aboutContent.classList.add("animate")

      // Animate info items with delay
      document.querySelectorAll(".info-item").forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate")
        }, 300 * index)
      })
    }

    // Skills content
    const skillsContent = document.querySelector(".skills-content")
    if (skillsContent && isElementInViewport(skillsContent) && !skillsContent.classList.contains("animate")) {
      skillsContent.classList.add("animate")

      // Animate skill items with delay
      document.querySelectorAll(".skill-item").forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate")
        }, 200 * index)
      })
    }

    // Project filters
    const projectFilters = document.querySelector(".project-filters")
    if (projectFilters && isElementInViewport(projectFilters) && !projectFilters.classList.contains("animate")) {
      projectFilters.classList.add("animate")
    }

    // Project cards
    document.querySelectorAll(".project-card").forEach((card, index) => {
      if (isElementInViewport(card) && !card.classList.contains("animate")) {
        setTimeout(() => {
          card.classList.add("animate")
        }, 200 * index)
      }
    })

    // Contact content
    const contactContent = document.querySelector(".contact-content")
    if (contactContent && isElementInViewport(contactContent) && !contactContent.classList.contains("animate")) {
      contactContent.classList.add("animate")

      // Animate contact items with delay
      document.querySelectorAll(".contact-item").forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate")
        }, 300 * index)
      })

      // Animate social links with delay
      document.querySelectorAll(".social-link").forEach((link, index) => {
        setTimeout(() => {
          link.classList.add("animate")
        }, 200 * index)
      })

      // Animate contact form
      const contactForm = document.querySelector(".contact-form")
      if (contactForm) {
        setTimeout(() => {
          contactForm.classList.add("animate")
        }, 500)
      }
    }
  }

  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
  }

  // Initial check for animations
  animateOnScroll()

  // Check for animations on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Typing animation for hero text
  const heroTitle = document.querySelector(".hero-text h2")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 1000)
  }
}

// Add scroll to top button
function addScrollToTopButton() {
  const scrollTopBtn = document.createElement("div")
  scrollTopBtn.className = "scroll-top"
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'

  document.body.appendChild(scrollTopBtn)

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("active")
    } else {
      scrollTopBtn.classList.remove("active")
    }
  })

  // Scroll to top when clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Navigation menu toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const navLinksItems = document.querySelectorAll(".nav-links li")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close menu when clicking on a nav link
navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      })
    }
  })
})

// Project filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    projectCards.forEach((card) => {
      card.classList.remove("animate")

      setTimeout(() => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
          setTimeout(() => {
            card.classList.add("animate")
          }, 100)
        } else {
          card.style.display = "none"
        }
      }, 300)
    })
  })
})

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-progress")

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (barPosition < screenPosition) {
      const width = bar.parentElement.previousElementSibling.lastElementChild.textContent
      bar.style.width = width
    }
  })
}

// Contact form submission
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log("Form submitted:", { name, email, subject, message })

    // Show success message (in a real application)
    const successMessage = document.createElement("div")
    successMessage.className = "success-message"
    successMessage.textContent = "Thank you for your message! I will get back to you soon."
    successMessage.style.color = "var(--primary-color)"
    successMessage.style.marginTop = "15px"
    successMessage.style.padding = "10px"
    successMessage.style.borderRadius = "var(--border-radius)"
    successMessage.style.backgroundColor = "rgba(0, 230, 118, 0.1)"
    successMessage.style.textAlign = "center"

    contactForm.appendChild(successMessage)

    // Reset form
    contactForm.reset()

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove()
    }, 5000)
  })
}

// Header scroll effect
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 10, 10, 0.95)"
    header.style.padding = "10px 0"
  } else {
    header.style.background = "rgba(10, 10, 10, 0.9)"
    header.style.padding = "20px 0"
  }

  // Animate skill bars when scrolling
  animateSkillBars()
})

// Initialize animations on page load
window.addEventListener("load", () => {
  // Animate skill bars on page load
  setTimeout(animateSkillBars, 1000)
})

// Parallax effect for hero section
const heroSection = document.querySelector(".hero")
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset
  if (heroSection) {
    heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
  }
})

// Add hover effect to project cards
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = ""
  })
})

