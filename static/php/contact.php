<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // 校验数据...

    // 发送邮件
    $to = 'palmlearnli@gmail.com'; // 接收邮件的地址
    $subject = '来自个人简介网站的新消息';
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email send successfully!";
    } else {
        echo "Something is wrong, resend please.";
    }
}