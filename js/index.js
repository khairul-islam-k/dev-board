let taskAssigned = 0;
// mobile button issue
document.getElementById('btn-mobile').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('mobile-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-mobile').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-mobile').setAttribute('disabled', true);
})

// Add Dark Mode
document.getElementById('btn-dark').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('dark-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-dark').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-dark').setAttribute('disabled', true);
})

// optimize Home Page
document.getElementById('btn-home-page').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('home-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-home-page').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-home-page').setAttribute('disabled', true);
})

// Add new emoji
document.getElementById('btn-emoji').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('emoji-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-emoji').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-emoji').setAttribute('disabled', true);
})

// Integrate OpenAI API
document.getElementById('btn-api').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('api-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-api').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-api').setAttribute('disabled', true);
})

//Improve job searching 
document.getElementById('btn-job').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    taskAssigned += 1;

    const history = document.getElementById('history');
    const head = document.getElementById('job-head').innerText;
    const p = document.createElement('p');
    p.classList.add('history');
    p.innerText = 'You have complete The Task '+ head +' at '+ new Date().toLocaleString();
    history.appendChild(p);

    document.getElementById('btn-job').style.backgroundColor = 'gray';
    alert('Board update successfully');
    if (taskAssigned === 6) {
        alert('congrates !!! you have completed all current task');
    }
    document.getElementById('btn-job').setAttribute('disabled', true);
})

// Clear History
document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('history').innerHTML ='';
})

// Discover something
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'index2.html';
})

// theme
let count = 0;
document.getElementById('theme').addEventListener('click', function () {
    count += 1;
    switch(count) {
        case 1:
            document.body.style.backgroundColor = 'red';
            break;
            case 2:
                document.body.style.backgroundColor = 'yellow';
                break;
                case 3:
                    document.body.style.backgroundColor = 'blue';
                    break;
                    case 4:
                        document.body.style.backgroundColor = 'green';
                        break;
                        case 5:
                            document.body.style.backgroundColor = 'black';
                            break;
                            case 6:
                                document.body.style.backgroundColor = 'orange';
    }
})