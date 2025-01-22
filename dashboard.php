<?php
session_start();
include('db_config.php');

// Ensure user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}

$user_id = $_SESSION['user_id'];
$stmt = $pdo->prepare("SELECT * FROM events WHERE user_id = ?");
$stmt->execute([$user_id]);
$events = $stmt->fetchAll();
?>
<h2>Your Events</h2>
<?php foreach ($events as $event) { ?>
    <div>
        <h3><?php echo htmlspecialchars($event['title']); ?></h3>
        <p><?php echo htmlspecialchars($event['description']); ?></p>
        <p>Date: <?php echo htmlspecialchars($event['date']); ?></p>
        <p>Location: <?php echo htmlspecialchars($event['location']); ?></p>
        <a href="manage_event.php?id=<?php echo $event['id']; ?>">Manage Event</a>
    </div>
<?php } ?>
