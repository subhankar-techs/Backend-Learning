function countVowelsAndConsonants(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of word) {
        if (vowels.includes(char)) {
            vowelCount++;
        } 
        else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            consonantCount++;
        }

    }

    console.log(`Word: "${word}"`);
    console.log(`Vowels: ${vowelCount}`);
    console.log(`Consonants: ${consonantCount}`);
}

countVowelsAndConsonants("Hello");
countVowelsAndConsonants("JavaScript");