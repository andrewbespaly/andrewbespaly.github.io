$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});

function copyEmail() {
    const str = document.getElementById('real_email').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
