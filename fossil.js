
function ShowAndHide() {
    var x = document.getElementById('hiden_read');
    const rotated = document.getElementById('rotated');

    if (x.style.display == 'none') {
        document.getElementById('footer_btn_read_moreless').innerHTML="READ LESS";
        x.style.display = 'block';
        rotated.style.transform = 'rotate(180deg)';
    } else {
        x.style.display = 'none';
        rotated.style.transform = 'rotate(0deg)';
        document.getElementById('footer_btn_read_moreless').innerHTML="READ MORE";
    }
}

