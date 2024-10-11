const dogTaxonomy = {
    workingDogs: {
        name: 'Working Dogs',
        description: 'Bred for tasks such as guarding and rescue',
        breeds: {
            'siberian-husky': {
                name: 'Siberian Husky',
                origin: 'Siberia',
                size: 'Medium to Large',
                coat: 'Double coat, thick and fluffy',
                temperament: 'Friendly, outgoing, and energetic',
                lifeExpectancy: '12-14 years',
                exercise: 'High',
                grooming: 'Regular brushing required',
                traits: ['Cold-resistant', 'Pack-oriented', 'Energetic']
            },
            'rottweiler': {
                name: 'Rottweiler',
                origin: 'Germany',
                size: 'Large',
                coat: 'Short, dense, and coarse',
                temperament: 'Confident, loyal, and protective',
                lifeExpectancy: '9-10 years',
                exercise: 'Moderate to High',
                grooming: 'Low maintenance',
                traits: ['Protective', 'Strong', 'Intelligent']
            },
            'doberman': {
                name: 'Doberman Pinscher',
                origin: 'Germany',
                size: 'Large',
                coat: 'Short, smooth, and close-lying',
                temperament: 'Intelligent, alert, and loyal',
                lifeExpectancy: '10-12 years',
                exercise: 'High',
                grooming: 'Low maintenance',
                traits: ['Agile', 'Fearless', 'Obedient']
            }
        }
    },
    sportingDogs: {
        name: 'Sporting Dogs',
        description: 'Bred to assist hunters in finding and retrieving game',
        breeds: {
            'golden-retriever': {
                name: 'Golden Retriever',
                origin: 'Scotland',
                size: 'Large',
                coat: 'Dense and water-repellent',
                temperament: 'Friendly, intelligent, and devoted',
                lifeExpectancy: '10-12 years',
                exercise: 'High',
                grooming: 'Regular brushing required',
                traits: ['Gentle', 'Eager to please', 'Good with children']
            },
            // ... (add other sporting dogs)
        }
    },
    //
};

// Add this function to compare breeds
function compareBreeds(breed1Id, breed2Id) {
    const breed1 = dogTaxonomy.workingDogs.breeds[breed1Id];
    const breed2 = dogTaxonomy.workingDogs.breeds[breed2Id];
    
    let comparisonHTML = `
        <h3>Comparison: ${breed1.name} vs ${breed2.name}</h3>
        <table class="comparison-table">
            <tr>
                <th>Attribute</th>
                <th>${breed1.name}</th>
                <th>${breed2.name}</th>
            </tr>
    `;
    
    for (const [key, value] of Object.entries(breed1)) {
        if (key !== 'name') {
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            comparisonHTML += `
                <tr>
                    <td><strong>${capitalizedKey}</strong></td>
                    <td class="${value === breed2[key] ? 'shared' : ''}">${value}</td>
                    <td class="${value === breed2[key] ? 'shared' : ''}">${breed2[key]}</td>
                </tr>
            `;
        }
    }
    
    comparisonHTML += `</table>`;
    
    document.getElementById('comparison-info').innerHTML = comparisonHTML;
    document.getElementById('comparison-popup').style.display = 'block';
}

// Modify the showFrame function
function showFrame(breedId) {
    const breed = dogTaxonomy.workingDogs.breeds[breedId];
    if (breed) {
        const frameInfo = document.getElementById('frame-info');
        frameInfo.innerHTML = `
            <h3>${breed.name}</h3>
            <p><strong>Category:</strong> ${breed.category}</p>
            <p><strong>Origin:</strong> ${breed.origin}</p>
            <p><strong>Size:</strong> ${breed.size}</p>
            <p><strong>Coat:</strong> ${breed.coat}</p>
            <p><strong>Temperament:</strong> ${breed.temperament}</p>
            <p><strong>Life Expectancy:</strong> ${breed.lifeExpectancy}</p>
            <p><strong>Exercise Needs:</strong> ${breed.exercise}</p>
            <p><strong>Grooming:</strong> ${breed.grooming}</p>
            <button onclick="showBreedSelectionPopup('${breedId}')">Compare with another breed</button>
        `;
        frameInfo.dataset.currentBreed = breedId;

        // Remove active class from all buttons
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        const activeButton = document.querySelector(`button[onclick="showFrame('${breedId}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    } else {
        console.error(`Breed information not found for: ${breedId}`);
    }
}

function showBreedSelectionPopup(breedId) {
    const selectionGrid = document.getElementById('breed-selection-grid');
    selectionGrid.innerHTML = '';
    
    for (const [id, breed] of Object.entries(dogTaxonomy.workingDogs.breeds)) {
        if (id !== breedId) {
            const button = document.createElement('button');
            button.textContent = breed.name;
            button.onclick = () => {
                compareBreeds(breedId, id);
                closePopup('breed-selection-popup');
            };
            selectionGrid.appendChild(button);
        }
    }
    
    document.getElementById('breed-selection-popup').style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}