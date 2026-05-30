export interface CourseCategoryDto {
    id?: number;
    name?: string;
    courses?: CourseDto[];

}

export interface CourseDto {
    id?: number;
    title?: string;
    courseCategopryId?: number;
    courseCategory?: CourseCategoryDto;
}