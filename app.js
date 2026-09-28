

let currentGenre = null;


function renderVibeMenu(genreKey) {
    const data = movieDatabase[genreKey];
    const container = document.getElementById('vibe-options-container');
    document.getElementById('vibe-title').innerText = `Refine Your ${data.title}`;
    
    container.innerHTML = '';
    
    data.vibes.forEach(vibe => {
        const btn = document.createElement('button');
        btn.className = "card-hover glass-panel p-6 rounded-2xl cursor-pointer border border-zinc-800 hover:border-popcornGold text-left flex items-center space-x-4 group w-full transition";
        btn.onclick = () => showRecommendation(genreKey, vibe.id);
        btn.innerHTML = `
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-popcornGold flex items-center justify-center text-xl group-hover:bg-popcornGold group-hover:text-cinemaDark transition">
                <i class="fa-solid ${vibe.icon}"></i>
            </div>
            <div>
                <h4 class="font-bold text-base text-white">${vibe.label}</h4>
                <span class="text-xs text-zinc-400">Click to reveal match</span>
            </div>
        `;
        container.appendChild(btn);
    });
}


function selectGenre(genre) {
    currentGenre = genre;
    renderVibeMenu(genre);

    document.getElementById('genre-section').classList.add('hidden');
    document.getElementById('vibe-section').classList.remove('hidden');

    document.getElementById('step-2-badge').classList.replace('bg-zinc-800', 'bg-popcornGold');
    document.getElementById('step-2-badge').classList.replace('text-zinc-400', 'text-cinemaDark');
    document.getElementById('step-2-indicator').classList.add('text-popcornGold');
}


function showRecommendation(genre, vibeId) {
    const movie = movieDatabase[genre].recommendations[vibeId] || movieDatabase[genre].recommendations[1];

    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-sub-badge').innerText = movie.badge;
    document.getElementById('movie-year').innerText = movie.year;
    document.getElementById('movie-duration').innerHTML = `<i class="fa-regular fa-clock mr-1"></i> ${movie.duration}`;
    document.getElementById('movie-score').innerText = movie.score || "95%";
    document.getElementById('movie-description').innerText = movie.description;
    document.getElementById('movie-banner').style.backgroundImage = `url('${movie.banner}')`;

    document.getElementById('vibe-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');

    document.getElementById('step-3-badge').classList.replace('bg-zinc-800', 'bg-popcornGold');
    document.getElementById('step-3-badge').classList.replace('text-zinc-400', 'text-cinemaDark');
    document.getElementById('step-3-indicator').classList.add('text-popcornGold');
}


function goBackToStep1() {
    document.getElementById('vibe-section').classList.add('hidden');
    document.getElementById('genre-section').classList.remove('hidden');

    document.getElementById('step-2-badge').classList.replace('bg-popcornGold', 'bg-zinc-800');
    document.getElementById('step-2-badge').classList.replace('text-cinemaDark', 'text-zinc-400');
    document.getElementById('step-2-indicator').classList.remove('text-popcornGold');
}


function resetApp() {
    currentGenre = null;
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('vibe-section').classList.add('hidden');
    document.getElementById('genre-section').classList.remove('hidden');

    document.getElementById('step-2-badge').className = "w-7 h-7 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-bold";
    document.getElementById('step-2-indicator').classList.remove('text-popcornGold');

    document.getElementById('step-3-badge').className = "w-7 h-7 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-bold";
    document.getElementById('step-3-indicator').classList.remove('text-popcornGold');
}
