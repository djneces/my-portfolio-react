import cycloCamps1 from '../images/cycloCamps1.jpg';
import cycloCamps2 from '../images/cycloCamps2.jpg';
import cycloCamps3 from '../images/cycloCamps3.jpg';
import freshop1 from '../images/freshop1.jpg';
import freshop2 from '../images/freshop2.jpg';
import cinema1 from '../images/cinema1.jpg';
import cinema2 from '../images/cinema2.jpg';
import cinema3 from '../images/cinema3.jpg';
import cinema4 from '../images/cinema4.jpg';
import cinema5 from '../images/cinema5.jpg';
import art1 from '../images/design/img1.jpeg';
import art2 from '../images/design/img2.jpeg';
import art3 from '../images/design/img3.jpeg';
import art4 from '../images/design/img4.jpeg';
import art5 from '../images/design/img5.jpeg';
import art6 from '../images/design/img6.jpeg';
import art7 from '../images/design/img7.jpg';
import art8 from '../images/design/img8.jpg';
import art9 from '../images/design/img9.jpg';
import design1 from '../images/design/img10.jpg';
import design2 from '../images/design/img11.jpg';
import design3 from '../images/design/img12.jpg';
import design4 from '../images/design/img13.jpg';
import design5 from '../images/design/img14.jpg';
import travel1 from '../images/travel.jpg';

export const PROJECTS = {
  cyclocamps: {
    images: [{ url: cycloCamps1 }, { url: cycloCamps2 }, { url: cycloCamps3 }],
    title: 'CycloCamps',
    subtitle: 'Full stack web application',
    description:
      'Custom API build in Express, MongoDB integration, Passport Authentication, MapBox map and Geocoding integration, Cloudinary integration, React and Redux frontend, Custom redux form input incl. validation (client & server), Sendgrid integration',
    features:
      'Registration new user (username & password), Login & edit & delete user, Create & delete & edit campgrounds and reviews, Upload & delete images, Receiving a welcome email upon registration, Showing campgrounds on an interactive map, Responsive Ipad+',
    technology: 'HTML5, CSS3, Sass, Express, MongoDB, React, Redux',
    url: 'https://evening-fortress-14705.herokuapp.com',
    github: 'https://github.com/djneces/react-CycloCampsApp',
  },
  cinema: {
    images: [
      { url: cinema1 },
      { url: cinema2 },
      { url: cinema3 },
      { url: cinema4 },
      { url: cinema5 },
    ],
    title: 'Cinema App',
    subtitle: 'Web application with a Firebase backend',
    description:
      'React and Redux frontend, Google OAUTH 2.0 login, Stripe Checkout integration, Youtube API integration, Themoviedb API integration, Firebase backend',
    features:
      'Login the user via Google OAUTH, Select movie, Fetch information about the movie and show Youtube official trailer, Select show-time block, Select available seat(s), Select add-ons, Pay with a card via Stripe, Print a ticket from the purchase history, Responsive Ipad+',
    technology: 'HTML5, CSS3, Sass, Firebase, React, Redux, Express',
    url: 'https://morning-plateau-53097.herokuapp.com',
    github: 'https://github.com/djneces/react-cinema-app-v2',
  },
  freshop: {
    images: [{ url: freshop1 }, { url: freshop2 }],
    title: 'Freshop',
    subtitle: 'Web application with a Firebase backend',
    description:
      'React and Redux frontend, Google OAUTH 2.0 login, Firebase authentication, Firebase backend, Form input validation',
    features:
      'Registration new user (email & password, Google OAUTH), Select products, Amend quantities in the shopping cart, Purchase history, Add products in the favorites, Sort/filter products, Responsive Ipad+',
    technology: 'HTML5, CSS3, Sass, Firebase, React, Redux',
    url: 'https://freshop.netlify.app',
    github: 'https://github.com/djneces/react-e-commerce-app',
  },
};

export const CSS_PROJECTS = {
  lektor: {
    url: 'https://lektor-angielskiego.pl/',
    github: 'https://github.com/djneces/portfolio-page-magdalena',
  },
  youtube: {
    url: 'https://djneces.github.io/Youtube_clone_CSS_HTML/',
    github: 'https://github.com/djneces/Youtube_clone_CSS_HTML',
  },
  macos: {
    url: 'https://djneces.github.io/MacOs_Catalina_Clone_JQ_CSS_HTML/',
    github: 'https://github.com/djneces/MacOs_Catalina_Clone_JQ_CSS_HTML',
  },
};

export const OTHER_PROJECTS = {
  art: {
    images: [
      { url: art1 },
      { url: art2 },
      { url: art3 },
      { url: art4 },
      { url: art5 },
      { url: art6 },
      { url: art7 },
      { url: art8 },
      { url: art9 },
    ],
    title: 'Digital Art',
    subtitle: 'Hand drawing',
    description: 'Art created in Photoshop or Ipad Procreate',
  },
  design: {
    images: [
      { url: design1 },
      { url: design2 },
      { url: design3 },
      { url: design4 },
      { url: design5 },
    ],
    title: 'Graphic Design',
    subtitle: 'Custom marketing materials',
    description:
      'Leaflet, poster, light banner designs for Aqua Viventis s.r.o.',
  },
  travelSite: {
    images: [{ url: travel1 }],
    title: 'Travel site',
    subtitle: 'Travel portal for low-cost travelers',
    description:
      'My project of which I am the only contributor, started back in 2015, a site which provides useful information for low-cost traveling around the world. Created in Wix.',
    url: 'https://www.backpacking.cz/',
  },
};
