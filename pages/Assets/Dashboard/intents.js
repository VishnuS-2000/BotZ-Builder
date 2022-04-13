export const defaultIntents=[
        {
            "tag": "greeting",
            "patterns": [
              "Hi",
              "Hey",
              "How are you",
              "Is anyone there?",
              "Hello",
              "Good day"
            ],
            "responses": [
              "Hey :-)",
              "Hello, thanks for visiting",
              "Hi there, what can I do for you?",
              "Hi there, how can I help?"
            ]
          },
        {
        "tag": "goodbye",
        "patterns": ["Bye", "See you later", "Goodbye"],
        "responses": [
          "See you later, thanks for visiting",
          "Have a nice day",
          "Bye! Come back again soon."
        ]
      },
      {
        "tag":"Invalid Entry",
        "patterns":[""],
        "responses":["I am sorry but Could you repeat that? "]
      },
      {
        "tag": "thanks",
        "patterns": ["Thanks", "Thank you", "That's helpful", "Thank's a lot!"],
        "responses": ["Happy to help!", "Any time!", "My pleasure"]
      },
      {
        "tag": "tell_joke",
        "patterns": [
          "Tell me a joke!",
          "Tell me something funny!",
          "Do you know a joke?"
        ],
        "responses": [
          "Why did the hipster burn his mouth? He drank the coffee before it was cool.",
          "What did the buffalo say when his son left for college? Bison.",
          "What was Forrest Gump’s email password? 1forrest1",
          "I don’t trust stairs because they’re always up to something.",
          "To the guy who invented zero, thanks for nothing"
        ]
      }
    ]

