<?php

$directory = __DIR__ . '/public/images/memories/';

// Define file patterns for photos and videos
$photoPatterns = ['*.jpg', '*.jpeg', '*.png', '*.gif'];
$videoPatterns = ['*.mp4', '*.mov', '*.avi', '*.mkv', '*.webm'];

// Get all files
$photoFiles = [];
$videoFiles = [];

foreach ($photoPatterns as $pattern) {
    $photoFiles = array_merge($photoFiles, glob($directory . $pattern));
}

foreach ($videoPatterns as $pattern) {
    $videoFiles = array_merge($videoFiles, glob($directory . $pattern));
}

// Sort files by modification time to maintain order
usort($photoFiles, function($a, $b) {
    return filemtime($a) - filemtime($b);
});

usort($videoFiles, function($a, $b) {
    return filemtime($a) - filemtime($b);
});

$renamedCount = 0;
$skippedCount = 0;

// Rename photos
foreach ($photoFiles as $index => $file) {
    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    $newName = $directory . 'memory-' . ($index + 1) . '.' . $extension;
    
    // Skip if the file is already named correctly
    if (basename($file) === basename($newName)) {
        $skippedCount++;
        continue;
    }
    
    if (rename($file, $newName)) {
        $renamedCount++;
        echo "Renamed photo: " . basename($file) . " -> " . basename($newName) . "\n";
    } else {
        echo "Failed to rename: " . basename($file) . "\n";
    }
}

// Rename videos
foreach ($videoFiles as $index => $file) {
    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    $newName = $directory . 'video-' . ($index + 1) . '.' . $extension;
    
    // Skip if the file is already named correctly
    if (basename($file) === basename($newName)) {
        $skippedCount++;
        continue;
    }
    
    if (rename($file, $newName)) {
        $renamedCount++;
        echo "Renamed video: " . basename($file) . " -> " . basename($newName) . "\n";
    } else {
        echo "Failed to rename: " . basename($file) . "\n";
    }
}

echo "\nSummary:\n";
echo "Total photos processed: " . count($photoFiles) . "\n";
echo "Total videos processed: " . count($videoFiles) . "\n";
echo "Files renamed: " . $renamedCount . "\n";
echo "Files skipped (already named correctly): " . $skippedCount . "\n"; 