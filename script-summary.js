// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动动画
    addScrollAnimations();
    
    // 卡片悬停效果
    addCardHoverEffects();
    
    // 技能标签动画
    addSkillTagAnimations();
});

// 添加滚动动画
function addScrollAnimations() {
    const sections = document.querySelectorAll('.info-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// 卡片悬停效果
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 20px rgba(66, 153, 225, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });
    });
}

// 技能标签动画
function addSkillTagAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.opacity = 0;
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            tag.style.opacity = 1;
            tag.style.transform = 'scale(1)';
        }, 100 * index);
    });
}

// 添加粒子效果
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
}

// 调用粒子效果
createParticles();

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
    .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }
    
    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(66, 153, 225, 0.5);
        border-radius: 50%;
        animation: float 15s infinite linear;
    }
    
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);