let practice = document.querySelector('div');

practice.addEventListener('click',rename);

function rename(){
    let name = prompt('文章を入力してください。');
    if(name !== '') {
        practice.innerHTML += '<br>' + name;
    }
};
