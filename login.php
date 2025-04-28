<?php
// Get form input
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Load users from JSON file
$users = json_decode(file_get_contents('users.json'), true);

// Check credentials
$valid = false;
foreach ($users as $user) {
    if ($user['username'] === $username && $user['password'] === $password) {
        $valid = true;
        break;
    }
}

// Display result
if ($valid) {
 header("location:main.html");
 exit;
  
}
else {
    echo "<h2>Invalid username or password. Please <a href='index.html'>try again</a>.</h2>";
}
?>