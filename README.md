# Fitness-Progess_back-end

## Setting up environment

### Dependencies

- Node = v18.16.0
- NPM = v9.5.1

### Generate .env file

```bash
$ cp .env.example .env
```

### Install Node Dependencies

```bash
$ npm install
```

### Docker Compose Start

```bash
$ docker compose up -d --build
```

### Migration and Seed in database

```bash
$ docker compose exec app node ace migration:refresh --seed
```