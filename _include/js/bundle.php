<?php
error_reporting(0);
header('Content-Type: application/javascript');
//header('Cache-Control: no-cache');
//header('Pragma: no-cache');
if ($handle = opendir('.')) {
    while (($entry = readdir($handle)) !== false) {
        if (pathinfo($entry, PATHINFO_EXTENSION) != 'js') {
            continue;
        }
        readfile($entry);
    }
    closedir($handle);
}
?>
