document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logos-container img');
    
    logos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        logo.addEventListener('mouseout', () => {
            logo.style.boxShadow = 'none';
        });
    });
});
