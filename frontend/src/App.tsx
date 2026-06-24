import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./routes/index";
import ExplorePage from "./routes/explore";
import ArtistsPage from "./routes/artists";
import CollectionsPage from "./routes/collections";
import InquiriesPage from "./routes/inquiries";
import ArtworkDetailsPage from "./routes/artwork.$id";
import InquiryPage from "./routes/inquiry.$id";
import ArtistProfilePage from "./routes/artist.$id";
import WishlistPage from "./routes/wishlist";
import ProfilePage from "./routes/profile";
import NotificationsPage from "./routes/notifications";
import SettingsPage from "./routes/settings";
import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import ForgotPasswordPage from "./routes/forgot-password";
import VerifyOtpPage from "./routes/verify-otp";
import ResetPasswordPage from "./routes/reset-password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/verify-otp"
  element={<VerifyOtpPage />}
/>
<Route
  path="/reset-password"
  element={<ResetPasswordPage />}
/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/inquiries" element={<InquiriesPage />} />
        <Route path="/artwork/:id" element={<ArtworkDetailsPage />} />
        <Route path="/inquiry/:id" element={<InquiryPage />} />
         <Route path="/artist/:id" element={<ArtistProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
       <Route path="/settings" element={<SettingsPage />} />
       <Route path="/forgot-password" element={<ForgotPasswordPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;