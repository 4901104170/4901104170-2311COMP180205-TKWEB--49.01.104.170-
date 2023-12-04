function lienhe(){
    var name = document.getElementById('name').value;
    var gmail = document.getElementById('gmail').value;
    var phone = document.getElementById('phone').value;

    if (name === "" || gmail === "" || phone=="" ) {
       
         alert('Vui lòng nhập đầy đủ thông tin để liên hệ. Trân trọng cảm ơn!');
        document.getElementById('error-message').style.display = 'block';
    } else {
       
       
        window.location.href = './lienhe.html';
    }
}

function dangky(){
    var name = document.getElementById('name').value;
    var gmail = document.getElementById('gmail').value;
    var phone = document.getElementById('phone').value;
    var place = document.getElementById('place').value;

    if (name === "" || gmail === "" || phone=="" || place=="" ) {
       
         alert('Vui lòng nhập đầy đủ thông tin để đăng ký. Trân trọng cảm ơn!');
        document.getElementById('error-message').style.display = 'block';
    } else {
        alert('Chúc mừng Bạn đã đăng ký thành công! Hẹn gặp Bạn vào buổi tiệc');
    }
}