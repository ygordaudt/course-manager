import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    _courses: Course[] = [];
    _isCoursesFilled: boolean = false;

    retrieveAll(): Course[] {
        if (!this._isCoursesFilled) {
            _COURSES.forEach((courseIterator: Course) => this._courses.push(courseIterator));
            this._isCoursesFilled = true;
        }

        return this._courses;
    }

    retriveById(id: number): Course {
        return this._courses.find((courseIterator: Course) => courseIterator.id === id);
    }

    edit(course: Course): void {
        if (course.id) {
            const index = this._courses.findIndex((courseIterator: Course) => courseIterator.id === course.id);
            this._courses[index] = course;
        }
    }

    create(course: Course): void {
        this._courses.push(course);
    }

    remove(course: Course): void {
        let index = this._courses.findIndex((courseIterator: Course) => courseIterator.id === course.id);
        this._courses.splice(index, 1);
    }

    getLastId(): number {
        let lastId: number = 0;
        this._courses.forEach((courseIterator: Course) => {
            if (courseIterator.id > lastId) {
                lastId = courseIterator.id;
            }
        });
        return lastId;
    }

}

var _COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];