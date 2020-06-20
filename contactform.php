<?php
    
    if (isset($_POST['email']) && $_POST['email'] != '') {

        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

            $name = $_POST['name'];
            $subject = $_POST['subject'];
            $mailFrom = $_POST['mail'];
            $message = $_POST['message'];

            $mailTo = "kennakomea@famous-house.com";
            $headers = "From: " . $mailFrom;
            $txt = "You have received an e-mail from " . $name . ".\n\n" . $message;

            mail($mailTo, $subject, $txt, $headers);
        
             
        }
    }
?>