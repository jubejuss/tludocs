# PHP

## Esimene tund

Esimese tunni töö näha siin: [https://github.com/jubejuss/githubactions/blob/main/tund_01.php](https://github.com/jubejuss/githubactions/blob/main/tund_01.php)

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

Selgitus:  
`$picsdir = "images/";` ütleme, kus kataloogis pildid asuvad.

Ehk, et ma otsisin `$allfiles` seest asju, mida loeme kui faile ja kui need on sobivas vormingus, lüllame nad picfiles massiivi

## Esimene kodutöö

::: tip Soovitus
Täiskood lihtsama lahendusega on siin: [https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_lihtsam.php](https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_lihtsam.php)  
ja keerulisemaga siin: [https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_keerulisem.php](https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_keerulisem.php)
:::
::: warning NB!
Arvesta, et näidises on kasutatud Bootstrappi, et veebilehele mingi kujundus tekitada, seega võid HTML-i osas kõik klassid lihtsalt kustutada.
:::

### Näita kolme pilti, mis on erinevad

Ülesanne lisada kolm pilti moel, et need oleks kõik teineteisest erinevad.

Siin on kaks varianti.

#### Esiteks suurema töömahuga:

```php
$photocount = count($picfiles);
	$RandImgArray = [];

	do {
		$RandImg = mt_rand(0, $photocount-1);
		if(!(in_array($RandImg, $RandImgArray))) {
			array_push($RandImgArray, $RandImg);
		}
	} while (count($RandImgArray) < 3);

	$randomphoto = $picfiles[$RandImgArray[0]];
	$randomphoto2 = $picfiles[$RandImgArray[1]];
	$randomphoto3 = $picfiles[$RandImgArray[2]];
```

Selgitus:  
`$photocount = count($picfiles);` loeme üles piltide arvu
`$RandImgArray = [];` tekitame listi/massiivi, kuhu kogume alljärgnevalt 3 random pilti.

Kasutame `do while funktsiooni`  
Loome uue listi/massiivi, kuhu lükkame meile sobivad pildid, st siis need unikaalsed pildid. While counter loendab, palju pilte on ja kui 3 saab täis, on asi valmis.  
`$RandImg = mt_rand(0, $photocount-1);`leiame esimese suvapildi mt_rand funktsiooniga. Sulgudes on vahemik, millest milleni otsime, ehk 0 kuni viimane pilt (st -1)  
`if(!(in_array($RandImg, $RandImgArray)))` Kui pilti pole RandImgArray nimelises massiivis/listis, siis:  
`array_push($RandImgArray, $RandImg);` lükkame ta sinna.

Kui 3 korda ring peal, defineerime, mis kohal RandImg arrays mingi pilt täpselt on:  
`$randomphoto = $picfiles[$RandImgArray[0]];`  
`$randomphoto2 = $picfiles[$RandImgArray[1]];`
`$randomphoto3 = $picfiles[$RandImgArray[2]];`

#### Ja teiseks PHP funktsioon:

```php
$randomphotofunc = array_rand($picfiles,3);
```

Kodulehel kuvamiseks, peab esimesel juhul HTML'i osasse kirjutama midagi sellist:

```php
  <img src="<?php echo $picsdir .$randomphoto; ?>" alt="suvapilt"/>
  <img src="<?php echo $picsdir .$randomphoto2; ?>" alt="suvapilt"/>
  <img src="<?php echo $picsdir .$randomphoto3; ?>" alt="suvapilt"/>
```

Ja teisel juhul midagi sellist:

```php
  <img src="<?php echo $picsdir .$picfiles[$randomphotofunc[0]]; ?>" alt="suvapilt">
  <img src="<?php echo $picsdir .$picfiles[$randomphotofunc[1]]; ?>" alt="suvapilt">
  <img src="<?php echo $picsdir .$picfiles[$randomphotofunc[2]]; ?>" alt="suvapilt">
```

### Näita eestikeelset päeva nime.

Sama lugu sellega – raske, ehk eestlaslik (teadupärast õige eestlane künnab ennast surnuks) ja lihtne, kasutades funktsiooni.

#### Esmalt see eestlaslik:

```php
$weekday_nr=date('w');
$day_names=['pühapäev','esmaspäev','teisipäev','kolmapäev',
'neljapäev','reede','laupäev'];
$todaysweekdayhtml="<p> Täna on ". $day_names[$weekday_nr]."</p>";
```

Selgitus:  
`$weekday_nr=date('w');` PHP funktsioon või nädalapäevade numbriline definitsioon. date('w') on leitav PHP manuaalis: https://www.php.net/manual/en/function.date.php  
`$day_names=...` ise defineerin listi või array või massiivi päevade nimedega.  
Ja lõpuks ütleme, et võtku listist tänane päev ja kuvagu seda. Kogu vahepealne osa on lihtsalt jutustus, et täna on ja böa-bla-bla.

#### Lihtsam versioon on aga kasutada lihtsalt PHP funktsiooni:

```php
setlocale(LC_TIME, 'et_EE.utf8');
$todayname = strftime('%A.');
```

Oluline oli see utf8 seal et järel, kuna ei piisanud, et headis on utf8.

Kuvamiseks pane HTML-osakonda esimesel juhul:

```php
echo $todaysweekdayhtml;
```

ja teisel juhul:

```php
echo $todayname;
```

Antud näites on muutujad `$todaysweekdayhtml` ja `$todayname` lihtsalt pandud erinevad, kuna nad on kasutuses samas failis ja võib muidu segadust tekitada.

### Kuva teadet, kui kuupäeva järgi pole semester veel alanud

#### või on lõppenud

Sel juhul teeme väikse rehkenduse ja tingimuse, et kui, siis.

Esmalt tekitan välja, kuhu saan kirjutada enda poolt valitud kuupäeva (II rida) ja selle järgi defineerin rea, mida on hea kuvada.

```php
$today_manually = new DateTime();
$today_manually->setDate(2020, 5, 10);

$iftoday = "Kui täna oleks ".$today_manually->format('d.m.Y'.",");
```

Siis kontrollime, kas semester kulgeb, on läbi või pole veel alanud, sõltuvalt sellest, mis kuupäeva ülal sisestasime ja järgnevas reas teisendame päevadeks:

```php
$fromsemesterbegin = $semesterbegin->diff($today_manually);
$fromsemesterbegindays = $fromsemesterbegin->format("%r%a");
```

võrdleme kas ajavahemik on vahemikus 0-semestri kestvus või on pikem või hoopis negatiivne ja väljastame igal vastaval juhul vastava teate:

```php
if($fromsemesterbegindays <= $semesterdurationdays && $fromsemesterbegindays >=0) {
    $semesterprogress_ver2 = 'leks semester omadega sealmaal: <meter min="0" max="' .$semesterdurationdays
    .'" value="' .$fromsemesterbegindays .'"></meter>';kulgu
    }
    else {
        if ($fromsemesterbegindays <0)
        {$semesterprogress_ver2 = " poleks semester veel alanud."; }
        else {
        $semesterprogress_ver2 = " oleks semester lõppenud.";}
    }
```

### Koodinäidised

Täismahus koode vaata siis siit:  
[Lihtsam versioon](https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_lihtsam.php)  
[Keerulisem versioon](https://github.com/jubejuss/githubactions/blob/main/kodutoo_01_keerulisem.php)


## Teine tund
