export class Course {
    id: number;
    name: string;
    description: string;
    imageUrl: string = '/assets/images/none.png';
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string = new Date().toDateString();
}