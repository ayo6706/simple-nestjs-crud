import { Injectable } from '@nestjs/common';

export type User = any

@Injectable()
export class UsersService {
    private readonly users  = [
        {
            userId: 1,
            username: "Jame",
            password: "1234"
        },
        {
            userId: 2,
            username: "john",
            password: "1234"
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
