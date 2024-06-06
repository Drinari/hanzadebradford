<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'info@hanzadebradford.co.uk';
    $subject = 'New message from '.$name;
    $body = 'Name: '.$name."\n";
    $body .= 'Email: '.$email."\n";
    $body .= 'Message: '.$message;
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Sorry, there was an error sending your message.';
    }
}
?>
