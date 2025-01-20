const texts = ["computer engineer", "web developer" ];
        let idx = 0;
        let txtNum = 0;
        let reverse = false;
        const speed = 300;
        const waitAtTheEnd = 2; 
        const data = document.getElementById("auto_text");
        
        
        const animateText = setInterval(() => {
            console.clear();
        
            if (!reverse) {
                    
                        console.log(texts[txtNum].slice(0, idx));
                        data.innerHTML = texts[txtNum].slice(0, idx);
                        idx++;
        
                if (idx > texts[txtNum].length + waitAtTheEnd) {
                    reverse = true; // Yazı tamamlandıktan sonra tersine döner
                }
            } else {
                console.log(texts[txtNum].slice(0, idx));
                data.innerHTML = texts[txtNum].slice(0, idx);
                idx--;
        
                if (idx < 0) {
                    idx = 0;
                    reverse = false; // Silme işlemi tamamlandıktan sonra tekrar yazmaya başlar
                    txtNum = (txtNum + 1) % texts.length; // Bir sonraki metne geçiş yapar
                }
        
        
            }
        }, speed);