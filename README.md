# Termékek nyilvántartása

Egyszerű, böngészőben futó JavaScript-alkalmazás termékek kezelésére.

## Használat

1. Nyisd meg az `index.html` fájlt egy böngészőben.
2. Töltsd ki a termék nevét, gyártóját, kategóriáját, árát és készletét.
3. Kattints a **Hozzáadás** gombra.
4. A felvitt termékek a táblázatban jelennek meg.

A **Módosítás** gombbal szerkesztheted, a **Törlés** gombbal eltávolíthatod a termékeket. Sikeres hozzáadás vagy módosítás után az űrlap automatikusan kiürül.

## Érvényes adatok

- A név, gyártó és kategória nem lehet üres.
- Az ár nem lehet negatív.
- A készlet nem lehet negatív, és egész számnak kell lennie.

## Fájlok

- `index.html` – az alkalmazás szerkezete
- `style.css` – megjelenés és reszponzív elrendezés
- `main.js` – termékek hozzáadása, módosítása, törlése és megjelenítése
