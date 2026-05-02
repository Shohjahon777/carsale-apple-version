// Carsale tri-lingual content (UZ / RU / EN). Loose typing — content is design-driven.
/* eslint-disable @typescript-eslint/no-explicit-any */
export type Lang = "uz" | "ru" | "en";

export const I18N: Record<Lang, any> = {
  ru: {
    nav: { features: "Модули", product: "Продукт", pricing: "Тарифы", faq: "Вопросы", login: "Войти", trial: "Демо" },
    hero: {
      eyebrow: "Сделано для сетей автосалонов · Узбекистан",
      titleA: ["Управляйте", "всеми", "филиалами", "с", "одного", "экрана."],
      titleAEm: 2,
      sub: "Carsale — единая система для автосалонов: продажи, CRM, колл-центр, предпродажная подготовка и запчасти. Семь модулей под одной крышей.",
      cta1: "Записаться на демо",
      cta2: "Тур по модулям",
      stat1: ["7", "модулей", "в одной системе"],
      stat2: ["43%", "быстрее", "первый ответ на входящий"],
      stat3: ["12", "филиалов", "в среднем у клиента"],
      typeLed: { line1: "Семь", line2: "модулей,", line3: "одна", line4: "система." },
      mockChrome: "CARSALE · LIVE",
      mockTrend: "14 дн. тренд",
      mockKpis: [
        { l: "Звонки", v: "1 284", d: "+12%" },
        { l: "Лиды", v: "312", d: "+24%" },
        { l: "AHT", v: "2:48", d: "-22с" },
      ],
      mockQueue: [
        { n: "А. Каримов", s: "BMW X5", tag: "live", tagLabel: "лайв" },
        { n: "М. Волкова", s: "Lexus RX", tag: "new", tagLabel: "новый" },
        { n: "О. Саидов", s: "Toyota Camry", tag: "live", tagLabel: "лайв" },
      ],
    },
    marquee: ["Главный экран", "Аналитика", "Торговля", "CRM и лиды", "Колл-центр", "Предпродажи (PDI)", "Запчасти", "Интеграция 1С"],
    video: {
      tag: "Обзор",
      titleBefore: "Посмотрите ",
      titleEm: "поток",
      titleAfter: " за 60 секунд.",
      lede: "Короткий тур по продукту — продажи, CRM, колл-центр и PDI в одной спокойной системе.",
      placeholderCta: "Добавьте демо-ролик (MP4) — готово к интеграции.",
    },
    features: {
      tag: "Возможности",
      title: ["Семь модулей для каждого ", "отдела ", "дилера."],
      lede: "От заявки на тест-драйв до приёмки авто и склада запчастей — всё связано в одной системе.",
      cards: [
        { title: ["Торговля ", "и контракты"], body: "Управление заказами и контрактами по всей сети. Статусы «Черновик / Новый / Продолжено / В очереди / Бронь», кодирование контрактов, фильтры, экспорт в Excel и быстрый поиск по VIN, контракту и ИНН." },
        { title: ["CRM ", "и лиды"], body: "Воронка продаж, скоринг лидов и источники (Telegram, Instagram, Facebook, Сайт, Офлайн). Карточки клиентов с историей контактов, моделями и регионом. Задачи на сегодня, просрочки, выполненные." },
        { title: ["Колл-центр ", "и аналитика"], body: "SLA, среднее ожидание, среднее время разговора, FCR и потери — всё в одном дашборде. Динамика входящих/исходящих/пропущенных по дням. Записи звонков и причины обращений." },
        { title: ["Предпродажи ", "(PDI)"], body: "Чеклисты предпродажной подготовки авто. Каждое авто проходит 6 этапов с прогрессом, ответственным менеджером и складом. Фильтры по статусу: «Не начат / В обработке / Реализован»." },
        { title: ["Запчасти ", "и склад"], body: "Каталог, заказы и остатки запчастей по складам. Резерв и перемещение со звонка. Связь с заказом и автомобилем по VIN." },
        { title: ["Аналитика ", "и отчёты"], body: "Сводные дашборды по моделям, регионам, источникам и менеджерам. Финансы, контракты и продажи за период. Экспорт в Excel или прямая выгрузка в 1С." }
      ]
    },
    modules: {
      tag: "Модули",
      title: ["Семь экранов, ", "одна ", "система."],
      lede: "Все модули Carsale работают в одной базе и синхронизируются с 1С. Переключайтесь между ними:",
      list: [
        { id: "home", num: "01", name: "Главный экран", desc: "Рабочее пространство со всеми модулями" },
        { id: "analytics", num: "02", name: "Аналитика", desc: "Дашборды, контракты, финансы и отчёты" },
        { id: "sales", num: "03", name: "Торговля", desc: "Заказы, клиенты, товары и продажи" },
        { id: "crm", num: "04", name: "CRM", desc: "Клиенты, сделки и воронки" },
        { id: "callcenter", num: "05", name: "Колл-центр", desc: "Звонки, заявки и обращения" },
        { id: "pdi", num: "06", name: "Предпродажи", desc: "Тест-драйвы, брони и предзаказы" },
        { id: "parts", num: "07", name: "Запчасти", desc: "Каталог, заказы и остатки" }
      ],
      home: {
        greeting: "Добрый день",
        subtitle: "Рабочее пространство",
        date: "Пятница, 1 мая",
        cards: [
          { num: "1", name: "Аналитика", desc: "Дашборды, контракты, финансы и отчёты" },
          { num: "2", name: "Торговля", desc: "Заказы, клиенты, товары и продажи" },
          { num: "3", name: "CRM", desc: "Клиенты, сделки и воронки" },
          { num: "4", name: "Колл-центр", desc: "Звонки, заявки и обращения" },
          { num: "5", name: "Предпродажи (PDI)", desc: "Тест-драйвы, брони и предзаказы" },
          { num: "6", name: "Запчасти", desc: "Каталог, заказы и остатки" }
        ],
        hint: "1–6 быстрый запуск",
        version: "v304"
      },
      analytics: {
        title: "Аналитика и контракты",
        subtitle: "Сводка по сети — 1 мая 2026 г.",
        kpis: [
          { label: "Контрактов", value: "373", delta: "+12.4%" },
          { label: "Выручка, мес.", value: "₽ 184M", delta: "+8.2%" },
          { label: "Сред. чек", value: "₽ 4.9M", delta: "+3.1%" },
          { label: "Активные дилеры", value: "23", delta: "+1" }
        ],
        chartTitle: "Контракты и выручка — 14 дней",
        legend: ["Контракты", "Выручка"],
        regionsTitle: "По регионам",
        regions: [
          { name: "Ташкент", value: 142 },
          { name: "Андижанская обл.", value: 64 },
          { name: "Самаркандская обл.", value: 48 },
          { name: "Бухарская обл.", value: 31 },
          { name: "Кашкадарьинская обл.", value: 24 },
          { name: "Каракалпакстан", value: 18 }
        ]
      },
      sales: {
        title: "Заказы",
        subtitle: "Управление заказами и контрактами",
        total: "Всего заказов",
        totalVal: "373",
        statuses: [
          { label: "Черновик", count: "3", color: "draft" },
          { label: "Новый", count: "260", color: "new" },
          { label: "Продолжено", count: "2", color: "progress" },
          { label: "В очереди", count: "6", color: "queue" },
          { label: "Бронь", count: "102", color: "reserved" }
        ],
        tabs: ["Сегодня", "Вчера", "7 дней", "Месяц", "Период"],
        cols: ["№", "Код контракта", "ID", "Статус", "Ф.И.О.", "Модель", "Цвет", "Дилер"],
        rows: [
          ["1", "1-ART-2026-00067-RR", "3649377", "Новый", "Mirsolihov Mirgulom", "ZEEKR X", "Black Sapp.", "ООО \"AUSTERE\""],
          ["2", "1-ART-2026-00066-RR", "3651111", "Новый", "Mirsolihov Mirg'ulom Mirobid…", "ZEEKR 7X", "Alpine White", "ООО \"AUSTERE\""],
          ["3", "1-ARS-2026-00813-VM", "3648717", "Новый", "A'ZAMXOJAEV AZIZJON NIG…", "iX M70", "Tanzanite B…", "ООО \"APEX MOTORS\""],
          ["4", "1-ARS-2026-00814-VM", "3648717", "Новый", "A'ZAMXOJAEV AZIZJON NIG…", "iX M70", "Tanzanite B…", "ООО \"APEX MOTORS\""],
          ["5", "1-ART-2026-00065-RR", "3649377", "Новый", "Mirsolihov Mirgulom", "ZEEKR", "Gray Metallic", "ООО \"AUSTERE\""],
          ["6", "1-ART-2026-00064-VM", "3651111", "Новый", "Mirsolihov Mirg'ulom Mirobid…", "ZEEKR X", "Alpine White", "ООО \"AUSTERE\""],
          ["7", "1-ART-2026-00062-VM", "3648760", "Новый", "Abdukadirov Miragzam Mirpu…", "ZEEKR X", "Alpine White", "ООО \"AUSTERE\""],
          ["8", "3-ART-2026-00059-VM", "3642845", "Черновик", "ООО \"AUSTERE\"", "ZEEKR 7X", "Alpine White", "ООО \"AUSTERE\""]
        ],
        models: ["ZEEKR X", "ZEEKR 7X", "BMW iX", "ZEEKR"],
        toolbar: ["Колонки", "Стили", "Условия", "Таблица", "Сброс", "Обучение"],
        actions: ["Фильтры", "Excel", "Обновить", "+ Новый заказ"],
        sidebar: { title: "Торговля", main: "ОСНОВНОЕ", items: ["Заказы", "Реализация/отмена", "Остатки", "Логистика", "Статистика", "Клиенты", "Справочники", "Отчёты"] }
      },
      crm: {
        greet: "Добрый день 👋",
        subtitle: "пт, 1 мая · CRM — Обзор",
        kpis: [
          { value: "16", label: "Всего лидов" },
          { value: "0", label: "В работе" },
          { value: "6", label: "Воронка" },
          { value: "9", label: "Источники" },
          { value: "13", label: "Задачи" }
        ],
        funnelTitle: "Воронка продаж",
        funnel: [
          { name: "Новый", value: 4, pct: 25 },
          { name: "Контакт установлен", value: 6, pct: 38 },
          { name: "Не дозвонились", value: 2, pct: 13 },
          { name: "Не корректный номер", value: 1, pct: 6 },
          { name: "Успешно", value: 1, pct: 6 },
          { name: "Отказ (неуспешно)", value: 2, pct: 12 }
        ],
        sourcesTitle: "Источники лидов",
        sources: [
          { name: "Telegram", value: 3, pct: 19 },
          { name: "Офлайн – Facebook", value: 3, pct: 19 },
          { name: "Instagram", value: 2, pct: 13 },
          { name: "Офлайн", value: 2, pct: 13 },
          { name: "Онлайн – друзья/знакомые", value: 2, pct: 13 },
          { name: "OK.ru", value: 1, pct: 6 },
          { name: "Сайт", value: 1, pct: 6 },
          { name: "Офлайн – Instagram", value: 1, pct: 6 },
          { name: "Офлайн – telegram", value: 1, pct: 6 }
        ],
        modelsTitle: "По моделям",
        models: [
          { name: "Zeekr", value: 6 },
          { name: "BMW iX", value: 3 },
          { name: "Mercedes EQS", value: 3 },
          { name: "BMW 5 Series", value: 2 },
          { name: "Leapmotor C10", value: 1 },
          { name: "Mercedes GLB", value: 1 }
        ],
        tasksTitle: "Задачи",
        tasks: [
          { name: "На сегодня", value: 0 },
          { name: "Просроченные", value: 7, warn: true },
          { name: "Выполненные", value: 6 },
          { name: "Всего задач", value: 13 }
        ],
        sidebar: { title: "CRM", group1: "УПРАВЛЕНИЕ", items1: ["Обзор", "Лиды", "Клиенты", "Задачи"], group2: "АНАЛИТИКА", items2: ["Отчёты"], group3: "НАСТРОЙКИ", items3: ["Справочники"] },
        actions: ["+ Новый лид", "Задачи"]
      },
      callcenter: {
        title: "Аналитика и мониторинг",
        subtitle: "Сводка показателей колл-центра · 1 мая 2026 г.",
        kpis: [
          { label: "SLA", value: "82%", goal: "Цель: 90%" },
          { label: "Ср. ожидание", value: "18 сек", goal: "Цель: ≤20сек" },
          { label: "Ср. разговор", value: "2:48 мин", goal: "Цель: 4:00 мин" },
          { label: "FCR", value: "76%", goal: "First Call Resolution" },
          { label: "Потери", value: "4%", goal: "Цель: ≤5%" }
        ],
        weekTitle: "Динамика за неделю",
        weekSub: "Входящие, исходящие и пропущенные",
        legend: ["Входящие", "Исходящие", "Пропущенные"],
        days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        weekValues: [
          { d: "Пн", in: 184, out: 92, miss: 12 },
          { d: "Вт", in: 212, out: 108, miss: 14 },
          { d: "Ср", in: 168, out: 76, miss: 9 },
          { d: "Чт", in: 240, out: 130, miss: 18 },
          { d: "Пт", in: 268, out: 148, miss: 22 },
          { d: "Сб", in: 96, out: 38, miss: 4 },
          { d: "Вс", in: 42, out: 14, miss: 2 }
        ],
        weekTotals: [
          { label: "Входящих за неделю", value: 1210 },
          { label: "Исходящих за неделю", value: 606 },
          { label: "Пропущенных за неделю", value: 81 }
        ],
        reasonsTitle: "Причины обращений",
        reasonsSub: "Распределение за текущую неделю",
        reasons: [
          { name: "Гарантия и сервис", value: 318, pct: 41 },
          { name: "Запчасти", value: 214, pct: 28 },
          { name: "Тест-драйв", value: 148, pct: 19 },
          { name: "Прочее", value: 92, pct: 12 }
        ],
        sidebar: { title: "Колл-центр", group1: "МОНИТОРИНГ", items1: ["Дашборд", "Реалтайм"], group2: "АНАЛИТИКА", items2: ["Аналитика CDR", "Записи звонков"] }
      },
      pdi: {
        title: "Приёмка авто",
        subtitle: "ПРЕДПРОДАЖНАЯ ПОДГОТОВКА",
        statBoxes: [
          { label: "ВСЕГО", value: "8" },
          { label: "В РАБОТЕ", value: "3" },
          { label: "НЕ НАЧАТ", value: "1" },
          { label: "РЕАЛИЗОВАН", value: "4" }
        ],
        actions: ["↑ Импорт", "Шаблон"],
        searchPlaceholder: "Поиск по VIN, модели…",
        items: [
          { vin: "WBXXC2R7TS7P3", status: "не начат", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [0, 6], stages: [false, false, false, false, false, false], dealer: "Основной склад Au…", admin: "Admin", ts: "02.04.2026 18:00:01" },
          { vin: "G1K632W7T4SST7", status: "в обработке", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [2, 6], stages: [true, true, false, false, false, false], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 17:00:12" },
          { vin: "L1KC32W7T6SH7", status: "в обработке", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [1, 6], stages: [true, false, false, false, false, false], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 16:08:38" },
          { vin: "S1K632W7T4S87", status: "реализован", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [6, 6], stages: [true, true, true, true, true, true], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 16:38:50" },
          { vin: "S1K6J2W7T4S87", status: "реализован", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [6, 6], stages: [true, true, true, true, true, true], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 16:38:57" },
          { vin: "L1K632W7T4S87", status: "реализован", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [6, 6], stages: [true, true, true, true, true, true], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 16:38:57" },
          { vin: "B1KJ34F65EFT787B", status: "в обработке", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [3, 6], stages: [true, true, true, false, false, false], dealer: "ООО \"AUSTERE\"", admin: "Admin", ts: "02.04.2026 16:00:01" },
          { vin: "B1KJ8H7Q5KCD028", status: "реализован", model: "BMW iX", trim: "iX xDrive45 · Black Sapphire Metallic", progress: [6, 6], stages: [true, true, true, true, true, true], dealer: "Основной склад Au…", admin: "Admin", ts: "02.04.2026 17:05:48" }
        ],
        sidebar: { title: "Предпродажи", group1: "ОСНОВНОЕ", items1: ["Автомобили", "Отчёты"], group2: "НАСТРОЙКИ", items2: ["Справочники"] }
      },
      parts: {
        title: "Запчасти",
        subtitle: "Каталог, заказы и остатки на складах",
        kpis: [
          { label: "Артикулов", value: "12,486" },
          { label: "В наличии", value: "₽ 24.8M" },
          { label: "Заказы / мес.", value: "1,284" },
          { label: "Складов", value: "9" }
        ],
        cols: ["Артикул", "Наименование", "Бренд", "Склад", "Остаток", "Цена", "Статус"],
        rows: [
          ["BM-7N-04829", "Тормозные колодки передние", "BMW", "Ташкент Ц", "42", "₽ 14,800", "В наличии"],
          ["BM-7N-04830", "Фильтр салонный угольный", "BMW", "Ташкент Ц", "168", "₽ 2,400", "В наличии"],
          ["ZK-12-00112", "Аккумулятор HV модуль", "ZEEKR", "Ташкент Ю", "4", "₽ 184,000", "Мало"],
          ["MB-EQ-77821", "Стабилизатор задний", "Mercedes", "Самарканд", "0", "₽ 38,200", "Заказ"],
          ["BM-IX-90142", "Зарядный кабель Type 2", "BMW", "Ташкент Ц", "26", "₽ 12,400", "В наличии"],
          ["ZK-7X-00921", "Дворники компл.", "ZEEKR", "Андижан", "84", "₽ 4,800", "В наличии"],
          ["LP-C10-3344", "Лампа LED ближний свет", "Leapmotor", "Бухара", "12", "₽ 7,200", "В наличии"]
        ],
        sidebar: { title: "Запчасти", group1: "СКЛАД", items1: ["Каталог", "Остатки", "Заказы", "Поставки"], group2: "АНАЛИТИКА", items2: ["Оборачиваемость", "Отчёты"] }
      }
    },
    stats: {
      tag: "Результаты",
      title: ["Цифры, которые ", "важны", " дилерам."],
      cells: [
        { num: ["43", "%"], label: "Быстрее первый ответ" },
        { num: ["2.4", "×"], label: "Больше заказов запчастей" },
        { num: ["12", " филиалов"], label: "В среднем у клиента" },
        { num: ["98", "%"], label: "Звонков записано и учтено" }
      ]
    },
    pricing: {
      tag: "Тарифы",
      title: ["Простые планы, ", "по филиалам."],
      lede: "Все планы включают неограниченных менеджеров, запись звонков и интеграцию 1С. Можно отменить в любой момент.",
      monthly: "/ месяц",
      monthlyUzs: "/ мес. (UZS)",
      currencyUsd: "USD",
      currencyUzs: "UZS",
      popularLabel: "Популярный",
      tiers: [
        { name: "Старт", price: ["$", "390"], priceUzs: ["so'm ", "4 875 000"], desc: "Для дилерских центров, наводящих порядок в первой CRM.", features: ["1 филиал", "До 15 менеджеров", "Торговля и CRM", "Колл-центр (базовый)", "Поддержка по почте и в чате"], cta: "Начать пробный" },
        { name: "Сеть", price: ["$", "1 290"], priceUzs: ["so'm ", "16 125 000"], desc: "Самый популярный. Все 7 модулей и интеграция 1С.", features: ["До 8 филиалов", "Без лимита менеджеров", "Все 7 модулей включены", "Интеграция 1С", "IVR и аналитика КЦ", "Приоритетный онбординг"], cta: "Записаться на демо", popular: true },
        { name: "Enterprise", price: ["", "Индивид."], priceUzs: ["", "Индивид."], desc: "Для крупных дилерских холдингов с собственными ERP и SLA.", features: ["Без лимита филиалов", "Персональный менеджер", "Кастом интеграции и API", "On-prem развёртывание", "SLA 99,9%", "Квартальные ревью"], cta: "Связаться" }
      ]
    },
    faq: {
      tag: "Вопросы",
      title: ["Что дилеры ", "спрашивают", " перед подписанием."],
      items: [
        { q: "Сколько занимает запуск во всех филиалах?", a: "Типичный запуск сети — 4–6 недель. Сначала пилот в одном филиале, проверяем процессы с вашими менеджерами, затем еженедельно подключаем остальные. Данные не теряются: история лидов, звонков и заказов запчастей переносится." },
        { q: "Есть ли интеграция с 1С и нашей ERP?", a: "Да. Нативные коннекторы 1С и документированный REST API. Большинство клиентов синхронизируют склад, финансы и клиентов в обе стороны. Кастомные интеграции прорабатываем на онбординге." },
        { q: "Что с записью звонков и приватностью данных?", a: "Звонки записываются с уведомлением о согласии и хранятся зашифрованно. Соблюдаем правила резидентности — данные остаются в вашем регионе. Сроки хранения настраиваются по филиалу." },
        { q: "Могут ли операторы работать удалённо?", a: "Да. Carsale работает в любом современном браузере; операторы заходят откуда угодно. Звонки идут через SIP, контроль качества — как в офисе." },
        { q: "Какие языки поддерживает интерфейс?", a: "Узбекский, русский и английский «из коробки». Каждый менеджер выбирает свой язык; отчёты учитывают предпочтение." },
        { q: "Как устроены тарифы для растущей сети?", a: "Цена за филиал, без оплаты за пользователя. Открываете новый филиал — добавляем в план; платите только за активные. Скидки от 10 филиалов." }
      ]
    },
    cta: {
      tag: "Начать",
      title: ["Посмотрите Carsale на ", "своих ", "данных."],
      lede: "30 минут. Поднимем песочницу с вашими филиалами, VIN-ами и записями звонков — и покажем вторник утром, от и до.",
      bullets: ["Живой разбор от продакт-специалиста", "Песочница с вашими данными", "План внедрения, без обязательств"],
      formTitle: "Записать на демо",
      formSub: "Свяжемся в течение рабочего дня.",
      f_name: "Имя и фамилия", f_company: "Дилер / компания", f_role: "Ваша роль", f_filials: "Кол-во филиалов",
      f_email: "Рабочая почта", f_phone: "Телефон (с кодом)", f_msg: "Что нам стоит знать?",
      submit: "Запросить демо",
      success: ["Спасибо — мы на связи.", "Специалист свяжется в течение рабочего дня."]
    },
    footer: {
      tagline: "Автоматизация для дилерских сетей. Семь модулей — продажи, CRM, колл-центр, предпродажи, запчасти, аналитика — под одной крышей.",
      product: "Продукт", product_l: ["Главный экран", "Аналитика", "Торговля", "CRM", "Колл-центр", "Предпродажи", "Запчасти"],
      company: "Компания", company_l: ["О нас", "Карьера", "Пресс-кит", "Партнёры"],
      resources: "Ресурсы", resources_l: ["Документация", "API", "Поддержка", "Безопасность"],
      copy: "© 2026 Carsale Technologies",
      legal: ["Условия", "Конфиденциальность", "Cookies"]
    }
  },
  uz: {
    nav: { features: "Modullar", product: "Mahsulot", pricing: "Tariflar", faq: "Savollar", login: "Kirish", trial: "Demo" },
    hero: {
      eyebrow: "Avtosalon tarmoqlari uchun · O'zbekiston",
      titleA: ["Barcha", "filiallarni", "bitta", "ekrandan", "boshqaring."],
      titleAEm: 1,
      sub: "Carsale — avtosalonlar uchun yagona tizim: sotuv, CRM, call-markaz, sotuvdan oldingi tayyorlov va ehtiyot qism. Bir tom ostida yetti modul.",
      cta1: "Demo olish",
      cta2: "Modullar bo'yicha tur",
      stat1: ["7", "modul", "bitta tizimda"],
      stat2: ["43%", "tezroq", "kiruvchi qo'ng'iroqqa javob"],
      stat3: ["12", "filial", "mijozda o'rtacha"],
      typeLed: { line1: "Yetti", line2: "modul,", line3: "bitta", line4: "tizim." },
      mockChrome: "CARSALE · LIVE",
      mockTrend: "14 kunlik trend",
      mockKpis: [
        { l: "Qo'ng'iroqlar", v: "1 284", d: "+12%" },
        { l: "Lidlar", v: "312", d: "+24%" },
        { l: "AHT", v: "2:48", d: "-22s" },
      ],
      mockQueue: [
        { n: "A. Karimov", s: "BMW X5", tag: "live", tagLabel: "jonli" },
        { n: "M. Volkova", s: "Lexus RX", tag: "new", tagLabel: "yangi" },
        { n: "O. Saidov", s: "Toyota Camry", tag: "live", tagLabel: "jonli" },
      ],
    },
    marquee: ["Bosh ekran", "Tahlil", "Sotuv", "CRM va lidlar", "Call-markaz", "Sotuvdan oldin (PDI)", "Ehtiyot qism", "1C integratsiya"],
    video: {
      tag: "Video",
      titleBefore: "60 soniyada ",
      titleEm: "jarayonni",
      titleAfter: " ko'ring.",
      lede: "Tezkor mahsulot turi — sotuv, CRM, call-markaz va PDI bitta tizimda.",
      placeholderCta: "Demo MP4 qo‘shing — integratsiya uchun tayyor.",
    },
    features: {
      tag: "Imkoniyatlar",
      title: ["Har bir diler ", "bo'limi ", "uchun yetti modul."],
      lede: "Test-drayv arizasidan to avto qabuli va ehtiyot qism omborigacha — hammasi yagona tizimda.",
      cards: [
        { title: ["Sotuv ", "va shartnomalar"], body: "Tarmoq bo'ylab buyurtma va shartnomalarni boshqaring. Holatlar «Qoralama / Yangi / Davom etgan / Navbatda / Bron», kodlash, filtrlar, Excelga eksport." },
        { title: ["CRM ", "va lidlar"], body: "Sotuv voronkasi, lid skoring va manbalar (Telegram, Instagram, Facebook, Sayt, Oflayn). Mijoz kartochkalari kontakt tarixi, modellar va hudud bilan." },
        { title: ["Call-markaz ", "va tahlil"], body: "SLA, o'rtacha kutish, suhbat vaqti, FCR va yo'qotishlar — bitta dashbordda. Hafta dinamikasi va qo'ng'iroq sabablari." },
        { title: ["Sotuvdan oldin ", "(PDI)"], body: "Avto tayyorlovi chek-listlari. Har bir avto 6 bosqichdan o'tadi: jarayon, mas'ul menejer va ombor." },
        { title: ["Ehtiyot qism ", "va ombor"], body: "Omborlar bo'ylab katalog, buyurtmalar va qoldiqlar. Qo'ng'iroqdan zaxiralash va o'tkazish. VIN bo'yicha avto bilan bog'lanish." },
        { title: ["Tahlil ", "va hisobotlar"], body: "Modellar, hududlar, manbalar va menejerlar bo'yicha umumiy dashbordlar. Excel yoki to'g'ridan-to'g'ri 1C ga eksport." }
      ]
    },
    modules: {
      tag: "Modullar",
      title: ["Yetti ekran, ", "bitta ", "tizim."],
      lede: "Carsale modullari yagona bazada ishlaydi va 1C bilan sinxronlashadi.",
      list: [
        { id: "home", num: "01", name: "Bosh ekran", desc: "Barcha modullar ish maydoni" },
        { id: "analytics", num: "02", name: "Tahlil", desc: "Dashbordlar, shartnomalar, moliya" },
        { id: "sales", num: "03", name: "Sotuv", desc: "Buyurtmalar, mijozlar, mahsulotlar" },
        { id: "crm", num: "04", name: "CRM", desc: "Mijozlar, bitimlar, voronkalar" },
        { id: "callcenter", num: "05", name: "Call-markaz", desc: "Qo'ng'iroqlar, arizalar" },
        { id: "pdi", num: "06", name: "Sotuvdan oldin", desc: "Test-drayvlar, bronlar" },
        { id: "parts", num: "07", name: "Ehtiyot qism", desc: "Katalog, buyurtmalar, qoldiqlar" }
      ]
    },
    stats: {
      tag: "Natijalar",
      title: ["Dilerlarga ", "muhim", " raqamlar."],
      cells: [
        { num: ["43", "%"], label: "Tezroq birinchi javob" },
        { num: ["2.4", "×"], label: "Ko'proq qism buyurtmasi" },
        { num: ["12", " filial"], label: "Mijozda o'rtacha" },
        { num: ["98", "%"], label: "Qo'ng'iroqlar yozildi" }
      ]
    },
    pricing: {
      tag: "Tariflar",
      title: ["Oddiy tariflar, ", "filial bo'yicha."],
      lede: "Barcha tariflarda cheksiz menejerlar, qo'ng'iroq yozuvi va 1C integratsiyasi.",
      monthly: "/ oy",
      monthlyUzs: "/ oy (UZS)",
      currencyUsd: "USD",
      currencyUzs: "UZS",
      popularLabel: "Eng mashhur",
      tiers: [
        { name: "Start", price: ["$", "390"], priceUzs: ["so'm ", "4 875 000"], desc: "Bitta filial dilerlik markazlari uchun.", features: ["1 filial", "15 ta menejergacha", "Sotuv va CRM", "Call-markaz (asosiy)", "Email qo'llab-quvvatlash"], cta: "Sinov boshlash" },
        { name: "Tarmoq", price: ["$", "1 290"], priceUzs: ["so'm ", "16 125 000"], desc: "Eng mashhur. Barcha 7 modul va 1C integratsiyasi.", features: ["8 filialgacha", "Cheksiz menejer", "Barcha 7 modul", "1C integratsiya", "IVR va KM tahlili", "Ustuvor onbording"], cta: "Demo olish", popular: true },
        { name: "Enterprise", price: ["", "Maxsus"], priceUzs: ["", "Maxsus"], desc: "Yirik holdinglar uchun.", features: ["Cheksiz filial", "Shaxsiy menejer", "Maxsus integratsiya va API", "On-prem", "99.9% SLA", "Choraklik ko'rib chiqish"], cta: "Bog'lanish" }
      ]
    },
    faq: {
      tag: "Savollar",
      title: ["Dilerlar ", "imzolashdan oldin", " so'rashadi."],
      items: [
        { q: "Bir nechta filialda joriy etish qancha vaqt oladi?", a: "Tipik tarmoq joriy etish — 4–6 hafta. Avval pilot filial, keyin haftalik qolganlari." },
        { q: "1C va ERP bilan integratsiya bormi?", a: "Ha. 1C uchun nativ konnektorlar va REST API. Aksariyat mijozlar omborni va mijozlarni ikki tomonlama sinxronlashtiradi." },
        { q: "Qo'ng'iroq yozuvi va ma'lumot maxfiyligi?", a: "Qo'ng'iroqlar rozilik bildirgich bilan yoziladi va shifrlangan. Mahalliy ma'lumotlar rezidentligi qoidalariga rioya qilinadi." },
        { q: "Operatorlar uydan ishlay oladimi?", a: "Ha. Carsale har qanday brauzerda; operatorlar istalgan joydan kiradi." },
        { q: "Interfeys qaysi tillarni qo'llaydi?", a: "O'zbek, rus va ingliz. Har bir menejer o'z tilini tanlaydi." },
        { q: "Tariflar qanday?", a: "Filial bo'yicha narx, foydalanuvchi to'lovi yo'q. 10+ filialdan chegirma." }
      ]
    },
    cta: {
      tag: "Boshlash",
      title: ["Carsale'ni ", "o'zingiz ", "ma'lumotlaringizda ko'ring."],
      lede: "30 daqiqa. Sizning filiallaringiz va VIN'lar bilan sinov muhitini sozlaymiz.",
      bullets: ["Mahsulot mutaxassisi bilan jonli ko'rib chiqish", "Sandbox", "Joriy etish rejasi"],
      formTitle: "Demoga yozilish",
      formSub: "Bir ish kuni ichida bog'lanamiz.",
      f_name: "Ism va familiya", f_company: "Diler / kompaniya", f_role: "Lavozim", f_filials: "Filiallar",
      f_email: "Ish elektron pochta", f_phone: "Telefon", f_msg: "Bilishimiz kerak?",
      submit: "Demo so'rash",
      success: ["Rahmat — qabul qildik.", "Mutaxassis bog'lanadi."]
    },
    footer: {
      tagline: "Avtosalon tarmoqlari uchun avtomatlashtirish. Bir tom ostida yetti modul.",
      product: "Mahsulot", product_l: ["Bosh ekran", "Tahlil", "Sotuv", "CRM", "Call-markaz", "Sotuvdan oldin", "Ehtiyot qism"],
      company: "Kompaniya", company_l: ["Biz haqimizda", "Karyera", "Press-kit", "Hamkorlar"],
      resources: "Resurslar", resources_l: ["Hujjatlar", "API", "Qo'llab-quvvatlash", "Xavfsizlik"],
      copy: "© 2026 Carsale Technologies",
      legal: ["Shartlar", "Maxfiylik", "Cookies"]
    }
  },
  en: {
    nav: { features: "Modules", product: "Product", pricing: "Pricing", faq: "FAQ", login: "Sign in", trial: "Get demo" },
    hero: {
      eyebrow: "Built for car dealership networks · Uzbekistan",
      titleA: ["Run", "every", "dealership", "from", "one", "screen."],
      titleAEm: 2,
      sub: "Carsale is one system for car dealers — sales, CRM, call center, pre-sale prep, and parts. Seven modules, one calm roof.",
      cta1: "Book a demo",
      cta2: "Tour the modules",
      stat1: ["7", "modules", "in one platform"],
      stat2: ["43%", "faster", "first-response on inbound"],
      stat3: ["12", "filials", "average rollout per client"],
      typeLed: { line1: "Seven", line2: "modules,", line3: "one", line4: "system." },
      mockChrome: "CARSALE · LIVE",
      mockTrend: "14d trend",
      mockKpis: [
        { l: "Calls", v: "1,284", d: "+12%" },
        { l: "Leads", v: "312", d: "+24%" },
        { l: "AHT", v: "2:48", d: "-22s" },
      ],
      mockQueue: [
        { n: "A. Karimov", s: "BMW X5", tag: "live", tagLabel: "live" },
        { n: "M. Volkova", s: "Lexus RX", tag: "new", tagLabel: "new" },
        { n: "O. Saidov", s: "Toyota Camry", tag: "live", tagLabel: "live" },
      ],
    },
    marquee: ["Home", "Analytics", "Sales", "CRM & leads", "Call center", "Pre-sale (PDI)", "Spare parts", "1C integration"],
    video: {
      tag: "Walkthrough",
      titleBefore: "See the ",
      titleEm: "flow",
      titleAfter: " in 60 seconds.",
      lede: "A quick product tour — sales, CRM, call center, and PDI working together in one calm system.",
      placeholderCta: "Drop a demo video here (MP4) — ready for integration.",
    },
    features: {
      tag: "Capabilities",
      title: ["Seven modules for every ", "dealer ", "department."],
      lede: "From the test-drive booking to vehicle pre-sale prep and parts inventory — everything in one system.",
      cards: [
        { title: ["Sales ", "& contracts"], body: "Manage orders and contracts across the whole network. Status flow Draft / New / Continued / Queued / Reserved, contract codes, filters, Excel export." },
        { title: ["CRM ", "& leads"], body: "Sales funnel, lead scoring, and source tracking (Telegram, Instagram, Facebook, Site, Offline). Customer cards with contact history, models and region." },
        { title: ["Call center ", "& analytics"], body: "SLA, avg wait, talk time, FCR, and abandons — one dashboard. Weekly trend of inbound/outbound/missed. Call recordings and reasons." },
        { title: ["Pre-sale ", "(PDI)"], body: "Vehicle pre-sale checklists. Each car runs through 6 stages with progress, owner, and warehouse. Filter by Not started / In progress / Done." },
        { title: ["Spare parts ", "& inventory"], body: "Catalog, orders, and stock across warehouses. Reserve and transfer from a call. Linked to orders and vehicles by VIN." },
        { title: ["Analytics ", "& reports"], body: "Dashboards by model, region, source, manager. Finance, contracts, and sales by period. Export to Excel or sync to 1C." }
      ]
    },
    modules: {
      tag: "Modules",
      title: ["Seven screens, ", "one ", "system."],
      lede: "Every Carsale module reads from the same database and syncs with 1C. Switch between them:",
      list: [
        { id: "home", num: "01", name: "Home", desc: "Workspace with all modules" },
        { id: "analytics", num: "02", name: "Analytics", desc: "Dashboards, contracts, finance, reports" },
        { id: "sales", num: "03", name: "Sales", desc: "Orders, customers, products" },
        { id: "crm", num: "04", name: "CRM", desc: "Customers, deals, funnels" },
        { id: "callcenter", num: "05", name: "Call center", desc: "Calls, requests, escalations" },
        { id: "pdi", num: "06", name: "Pre-sale", desc: "Test drives, holds, pre-orders" },
        { id: "parts", num: "07", name: "Spare parts", desc: "Catalog, orders, stock" }
      ]
    },
    stats: {
      tag: "Outcomes",
      title: ["Numbers our ", "partners", " care about."],
      cells: [
        { num: ["43", "%"], label: "Faster first response" },
        { num: ["2.4", "×"], label: "More parts orders/month" },
        { num: ["12", " filials"], label: "Average rollout per client" },
        { num: ["98", "%"], label: "Calls captured & logged" }
      ]
    },
    pricing: {
      tag: "Pricing",
      title: ["Simple plans, ", "per filial."],
      lede: "All plans include unlimited managers, call recording, and 1C integration. Cancel any time.",
      monthly: "/ month",
      monthlyUzs: "/ month (UZS)",
      currencyUsd: "USD",
      currencyUzs: "UZS",
      popularLabel: "Most popular",
      tiers: [
        { name: "Starter", price: ["$", "390"], priceUzs: ["so'm ", "4,875,000"], desc: "For single-location dealerships getting their first CRM in order.", features: ["1 filial", "Up to 15 managers", "Sales & CRM", "Basic call center", "Email & chat support"], cta: "Start trial" },
        { name: "Network", price: ["$", "1,290"], priceUzs: ["so'm ", "16,125,000"], desc: "Most popular. All 7 modules and 1C integration included.", features: ["Up to 8 filials", "Unlimited managers", "All 7 modules", "1C integration", "IVR + call analytics", "Priority onboarding"], cta: "Book a demo", popular: true },
        { name: "Enterprise", price: ["", "Custom"], priceUzs: ["", "Custom"], desc: "For large dealer holdings with bespoke ERP and SLA needs.", features: ["Unlimited filials", "Dedicated success manager", "Custom integrations & API", "On-prem deployment", "99.9% SLA", "Quarterly business reviews"], cta: "Contact sales" }
      ]
    },
    faq: {
      tag: "Questions",
      title: ["Things dealers ", "ask us", " before signing."],
      items: [
        { q: "How long does rollout take across multiple filials?", a: "Typical multi-filial rollout is 4–6 weeks. We start with one pilot filial, validate the workflows with your managers, then sequence the rest with weekly migrations." },
        { q: "Does Carsale integrate with 1C and our existing ERP?", a: "Yes. Native 1C connectors and a documented REST API. Most clients sync inventory, financials, and customer records bidirectionally." },
        { q: "What about call recording and data privacy?", a: "Calls are recorded with consent prompts and stored encrypted at rest. Data lives in-region. Retention windows are configurable per filial." },
        { q: "Can my call center agents work from home?", a: "Yes. Carsale runs in any modern browser. Calls route through our SIP layer and are quality-monitored just as in-office." },
        { q: "What languages does the interface support?", a: "Uzbek, Russian, and English out of the box. Each manager picks their own language." },
        { q: "How is pricing structured for growing networks?", a: "Per filial, with no per-seat fees. As you open new filials, we add them to your plan; volume discounts at 10+ filials." }
      ]
    },
    cta: {
      tag: "Get started",
      title: ["See Carsale running on your ", "actual ", "data."],
      lede: "30-minute call. We'll wire up a sandbox with your filials, your VINs, and your call recordings — and show you a Tuesday morning, end-to-end.",
      bullets: ["Live walkthrough by a product specialist", "Sandbox seeded with your data", "Custom rollout plan, no commitment"],
      formTitle: "Book your demo",
      formSub: "We'll reach out within one business day.",
      f_name: "Full name", f_company: "Dealership / company", f_role: "Your role", f_filials: "Number of filials",
      f_email: "Work email", f_phone: "Phone (with code)", f_msg: "Anything we should know?",
      submit: "Request demo",
      success: ["Thanks — we're on it.", "A specialist will reach out within one business day."]
    },
    footer: {
      tagline: "Automation for car dealership networks. Sales, CRM, call center, pre-sale, parts, analytics — under one calm roof.",
      product: "Product", product_l: ["Home", "Analytics", "Sales", "CRM", "Call center", "Pre-sale", "Spare parts"],
      company: "Company", company_l: ["About", "Careers", "Press kit", "Partners"],
      resources: "Resources", resources_l: ["Docs", "API", "Support", "Security"],
      copy: "© 2026 Carsale Technologies",
      legal: ["Terms", "Privacy", "Cookies"]
    }
  }
};

// UZ/EN share Russian module demo data (per source)
function fillModuleDemos(target: any, source: any) {
  if (!target.modules) target.modules = {};
  ["home", "analytics", "sales", "crm", "callcenter", "pdi", "parts"].forEach((k) => {
    if (!target.modules[k]) target.modules[k] = source.modules[k];
  });
}
fillModuleDemos(I18N.uz, I18N.ru);
fillModuleDemos(I18N.en, I18N.ru);
