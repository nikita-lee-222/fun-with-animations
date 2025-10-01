let timer;
        function startTimer() 
        {
            const minutes = parseInt(document.getElementById('timeInput').value);
            if (isNaN(minutes) || minutes <= 0) return;

            const totalTime = minutes * 60; 
            const liquid = document.getElementById('liquid');
                liquid.style.height = '100%';

            let elapsed = 0;

            clearInterval(timer);

            timer = setInterval(() => 
                {
                    const remainingTime = totalTime - elapsed;
                    const minutesLeft = Math.floor(remainingTime / 60);
                    const secondsLeft = remainingTime % 60;
                    
                    elapsed++;

                    liquid.style.height = (100 - (elapsed / totalTime) * 100) + '%';

                    document.title = `Воркать ещё: ${minutesLeft}:${secondsLeft.toString().padStart(2, '0')}`;

                    if (elapsed >= totalTime) 
                    {
                        clearInterval(timer);
                        document.title = 'Чилл аут';
                    }
                }, 1000);
        }

        function resetTimer() {
            clearInterval(timer);
            document.getElementById('liquid').style.height = '100%';
            document.title = 'Таймер';
        }