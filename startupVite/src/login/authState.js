export class AuthState {
    // static means that you can reference each specific state without creating a new instance of that state
    static Unknown = new AuthState('unknown');
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');
  
    constructor(name) {
        // AuthState.authenticated.name returns "authenticated" which can be used for logic checks, debugging, etc
        this.name = name;
    }
  }
  