export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //REMOVER default token and make it null after developing
  //   token:
  //     "BQDnI_sSxVS7QnAGuPFBgoElRYcHLkPYFKjxKKzg035dzD6FL7Gv-cTBqz_5Kyv1Nr9CprxuBpaQM8p8LdW4QvoCNGejWtDJk1u6ZdBZY6n3NaHe3gpfQZFbkC9kly_Px7xgbOUwgG3dtHUSyeTUCRGtigc3MsWD55p1uPtBIuIUPcBF",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
