# Bataille Navale

## Jeu de bataille navale à 2 joueurs (en local)

### Description

Ce projet est un script **TypeScript** pour jouer à la **bataille navale** en local, à deux joueurs. Le jeu se joue dans le terminal avec des commandes simples. Chaque joueur place ses bateaux sur une grille, puis essaie de couler les bateaux ennemis en tirant sur leur matrice.

### En quoi consiste le jeu ?

- :game_die: Le jeu commence par la définition du nombre de bateaux pour chaque joueur.
- :anchor: Chaque joueur place ses bateaux sur une matrice (une grille) avant de commencer les tirs.
- :crossed_swords: Les joueurs alternent les tirs, et la matrice ennemie est marquée avec un `O` pour un tir raté et un `@` pour un tir réussi, qui signifie qu'un bateau a coulé.
- :trophy: Le jeu se termine dès qu'un joueur a coulé tous les bateaux ennemis.

### Fonctionnalités

- Placer les bateaux sur la matrice avant de commencer.
- Tirer sur la matrice ennemie à tour de rôle.
- Marquer les cases de la matrice avec un `O` pour un tir raté et un `@` pour un tir réussi.
- Le jeu prend fin lorsque tous les bateaux d'un joueur sont coulés.

## Installation

### Installation du projet

1. Clonez ou téléchargez le projet en cliquant sur le bouton **Code** puis en sélectionnant **Download ZIP**.
2. Accédez au dossier du projet :

```
cd NavalBattle
```

3. Installez les dépendances nécessaires avec npm (vous aurez donc besoin de node, que vous pouvez installer avec la commande ```apt install node``` sur le terminal) :


```npm install``` ou ```npm i```


### Comment jouer au jeu ?

Pour démarrer le jeu, exécutez la commande suivante dans le terminal :

```
node navGame.js --number <nombre de bateaux>
```
Remplacez <nombre de bateaux> par le nombre de bateaux que chaque joueur aura (par exemple, 3 pour trois bateaux par joueur).

Le jeu vous demandera de placer vos bateaux sur une grille. Chaque joueur le fait séparément, puis le jeu commence.

À chaque tour, vous aurez une matrice avec les bateaux placés et une autre pour vos tirs. Les tirs seront marqués d’un O si vous manquez et d’un @ si vous touchez un bateau.

##### Le jeu continue jusqu'à ce que tous les bateaux ennemis soient coulés. Le premier joueur à couler tous les bateaux de l’adversaire gagne !
