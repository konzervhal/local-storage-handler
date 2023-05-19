# Local Storage Handler

Local Storage kezelő modul, minden function egy beküldött névvel azonosítja a local storage key -t. setObject/mergeObject esetén második paraméterként a letárolni kívánt értéket kell megadni.

## Install

```
import LocalStorage from 'local-storage-handler';
app.use(LocalStorage);
```

## Functions

- setObject(name, object)
- getObject(name)
- deleteObject(name)
- mergeObject(name, object)

## Usage

```
//létrehozás
this.$localstorage.setObject('user', {name: 'Teszt Felhasználó'});

//lekérés
this.$localstorage.getObject('user');

//bővítés
this.$localstorage.mergeObject('user', {type: 'Admin'});

//törlés
this.$localstorage.deleteObject('user');
```