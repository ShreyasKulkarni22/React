import { createContext } from "react";

const UserContext = createContext("Code")

const UserProvider=UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer}
export default UserContext;