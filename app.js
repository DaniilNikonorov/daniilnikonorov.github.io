const webApp = window.Telegram.WebApp;

// Сообщаем Telegram, что веб-страница готова
if (webApp && typeof webApp.ready === 'function') {
    webApp.ready();
}

// Разворачиваем приложение на всю высоту
if (webApp && typeof webApp.expand === 'function') {
    webApp.expand();
}

// Применение цветовой схемы Telegram к CSS-переменным
const syncThemeWithTelegram = () => {
    if (!webApp || !webApp.themeParams) return;

    const params = webApp.themeParams;
    const root = document.documentElement;

    if (params.bg_color) {
        root.style.setProperty('--tg-bg', params.bg_color);
    }
    if (params.button_color) {
        root.style.setProperty('--tg-accent-strong', params.button_color);
    }
    if (params.button_text_color) {
        // здесь можно при желании применять цвет текста для кнопки
    }
};

// Первичная инициализация темы
syncThemeWithTelegram();

// Обновление при смене темы в Telegram
if (webApp && typeof webApp.onEvent === 'function') {
    webApp.onEvent('themeChanged', syncThemeWithTelegram);
}

// Обработка кнопки "Назад"
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('[data-role="back-button"]');

    if (backButton) {
        backButton.addEventListener('click', () => {
            if (webApp && typeof webApp.close === 'function') {
                webApp.close();
            }
        });
    }
});
