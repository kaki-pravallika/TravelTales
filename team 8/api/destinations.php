<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

require_once '../config/database.php';

try {
    // Prepare the SQL query
    $stmt = $pdo->prepare("SELECT * FROM destinations");
    $stmt->execute();
    
    // Fetch all destinations
    $destinations = $stmt->fetchAll();
    
    // Return the destinations as JSON
    echo json_encode($destinations);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?> 