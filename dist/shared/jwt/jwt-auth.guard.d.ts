declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
}
export declare const AuthUser: (...dataOrPipes: any[]) => ParameterDecorator;
export {};
