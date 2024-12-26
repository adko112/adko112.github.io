<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $secretKey = '6LdXTKYqAAAAALiqHLXnmLBuL7r9GVDCC81eIE51';
    $responseKey = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];

    // Overenie reCAPTCHA cez Google API
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secretKey,
        'response' => $responseKey,
        'remoteip' => $userIP
    ];

    $options = [
        'http' => [
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $resultJson = json_decode($result);

    if ($resultJson->success) {
        echo "Overenie prebehlo úspešne. Formulár bol odoslaný.";
    } else {
        echo "Overenie zlyhalo. Skús znova.";
    }
} else {
    echo "Neplatná požiadavka.";
}
?>
