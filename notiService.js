var PushNotification = require('react-native-push-notification');

// class NotificationHandler {
//   onNotification(notification) {
//     console.log('NotificationHandler:', notification);

//     if (typeof this._onNotification === 'function') {
//       this._onNotification(notification);
//     }
//   }

//   onRegister(token) {
//     console.log('NotificationHandler:', token);

//     if (typeof this._onRegister === 'function') {
//       this._onRegister(token);
//     }
//   }

//   onAction(notification) {
//     console.log('Notification action received:');
//     console.log(notification.action);
//     console.log(notification);

//     if (notification.action === 'Yes') {
//       PushNotification.invokeApp(notification);
//     }
//   }

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError(err) {
//     console.log(err);
//   }

//   attachRegister(handler) {
//     this._onRegister = handler;
//   }

//   attachNotification(handler) {
//     this._onNotification = handler;
//   }
// }

// const handler = new NotificationHandler();

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  //   onRegister: handler.onRegister.bind(handler),

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  //   onNotification: handler.onNotification.bind(handler),

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },
  //   onAction: handler.onAction.bind(handler),

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },
  //   onRegistrationError: handler.onRegistrationError.bind(handler),

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

export default handler;
