export interface Quote {
    id: number;
    text: string;
    author: string;
    category: string;
  }
  
  export const quotes: Quote[] = [
    // Motivation
    {
      id: 1,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "motivation"
    },
    {
      id: 2,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "motivation"
    },
    {
      id: 3,
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
      category: "motivation"
    },
    {
      id: 4,
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: "motivation"
    },
    {
      id: 5,
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: "motivation"
    },
  
    // Success
    {
      id: 6,
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
      category: "success"
    },
    {
      id: 7,
      text: "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
      category: "success"
    },
    {
      id: 8,
      text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett",
      category: "success"
    },
    {
      id: 9,
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
      category: "success"
    },
  
    // Happiness
    {
      id: 10,
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
      category: "happiness"
    },
    {
      id: 11,
      text: "The best way to cheer yourself up is to try to cheer somebody else up.",
      author: "Mark Twain",
      category: "happiness"
    },
    {
      id: 12,
      text: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "Mahatma Gandhi",
      category: "happiness"
    },
    {
      id: 13,
      text: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
      author: "Audrey Hepburn",
      category: "happiness"
    },
  
    // Wisdom
    {
      id: 14,
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
      category: "wisdom"
    },
    {
      id: 15,
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Eleanor Roosevelt",
      category: "wisdom"
    },
    {
      id: 16,
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
      category: "wisdom"
    },
    {
      id: 17,
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      category: "wisdom"
    },
  
    // Life
    {
      id: 18,
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      category: "life"
    },
    {
      id: 19,
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
      category: "life"
    },
    {
      id: 20,
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
      category: "life"
    },
    {
      id: 21,
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
      category: "life"
    },
  
    // Leadership
    {
      id: 22,
      text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
      author: "Ronald Reagan",
      category: "leadership"
    },
    {
      id: 23,
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
      category: "leadership"
    },
    {
      id: 24,
      text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      author: "Simon Sinek",
      category: "leadership"
    },
  
    // Creativity
    {
      id: 25,
      text: "Creativity is intelligence having fun.",
      author: "Albert Einstein",
      category: "creativity"
    },
    {
      id: 26,
      text: "The creative adult is the child who survived.",
      author: "Ursula K. Le Guin",
      category: "creativity"
    },
    {
      id: 27,
      text: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
      category: "creativity"
    }
  ];