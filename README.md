# 🌟 Poke-Tracker 🌟

**Poke-Tracker** is a completion and achievement tracker for Pokémon games. It aims to provide a gamut of features that aren't inherently tracked by the native games, like obtained TMs, berries, beauty contest ribbons, and also a platform to publish challenge runs.

## 🛠️ Technology Stack

### Frontend:
- **[React](https://reactjs.org/)**: Our go-to library for building the user interface.
- **[Mantis React Admin Dashboard Template](https://mui.com/store/items/mantis-free-react-admin-dashboard-template/)**: A free Material-UI-based admin dashboard template that streamlines our frontend development.
- **[React Router](https://reactrouter.com/)**: Handles navigation and URL management for our SPA.
- **[Material UI](https://material-ui.com/)**: A UI framework to enhance our React app's appearance.

### Backend:
- **[Node.js](https://nodejs.org/)**: Enables server-side JavaScript execution.
- **[Express](https://expressjs.com/)**: A minimalistic web framework for Node.js, simplifying API creation.
- **[Poke API](https://pokeapi.co/)**: Provides comprehensive Pokémon data, avoiding redundancy.
- **[JWT](https://jwt.io/)**: Used for user authentication by encoding user data into tokens.
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Library for hashing and validating passwords.

### Database:
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database chosen for its flexibility and scalability, particularly suitable for our user authentication and potential future extensions.

### Authentication:
- **[JWT](https://jwt.io/)** (JSON Web Tokens): A compact method of representing information between two parties.

### Hosting/Deployment:
- **[AWS](https://aws.amazon.com/)**: A potential host for both our React frontend and Node.js backend.
- **[Vercel](https://vercel.com/)**: Another hosting option we're considering.

## 📂 Directory Structure
- `/frontend`: All React frontend application-related code resides here.
- `/backend`: Contains the Express.js backend - routes, logic, and other server-side features.

## 💡 Future Endeavors
- User account functionalities.
- Distinct achievement banners upon hitting user milestones.
- A mechanism to vote and rank user-generated challenge runs.

## 🤝 How to Contribute
Contributions are heartily welcome! For guidelines, kindly refer to `CONTRIBUTING.md`.
