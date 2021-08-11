// enum Role{SUPERADMIN,ADMIN,SUBSCRIBER};
import Role from './enum'
export class User  {
  
    id!: number
    firstName!: string
    middleName?: string;
    lastName!: string
    email!: string
    phoneNumber!: string
    role!:Role;
    address!: string
    customerName!: string
  }
