
        let incrementCount_1 = 0;
        let decrementCount_1 = 0;
        let incrementCount_2 = 0;
        let decrementCount_2 = 0;
        let incrementCount_3 = 0;
        let decrementCount_3 = 0;
        const display_1 = document.getElementById('display-text-1');
        const display_2 = document.getElementById('display-text-2');
        const display_3 = document.getElementById('display-text-3');

        document.getElementById('btn-increment-1').addEventListener('click', function () {
            if (incrementCount_1 === 33) {
                return alert('Count finished. please start another tasbih')
            }
            incrementCount_1++;
            display_1.innerText = incrementCount_1;
        });
        document.getElementById('btn-decrement-1').addEventListener('click', function () {
            if (incrementCount_1 === 0) {
                return alert('You can not count negative value')
            }
            incrementCount_1--;
            display_1.innerText = incrementCount_1;
        });
        // Alhamdulillah
        document.getElementById('btn-increment-2').addEventListener('click', function () {
            if (incrementCount_2 === 33) {
                return alert('Count finished. please start another tasbih')
            }
            incrementCount_2++;
            display_2.innerText = incrementCount_2;
        });
        document.getElementById('btn-decrement-2').addEventListener('click', function () {
            if (incrementCount_2 === 0) {
                return alert('You can not count negative value')
            }
            incrementCount_2--;
            display_2.innerText = incrementCount_2;
        });
        // Allahu-Akbar
        document.getElementById('btn-increment-3').addEventListener('click', function () {
            if (incrementCount_3 === 34) {
                return alert('Count finished. please start another tasbih')
            }
            incrementCount_3++;
            display_3.innerText = incrementCount_3;
        });
        document.getElementById('btn-decrement-3').addEventListener('click', function () {
            if (incrementCount_3 === 0) {
                return alert('You can not count negative value')
            }
            incrementCount_3--;
            display_3.innerText = incrementCount_3;
        });


        document.getElementById('reset').addEventListener('click', function () {
            display_1.innerText = 0;
            display_2.innerText = 0;
            display_3.innerText = 0;
        })
    