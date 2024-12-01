# Перечень команд

## Git **config** - конфигурация

[//]: # "python тут и далее только для красоты"

### Настройка имени и email пользователя

```python
git config user.name "..."
git config user.email "..."
```

### Настройка глобальных параметров Git

```python
git config --global "..."
```

### Показ сводки настроек конфигурации Git

```python
git config --list
```

### Убрать параметр конфигурации

```python
git config --unset "..."
```

### Убрать целую секцию конфигурации

```python
git config --remove-section "..."
```

### Создать свою команду

```python
git config --global alias."...название команды" "...команда(ы) на замену"
```

## Начало работы с Git

### Инициализация нового репозитория Git

```python
git init
```

### Показать состояние рабочего дерева

```python
git status
```

### Добавить файлы в область хранения

```python
git add
```

### Добавление всех файлов в индекс

```python
git add .
```

### Интерактивный выбор частей (кусков) файлов для добавления

```python
git add -p "..."
```

### Удалить файлы из рабочего дерева и области хранения

```python
git rm "..."
```

### Удалить файл, но сохранить в рабочем каталоге

```python
git rm --cached "..."
```

## Git **commit**

### Коммит изменений

```python
git commit
```

### Коммит изменений с сообщением

```python
git commit -m "..."
```

### Изменение имени (email, даты) автора

```python
git commit --author='... <email...>' --date='...'
```

### Изменение коммитера

```python
git commit --committer='... <email...>' --date='...'
```
