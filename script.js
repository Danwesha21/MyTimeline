const indicators = document.querySelectorAll('.indicator');
const entries = document.querySelectorAll('.timeline-entry');

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const targetYear = indicator.getAttribute('data-target');

        // Remove 'active' class from all indicators and entries
        indicators.forEach(ind => ind.classList.remove('active'));
        entries.forEach(entry => entry.classList.remove('active'));

        // Add 'active' class to the clicked indicator and corresponding timeline entry
        indicator.classList.add('active');
        
        // Use correct selector syntax for targeting the timeline entry
        document.querySelector(`.timeline-entry[data-year="${targetYear}"]`).classList.add('active');
    });
});
