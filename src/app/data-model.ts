export class TodoCradModel {
        id: number;
        name: string;
        username : string;
        email: string;
        address: Address;
        phone: string;
        website: string;
        company: Company
}

export class GEO  {
    lat : string;
    lng : string;
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GEO;
}

export class TodoListModel{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}