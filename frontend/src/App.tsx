import { BrowserRouter, Routes, Route } from "react-router-dom";

// Route Guards
import ProtectedRoute from "./components/ProtectedRoute";
import ArtistProtectedRoute from "./components/ArtistProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

// User Pages
import HomePage from "./routes";
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
import BecomeArtistPage from "./routes/become-artist";

// Admin Pages
import AdminDashboard from "./admin/pages/dashboard";
import AdminInquiries from "./admin/pages/inquiries";
import AdminArtists from "./admin/pages/artists";
import AdminArtworks from "./admin/pages/artworks";
import AdminUsers from "./admin/pages/users";
import AdminNotifications from "./admin/pages/notifications";
import AdminAnalytics from "./admin/pages/analytics";
import AdminLoginPage from "./admin/pages/login";

// Artist Pages
import ArtistDashboard from "./artist/pages/dashboard";
import UploadArtworkPage from "./artist/pages/upload-artwork";
import MyArtworksPage from "./artist/pages/my-artworks";
import ArtistInquiryPage from "./artist/pages/inquiries";
import SalesPage from "./artist/pages/sales";
import AnalyticsPage from "./artist/pages/analytics";
import ArtistProfile from "./artist/pages/profile";
import ArtistSettingsPage from "./artist/pages/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/collections" element={<CollectionsPage />} />

        <Route path="/artwork/:id" element={<ArtworkDetailsPage />} />
        <Route path="/artist/:id" element={<ArtistProfilePage />} />
        <Route path="/inquiry/:id" element={<InquiryPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* ================= USER ROUTES ================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishlistPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inquiries"
          element={
            <ProtectedRoute>
              <InquiriesPage />
            </ProtectedRoute>
          }
        />

        <Route
  path="/become-artist"
  element={
    <ProtectedRoute>
      <BecomeArtistPage />
    </ProtectedRoute>
  }
/>

        {/* ================= ARTIST ROUTES ================= */}

        <Route
          path="/artist/dashboard"
          element={
             
              <ArtistDashboard />
            
          }
        />

        <Route
          path="/artist/upload-artwork"
          element={
             
              <UploadArtworkPage />
            
          }
        />

        <Route
          path="/artist/my-artworks"
          element={
             
              <MyArtworksPage />
            
          }
        />

        <Route
          path="/artist/inquiries"
          element={
            
              <ArtistInquiryPage />
           
          }
        />

        <Route
          path="/artist/sales"
          element={
             
              <SalesPage />
            
          }
        />

        <Route
          path="/artist/analytics"
          element={
             
              <AnalyticsPage />
             
          }
        />

        <Route
          path="/artist/profile"
          element={
            
              <ArtistProfile />
             
          }
        />

        <Route
          path="/artist/settings"
          element={
            
              <ArtistSettingsPage />
            
          }
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route
          path="/admin/dashboard"
          element={
            
              <AdminDashboard />
            
          }
        />

        <Route
          path="/admin/inquiries"
          element={
             
              <AdminInquiries />
            
          }
        />

        <Route
          path="/admin/artists"
          element={
             
              <AdminArtists />
             
          }
        />

        <Route
          path="/admin/artworks"
          element={
            
              <AdminArtworks />
            
          }
        />

        <Route
          path="/admin/users"
          element={
             
              <AdminUsers />
            
          }
        />

        <Route
          path="/admin/notifications"
          element={
             
              <AdminNotifications />
             
          }
        />

        <Route
          path="/admin/analytics"
          element={
             
              <AdminAnalytics />
             
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;