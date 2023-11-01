{/* <script> */}
// Sample data for searching

// Sample data and links for searching
const searchData = [
    { text: "BMW x1", link: "configx1.html" },
    { text: "BMW x3", link: "configx3.html" },
    { text: "BMW x5", link: "configx5.html" },
    { text: "BMW x7", link: "configx7.html" },
    { text: "BMW i2", link: "configi4.html" },
    { text: "BMW i4", link: "configi7.html" },
    { text: "BMW ix", link: "configix.html" },
    { text: "BMW M2", link: "configM2.html" },
    { text: "BMW M4", link: "configM4.html" },
    { text: "BMW M8", link: "configM8.html" },
    { text: "BMW 220i", link: "config220d.html" },
    { text: "BMW 7", link: "configG70.html" },
    // Add more data and links as needed
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();
    if (searchText === "") {
        searchResults.innerHTML = ""; // Clear the results if the search input is empty
        return;
    }
    const filteredData = searchData.filter(item => item.text.toLowerCase().includes(searchText));

    displayResults(filteredData);
});

function displayResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
        searchResults.innerHTML = "<li>No results found</li>";
    } else {
        results.forEach(result => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = result.link;
            link.textContent = result.text;
            link.target = "_blank"; // Open link in a new tab/window
            li.appendChild(link);
            searchResults.appendChild(li);
        });
    }
}

var img1; // Store the background image

        document.querySelector('#searchInput').addEventListener('input', function() {
            var element = document.querySelector('#searchInput');
            if (element) {
                element.style.background ='none'; // Store the background image
            } else {

            }
        });
        
        