<?php
/**
 * Fallback homepage for hosts that prefer index.php over index.html.
 * Serves the static homepage so a broken WordPress install cannot blank the site.
 */
$path = __DIR__ . '/index.html';
if (is_readable($path)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($path);
    exit;
}
header('Location: /about-1.html', true, 302);
exit;
