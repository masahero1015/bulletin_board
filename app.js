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
    newtweet.innerHTML = `名前：${username.value}<br>${centence.value}`;
    posting.appendChild(newtweet);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '編集';
    editBtn.className = 'editBtn';
    posting.appendChild(editBtn);
    editBtn.addEventListener('click', (e) => {
        const detail = e.target.previousElementSibling;
        const nameSize = detail.innerHTML.indexOf('<br>');
        const sentence = detail.innerHTML;
        if (detail.innerHTML.includes('<br>')) {
            detail.innerHTML = sentence.substring(0, nameSize + 4);
        }
        const detailArea = document.createElement('textarea');
        detailArea.innerHTML = sentence.substring(nameSize + 4);
        detailArea.className = 'detailArea'
        e.target.previousElementSibling.insertAdjacentElement('afterend',detailArea);


        const editComp = document.createElement('button');
        editComp.innerHTML = '編集完了';
        editComp.className = 'editBtn';
        editComp.style.display = 'block';

        e.target.insertAdjacentElement('afterend', editComp);
        e.target.style.display = 'none';
        e.target.nextElementSibling.nextElementSibling.style.display = 'none';


        editComp.addEventListener('click', (c) => {
            const editSentence = c.target.previousElementSibling.previousElementSibling;
            const list = editSentence.previousElementSibling;

            console.log(editSentence.value);
            console.log(list.innerHTML);

            let lisComp = list.innerHTML +  editSentence.value;
            console.log(lisComp);

            list.innerHTML = lisComp;

            e.target.style.display = 'inline';
            e.target.nextElementSibling.nextElementSibling.style.display = 'inline';
            editSentence.remove();
            c.target.remove();
        })
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    posting.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (d) => {
        const deleteLi = d.target.previousElementSibling.previousElementSibling;
        const deleteEdit = d.target.previousElementSibling;
        deleteLi.remove();
        deleteEdit.remove();
        d.target.remove();
    });
});