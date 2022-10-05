export interface Users {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface CreateUserDto extends Omit<Users, 'id'>{}
export interface UpdateUserDto extends Partial<CreateUserDto> { }
