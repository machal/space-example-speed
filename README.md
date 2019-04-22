# Příklad ke školení „[Optimalizace rychlosti webu](https://www.vzhurudolu.cz/kurzy/rychlost-nacitani)“

## Instalace projektu

```bash
# naklonovani projektu
git clone https://github.com/machal/speed-example.git

# skok do adresare s projektem
cd speed-example
```

V prohlížeči si pak otevřete `index.html`.

## Instalace s Grunt workflow

Pokud chcete využívat celé Grunt workflow, pokračujte sem. Grunt minifikuje soubory, spojuje do jednoho a dělá další optimalizace. Pro školení to nepotřebujeme.

Nejprve si musíte [nainstalovat NPM a celý Node.js ekosystém](https://www.vzhurudolu.cz/prirucka/node-instalace).

```bash
# instalace zavislosti
npm install

# spusteni hlavni Grunt ulohy
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

* `dist/lib/*` – knihovny používané při práci na projektu
* `dist/lib/index.js` – hlavní inicializační soubor
* `dist/lib/all.js` – všechny soubory zabalené do jednoho

Všechny JS zdrojáky jsou také k dispozici ve zmenšených verzích - `*.min.js`.

## Grunt a automatizace

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* `grunt dist` - exportuje distribuční verze souborů včetně obrázků a kritického CSS.
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.

Viz [Gruntfile.js](blob/master/Gruntfile.js).

---

## Zdroje obrázků

- https://en.wikipedia.org/wiki/Orion_(spacecraft)
- https://www.nasa.gov/exploration/systems/orion/gallery/index.html

---

Autor: Martin Michálek, martin@vzhurudolu.cz
