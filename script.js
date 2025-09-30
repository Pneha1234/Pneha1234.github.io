document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    // Example: Dynamically load projects
    const projectsData = [
        // Add more project objects here
    ];
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>#${tech}</span>`).join('')}
                </div>
                <a href="${project.githubLink}" target="_blank" class="btn btn-primary">View on GitHub <i class="fas fa-external-link-alt"></i></a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
    // Books data
    const booksData = [
        // Add more books
    ];
    const bookshelfGrid = document.querySelector('.bookshelf-grid');
    if (bookshelfGrid) {
        booksData.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <img src="${book.cover}" alt="${book.title} Cover" onerror="this.style.display='none';this.parentNode.querySelector('.book-icon').style.display='inline-block';">
                <span class="book-icon" style="display:none;font-size:48px;color:#3f51b5;margin-bottom:20px;"><i class="fas fa-book"></i></span>
                <h3>${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-category">Category: #${book.category}</p>
                <a href="${book.link}" target="_blank" class="btn btn-tertiary">View Details <i class="fas fa-external-link-alt"></i></a>
            `;
            bookshelfGrid.appendChild(bookCard);
        });
    }

    // Articles/Insights data
    const articlesData = [
        {
            title: "Building a Scalable REST API with Node.js",
            platform: "Medium",
            date: "August 15, 2023",
            link: "https://medium.com/@Pneha1234/your-article-slug-1"
        },
        {
            title: "5 Tips for Junior Developers Starting Their Career",
            platform: "LinkedIn Newsletter",
            date: "July 20, 2023",
            link: "https://www.linkedin.com/pulse/your-newsletter-article-link-2"
        }
        // Add more articles
    ];
    const paperGrid = document.querySelector('.paper-grid');
    if (paperGrid) {
        articlesData.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('paper-card');
            articleCard.innerHTML = `
                <h3>${article.title}</h3>
                <p class="paper-author">Published on ${article.platform}</p>
                <p class="paper-publication">${article.date}</p>
                <a href="${article.link}" target="_blank" class="btn btn-tertiary">Read Article <i class="fas fa-external-link-alt"></i></a>
            `;
            paperGrid.appendChild(articleCard);
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const sender = contactForm.sender.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();
            const statusDiv = document.getElementById('contact-status');
            // Simulate sending (replace with backend integration for real email)
            if (sender && subject && message) {
                statusDiv.textContent = 'Thank you! Your message has been sent.';
                statusDiv.style.color = '#28a745';
                contactForm.reset();
            } else {
                statusDiv.textContent = 'Please fill in all fields.';
                statusDiv.style.color = '#e67e22';
            }
        });
    }
});