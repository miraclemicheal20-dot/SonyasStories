document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generateBtn");

    button.addEventListener("click", function () {
        document.body.innerHTML = `
        <div class="creator">
            <h1>🎬 Sonya Stories AI</h1>
            <p>Turn your ideas into movie scripts.</p>

            <textarea id="storyIdea" placeholder="Write your story idea here..."></textarea>

            <select id="storyType">
                <option>Short Film</option>
                <option>Movie</option>
                <option>YouTube Episode</option>
                <option>Advertisement</option>
            </select>

            <button id="createStory">Create Script</button>

            <div id="result"></div>
        </div>
        `;

        document.getElementById("createStory").addEventListener("click", function () {
            const idea = document.getElementById("storyIdea").value;

            document.getElementById("result").innerHTML = `
            <h2>Your Story Draft</h2>
            <p><strong>Idea:</strong> ${idea}</p>
            <p>Characters, scenes, dialogue and camera directions will appear here.</p>
            `;
        });
    });
});
