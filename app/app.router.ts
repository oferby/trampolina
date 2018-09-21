import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { DistressComponent} from "./pages/distress/distress.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SingnupComponent } from "./pages/signup/signup.component";
import { MainComponent } from "./pages/main/main.component";
import { CarComponent } from "./pages/car/car.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "distress", component: DistressComponent},
  { path: "register", component: RegisterComponent},
  { path: "signup", component: SingnupComponent},
  { path: "main", component: MainComponent},
  { path: "car", component: CarComponent}
];

export const navigatableComponents = [
  HomeComponent,
  LoginComponent,
  DistressComponent,
  RegisterComponent,
  SingnupComponent,
  MainComponent,
  CarComponent
];