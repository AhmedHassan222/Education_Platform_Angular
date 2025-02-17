import { Routes } from '@angular/router';
import { LayoutWithNavbarComponent } from './components/layout-with-navbar/layout-with-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { notAuthGuard } from './cores/guards/not-auth.guard';
import { isUserGuard } from './cores/guards/is-user.guard';
import { isTeacherGuard } from './cores/guards/is-teacher.guard';
import { isAdminGuard } from './cores/guards/is-admin.guard';
export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home Page - Sky Academy' },
    {
        path: "", component: LayoutWithNavbarComponent, canActivate: [isUserGuard], children: [
            { path: "", redirectTo: 'courses', pathMatch: 'full' },
            { path: 'courses', loadComponent: () => import('./components/courses/courses.component').then(m => m.CoursesComponent), title: 'Courses Page - Sky Academy' },
            { path: 'courses/:id', loadComponent: () => import('./components/course-details/course-details.component').then(m => m.CourseDetailsComponent), title: 'Course Details Page - Sky Academy' },
            { path: 'myCourses', loadComponent: () => import('./components/my-courses/my-courses.component').then(m => m.MyCoursesComponent), title: 'My Courses Page - Sky Academy' },
            { path: 'lectures', loadComponent: () => import('./components/lectures/lectures.component').then(m => m.LecturesComponent), title: 'Lectures Page - Sky Academy' },
            { path: 'teachers', loadComponent: () => import('./components/teachers/teachers.component').then(m => m.TeachersComponent), title: 'Teachers Page - Sky Academy' },
            { path: 'watch/:id', loadComponent: () => import('./components/watch-video/watch-video.component').then(m => m.WatchVideoComponent), title: 'Watch Lecture Page - Sky Academy' },
            { path: 'teachers/:id', loadComponent: () => import('./components/teacher-details/teacher-details.component').then(m => m.TeacherDetailsComponent), title: 'Teacher Details Page - Sky Academy' },
            { path: 'profile', loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent), title: 'Profile Page - Sky Academy' }
        ]
    },
    {
        path: "teacher", component: LayoutWithNavbarComponent, canActivate: [isTeacherGuard], children: [
            { path: '', redirectTo: 'all-videos', pathMatch: 'full' },
            { path: 'add-video', loadComponent: () => import('./components/add-video/add-video.component').then(m => m.AddVideoComponent), title: 'Add Video Page - Sky Academy' },
            { path: 'all-videos', loadComponent: () => import('./components/get-all-videos/get-all-videos.component').then(m => m.GetAllVideosComponent), title: 'All Videos Page - Sky Academy' },
            { path: 'update-videos/:title/:id', loadComponent: () => import('./components/update-video/update-video.component').then(m => m.UpdateVideoComponent), title: 'Update Video Page - Sky Academy' },
            { path: 'add-assignment', loadComponent: () => import('./components/add-assign/add-assign.component').then(m => m.AddAssignComponent), title: 'Add Assignment Page - Sky Academy' },
            { path: 'update-assignment/:title/:id', loadComponent: () => import('./components/update-assignment/update-assignment.component').then(m => m.UpdateAssignmentComponent), title: 'Update Assignment Page - Sky Academy' },
            { path: 'all-assignments', loadComponent: () => import('./components/all-assignment/all-assignment.component').then(m => m.AllAssignmentComponent), title: 'All Assignments Page - Sky Academy' }
        ]
    },
    {
        path: "admin", component: LayoutWithNavbarComponent, canActivate: [isAdminGuard], children: [
            { path: '', redirectTo: 'all-courses', pathMatch: 'full' },
            { path: 'add-category', loadComponent: () => import('./components/add-category/add-category.component').then(m => m.AddCategoryComponent), title: 'Add Category Page - Sky Academy' },
            { path: 'add-teacher', loadComponent: () => import('./components/add-teacher/add-teacher.component').then(m => m.AddTeacherComponent), title: 'Add Teacher Page - Sky Academy' },
            { path: 'generate-code', loadComponent: () => import('./components/generate-code/generate-code.component').then(m => m.GenerateCodeComponent), title: 'Generate Code Page - Sky Academy' },
            { path: 'all-codes', loadComponent: () => import('./components/get-all-codes/get-all-codes.component').then(m => m.GetAllCodesComponent), title: 'All Codes Page - Sky Academy' },
            { path: 'all-teachers', loadComponent: () => import('./components/get-all-teachers/get-all-teachers.component').then(m => m.GetAllTeachersComponent), title: 'All Teachers Page - Sky Academy' },
            { path: 'update-category/:name/:id', loadComponent: () => import('./components/update-category/update-category.component').then(m => m.UpdateCategoryComponent), title: 'Update Category Page - Sky Academy' },
            { path: 'update-subcategory/:name/:id', loadComponent: () => import('./components/update-sub-category/update-sub-category.component').then(m => m.UpdateSubCategoryComponent), title: 'Update Subcategory Page - Sky Academy' },
            { path: 'update-course/:name/:id', loadComponent: () => import('./components/update-course/update-course.component').then(m => m.UpdateCourseComponent), title: 'Update Course Page - Sky Academy' },
            { path: 'all-courses', loadComponent: () => import('./components/get-all-courses/get-all-courses.component').then(m => m.GetAllCoursesComponent), title: 'All Courses Page - Sky Academy' },
            { path: 'all-categories', loadComponent: () => import('./components/get-all-categories/get-all-categories.component').then(m => m.GetAllCategoriesComponent), title: 'All Categories Page - Sky Academy' },
            { path: 'all-subcategories', loadComponent: () => import('./components/get-all-sub-categories/get-all-sub-categories.component').then(m => m.GetAllSubCategoriesComponent), title: 'All Subcategories Page - Sky Academy' },
        ]
    },
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent), canActivate: [notAuthGuard], title: 'Login Page - Sky Academy' },
    { path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent), canActivate: [notAuthGuard], title: 'Register Page - Sky Academy' },
    { path: 'reset-password', loadComponent: () => import('./components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent), canActivate: [notAuthGuard], title: 'Reset Password Page - Sky Academy' },
    { path: "**", loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent), title: 'Notfound Page - Sky Academy' }
];
