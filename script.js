document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality
  const slider = document.querySelector(".slider")
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  let currentIndex = 0

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Show the current slide
    slides[index].classList.add("active")

    // Update dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
    dots[index].classList.add("active")

    currentIndex = index
  }

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = Number.parseInt(this.getAttribute("data-index"))
      showSlide(index)
    })
  })

  // Event listeners for prev/next buttons
  prevBtn.addEventListener("click", () => {
    let newIndex = currentIndex - 1
    if (newIndex < 0) {
      newIndex = slides.length - 1
    }
    showSlide(newIndex)
  })

  nextBtn.addEventListener("click", () => {
    let newIndex = currentIndex + 1
    if (newIndex >= slides.length) {
      newIndex = 0
    }
    showSlide(newIndex)
  })

  // Auto slide every 5 seconds
  setInterval(() => {
    let newIndex = currentIndex + 1
    if (newIndex >= slides.length) {
      newIndex = 0
    }
    showSlide(newIndex)
  }, 5000)

  // View Events button functionality
  const viewEventsButtons = document.querySelectorAll(".view-events-btn")
  viewEventsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const clubId = this.getAttribute("data-club")

      // Hide all event lists
      const eventLists = document.querySelectorAll(".events-list")
      eventLists.forEach((list) => {
        list.style.display = "none"
      })

      // Show the selected club's events
      document.getElementById(`${clubId}-events`).style.display = "block"

      // Scroll to events section
      document.getElementById("events").scrollIntoView({ behavior: "smooth" })
    })
  })

  // Register button functionality
  const registerButtons = document.querySelectorAll(".register-btn")
  registerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const eventId = this.getAttribute("data-event")
      const eventSelect = document.getElementById("event-select")

      // Set the selected event in the dropdown
      for (let i = 0; i < eventSelect.options.length; i++) {
        if (eventSelect.options[i].value === eventId) {
          eventSelect.selectedIndex = i
          break
        }
      }

      // Scroll to registration section
      document.getElementById("register").scrollIntoView({ behavior: "smooth" })
    })
  })

  // Form submission
  const registrationForm = document.getElementById("event-registration-form")
  const registrationMessage = document.getElementById("registration-message")

  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // In a real application, you would send this data to the server using AJAX
    // For this example, we'll just simulate a successful registration

    const formData = new FormData(registrationForm)
    const eventName =
      document.getElementById("event-select").options[document.getElementById("event-select").selectedIndex].text

    // Display success message
    registrationMessage.innerHTML = `Thank you, ${formData.get("name")}! You have successfully registered for ${eventName}.`
    registrationMessage.className = "success"
    registrationMessage.style.display = "block"

    // Reset form
    registrationForm.reset()

    // In a real application, you would use AJAX to submit the form:
    /*
        fetch('register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                registrationMessage.innerHTML = data.message;
                registrationMessage.className = 'success';
                registrationForm.reset();
            } else {
                registrationMessage.innerHTML = data.message;
                registrationMessage.className = 'error';
            }
            registrationMessage.style.display = 'block';
        })
        .catch(error => {
            registrationMessage.innerHTML = 'An error occurred. Please try again later.';
            registrationMessage.className = 'error';
            registrationMessage.style.display = 'block';
        });
        */
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a, .footer-links a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" })
    })
  })
})
