# Процесс нормализации базы данных

## Нормализация до 1NF
- Решено: Все атрибуты атомарны
- Изменения: Данные карточек, пользователей и колод разделены на элементарные составляющие

## Нормализация до 2NF
- Решено: Устранены частичные зависимости
- Изменения: Данные пользователей и колод вынесены в отдельные таблицы `Users` и `Decks`

## Нормализация до 3NF
- Решено: Устранены транзитивные зависимости
- Результат: Параметры алгоритма повторения вынесены в таблицу `Reviews`, каждая таблица содержит только атрибуты, зависящие от ее PK

## Прикрепленные артефакты

### ER-диаграмма
- PNG: [er_diagram_spaced_repetition.png](https://github.com/TEMIKSO/smart-todo-srs/blob/main/docs/database/er_diagram.drawio.png)
- SVG: [er_diagram_spaced_repetition.svg](https://github.com/TEMIKSO/smart-todo-srs/blob/main/docs/database/er_diagram_svg.drawio.svg)

### Схемы нормализации
- Основная схема: [schema.sql](https://github.com/TEMIKSO/smart-todo-srs/blob/main/database/schema.sql.txt)
- Тестовые данные: [seed_data.sql](https://github.com/TEMIKSO/smart-todo-srs/blob/main/database/seed_data.sql.txt)

WIKI: https://github.com/TEMIKSO/smart-todo-srs/wiki/Процесс-проектирования-и-нормализации
