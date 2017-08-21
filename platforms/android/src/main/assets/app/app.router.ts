import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent}
];

export const navigatableComponents = [
  HomeComponent,
  LoginComponent
];