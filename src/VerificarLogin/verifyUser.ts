/*

type verifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) =>
    user.username === sentValue.username && user.password === sentValue.password;

const bdUser = { username: 'Anderson', password: '123456' };
const sentUser = { username: 'Anderson', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
*/
