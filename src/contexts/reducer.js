export const NotificationInitialState = []

export const NotificationTypes = {
  ADD: 'ADD',
  VIEW: 'VIEW',
  DELETE: 'DELETE',
}

export const NotificationReducer = (state, action) => {
  switch (action.type) {
    case NotificationTypes.ADD:
      return [{ ...action.payload.notify, viewed: false }, ...state]

    case NotificationTypes.VIEW:
      const notifications = [...state]
      const index = notifications.findIndex((no) => no.id === action.payload.id)
      index !== -1 && (notifications[index].viewed = true)
      return [...notifications]

    case NotificationTypes.DELETE:
      return [...state.filter((no) => no.id !== action.payload.id)]

    default:
      return state
  }
}
