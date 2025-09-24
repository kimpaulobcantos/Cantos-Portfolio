function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


function toggleSkillDescription(element) {
    const container = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    
    element.classList.toggle('active');
    container.classList.toggle('active');
    
    
    if (element.classList.contains('active')) {
        icon.textContent = '×';
    } else {
        icon.textContent = '+';
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        document.querySelector('.nav-links').classList.remove('active');
    });
});


function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}


const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

// Photo upload functionality
const photoUpload = document.getElementById('photo-upload');
const profilePhoto = document.getElementById('profile-img');

profilePhoto.addEventListener('click', () => {
    photoUpload.click();
});

photoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePhoto.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
    
    
    e.target.reset();
}


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.backgroundColor = '';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(animateSkillBars, 500);
});
