# Jekyll Blog mit Mediumish Theme

Ein moderner Blog erstellt mit Jekyll und dem [Mediumish Theme](https://github.com/codebygina/mediumish-theme-jekyll).

## 🚀 Features

- **Mediumish Jekyll Theme**: Modernes Design im Medium-Stil
- **GitHub Actions**: Automatisches Deployment zu GitHub Pages
- **Responsive Design**: Funktioniert auf allen Geräten
- **SEO-optimiert**: Bessere Sichtbarkeit in Suchmaschinen
- **Schnell**: Statische Website für optimale Performance

## 📁 Projektstruktur

```
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions Workflow
├── _posts/                 # Blog-Posts
├── _pages/                 # Statische Seiten
├── assets/images/          # Bilder und Assets
├── _config.yml            # Jekyll Konfiguration
├── Gemfile                # Ruby Dependencies
├── index.html             # Startseite
└── 404.html              # 404 Fehlerseite
```

## 🛠️ Setup

### 1. Repository Setup
Das Repository ist bereits konfiguriert. Die GitHub Action wird automatisch ausgeführt bei jedem Push zum `main` Branch.

### 2. GitHub Pages aktivieren
1. Gehe zu Repository Settings → Pages
2. Wähle "GitHub Actions" als Source
3. Die Website wird automatisch unter `https://niclasedge.github.io/sophie` verfügbar sein

### 3. Anpassungen
Bearbeite `_config.yml` um deine persönlichen Informationen einzutragen:
- `name`: Name deines Blogs
- `description`: Beschreibung
- `email`: Deine E-Mail
- `url`: Deine GitHub Pages URL

## ✍️ Neue Blog-Posts erstellen

Erstelle neue Markdown-Dateien in `_posts/` mit folgendem Format:
```
_posts/YYYY-MM-DD-titel-des-posts.md
```

Beispiel Front Matter:
```yaml
---
layout: post
title: "Mein neuer Blogpost"
author: admin
categories: [ Jekyll, Tutorial ]
image: assets/images/mein-bild.jpg
description: "Beschreibung des Posts"
featured: true
---
```

## 🎨 Anpassungen

### Logo und Favicon
- Füge `logo.png` und `favicon.ico` in `assets/images/` hinzu
- Aktualisiere die Pfade in `_config.yml`

### Autor-Informationen
Bearbeite den `authors` Bereich in `_config.yml`:
```yaml
authors:
  admin:
    name: "Dein Name"
    display_name: "Dein Name"
    avatar: 'assets/images/avatar.png'
    email: deine-email@example.com
    web: https://deine-website.com
    description: "Deine Beschreibung"
```

### Farben und Styling
Das Theme nutzt Bootstrap 4. Für erweiterte Anpassungen kannst du:
- SCSS-Dateien in `_sass/` hinzufügen
- CSS in `assets/css/` überschreiben

## 🚀 Deployment

Das Deployment erfolgt automatisch über GitHub Actions:
1. Push deine Änderungen zum `main` Branch
2. GitHub Actions baut die Website automatisch
3. Die Website wird auf GitHub Pages deployed

## 📝 Lokale Entwicklung

Für lokale Entwicklung:
```bash
# Dependencies installieren
bundle install

# Lokalen Server starten
bundle exec jekyll serve

# Website ist verfügbar unter http://localhost:4000
```

## 🔧 Troubleshooting

### Build-Fehler
- Überprüfe die GitHub Actions Logs unter "Actions" Tab
- Stelle sicher, dass alle Markdown-Dateien gültiges Front Matter haben
- Überprüfe die Syntax in `_config.yml`

### Theme-Probleme
- Das Theme wird direkt von GitHub geladen
- Bei Problemen überprüfe die [Original-Dokumentation](https://github.com/codebygina/jekyll-theme-memoirs)

## 📚 Weitere Ressourcen

- [Jekyll Dokumentation](https://jekyllrb.com/docs/)
- [Memoirs Theme](https://github.com/codebygina/jekyll-theme-memoirs)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## 📄 Lizenz

Dieses Projekt nutzt das Memoirs Theme, welches unter der MIT Lizenz steht.