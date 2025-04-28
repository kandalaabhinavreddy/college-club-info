<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $student_name = htmlspecialchars($_POST['student_name']);
    $student_email = htmlspecialchars($_POST['student_email']);
    $club_name = htmlspecialchars($_POST['club_name']);
    $issue_description = htmlspecialchars($_POST['issue_description']);

    
    $support_entry = "Name: $student_name\nEmail: $student_email\nClub: $club_name\nIssue: $issue_description\n-------------------------\n";

   
    $file = 'support_issues.txt';
    file_put_contents($file, $support_entry, FILE_APPEND | LOCK_EX);

    
    echo "<h2>Thank you, your issue has been recorded!</h2>";
    echo "<p><a href='support.html'>Go back to Support Page</a></p>";
} else {
    
    echo "Invalid Access.";
}
?>
