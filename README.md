# Příklad ke školení [Optimalizace rychlosti načítání](http://www.vzhurudolu.cz/kurzy/rychlost-nacitani)

## Instalace projektu

Nejprve si musíte [nainstalovat NPM a celý Node.js ekosystém](http://www.vzhurudolu.cz/prirucka/node-instalace).

Pak tento konkrétní projekt:

```bash
# naklonování projektu
git clone https://github.com/machal/space-example-speed.git
# závislosti
npm install
# spuštění hlavního Grunt tasku
grunt
```

## Struktura stylů

* `src/less/index.less` – hlavní LESS soubor
* `src/less/base/` – komponenty pro textový, vertikální design
* `src/less/components/` – pokročilejší komponenty uživatelského rozhraní
* `src/less/core/` – pomocné funkce, mixiny…
* `src/less/layout/` – layout stránky
* `src/less/lib/` – knihovny

Kompilujeme do `dist/css/style.css`.


## Javascript

* `src/js/index.js` – hlavní JS soubor

Závislosti řešíme pomocí Browserify.


## Grunt a automatizace

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.

Viz [Gruntfile.js](blob/master/Gruntfile.js).

---

Autor: Martin Michálek, martin@vzhurudolu.cz












