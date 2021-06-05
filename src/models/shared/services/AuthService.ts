import { AccessToken, RefreshToken } from "./dtos/ITokenDTO";

type TokenType = "access-token" | "refresh-token";

export interface IAuthService {
  isAuthenticated(): boolean;
  getToken(tokenType: TokenType): AccessToken | RefreshToken;
  setToken(tokenType: TokenType, token: AccessToken | RefreshToken): void;
  removeToken(tokenType: TokenType): void;

  initAuth(): any;
  reloadAuth(): any;
}

export class AuthService implements IAuthService {
  public static accessTokenKey: string = "lazy-stock-screener-access-token";
  public static refreshTokenKey: string = "lazy-stock-screener-refresh-token";
  public accessToken: AccessToken;
  public refreshToken: RefreshToken;

  constructor() {
    this.accessToken = this.getToken("access-token");
    this.refreshToken = this.getToken("refresh-token");
  }
  private getTokenKey(tokenType: TokenType): string {
    return tokenType === "access-token"
      ? AuthService.accessTokenKey
      : AuthService.refreshTokenKey;
  }
  getToken(tokenType: TokenType): AccessToken | RefreshToken {
    const tokenKey: string = this.getTokenKey(tokenType);
    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem(tokenKey);
    }
    return token ? JSON.parse(token).token : null;
  }
  setToken(tokenType: TokenType, token: AccessToken | RefreshToken): void {
    const tokenKey: string = this.getTokenKey(tokenType);
    let expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        tokenKey,
        JSON.stringify({
          token: token,
          expires,
        })
      );
    }
  }
  removeToken(tokenType: TokenType) {
    const tokenKey: string = this.getTokenKey(tokenType);
    localStorage.removeItem(tokenKey);
  }
  isAuthenticated(): boolean {
    return !!this.getToken("access-token");
  }

  async initAuth() {}
  reloadAuth() {}
}
