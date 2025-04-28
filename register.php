<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $event = $_POST["event"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $student_id = $_POST["student_id"];
    $phone = $_POST["phone"];
    
    // Validate form data (basic validation)
    $errors = array();
    
    if (empty($event)) {
        $errors[] = "Event selection is required";
    }
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($student_id)) {
        $errors[] = "Student ID is required";
    }
    
    if (empty($phone)) {
        $errors[] = "Phone number is required";
    }
    
    // If there are no errors, process the registration
    if (empty($errors)) {
        // In a real application, you would:
        // 1. Connect to a database
        // 2. Check if the student is already registered for the event
        // 3. Insert the registration data into the database
        // 4. Send a confirmation email
        
        // For this example, we'll just return a success message
        $response = array(
            "success" => true,
            "message" => "Thank you, $name! You have successfully registered for the event."
        );
    } else {
        // If there are errors, return them
        $response = array(
            "success" => false,
            "message" => "Registration failed: " . implode(", ", $errors)
        );
    }
    
    // Return the response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// If the form is not submitted via POST, redirect to the home page
header("Location: index.html");
exit;
?>
