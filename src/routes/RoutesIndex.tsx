import { HeaderOnly } from "../components/Layout/LayoutIndex";

import Login from "../pages/Login/LoginIndex";
import Course from "../pages/Course/CourseIndex";
import Upload from "../pages/Upload/UploadIndex";
import Search from "../pages/Search/SearchIndex";

const publicRoutes = [
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/course", component: Course },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
