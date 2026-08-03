document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("generateBtn");

    button.addEventListener("click", function () {

        document.body.innerHTML = `
        <div class="container">

            <h1>🎬 Sonya's Stories</h1>

            <h2>AI Script Writer</h2>

            <textarea
                id="storyIdea"
                placeholder="Enter your movie idea here..."
                rows="8"
            ></textarea>

            <br><br>

            <select id="storyType">
                <option>Short Film</option>
                <option>Feature Film</option>
                <option>Series</option>
            </select>

            <br><br>

            <button id="createStory">
                Create Script
            </button>

            <div id="result" style="margin-top:30px;"></div>

        </div>
        `;

        document.getElementById("createStory").addEventListener("click", async function () {

            const idea = document.getElementById("storyIdea").value.trim();
            const type = document.getElementById("storyType").value;

            if (!idea) {
                alert("Please enter a story idea.");
                return;
            }

            document.getElementById("result").innerHTML =
                "<h2>Generating screenplay...</h2>";

            try {

                const response = await fetch("/generate", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        idea: idea,
                        type: type
                    })

                });

                const data = await response.json();
console.log(data);

document.getElementById("result").innerHTML = `
    <h2>Your Screenplay</h2>
    <pre style="white-space: pre-wrap;">${JSON.stringify(data, null, 2)}</pre>
`;
            } catch (error) {

                document.getElementById("result").innerHTML = `
                    <h2>Error</h2>
                    <p>Unable to connect to the AI server.</p>
                    <p>Make sure your Node server is running.</p>
                `;

                console.error(error);

            }

        });

    });

});
