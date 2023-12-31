<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type, origin");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['message'])) {
  echo json_encode(['status' => 'success', 'message' => 'Message received: ' . $data['message']]);
} else {
  echo json_encode(['status' => 'error', 'message' => 'No message received']);
}