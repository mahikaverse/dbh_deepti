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
import AdminDashboard from "./admin/pages/dashboard";
import AdminInquiries from "./admin/pages/inquiries";
import AdminArtists from "./admin/pages/artists";
import AdminArtworks from "./admin/pages/artworks";
import AdminUsers from "./admin/pages/users";
import AdminNotifications from "./admin/pages/notifications";
import AdminAnalytics from "./admin/pages/analytics";
import AdminLoginPage from "./admin/pages/login";
 
 



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
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
        
        <Route path="/admin/artists" element={<AdminArtists />} />
        <Route path="/admin/artworks" element={<AdminArtworks />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
<Route
  path="/admin/login"
  element={<AdminLoginPage />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;