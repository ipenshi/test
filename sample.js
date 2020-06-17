let practice = document.querySelector('div');

practice.addEventListener('click',rename);

function rename(){
    let name = prompt('文章を入力してください。※入力後訂正不可');
    if(name !== null) {
        practice.innerHTML += '<br>' + name
    }
};
