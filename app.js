const form = document.querySelector('form');
const posting = document.querySelector('ul');

let zero = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById('username');
    const centence = document.getElementById('centence');

    const newtweet = document.createElement('li');
    if (zero === 0) {
        newtweet.className = 'first';
        zero++;
    }

    // 投稿の表示
    newtweet.innerHTML = `名前：${username.value}<br>${centence.value}`;
    posting.appendChild(newtweet);

    // 編集ボタンを作る
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '編集';
    editBtn.className = 'editBtn';
    posting.appendChild(editBtn);

    // 編集ボタンを押した時
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
        detailArea.required = true;
        e.target.previousElementSibling.insertAdjacentElement('afterend', detailArea);

        // 編集完了ボタンを作る
        const editComp = document.createElement('button');
        editComp.innerHTML = '編集完了';
        editComp.className = 'editBtn';
        editComp.style.display = 'block';

        e.target.insertAdjacentElement('afterend', editComp);
        e.target.style.display = 'none';
        e.target.nextElementSibling.nextElementSibling.style.display = 'none';

        const allBtn = document.querySelectorAll('button');
        allBtn.forEach((Btn) => {
            if (Btn !== editComp) {
                Btn.disabled = true;
                username.disabled = true;
                centence.disabled = true;
            }
        })

        // 編集完了ボタンを押した時
        editComp.addEventListener('click', () => {
            const editSentence = e.target.previousElementSibling;
            const list = editSentence.previousElementSibling;

            if (editSentence.value !== '') {
                let lisComp = list.innerHTML + editSentence.value;
                editSentence.previousElementSibling.innerHTML = lisComp;

                e.target.style.display = 'inline';
                e.target.nextElementSibling.nextElementSibling.style.display = 'inline';
                editSentence.remove();
                e.target.nextElementSibling.remove();
            } else {
                alert('編集内容を記入してください');
            }

            allBtn.forEach((Btn) => {
                if (Btn.disabled) {
                    Btn.disabled = false;
                    username.disabled = false;
                    centence.disabled = false;
                }
            })
        })
    });

    // 削除ボタンを作る
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    posting.appendChild(deleteBtn);

    // 削除ボタンを押したとき
    deleteBtn.addEventListener('click', (d) => {
        const lis = document.querySelectorAll('li');

        const targetLis = d.target.previousElementSibling.previousElementSibling;
        const targetEdit = d.target.previousElementSibling;
        const lisArray = Array.from(lis);
        const lisNum = lisArray.indexOf(targetLis);

        if (lisNum === 0 && lis.length > 1) {
            lis[1].className = 'first';
        }
        if (lis.length === 1) {
            zero = 0;
        }

        targetLis.remove();
        targetEdit.remove();
        d.target.remove();
    });

    // 投稿内容をリセット
    username.value = '';
    centence.value = '';
});