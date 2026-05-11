export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    // Check sessionStorage on load so refresh doesn't log the user out
    isAuthenticated: !!sessionStorage.getItem("token"),
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    token: sessionStorage.getItem("token") || null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'login':
      // Using sessionStorage as required by README
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...store,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true
      };

    case 'logout':
      // Clear storage and reset state globally
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      return {
        ...store,
        token: null,
        user: null,
        isAuthenticated: false
      };

    default:
      return store;
  }
}
