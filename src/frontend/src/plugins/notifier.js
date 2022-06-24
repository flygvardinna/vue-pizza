import notificationTypes from "@/common/enums/notificationTypes";

export default class Notifier {
  #store;
  constructor(store) {
    this.#store = store;
  }

  info(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: notificationTypes.INFO,
    });
  }

  success(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: notificationTypes.SUCCESS,
    });
  }
  // сейчас это используется для уведомления при логауте - Вы успешно вышли. Убрать?

  error(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: notificationTypes.ERROR,
    });
  }

  warning(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: notificationTypes.WARNING,
    });
  }
}
