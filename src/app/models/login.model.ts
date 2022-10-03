export interface Login {
  id?: number;
  email: string;
  password: string;
}

export interface CreateUserDto extends Omit<Login, 'id'>{}
