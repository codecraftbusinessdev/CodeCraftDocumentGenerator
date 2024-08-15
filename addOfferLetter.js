const addCertificate = async ()=>{

    const addEntry = document.getElementById('addEntry');

    addEntry.addEventListener('click', async (event) => {
        event.preventDefault();

          const url = 'http://localhost:8080/addCertificate'; // Replace with your actual backend URL

          try {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json(); // Parse JSON response (if applicable)
            console.log('Certificate added successfully:', data); // Handle success

          } catch (error) {
            console.error('Error adding certificate:', error); // Handle errors
          }
        }
}

addCertificate();