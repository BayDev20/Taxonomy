# Dog Breed Taxonomy Dashboard

## Overview
The Dog Breed Taxonomy Dashboard is an interactive web application that showcases various dog breeds organized into taxonomic categories. It demonstrates the concept of taxonomy classification in AI by presenting dog breed information in a structured, hierarchical manner.

## Features
1. Hierarchical display of dog breeds categorized by their primary functions (Working Dogs, Sporting Dogs, Toy Dogs, Herding Dogs).
2. Detailed information display for each dog breed, including origin, size, coat type, temperament, life expectancy, exercise needs, and grooming requirements.
3. Interactive comparison tool allowing users to compare two dog breeds side-by-side.
4. Responsive design for optimal viewing on various devices.
5. Smooth animations and modern UI elements for an enhanced user experience.

## Technology Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts (Roboto)

## File Structure
- `index.html`: Main HTML file containing the structure of the dashboard
- `styles.css`: CSS file with all the styling rules
- `script.js`: JavaScript file containing the application logic and interactivity

## Key Components

### HTML (`index.html`)
- Defines the overall structure of the dashboard
- Contains sections for the taxonomy card, breed categories, and breed information display
- Includes popup structures for breed selection and comparison

### CSS (`styles.css`)
- Defines a custom color scheme using CSS variables
- Implements responsive grid layouts
- Styles for interactive elements like buttons and popups
- Custom scrollbar styling
- Media queries for responsiveness

### JavaScript (`script.js`)
- Defines the `dogTaxonomy` object, which contains all the breed information
- Implements functions for displaying breed information (`showFrame`)
- Handles breed comparison functionality (`compareBreeds`)
- Manages popup displays and interactions

## How It Works
1. The dashboard displays different dog breed categories.
2. Users can click on a specific breed to view detailed information.
3. The "Compare with another breed" button allows users to select a second breed for comparison.
4. A popup displays a side-by-side comparison of the selected breeds.

## AI and Taxonomy Representation
The project demonstrates taxonomy classification in AI through:
- Hierarchical organization of dog breeds
- Structured data representation in the `dogTaxonomy` object
- Comparison functionality showcasing data analysis capabilities

## Future Enhancements
- Implement search functionality for quick breed lookup
- Add filtering options based on breed characteristics
- Integrate with a backend API for dynamic data retrieval
- Implement user accounts for saving favorite breeds or comparisons

## Setup and Installation
1. Clone the repository to your local machine.
2. Open `index.html` in a modern web browser.
3. No additional setup or installation is required as this is a client-side application.

## Contributing
Contributions to enhance the dashboard or expand the breed database are welcome. Please submit pull requests for any proposed changes.



