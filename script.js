const quotes = {
    english: [
        "The best way to predict the future is to create it.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "Dream big and dare to fail.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Happiness depends upon ourselves.",
        "The best way to predict the future is to create it.",

        "Life is 10% what happens to us and 90% how we react to it.",
        ,
        "Dream big and dare to fail.",

        "Success is not final, failure is not fatal: It is the courage to continue that counts.",

        "Happiness depends upon ourselves.",

        "Believe you can and you're halfway there.",

        "Don't watch the clock; do what it does. Keep going.",

        "The only limit to our realization of tomorrow is our doubts of today.",

        "Act as if what you do makes a difference. It does.",

        "Keep your face always toward the sunshine—and shadows will fall behind you.",

        "Success usually comes to those who are too busy to be looking for it.",

        "What you get by achieving your goals is not as important as what you become by achieving your goals.",

        "Believe in yourself and all that you are.",

        "The harder you work for something, the greater you’ll feel when you achieve it.", ,

        "Don’t stop when you’re tired. Stop when you’re done."


    ],
    nepali: [
        "भविष्य भविष्यवाणी गर्ने उत्तम उपाय हो, त्यसलाई आफैं सिर्जना गर्नु।",
        "जीवन १०% हामीलाई के हुन्छ र ९०% हामी त्यसलाई कसरी प्रतिक्रिया गर्छौं।",
        "ठूलो सपना देख र असफल हुन पनि हिम्मत गर।",
        "सफलता अन्तिम होइन, असफलता घातक होइन: निरन्तरता दिने साहस हो।",
        "खुशी हामीमाथि निर्भर गर्दछ।",
        "सफलताको कुनै शर्टकट छैन।",

        "समय सबैभन्दा ठूलो शिक्षक हो।",

        "ठूलो सपना देख, त्यसका लागि मेहनत गर।",

        "कठिनाइले नै मानिसलाई बलियो बनाउँछ।",

        "सफल व्यक्ति असफल हुँदैनन्, उनीहरू पुनः प्रयास गर्छन्।",

        "हरेक बिहान नयाँ आशा लिएर आउँछ।",

        "ज्ञान नै सबैभन्दा ठूलो शक्ति हो।",

        "सकारात्मक सोचले जीवन बदलिन्छ।",
        "रयास बिना सफलता सम्भव छैन।",

        "साँचो मित्र जीवनको धन हो।",

        "आफ्नो कमजोरीलाई स्वीकार गर्न सक्नुपर्छ।",

        "आफ्नो मनको आवाज सुन्नुहोस्।",

        "जीवनमा धैर्यता राख्नु जरुरी छ।",

        "आजको मेहनत भोलिको सफलता हो।",

        "आत्मविश्वास नै पहिलो सफलता हो।",

    ]
};

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const selectvalue = document.getElementById("option").value;
    const quotelist = quotes[selectvalue];
    const randomqotekolagi = quotelist[Math.floor(Math.random() * quotelist.length)];
    document.getElementById("quotes").textContent = randomqotekolagi;
});
