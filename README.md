## 🔘 ToggleSwitch

### 🧩 Назначение

Компонент используется для переключения между двумя состояниями: включено / выключено. Подходит для смены тем, активации настроек, управления фичами и т.д.

### ⚙️ Особенности

- ✅ **БЭМ-структура** классов (`toggle`, `toggle__input`, `toggle__label`, `toggle__circle`)
- 🎨 Плавная анимация и эффект нажатия
- 🔄 Управляется через React `useState`
- 📦 Стили через CSS-модули (`ToggleSwitch.module.css`)
- 🛠️ Легко масштабируется и настраивается

### 🧠 Поведение

- Скрытый чекбокс `<input type="checkbox">` управляет внутренним состоянием
- `<label>` и вложенный `<span>` визуализируют переключатель
- Перемещение ползунка и смена цвета — по чекнутому состоянию
- В консоль выводится текущее состояние (`ON/OFF`) при переключении

### 📥 Использование

```jsx
import ToggleSwitch from './ToggleSwitch';

function App() {
  return <ToggleSwitch />;
}
````

### 📦 Структура проекта

```
/ToggleSwitch
├── ToggleSwitch.jsx         # React-компонент
└── ToggleSwitch.module.css  # CSS-модули со стилями по БЭМ
```

### 🚀 Возможные улучшения

* Добавить `props` (`onChange`, `defaultChecked`, `disabled`, `label`)
* Поддержка `aria-` атрибутов и роли `switch` (доступность)
* Версия с Tailwind или Styled Components
* Controlled vs uncontrolled поведение
