export class CreateUserDto {
    id: Number
    name!: String
    email!: String
    password!: String
    identity!: String
    createdAt: Date
    isAdmin: Boolean;
}   
