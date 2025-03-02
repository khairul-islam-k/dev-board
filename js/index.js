// mobile button issue
document.getElementById('btn-mobile').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;

    const history = document.getElementById('history');
    const head = document.getElementById('mobile-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-mobile').style.backgroundColor = 'gray';
    alert('Board update successfully');
    document.getElementById('btn-mobile').setAttribute('disabled', true);
})

// Add Dark Mode
document.getElementById('btn-dark').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;

    const history = document.getElementById('history');
    const head = document.getElementById('dark-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-dark').style.backgroundColor = 'gray';
    alert('Board update successfully');
    document.getElementById('btn-dark').setAttribute('disabled', true);
})

