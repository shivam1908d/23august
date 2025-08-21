 // Play background music automatically (with user interaction requirement)
        document.addEventListener('click', function() {
            const music = document.getElementById('bgMusic');
            music.volume = 0.1;
            music.play().catch(e => console.log("Autoplay prevented"));
// ---------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
        // window.addEventListener("load", () => {
        //     const music = document.getElementById("bgMusic");
        //     music.volume= 0.3;
        //     music.muted = false;
        //     music.play().catch(err => console.log("Autoplay Blocked:",));
        
            
            // Create some decorative elements
            createDecorations();
        }, { once: true });
        
        // Animation for floating media
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(10deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create decorative elements (hearts, balloons)
        function createDecorations() {
            const container = document.getElementById('decorations-container');
            const types = ['heart', 'balloon', 'heart', 'balloon', 'heart'];
            
            for (let i = 0; i < 30; i++) {
                const decoration = document.createElement('div');
                decoration.className = 'decoration ' + types[Math.floor(Math.random() * types.length)];
                
                // Random position
                decoration.style.left = Math.random() * 100 + '%';
                decoration.style.top = Math.random() * 100 + '%';
                
                // Random animation
                const duration = 10 + Math.random() * 20;
                decoration.style.animation = `float-up ${duration}s linear infinite ${Math.random() * 20}s`;
                
                container.appendChild(decoration);
            }
        }
        
        // Make elements interactive
        document.querySelectorAll('.floating-media').forEach(media => {
            media.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
                
                // Add wiggle effect
                const wiggleInterval = setInterval(() => {
                    this.style.transform = `rotate(${Math.sin(Date.now() / 200) * 5}deg)`;
                }, 50);
                
                media.addEventListener('mouseleave', function() {
                    this.style.animationPlayState = 'running';
                    clearInterval(wiggleInterval);
                    this.style.transform = '';
                }, { once: true });
            });
        });