export interface UserType {
    id?: string | number;
    email: string;
    full_name: string;
    gender: GENDER;
    gender_display?: string;
    birthday: string; 
    avatar?: string;
}

  export interface Login {
    email: string;
    password: string;
  }
  export interface ChangePassword {
    password: string;
    confirm_password: string;
  }
  
  export type GENDER = 1 | 2 | 3;
  
  export interface AuthType {
    accessToken: string;
    isAuth: boolean;
    status: string;
    user: Partial<UserType>;
  }
  