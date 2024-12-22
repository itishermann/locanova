## **1. Contexte et Objectifs**

### **Contexte**

LocaNova est un projet open source visant à faciliter la gestion locative pour les propriétaires particuliers et les petits gestionnaires immobiliers. De nombreux outils sont disponibles sur le marché, mais peu offrent à la fois la **transparence**, la **simplicité** et l'**accessibilité** (open source) nécessaires pour s’adresser à un public non expert en informatique.

### **Objectifs**

1. **Automatiser et centraliser** la gestion des biens immobiliers : suivi des baux, loyers, charges, états des lieux, etc.
2. **Conformité légale** : fournir des modèles de documents conformes à la législation française (baux, quittances, etc.) et respecter le RGPD.
3. **Accessibilité Open Source** : permettre à chacun d’utiliser, d’installer et de personnaliser librement l’outil.
4. **Améliorer la relation bailleur-locataire** : messagerie centralisée, rappels automatiques, visualisations claires des paiements et interventions.
5. **Modularité et scalabilité** : architecture permettant de rajouter facilement de nouvelles fonctionnalités ou de s’intégrer à d’autres outils.

---

## **2. Fonctions Clés et Périmètre Fonctionnel**

1. **Gestion des Biens**
    - Création, modification et suppression de fiches biens (adresse, surface, type de logement, photos).
    - Historique des locataires et contrats associés à chaque bien.

2. **Gestion des Locataires**
    - Création, modification et suppression de fiches locataires (coordonnées, pièces justificatives, situation).
    - Historique des paiements, relances, suivi des échanges.

3. **Gestion des Baux / Contrats de Location**
    - Génération de modèles de contrats conformes (modèles au format PDF/Doc).
    - Gestion des dates clés (début, fin, renouvellement, etc.).

4. **Suivi des Loyers et Charges**
    - Enregistrement automatique ou manuel des paiements.
    - Génération de quittances de loyer.
    - Rappels en cas de retard.
    - Tableau de bord financier (loyers reçus, charges, rentabilité).

5. **États des Lieux**
    - Outil pour créer, éditer et archiver des états des lieux d’entrée et de sortie.
    - Possibilité d’intégrer des photos et des notes.

6. **Communication & Notifications**
    - Messagerie interne pour dialoguer avec les locataires (facultatif ou par email).
    - Notifications automatiques (échéances de bail, relances loyer, etc.) par email, SMS ou push.

7. **Conformité Légale**
    - Respect du RGPD (gestion des données personnelles, consentement, etc.).
    - Mise à jour régulière des modèles de documents en fonction de l’évolution de la législation française.

8. **Gestion Documentaire**
    - Stockage et organisation des documents (contrats, quittances, pièces justificatives).
    - Possibilité d’exporter / importer des documents et d’effectuer des sauvegardes.

9. **Reporting et Statistiques**
    - Tableau de bord global : loyers perçus, loyers en retard, rentabilité par bien, etc.
    - Statistiques d’occupation, historique des locataires, revenus, charges.

10. **Administration et Paramétrages**
- Gestion des utilisateurs et des rôles (ex. propriétaire, gestionnaire, comptable).
- Paramètres généraux (taux de pénalité, règles d’indexation de loyer, etc.).

---

## **3. Public Cible et Cas d’Usage**

1. **Propriétaires Particuliers**
    - Peu de notions de comptabilité ou de droit immobilier.
    - Besoin d’une solution simple et intuitive.

2. **Petits Gestionnaires / Agences**
    - Gestion de plusieurs biens pour le compte de propriétaires différents.
    - Besoin d’une solution centralisée et évolutive.

3. **Communauté Open Source**
    - Développeurs et contributeurs qui souhaitent adapter et améliorer LocaNova.
    - Personnes ou associations (ex. associations étudiantes gérant des logements) pouvant bénéficier de l’outil.

---

## **4. Environnement Technologique**

### **Option 1 : Basé sur vos Compétences en JS/TS**

- **Backend** : NestJS, TypeScript, PostgreSQL (via Prisma ou TypeORM).
- **Frontend** : Next.js (React + TypeScript), Tailwind CSS (ou Chakra UI/MUI).
- **API** : REST ou GraphQL (au choix, selon la complexité).
- **Auth/Sécurité** : JWT + Passport (NestJS), respect du RGPD (cryptage des données sensibles).
- **Infrastructure** : Docker, Kubernetes (pour le déploiement scalable), GitHub Actions / GitLab CI pour l’intégration continue.

### **Option 2 : Autres Technologies**
(Python/Django, Ruby on Rails, Java/Kotlin + Spring Boot, Elixir/Phoenix, etc.) — si besoin de s’éloigner du JS.

---

## **5. Exigences Non-Fonctionnelles**

1. **Performance & Scalabilité**
    - Capacité à gérer un nombre croissant de biens et de locataires sans dégradation notable des performances.
    - Temps de réponse acceptable (<200ms sur les opérations CRUD) pour offrir une bonne expérience utilisateur.

