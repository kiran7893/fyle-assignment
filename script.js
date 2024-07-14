document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Here you would typically send the form data to a server
  console.log("Form submitted");
  // Close the modal
  var modal = bootstrap.Modal.getInstance(
    document.getElementById("contactModal")
  );
  modal.hide();
  // Redirect to random.html
  setTimeout(function () {
    window.location.href = "home.html";
  }, 500); // 500ms delay to allow modal to close
});

$(document).ready(function () {
  let currentIndex = 0;
  const items = $(".service-item");
  const totalItems = items.length;
  const dotsContainer = $(".dots");

  function showItems(startIndex) {
    items.hide();
    for (let i = startIndex; i < startIndex + 4; i++) {
      $(items[i % totalItems]).show();
    }
    updateDots(startIndex / 4);
  }

  function updateDots(activeIndex) {
    dotsContainer.empty();
    for (let i = 0; i < Math.ceil(totalItems / 4); i++) {
      const dot = $("<span>").addClass("dot");
      if (i === activeIndex) {
        dot.addClass("active");
      }
      dotsContainer.append(dot);
    }
  }

  showItems(currentIndex);

  $(".dots").on("click", ".dot", function () {
    const index = $(this).index();
    currentIndex = index * 4;
    showItems(currentIndex);
  });
});

$(document).ready(function () {
  const images = [
    "./assets/image5.png",
    "./assets/image1.png",
    "./assets/image6.png",
  ];
  let currentIndex = 0;

  const content = {
    "./assets/image5.png": {
      title: "Genderless Kei - Japan's Hot",
      description:
        "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
      highlight: {
        title: "Better Strategy & Quality",
        description:
          "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
      },
      subtitle: "Genderless Kei - Japan's Hot",
      subdescription:
        "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of",
    },
    "./assets/image1.png": {
      title: "Innovative Design Concepts",
      description:
        "Exploring cutting-edge design trends and their impact on modern aesthetics.",
      highlight: {
        title: "User-Centric Approach",
        description:
          "Focusing on creating intuitive and engaging user experiences across all platforms.",
      },
      subtitle: "Sustainable Solutions",
      subdescription:
        "Implementing eco-friendly practices in our design and development processes.",
    },
    "./assets/image6.png": {
      title: "Design Concepts",
      description:
        "Leveraging the latest technologies to create powerful and efficient solutions.",
      highlight: {
        title: "Integration",
        description:
          "Incorporating  to enhance product capabilities and user interactions.",
      },
      subtitle: "Global Collaboration",
      subdescription:
        "Working with international teams to bring diverse perspectives to our projects.",
    },
  };

  function updateContent(imageSrc) {
    const newContent = content[imageSrc];
    $("#projectContent").html(`
            <h4>${newContent.title}</h4>
            <p>${newContent.description}</p>
            <div class="highlight-box">
                <h5>${newContent.highlight.title}</h5>
                <p>${newContent.highlight.description}</p>
            </div>
            <h4>${newContent.subtitle}</h4>
            <p>${newContent.subdescription}</p>
        `);
  }

  $("#projectImage").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    const newImage = images[currentIndex];
    $(this).attr("src", newImage);
    updateContent(newImage);
  });
});

$(document).ready(function () {
  $(".stat-card").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );
});

$(document).ready(function () {
  $("#testimonialCarousel").carousel({
    interval: 5000,
  });
});
