<?php

require_once "PHPMailerAutoload.php";

$emailFrom = 'Contacts@rvrproject.ru';
$emailFromName = 'Заявка с сайта RVR';
$emailTo = array('Contacts@rvrproject.ru');

$result = array();

if(isset($_POST['phone'])) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);

    $errorFields = array();
    $wrongMessage = '';

    if(strlen($name) < 2) {
        $errorFields[] = 'name';
        $wrongMessage = 'Имя не указано';
    }

    if($cemail || $phone) {
        if($cemail && !filter_var($cemail, FILTER_VALIDATE_EMAIL)) {
            $errorFields[] = 'email';
        }
        if($phone && !preg_match("/^[0-9\\+\\-\\(\\)\\ ]+$/", $phone)) {
            $errorFields[] = 'phone';
        }
    } else {
        $errorFields[] = 'phone';
        $errorFields[] = 'email';
    }

    if(count($errorFields)) {
        $result = array(
            'status' => 'wrong',
            'fields' => $errorFields,
            'message' => $wrongMessage
        );
    } else {
        $mail = new PHPMailer();

        //$mail->isSMTP();

        $mail->Host = 'localhost';

        $mail->From = $emailFrom;
        $mail->FromName = $emailFromName;

        if(is_array($emailTo)) {
                foreach($emailTo as $email) {
                $mail->addAddress($email);
            }
        } else {
                $mail->addAddress($emailTo);
        }

        $mail->CharSet = 'utf-8';

        $mail->Subject = 'Заявка из формы RVR';
        $mail->Body = "Имя: {$name}\r\nТелефон: {$phone}";

        if($mail->send()) {
            $result = array(
                'status' => 'success',
                'message' => 'Ваша заявка успешно отправлена. Менеджер свяжется с вами в ближайшее время.'
            );
        } else {
            $result = array(
                'status' => 'error',
                'message' => "Ошибка! {$mail->ErrorInfo}"
            );
        }

        $result = array(
            'status' => 'success',
            'message' => 'Ваша заявка успешно отправлена. Менеджер свяжется с вами в ближайшее время.'
        );
    }
}
echo json_encode($result);