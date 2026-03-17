export async function signIn(credentials) {
  return Promise.resolve({
    ok: true,
    user: {
      email: credentials.email,
      role: 'operativo',
    },
  })
}
