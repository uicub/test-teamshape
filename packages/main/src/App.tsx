import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import Preloader from "./components/preloader";

// Classic Pages


const Landing = lazy(() => import("./pages/landing/Index"));
const PageLogin = lazy(() => import("./pages/login/PageLogin"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const EmailSent = lazy(() => import("./pages/signup/EmailSent"));
const ThankYou = lazy(() => import("./pages/signup/ThankYou"));
const Profile = lazy(() => import("./pages/user/Profile"));
const UserView = lazy(() => import("./pages/user/User"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Employee = lazy(() => import("./pages/employee/Employee"));
const Managers = lazy(() => import("./pages/employee/Managers"));
const Groups = lazy(() => import("./pages/employee/Groups"));
const Surveys = lazy(() => import("./pages/surveys/Surveys"));
const Survey = lazy(() => import("./pages/survey/Survey"));
const NewSurvey = lazy(() => import("./pages/surveys/NewSurvey"));
const PersonalAccessment = lazy(() => import("./pages/others/PersonalAccessment"));
const PricingPlan = lazy(() => import("./pages/userplan/PricingPlan"));
const PaymentSuccess = lazy(() => import("./pages/userplan/PaymentSuccess"));
const Feedback = lazy(() => import("./pages/feedback/Feedback"));


// const DashboardOne = lazy(() => import("./pages/dashboard-one"));

const ErrorNotFound = lazy(() => import("./pages/error-404"));

const App: React.FC = () => {

    return (
        <>
            <Router>
            <Suspense fallback={<Preloader />}>
                <Routes>
                    {/* Classic Routes */}

                    {/* Dashboard Routes */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<PageLogin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/emailsent" element={<EmailSent />} />
                    <Route path="/verify-email" element={<ThankYou />} />
                    <Route path="/user/:id" element={<UserView />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/managers" element={<Managers />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/surveys" element={<Surveys />} />
                    <Route path="/survey/:surveyId/:userId" element={<Survey />} />
                    <Route path="/newsurvey" element={<NewSurvey />} />
                    <Route path="/personal-assessment" element={<PersonalAccessment />} />
                    <Route path="/myplan" element={<PricingPlan />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/feedbacks" element={<Feedback />} />

                    {/* 404 Page Route */}
                    <Route path="*" element={<ErrorNotFound />} />
                </Routes>
                </Suspense>
            </Router>
        </>
    );
};

export default observer(App);
