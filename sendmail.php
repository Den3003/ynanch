<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);


        // От кого письмо 
    $mail->setFrom('maksimfrigad@gmail.com', 'Maksim!!!!!');

        // Кому письмо
    $mail->addAddress('denisbormusov@gmail.com');

        // Тема письма
    $mail->Subject = 'Привет! это "Maksim"';


    
    
        // Тело письма

        $body = '<h1>Hello this is super mail</h1>';

        if(trim(!empty($_POST['name']))){
            $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
        }
        if(trim(!empty($_POST['email']))){
            $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
        }
        if(trim(!empty($_POST['message']))){
            $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
        }



        $mail->Body = $body;


    if(!$mail->send()) {
        $message = 'Osibka';
    } else {
        $message = 'Dannye otpravleny';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    ?>
    