# Lendsqr Frontend Assessment test

Lendsqr is a lending solution platform that helps lenders launch, scale, and succeed in their lending business with their loan management system and lending APIs. Lendsqr is committed to bridging the global credit gap by empowering lenders to offer accessible, efficient, and data-driven lending solutions.

# Getting Started

Go to any directory on your machine:

```bash
cd directory/to/clone-into/
```

Clone repository:

```bash
git clone https://github.com/newtonfav/lendsqr-fe-test.git
```

Install all dependencies:

```bash
npm install
```

start the development server:

```bash
npm run dev
```

# Project structure

This is a Next.js and SASS project, designed with a component-driven approach to emphasize modularity, reusability, and scalability.

      src
      |
      |____ ...
      |
      |____ test # contains all unit test
      |
      |____ app
      |     |___ assets # contains all locally hosted fonts and icons used
      |     |___ components # contains all components used throughout the project
      |     |___ models # contains enums and interfaces used in the project
      |     |___ contexts # contains context providers used in the project
      |     |___ dashboard # contains all nested routes and pages in the user dashboard
      |     |___ login # contains the login page
      |     |___ utils
      |           |__ functions # contains all helper functions
      |           |__ hooks # contains custom react hooks
      |
      |____ public # contains images used in the project
      |
      |____ styles
            |
            |___ abstract
            |     |__ _functions.scss
            |     |__ _mixins.scss # contains all mixins
            |     |__ _variables.scss # contains all variables
            |
            |___ base
            |     |__ _animation.scss # contains all animations
            |     |__ _base.scss # contains base styles
            |     |__ _reset.scss # contains global reset for browsers
            |     ... # Etc...
            |
            |____ components # contains components styling
            |     |__ _input.scss
            |     |__ logo.scss
            |     ... # Etc...
            |
            |____ layout
            |     |__ _dashboard.scss # contains  dashboard layout style
            |     ... # Etc...
            |
            |____ pages
            |     |__ _login.scss
            |     ... # Etc...
            |
            |____ main.scss # Main sass file, all styles are imported here

# Conventions

- Routing System: NextJS App Router
- CSS Architecture: 7-1 SASS architecture
- Class Naming Architecture: BEM - Block Element Modifier
- File Naming Convention: kebab-case
- Component Naming Convention: PascalCase

# Implemented Features

All tasks in the assessment were implemented, in addition to:

- [x] Search functionality: Lenders are able to search for users.
- [x] Filter functionality: Lenders are able to filter for users base on organisation, date joined, status etc.
- [x] Pagination functionality: Page numbers and page limit were implemented to enhance user experience.
- [x] Responsiveness: Advance SASS responsive logic was used to make the web application responsive to all media types.
- [x] Unit test: Unit test were written using jest and react testing library.
- [x] Optimal HTML semantics were utilized to enhance site accessibility and maximize SEO.
- [x] Skeleton loaders were implemented for intuitive user experience.
- [x] Error Boundary and Not found page are implemented.
- [x] User input are validated on login page with regex.
- [x] Lenders can update users status(Doesn't persist on page reload).
- [x] Lenders can blacklist users on the dashboard.

## Technologies Used

- React
- Typescript

- Nextjs
- EsLint
- Prettier
- SASS (SCSS)
- React Testing Library
- Jest

## Author

Favour Oghenekowho
