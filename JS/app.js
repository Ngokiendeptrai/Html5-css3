
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('username-error').innerHTML = '';
    document.getElementById('password-error').innerHTML = '';
    if (username === '') {
        document.getElementById('username-error').innerHTML = 'Vui lòng nhập tài khoản.';
    }
    if (password === '') {
        document.getElementById('password-error').innerHTML = 'Vui lòng nhập mật khẩu.';
    }
    if (username !== '' && password !== '') {
        alert('Đăng nhập thành công!');
    }
});
