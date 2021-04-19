# Programmeerimine I

“It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.”

Excerpt From: Marijn Haverbeke. “Eloquent JavaScript”. Apple Books.

## Tund 02

### Küsimused

Kodutöö – leida ajaarvestus programm ja lugeda ning "träkkida" lugemiseaega.
Lugemismaterjal: [https://eloquentjavascript.net](https://eloquentjavascript.net)
Träkkimissoft: [https://zapier.com/blog/best-time-tracking-apps/](https://zapier.com/blog/best-time-tracking-apps/)

Otsisin sellist, mis olesk unibversaalme – telefonis ja desktopis
Toggl vist Eesti oma?
Avastasin, et olen Togglit kunagi juba ka kasutanud.

### Eesmärk – selle raamatu abil natsa progemisele üldiselt pita saada.

Nii nagu sissejuhatus lubas.
Teiseks, saada ülevaade ka Javascriptist.
Kolmandaks, testida Toggk nimelist ajaarvestajat.

**Raamat soovitab – kui läheb keeruliseks, ära löö käega – tee parem vahe, loe varasemad kohad uuesti üle. See on igatepidi ok, kui asi tundub raske.**

Lugedes kasutasin koodide testimiseks ja harjutamiseks [playcode'i](https://playcode.io/new/)

Ajaarvestuses on probleemiks unustamine – sisselülitamise unustamine ja väljalülitamise unustamine (oma tavaasjades aitab vigu siluda mailisaatmine või kõne kliendiga, need on träkitavad)

## Sõnastik

+= - see on nagu selline asi, et kui tahan asjale endale midagi liita, ehk asja väärtust liidetavaga tsüklis suurendada
, – muutujaid saab koma abil deklareerida korraga mitu. Nt:

```javascript
let x = 5,
  y = 4,
  z = "sinine";
```

= vs == vs === kaks võrdust lubab võrduma panna eri tüübid nt `5 == "5"` kolm võrdust käsib/lubab võrduma panna ainult ja ainult sama tüüpi asjad. Nt `5 = 5`

And/Ja – &&  
Või/or - ||

### B

- Bindings – pmst nagu sidemed, ehk kuidas miski asi seotakse, ehk lühidalt muutujad ja nende väärtused.
- Boolean/tõeväärtus – jah ei, true false.
  ```javascript
  console.log(3 > 2);
  // → true
  console.log(3 < 2);
  // → false
  ```
  või
  ```javascript
  console.log("Aardvark" < "Zoroaster");
  // → true
  ```
  **NB! Suurtähed on väiksemad kui väiketähed**

### E

- Empty value – null and undefined

### F

- Functins/funktsioonid – sisuliselt programmijupike, mis täiudab kinlat üleannet. Funktsiooni esilekutsumiseks: `funktsiooninimi();`  
  `console.log()`funktsioon

### O

- Operaator – tehtemärgid `* - +` jne
  % on jäägi leidmise operaator  
   typeof – annab muutuja tüübi `console.log(typeof 4.5)//number`

### N

- Numbrid
- Nan – not a number, on numbri tüüp
- Infinity, on numbri tüüp

### S

- Stringid – võivad olla nii jutumärkides, üleakomades kui backtickides

  ```javascript
  `Down on the sea`;
  ("Lie on the ocean");
  ("Float on the ocean");
  ```

  Kui vaja, kasuta tagurpidi kaldkriipsu/backslash. So escape'imine. Tähtedel pärast backslashi on mingi eritähendus, nt \n tähendab reavahetust.
  Kaks tagurpidi kalkriipsu muutuvad üheks.

  ```javascript
  "A newline character is written like \"\\n\".";

  ```

  Arvutamine lause sees – `${siia sisse tehe}`  
   nt:

  ```javascript
  `half of 100 is ${100 / 2}`;
  ```

  Tulemuseks `half of 100 is 50`

### V

- Variables/muutujad – let, var, const
  let – so kõige tavalisem muutuja. Let on skoobipõhine, väljaspool võib samanimelise let'i uuesti defineerida.
  var - vanas stiilis muutuja. Var on universaalne, mõjub ka skoobist väljaspool. [loe var'kohta selgitust](https://stackoverflow.com/questions/1470488/what-is-the-purpose-of-the-var-keyword-and-when-should-i-use-it-or-omit-it/1471738#1471738)
  const - pmst konstant. täpsemalt muutuja, mida saab muuta vaid ühes kohas, st mitu korda sama consti kasutada ei saa.  
   [muutujate kasutamine](https://yizhiyue.me/2018/11/16/variable-declaration-in-javascript-var-let-or-const)
  typeof – annab muutuja tüübi `console.log(typeof 4.5)//number`

## Lihtsamad funktsioonid

- `console.log()`
- `prompt("sisesta midagi")`
- `alert("Ettevaatust, hoiatan!")`
- `Number("5")` – konvertib stringi numbriks
- `string()`
- `boolean()`
- `Number.isNaN` function is a standard JavaScript function that returns true only if the argument it is given is NaN
-

## Lihtsamad programmijupid

```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
/*
0
2
4
6
8
10
12
*/
```

## neljapäevased küsimused:

The last logical operator I will discuss is not unary, not binary, but ternary, operating on three values. It is written with a question mark and a colon, like this:

console.log(true ? 1 : 2);

// → 1

console.log(false ? 1 : 2);

// → 2

- raamatust: [Automatic type conversion](https://eloquentjavascript.net/01_values.html) miks ikkagi on sellised konvertimised ja lisaks kohe järgnev materjal ka, ehk see:
  ```javascript
  console.log(null == undefined);
  // → true
  console.log(null == 0);
  // → false
  ```
- sama küsimus järgneva kohta - Short-circuiting of logical operators, lihtsalt näidetega selgitust
