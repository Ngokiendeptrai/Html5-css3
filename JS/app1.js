
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('error').innerHTML = '';

    if (username === '') {
        document.getElementById('error').innerHTML = 'Vui lòng nhập tên đăng nhập.';
        return;
    }

    if (email === '') {
        document.getElementById('error').innerHTML = 'Vui lòng nhập email.';
        return;
    }

    if (password === '') {
        document.getElementById('error').innerHTML = 'Vui lòng nhập mật khẩu.';
        return;
    }

    if (confirmPassword === '') {
        document.getElementById('error').innerHTML = 'Vui lòng xác nhận mật khẩu.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('error').innerHTML = 'Mật khẩu xác nhận không khớp.';
        return;
    }   
    alert('Đăng ký thành công!');
});

