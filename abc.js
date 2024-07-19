const textArray = ['T','Ô','I',' ','L','À',' ','M','Ộ','T',' ','Đ','Ứ','A',' ','N','G','Ố','C','!','!','!'];
function typeTextarea() {
    const textarea = document.querySelector("textarea");
    const length = textarea.value.length;
    if (length > 0) {
        textarea.value = textArray.slice(0, length).join('');
        if (length >= textArray.length) textarea.value = '';
    }
    setTimeout(typeTextarea, 1);
}