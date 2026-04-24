let low = 1;
let high = 1000;
let questions = 0;
const MAX_QUESTIONS = 10;
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    questionText: document.getElementById('question-text'),
    questionCount: document.getElementById('question-count'),
    progress: document.getElementById('progress'),
    finalNumber: document.getElementById('final-number'),
    prizeContainer: document.getElementById('prize-container'),
    penaltyContainer: document.getElementById('penalty-container'),
    rangeDisplay: document.getElementById('range-display')
};

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('yes-btn').addEventListener('click', () => handleAnswer(true));
document.getElementById('no-btn').addEventListener('click', () => handleAnswer(false));
document.getElementById('correct-btn').addEventListener('click', handleCorrectGuess);
document.getElementById('restart-btn').addEventListener('click', restartGame);

function handleCorrectGuess() {
    const mid = Math.floor(low + (high - low) / 2);
    low = mid;
    high = mid;
    questions++;
    showResult();
}

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

function startGame() {
    low = 1;
    high = 1000;
    questions = 0;
    
    updateUI();
    switchScreen('game');
}

function updateUI() {
    if (low >= high) return;
    
    const mid = Math.floor(low + (high - low) / 2);
    elements.questionText.textContent = `Чи вірно, що задумане число БІЛЬШЕ ніж ${mid}?`;
    elements.questionCount.textContent = questions;
    elements.progress.style.width = `${(questions / MAX_QUESTIONS) * 100}%`;
    elements.rangeDisplay.textContent = `Діапазон: ${low} - ${high}`;
}

function handleAnswer(isGreater) {
    const mid = Math.floor(low + (high - low) / 2);
    
    if (isGreater) {
        low = mid + 1;
    } else {
        high = mid;
    }
    
    questions++;
    
    if (low === high || questions >= MAX_QUESTIONS) {
        showResult();
    } else {
        updateUI();
    }
}

function showResult() {
    const result = low;
    elements.finalNumber.textContent = result;
    
    elements.prizeContainer.classList.add('hidden');
    elements.penaltyContainer.classList.add('hidden');
    
    const isCorrect = questions <= MAX_QUESTIONS && 
                      result >= 1 && result <= 1000;

    if (isCorrect) {
        elements.prizeContainer.classList.remove('hidden');
    } else {
        elements.penaltyContainer.classList.remove('hidden');
    }
    
    switchScreen('result');
}

function restartGame() {
    switchScreen('start');
}
