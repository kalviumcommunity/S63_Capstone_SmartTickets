import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyBookings from './pages/MyBookings';
import RateUs from './pages/RateUs';
import CancelledTickets from './pages/CancelledTickets';
import MusicShows from './pages/MusicShows';
import SportsEvents from './pages/SportsEvents';
import ComedyShows from './pages/ComedyShows';
import EducationalShows from './pages/EducationalShows';
import ArtCraftShows from './pages/ArtCraftShows';
import TheatreShows from './pages/TheatreShows';
import KidsEvents from './pages/KidsEvents';
import FoodDrinkEvents from './pages/FoodDrinkEvents';
import OutdoorEvents from './pages/OutdoorEvents';
import TechInnovation from './pages/TechInnovation';
import LiteratureBooks from './pages/LiteratureBooks';
import FashionLifestyle from './pages/FashionLifestyle';
import BookNow from './pages/BookNow';
import Payment from './pages/Payment';
import BookingConfirmed from './pages/BookingConfirmed';
import RegisterPage from './pages/RegisterPage';
import MoreInfo from './pages/MoreInfo';
import CancelBooking from './pages/CancelBooking';
import CancellationConfirmed from './pages/CancellationConfirmed';
import Settings from './pages/Settings';
import BookingInfo from './pages/BookingInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/rate-us" element={<RateUs />} />
      <Route path="/cancelled-tickets" element={<CancelledTickets />} />
      <Route path="/music-shows" element={<MusicShows />} />
      <Route path="/sports-events" element={<SportsEvents />} />
      <Route path="/comedy-shows" element={<ComedyShows />} />
      <Route path="/educational-shows" element={<EducationalShows />} />
      <Route path="/art-craft-shows" element={<ArtCraftShows />} />
      <Route path="/theatre-shows" element={<TheatreShows />} />
      <Route path="/kids-events" element={<KidsEvents />} />
      <Route path="/food-drink-events" element={<FoodDrinkEvents />} />
      <Route path="/outdoor-events" element={<OutdoorEvents />} />
      <Route path="/tech-innovation" element={<TechInnovation />} />
      <Route path="/literature-books" element={<LiteratureBooks />} />
      <Route path="/fashion-lifestyle" element={<FashionLifestyle />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/more-info" element={<MoreInfo />} />
      <Route path="/cancel-booking" element={<CancelBooking />} />
      <Route path="/cancellation-confirmed" element={<CancellationConfirmed />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/booking-info" element={<BookingInfo />} />
    </Routes>
  );
}

export default App;