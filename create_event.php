<?php
session_start();
include('db_config.php');

// Ensure user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $date = $_POST['date'];
    $location = $_POST['location'];
    $ticket_price = $_POST['ticket_price'];
    $privacy = $_POST['privacy'];

    // Insert event into database
    $stmt = $pdo->prepare("INSERT INTO events (user_id, title, description, date, location, ticket_price, privacy) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$user_id, $title, $description, $date, $location, $ticket_price, $privacy]);

    header("Location: dashboard.php");
}
?>

<!-- HTML form for creating an event -->
<form action="create_event.php" method="POST">
    <input type="text" name="title" placeholder="Event Title" required>
    <textarea name="description" placeholder="Event Description" required></textarea>
    <input type="datetime-local" name="date" required>
    <input type="text" name="location" placeholder="Event Location" required>
    <input type="number" name="ticket_price" placeholder="Ticket Price" required>
    <select name="privacy" required>
        <option value="public">Public</option>
        <option value="private">Private</option>
    </select>
    <button type="submit">Create Event</button>
</form>
