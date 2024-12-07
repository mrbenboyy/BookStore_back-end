# Bookstore Backend

## Introduction
Le projet **Bookstore Backend** est une application serveur pour gérer une librairie. Il fournit des fonctionnalités de gestion des livres, des clients et des commandes, tout en offrant une architecture modulaire avec des couches de modèles, services, contrôleurs, et routes.

---

## Table des matières
- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [API Endpoints](#api-endpoints)
- [Dépendances](#dépendances)
- [Licence](#licence)

---

## Fonctionnalités
- **Gestion des Livres :** Ajouter, mettre à jour, supprimer et consulter les informations des livres.
- **Gestion des Clients :** Créer, consulter et modifier les informations des clients.
- **Gestion des Commandes :** Passer des commandes, afficher l’historique des commandes, gérer leur statut.
- Architecture propre : séparation en couches (Modèle, Service, Contrôleur).
- Routes d'API RESTful pour chaque ressource.

---

## Installation
### Prérequis
- **Node.js** (v14 ou supérieur)
- **NPM** ou **Yarn**

### Étapes
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/mrbenboyy/BookStore_back-end.git
   cd BookStore_back-end
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur :
   ```bash
   npm start
   ```

---

## Utilisation
### Démarrer le serveur
Une fois le serveur démarré, il sera accessible sur `http://localhost:9090`.

### Tester les routes
Vous pouvez utiliser **Postman**, **Insomnia**, ou d'autres outils pour interagir avec l'API.

---

## Structure du Projet
Voici une vue d'ensemble de l'architecture :
```
bookstore-backend/
├── src/
│   ├── models/         # Définition des modèles (Book, Customer, Order)
│   ├── services/       # Logique métier pour chaque entité
│   ├── controllers/    # Contrôleurs pour gérer les requêtes
│   ├── routes/         # Définition des routes API
│   └── index.js        # Point d'entrée principal
├── .env.example        # Exemple de fichier de configuration
├── package.json        # Fichier des dépendances et scripts
└── README.md           # Documentation
```

---

## API Endpoints
### Livres (`/books`)
- **GET /books** : Obtenir tous les livres.
- **GET /books/:id** : Obtenir un livre par ID.
- **POST /books** : Ajouter un nouveau livre.
- **PUT /books/:id** : Mettre à jour un livre existant.
- **DELETE /books/:id** : Supprimer un livre.

### Clients (`/customers`)
- **GET /customers** : Obtenir tous les clients.
- **GET /customers/:id** : Obtenir un client par ID.
- **POST /customers** : Ajouter un nouveau client.
- **PUT /customers/:id** : Mettre à jour un client existant.
- **DELETE /customers/:id** : Supprimer un client.

### Commandes (`/orders`)
- **GET /orders** : Obtenir toutes les commandes.
- **GET /orders/:id** : Obtenir une commande par ID.
- **POST /orders** : Créer une nouvelle commande.
- **PUT /orders/:id** : Mettre à jour une commande existante.
- **DELETE /orders/:id** : Supprimer une commande.

---

## Dépendances
Les principales bibliothèques utilisées dans ce projet incluent :
- **Express.js** : Framework backend pour Node.js.
- **dotenv** : Gestion des variables d’environnement.
- **mongoose** : Bibliothèque pour Node.js permettant de gérer des bases de données MongoDB avec des modèles, des schémas et des validations..

Pour une liste complète, consultez le fichier `package.json`.

---

## Licence
Ce projet est sous licence **MIT**. Consultez le fichier `LICENSE` pour plus de détails.
