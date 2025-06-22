const tg = window.Telegram.WebApp;

// Expand the web app to full view
tg.expand();

alert(tg.initData);

// Handle close button
document.getElementById('close-btn').addEventListener('click', () => {
    tg.close();
});

// Handle send data button
document.getElementById('send-data-btn').addEventListener('click', () => {
    const data = JSON.stringify({
        action: 'button_click',
        time: new Date().toISOString()
    });
    alert('gggg')

    alert(tg.sendData(data))
});

// Handle theme changes
tg.onEvent('themeChanged', () => {
    document.body.style.backgroundColor = tg.themeParams.bg_color || '#ffffff';
});