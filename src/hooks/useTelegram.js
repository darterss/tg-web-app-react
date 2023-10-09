import { TelegramWebAppContainer } from '@telegram-web-app/core';

const telegram = new TelegramWebAppContainer();
const tg = telegram.WebApp;

export function useTelegram () {
    const onClose = () => {
        tg.close();
    }
    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }
    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user
    }
}