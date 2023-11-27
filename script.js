// Function to fetch Surahs from the API and display them
function getSurahs() {
    fetch("http://api.alquran.cloud/v1/meta")
        .then(response => response.json())
        .then(data => {
            // Extract Surah data from the API response
            let surahs = data.data.surahs.references;
            let SurahsContainer = document.querySelector('.surahsContainer');

            // Clear the container before adding Surahs
            SurahsContainer.innerHTML = "";

            // Loop through the Surahs and add them to the container
            for (let i = 0; i < surahs.length; i++) {
                SurahsContainer.innerHTML += `
                    <div class="surah">
                        <p>${surahs[i].name}</p>
                        <p>${surahs[i].englishName}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error fetching Surahs:', error);
        });
}

// Call the function to fetch and display Surahs when the page loads
document.addEventListener('DOMContentLoaded', getSurahs);
