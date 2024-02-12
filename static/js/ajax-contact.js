// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // 创建一个 FormData 对象
//     var formData = new FormData(this);

//     // 发送AJAX请求到服务器
//     fetch('../php/contact.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log(data); // 可以在这里显示发送成功或失败的消息
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });


//使用EmailJS服务：https://dashboard.emailjs.com/admin
//emailjs.init('5W5EWGF0TVHVBywIp');
//立即执行函数 (IIFE - Immediately Invoked Function Expression)
//浏览器查到这段代码时会立即执行，并且其内部的变量不会污染全局作用域。
//这种方式在需要避免全局作用域污染时非常有用，特别是在复杂的应用程序中，以防止变量冲突。
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('5W5EWGF0TVHVBywIp');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_ajudv8j', 'contact_form', this)
            .then(function() {
                console.log('CONTACT MESSAGE SEND SUCCESSFULLY!');
                //显示在画面上
                const strOK = 'Your message has been successfully sent. Thank you for getting in touch, I will contact you as soon as possible.';
                document.querySelector('.form-message').innerText = strOK;
            }, function(error) {
                console.log('CONTACT MESSAGE SEND FAILED. ', error);
                //显示在画面上
                const strNG = 'Your message failed to send. Please try again later.';
                document.querySelector('.form-message').innerText = strNG;
            });
    });
}