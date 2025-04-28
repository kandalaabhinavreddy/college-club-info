<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    function clean_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    $club = clean_input($_POST["club"] ?? '');
    $name = clean_input($_POST["name"] ?? '');
    $email = clean_input($_POST["email"] ?? '');
    $student_id = clean_input($_POST["student_id"] ?? '');
    $phone = clean_input($_POST["phone"] ?? '');
    $why_join = clean_input($_POST["why_join"] ?? '');

    // Validate required fields
    if (empty($club) || empty($name) || empty($email) || empty($student_id) || empty($phone) || empty($why_join)) {
        echo "Error: All fields are required.";
        exit;
    }

    // Example: Save to a file (you can replace this with a database insert)
    $entry = "Club: $club\nName: $name\nEmail: $email\nStudent ID: $student_id\nPhone: $phone\nWhy Join: $why_join\n\n";
    file_put_contents("club_registrations.txt", $entry, FILE_APPEND);

    // Show a success message
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>You have successfully registered for the <strong>$club</strong>.</p>";
} else {
    echo "Invalid request.";
}
?>
