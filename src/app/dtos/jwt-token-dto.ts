import { UserRole } from "../enums/user-role";

export interface JwtTokenDto { 

    token: string;
    expiration: string;
    firstName: string;
    lastName: string;
    role: UserRole;
}