2. **Sécurité**
    - Protection contre les attaques courantes (XSS, injection SQL, CSRF, etc.).
    - Chiffrement TLS pour toutes les communications (HTTPS).
    - Gestion des rôles et permissions pour restreindre l’accès aux fonctions critiques.

3. **Fiabilité & Robustesse**
    - Implémentation de tests unitaires, d’intégration et E2E.
    - Déploiement en haute disponibilité si nécessaire (clusters Docker/K8s).

4. **Maintenance et Évolutivité du Code**
    - Respect des principes SOLID, Clean Architecture, ou tout autre pattern adapté.
    - Documentation claire et lisible (Code + Wiki/README).
    - Disponibilité d’un guide de contribution pour la communauté (CONTRIBUTING.md).

5. **Conformité RGPD**
    - Mention explicite de la collecte et de l’usage des données personnelles.
    - Politique de confidentialité et paramétrages d’opt-in/opt-out.
    - Mécanisme d’export/suppression de données sur demande (droit à l’oubli).

---

## **6. Priorités (MVP vs. Version Complète)**

### **MVP (Produit Minimum Viable)**

1. **Création/Modification des fiches Biens et Locataires**
2. **Gestion des Baux (CRUD) + Génération simple du bail**
3. **Suivi des Loyers et Charges basique**
4. **Authentification / Autorisations**
5. **Interface Frontend basique (tableau de bord minimal)**

### **Fonctionnalités Avancées / Version Complète**

1. **États des lieux avec insertion de photos**
2. **Messagerie et notifications automatiques**
3. **Module Financier avancé (rapports de rentabilité, calculs d’impôts, etc.)**
4. **Gestion multi-utilisateurs et multi-rôles**
5. **Support multilingue**
6. **Visite 3D / VR (long terme)**

---

## **7. Roadmap Simplifiée**

1. **Planning & Architecture**
    - Diagrammes UML, définition des modèles de données, choix final du stack technique.

2. **Développement Backend (API + DB)**
    - Configuration NestJS (ou autre framework) + PostgreSQL.
    - Implémentation des entités (Biens, Locataires, Contrats, Paiements).
    - Gestion de l’authentification.

3. **Développement Frontend**
    - Next.js (ou framework choisi), intégration API.
    - Pages principales (Dashboard, Liste des biens, Liste des locataires).
    - Formulaires de création / modification.

4. **Tests & Qualité**
    - Mise en place de tests unitaires et intégration (CI/CD).
    - Correction des bugs critiques et amélioration de la performance.

5. **Documentation & Communauté**
    - Rédaction d’un README complet, d’un guide de contribution et d’une FAQ.
    - Publication sur GitHub/GitLab (open source).
    - Mise en place d’un site de présentation ou d’une page GitHub Pages.

6. **Lancement MVP**
    - Récupération des premiers retours utilisateurs.
    - Priorisation des évolutions et corrections.

7. **Itérations et Évolutions (fonctionnalités avancées)**
    - Développement progressif de nouvelles fonctionnalités.
    - Maintien de la conformité légale (mise à jour automatique des modèles de documents si évolution législative).

---

## **8. Contraintes et Points d’Attention**

1. **Contraintes Légales France**
    - Les documents types (bail, quittance) doivent respecter la réglementation en vigueur (Loi Alur, Élan, etc.).
2. **Sécurité des Données**
    - Gestion stricte des accès, surtout en multi-location (par ex. propriétaire A ne voit pas les biens de propriétaire B).
3. **Performance**
    - Capacité à gérer un volume de données important (ex. pour un utilisateur gérant plusieurs dizaines de biens).
4. **Support Multiplateforme**
    - Responsive design (PC, tablette, mobile).
    - Potentiellement, développement d’une app mobile (React Native, Flutter ou autre) si besoin.

---

## **9. Livrables Attendus**

1. **Code Source** : Disponible sur GitHub/GitLab avec une licence open source (MIT, GPL, Apache, etc.).
2. **Documentation** :
    - README principal, guide d’installation et de configuration.
    - Documentation technique (architecture, APIs) et fonctionnelle (pas-à-pas pour l’utilisateur).
3. **Déploiement** :
    - Fichiers Docker (Dockerfile, docker-compose.yaml).
    - Scripts d’automatisation (CI/CD).
4. **Démonstration** :
    - Environnement de demo ou lien vers un site de test (facultatif mais conseillé).

---

## **10. Proposition de Collaboration avec l’Agent GPT**

- **Planification** : L’Agent GPT peut aider à découper le projet en sprints, prioriser les user stories, estimer les tâches, etc.
- **Développement** : Il peut assister sur l’écriture de code (backend et frontend), proposer des solutions à des problématiques techniques, générer des tests.
- **Rédaction de Documentation** : Générer des descriptions de fonctionnalités, des tutoriels ou des guides de contribution.
- **Refactorisation** : Suggérer des améliorations d’architecture, de performance et de sécurité au fur et à mesure de l’avancement.
- **Veille Législative** : Aider ponctuellement à vérifier la conformité des modèles de documents (bail, quittance) selon les dernières lois françaises.

---