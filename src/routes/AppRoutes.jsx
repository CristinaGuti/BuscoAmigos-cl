import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import PlanPage from "../pages/PlanPage/PlanPage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import PlanEditPage from "../pages/PlanEditPage/PlanEditPage"
import NewPlanPage from "../pages/NewPlanPage/NewPlanPage"
import ProfilePage from "../pages/ProfilePage/PofilePage"
import EditUserForm from "../components/EditUserForm/EditUserForm"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/create-plan" element={<NewPlanPage />} />
            <Route path="/planDetails/:plan_id" element={<PlanDetailsPage />} />
            <Route path="/planEdit/:plan_id" element={<PlanEditPage />} />
            {/* <Route path="/planDelete/:plan_id" element={<PlanDeletePage />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/editUser/:user_id" element={<EditUserForm />} />
            {/* <Route path="/inbox" element={<InboxPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/gift" element={<GiftPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes