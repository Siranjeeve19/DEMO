// Modal functionality
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
        
        // Simple animation for stats counting (for demo purposes)
        function animateValue(id, start, end, duration) {
            let obj = document.getElementById(id);
            let range = end - start;
            let increment = end > start ? 1 : -1;
            let stepTime = Math.abs(Math.floor(duration / range));
            let timer = setInterval(function() {
                start += increment;
                obj.textContent = start.toLocaleString();
                if (start == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
        
        // Start animations when page loads
        window.onload = function() {
            // Simulate stats counting
            setTimeout(() => animateValue('treesPlanted', 0, 12458, 2000), 500);
            setTimeout(() => animateValue('creditsGenerated', 0, 2845, 2000), 1000);
            setTimeout(() => animateValue('activeProjects', 0, 24, 1000), 1500);
            setTimeout(() => animateValue('organizations', 0, 18, 1000), 2000);
        };