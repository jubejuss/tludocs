# PHP

## Esimene tund

PHP põhimõtted.
Muutujate deklareerimine/defineerimine.
Kirjutan ise `$muutuja = "Siia kirjutan muutuja"`  
Seejärel saan printida muutuja välja. Kokku siis nii:

```php
<?
    $muutuja = "Siia kirjutan muutuja"

    echo $muutuja
?>
```

või:

```php
<div class="klass">echo $muutuja</div>
```

Loopimisest:

```php
// loeme piltide kataloogi sisu
$picsdir = "images/";

// määrame, mida otsime, nr 2 lõpus on scandiriga loetud kaks esimest kirjet,
// mis räägivad lihtsalt kataloogist,
$allfiles = array_slice(scandir($picsdir), 2);
// for tsükkel et leida vaid pildifailid allfilest ja siis tähista iga võetud
// fail $file. Tsükkel läbitakse niipalju kordi, kui me $allfilesis leidsime
foreach($allfiles as $file) {
        // küsime faili suurust, sest selle abil saame me veel hunniku
        // asju teada just sellelt pildilt, mh failitüübi, mida meil vaja ongi
		$fileinfo = getimagesize($picsdir .$file);
        // kui nüüd fileinfos on "mime" siis edasi
		if(isset($fileinfo["mime"])) {
            // kui arrays on mime ja kas ta on allowed... massiivis
			if(in_array($fileinfo["mime"], $allowedphototypes)) {
                // array_push tähendab  võtan failime ja
                //panen file picfiles massiivi
				array_push($picfiles, $file);
			}
		}
	}
```

Ehk, et ma otsisin `$allfiles` seest

## Esimene kodutöö
