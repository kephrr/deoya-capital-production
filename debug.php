<?php
// Fichier de diagnostic pour LWS
echo "<h1>Diagnostic LWS - Next.js Static Export</h1>";

echo "<h2>Configuration Apache</h2>";
echo "mod_rewrite: " . (in_array('mod_rewrite', apache_get_modules()) ? "✅ Activé" : "❌ Non activé") . "<br>";
echo "AllowOverride: " . (php_ini_get('allow_url_fopen') ? "✅ Autorisé" : "❌ Non autorisé") . "<br>";

echo "<h2>Variables serveur</h2>";
echo "REQUEST_URI: " . $_SERVER['REQUEST_URI'] . "<br>";
echo "SCRIPT_NAME: " . $_SERVER['SCRIPT_NAME'] . "<br>";
echo "DOCUMENT_ROOT: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";

echo "<h2>Fichiers présents</h2>";
$files = ['index.html', 'newsletter/index.html', '.htaccess'];
foreach ($files as $file) {
    echo "$file: " . (file_exists($file) ? "✅ Existe" : "❌ Manquant") . "<br>";
}

echo "<h2>Permissions</h2>";
if (is_dir('newsletter')) {
    echo "newsletter/: " . substr(sprintf('%o', fileperms('newsletter')), -4) . "<br>";
}
if (file_exists('.htaccess')) {
    echo ".htaccess: " . substr(sprintf('%o', fileperms('.htaccess')), -4) . "<br>";
}

echo "<h2>Test de réécriture</h2>";
echo "<a href='/newsletter/'>Test newsletter</a><br>";
echo "<a href='/newsletter/bonjour-tout-le-monde/'>Test article</a><br>";
?>
