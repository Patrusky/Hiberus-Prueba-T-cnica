export interface Users {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface CreateUserDto extends Omit<Users, 'id'>{}
