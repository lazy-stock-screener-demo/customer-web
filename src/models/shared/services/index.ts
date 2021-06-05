import { IAuthService, AuthService } from "./AuthService";
import { TokenHandler } from "./TokenHandler";

const authService = new AuthService();
const tokenHandler = new TokenHandler({ authService });

export { tokenHandler, authService };
