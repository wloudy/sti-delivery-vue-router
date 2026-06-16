# STI RUSH — доставка на Subaru

Учебный проект: лендинг службы доставки на Subaru с **Vue 3**, **Vue Router 4** и **Vuetify 4**.

Курс по роутеру: [Vue Router 4 for Everyone (Vue School)](https://vueschool.io/courses/vue-router-4-for-everyone)

## Маршруты (Vue Router)

| Путь | Имя (`name`) | Страница |
|------|----------------|----------|
| `/` | `home` | Главная |
| `/services` | `services` | Услуги |
| `/fleet` | `fleet` | Список флота |
| `/fleet/:slug` | `fleet-detail` | Карточка машины (динамический параметр) |
| `/how` | `how` | Как это работает |
| `/about` | `about` | О нас |
| `/*` | `not-found` | 404 |

Примеры динамических URL: `/fleet/wrx-sti`, `/fleet/forester-sti`.

## Возможности Vue Router в проекте

- **Вложенные маршруты** — общий `DefaultLayout` (шапка, меню, футер) + `<RouterView />` для страниц
- **Именованные маршруты** — навигация через `{ name: 'fleet' }` и `v-btn :to`
- **Lazy loading** — страницы подгружаются через `() => import(...)`
- **Динамические параметры** — `props: true` на `fleet-detail`
- **Navigation guard** — `beforeEnter` проверяет `slug`, `beforeEach` меняет `document.title`
- **scrollBehavior** — прокрутка вверх при смене страницы

## Запуск

```bash
npm install --ignore-scripts
npm run dev
```

Если `npm run dev` падает с ошибкой про Python, запустите напрямую:

```bash
node node_modules/vite/bin/vite.js
```

Сборка:

```bash
npm run build
```


## Структура

```
src/
├── router/index.js      # конфигурация маршрутов
├── layouts/DefaultLayout.vue
├── views/               # страницы (Home, Fleet, …)
├── components/          # OrderDialog, CtaBanner, AppFooter
├── composables/useOrder.js
└── data/content.js      # данные флота и услуг
```

## Стек

- Vue 3
- Vue Router 4
- Vuetify 4
- Vite
