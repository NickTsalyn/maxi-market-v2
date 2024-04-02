export const selectIsLoading = (state: { auth: { isLoading: boolean } }) => state.auth.isLoading;

export const selectIsLoggedIn = (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn;

export const selectUser = (state: { auth: { user: { name: string | null; email: string | null; } } }) => state.auth.user;