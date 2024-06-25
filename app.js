const form = document.querySelector('form');
const posting = document.querySelector('ul');


let zero = 0;
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById('username');
    const centence = document.getElementById('centence');

    const newtweet = document.createElement('li');
    if(zero === 0) {
        newtweet.className = 'first';
        zero++;
    }
    newtweet.innerHTML = `${username.value}<br>${centence.value}`;
    posting.appendChild(newtweet);

    const edietBtn = document.createElement('button');
    edietBtn.innerHTML = '編集';
    edietBtn.className = 'editBtn';
    posting.appendChild(edietBtn);
    edietBtn.addEventListener('click', (e) => {
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    posting.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e) => {
        const deleteLi = e.target.previousElementSibling.previousElementSibling;
        const deleteEdit = e.target.previousElementSibling;
        const deleteE = e.target;
        deleteLi.remove();
        deleteEdit.remove();
        deleteE.remove();
    });
});