// mobile button issue
document.getElementById('btn-mobile').addEventListener('click', function () {
    const task = document.getElementById('task');
    task.innerText = task.innerText - 1;
    const devBoard = document.getElementById('dev-board');
    devBoard.innerText = +devBoard.innerText + 1;
    document.getElementById('btn-mobile').style.backgroundColor = 'white';
    document.getElementById('btn-mobile').setAttribute('disabled', true);
})