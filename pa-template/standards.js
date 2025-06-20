const rubrics = {
    "1.1: Demonstrates respect and empathy for diverse cultural perspectives.": {
        "Grade 1-3": {
            "Beginning": "Understand little about how other people from different places do things. Might say things that are not nice about them.",
            "Developing": "Knows that people from different places are different but doesn't always understand why. Tries to be nice sometimes.",
            "Proficient": "Understands that people from different places have different ideas. Does not judge different ideas.",
            "Mastery": "Understands how people from different cultures see the world and tries to see things from their point of view."
        },
        "Grade 4-5": {
            "Beginning": "Knows that there are different cultures and tries to be respectful, and understands how others feel with guidance.",
            "Developing": "Respects that people from different cultures have different ideas and feelings. Tries to understand why they think the way they do.",
            "Proficient": "Fully understands and cares about how people from different cultures see the world by showing empathy.",
            "Mastery": "Deeply understands and respects the viewpoints of people from different cultures. Always includes their ideas and helps others learn about them."
        },
        "Grade 6-8": {
            "Beginning": "Shows little understanding of different cultures and might rely on stereotypes about them.",
            "Developing": "Recognizes that different cultures have different ways of doing things and be respectful and show empathy with guidance.",
            "Proficient": "Respects and tries to understand different cultural viewpoints and can talk about the differences in a thoughtful way.",
            "Mastery": "Fully understands and values different cultural perspectives and actively includes them in their interactions and projects, helping to promote understanding among others."
        },
        "Grade 9-12": {
            "Beginning": "Shows limited understanding or respect for different cultural perspectives; may rely on stereotypes or generalizations.",
            "Developing": "Recognizes cultural differences and demonstrates basic respect, though empathy (understanding and sharing the feelings of others) is not consistently evident.",
            "Proficient": "Demonstrates consistent respect and empathy for diverse cultural perspectives, actively seeking to understand different viewpoints.",
            "Mastery": "Exhibits deep understanding and appreciation of diverse cultural perspectives, consistently demonstrating empathy and actively promoting cultural understanding."
        }
    },
    "1.2: Applies knowledge of cultural traditions and global trends to address challenges.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Has some knowledge about tradition culture and global trends/issues.",
            "Mastery": "Can come up some ideas relating to contemporary problems using understandings about local and global situation."
        },
        "Grade 4-5": {
            "Beginning": "Has limited knowledge about different cultural traditions or what's going on globally.",
            "Developing": "Knows some things about different cultures and the world but needs some guidance on how to use this to solve problems.",
            "Proficient": "Can demonstrate their knowledge of different cultures and global events when think about how to solve problems.",
            "Mastery": "Uses their strong knowledge of different cultures or global trends to really understand problems and come up with creative solutions, even for big challenges."
        },
        "Grade 6-8": {
            "Beginning": "Has limited knowledge of different cultural traditions or current events around the world and struggles to use this information to solve problems.",
            "Developing": "Knows some cultural traditions or global trends but might not always see how they connect to different problems.",
            "Proficient": "Can use their understanding of cultural traditions and global trends to think about problems in ways that make sense.",
            "Mastery": "Uses a deep understanding of cultural traditions and global trends to generate creative and effective solutions for problems."
        },
        "Grade 9-12": {
            "Beginning": "Identifies cultural traditions (customs, beliefs of different groups) or global trends (major patterns or changes happening worldwide) relevant to tasks or problems with guidance.",
            "Developing": "Identifies some relevant cultural traditions or global trends but applies them inconsistently or in a basic way to address challenges.",
            "Proficient": "Effectively applies knowledge of cultural traditions and global trends to analyze and address challenges in familiar contexts.",
            "Mastery": "Synthesizes knowledge of diverse cultural traditions and global trends to create innovative and insightful solutions for complex, global challenges."
        }
    },
    "1.3: Effectively communicates across languages and cultural contexts.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Can sometimes talk to people from different places or who speak different languages, but it can be hard.",
            "Mastery": "Can talk clearly and in a way that is respectful to people who speak different languages or come from different places."
        },
        "Grade 4-5": {
            "Beginning": "Finds it hard to communicate clearly with people who have different languages or come from different cultures.",
            "Developing": "Can usually communicate okay with people from different cultures or who speak different languages about familiar things.",
            "Proficient": "Can communicate clearly and respectfully with people from different cultures and who speak different languages in many situations.",
            "Mastery": "Is excellent at communicating effectively with application of communication, language skills and understandings to cultures."
        },
        "Grade 6-8": {
            "Beginning": "Assistance is needed when communicate with people from different cultures or who speak different languages, or in verbal/written format.",
            "Developing": "Can communicate in familiar cultural, language situations or way of expression, but might not equally effective in the other situation.",
            "Proficient": "Communicates clearly and in a way that shows they understand and respect different cultures and languages consistently.",
            "Mastery": "Is highly skilled at communicating with diverse groups of people from different cultural and language backgrounds effectively to make audience engaged."
        },
        "Grade 9-12": {
            "Beginning": "Can communicates with some clarity in either one language or single cultural context.",
            "Developing": "Communicates effectively in familiar cultural and linguistic contexts but may need assistance with appropriateness in unfamiliar ones.",
            "Proficient": "Demonstrates clarity and appropriateness according to context in their communication across multilingual and multicultural settings.",
            "Mastery": "Adapts communication style (verbal, nonverbal, written) seamlessly to effectively engage diverse audiences across different languages and cultural contexts, ensuring understanding and building rapport."
        }
    },
    "1.4: Collaborates with others to build understanding and solve problems across cultural divides.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Works well with others who are different from them. Tries to understand their ideas and solve problems together.",
            "Mastery": "Is excellent at working with people from all different backgrounds. Helps everyone understand each other and solve problems together peacefully."
        },
        "Grade 4-5": {
            "Beginning": "Can work well with people with similarities or known each other well.",
            "Developing": "Participates in group work with people from different backgrounds and tries to understanding their ideas or solving problems.",
            "Proficient": "Works well with people from different cultures and tries to understand their ideas to solve problems together.",
            "Mastery": "Is very good at working with people from all different cultures. Helps everyone understand each other's ideas and tries to lead a team to make everyone work towards same goals."
        },
        "Grade 6-8": {
            "Beginning": "Starts to work with people from different cultures and understands their viewpoints with assistance.",
            "Developing": "Works with others from different cultures but tries to understanding their perspectives or finding common ground to solve problems.",
            "Proficient": "Works effectively with people from different cultural backgrounds, can lead the team and work out solutions to problems together.",
            "Mastery": "Is skilled at leading group work with people from diverse cultural backgrounds, helping everyone understand each other and working together to solve problems with empathy and respect."
        },
        "Grade 9-12": {
            "Beginning": "Begins to engage in collaborative efforts with individuals from different cultural backgrounds.",
            "Developing": "Participates in collaborative efforts with individuals from diverse cultural backgrounds begin to address cultural misunderstandings or build strong understanding.",
            "Proficient": "Collaborates effectively with individuals from diverse cultural settings, fostering understanding and working together to solve problems across cultural divides.",
            "Mastery": "Leads collaborative efforts to bridge cultural divides, proactively fostering understanding, resolving misunderstandings with empathy and cultural sensitivity, and guiding diverse teams towards shared solutions."
        }
    },
    "2.1: Breaks down problems into smaller components and identifies solutions.": {
    "Grade 1-3": {
        "Beginning": "Needs some help to understand what the problem is really about. Their ideas for fixing it might not make sense or be complete.",
        "Developing": "Can sometimes see parts of a problem. Their ideas might fix some of it but not all.",
        "Proficient": "Can break down a problem into smaller parts. Has some good ideas for how to solve it.",
        "Mastery": "Can really understand all the parts of a problem, even tricky ones. Comes up with thorough and reasonable ways to fix it."
    },
    "Grade 4-5": {
        "Beginning": "Needs help to see all the parts of a problem. Their ideas to solve it might only fix some of it.",
        "Developing": "Can break down some problems but might miss some important parts. Their solutions might not solve everything.",
        "Proficient": "Can break down problems into smaller pieces and come up with clear and logical ways to solve them.",
        "Mastery": "Can understand even complicated problems by breaking them down. Comes up with solutions that make sense."
    },
    "Grade 6-8": {
        "Beginning": "breaks down a problem into smaller pieces with guidance. Their ideas for solutions might be unclear or not fully address the problem.",
        "Developing": "Can sometimes break down a problem with guidance. Their proposed solutions might only address some parts of the problem.",
        "Proficient": "Can break down problems into smaller, more manageable parts. Proposes solutions that are clear, make sense, and address the problem.",
        "Mastery": "Can analyze problems thoroughly by breaking them down into smaller parts and understanding how they connect. Proposes creative and well-supported solutions."
    },
    "Grade 9-12": {
        "Beginning": "Struggles to identify key components of a problem; proposed solutions are vague, incomplete, or don't address the core issue.",
        "Developing": "Breaks down problems inconsistently, addressing some but not all aspects; proposed solutions may lack a clear connection to the problem's components.",
        "Proficient": "Breaks down problems systematically by identifying key components and their relationships; proposes clear, logical, and well-organized solutions.",
        "Mastery": "Analyzes problems comprehensively by dissecting them into fundamental components and understanding underlying complexities; proposes innovative, well-supported, and thoroughly reasoned solutions."
    }
},
"2.2: Demonstrates originality and flexibility in generating ideas.": {
    "Grade 1-3": {
        "Beginning": "Doesn't have many ideas and has trouble thinking of different ways to do things.",
        "Developing": "Can think of a few different ideas but might get stuck if their first idea doesn't work.",
        "Proficient": "Can come up with lots of different and new ideas. Can change their ideas if they need to.",
        "Mastery": "Comes up with independent ideas all the time. Is great at thinking in different ways to solve problems."
    },
    "Grade 4-5": {
        "Beginning": "Doesn't come up with many new ideas and finds it hard to change their thinking.",
        "Developing": "Can come up with some different ideas but might have trouble changing their ideas when things change.",
        "Proficient": "Can come up with many creative ideas and can change their thinking or try new things if their first ideas don't work.",
        "Mastery": "Is full of unique and interesting ideas and can easily change their thinking to find the best solution to a problem on their own."
    },
    "Grade 6-8": {
        "Beginning": "Has few original ideas and struggles to think in different ways when needed.",
        "Developing": "Can come up with more than one idea with guidance but might struggle to change their approach if their initial ideas don't work.",
        "Proficient": "Regularly comes up with creative ideas and can change their approach or ideas based on what they learn or if things change.",
        "Mastery": "Always comes up with highly original ideas and can easily think in different ways to solve even complex problems."
    },
    "Grade 9-12": {
        "Beginning": "Generates few original ideas and demonstrates limited flexibility in their thinking or approach to tasks.",
        "Developing": "Generates multiple ideas but may struggle to adapt their thinking or innovate when faced with new information or changing conditions.",
        "Proficient": "Consistently generates creative and original ideas, demonstrating flexibility in their thinking and adapting their approaches based on feedback or new information.",
        "Mastery": "Produces highly original and inventive ideas, demonstrating exceptional flexibility and innovation in their thinking and problem-solving approaches, even in complex situations."
    }
},
"2.3: Evaluates evidence critically to make reasoned decisions.": {
    "Grade 1-3": {
        "Beginning": "Might make assertion without really thinking about it.",
        "Developing": "Their reasons for opinion might not be very strong.",
        "Proficient": "Can sometimes look at information and see if it makes sense. Makes arguments based on good reasons.",
        "Mastery": "Is very good at looking at information and deciding if it's really true and important. Always makes arguments based on careful thinking and good reasons."
    },
    "Grade 4-5": {
        "Beginning": "Finds it hard to look at information and decide if it's good information. Their choices might not be based on facts.",
        "Developing": "Can sometimes tell if information is helpful but might not always think carefully about it. Their reasons for choices might not be very clear.",
        "Proficient": "Looks at information closely and decides if it's good evidence independently. Uses this information to make choices that make sense.",
        "Mastery": "Is excellent at looking at information and figuring out if it's strong evidence considering quality of source and relevance. Uses this to make thoughtful and logical decisions."
    },
    "Grade 6-8": {
        "Beginning": "Starts to look at information carefully to decide if it's true or important. Their decisions might not be based on good reasons.",
        "Developing": "Can look at information and understand the importance of evaluating information, but might not always be very thorough in their thinking.",
        "Proficient": "Carefully looks at information and decides if it's good evidence to support their ideas. Makes decisions based on clear and logical reasons.",
        "Mastery": "Shows exceptional ability to look at information, evaluate how strong it is from multiple aspects, and use it to make well-reasoned and logical decisions."
    },
    "Grade 9-12": {
        "Beginning": "Evaluates evidence with guidance; decisions may be based on incomplete, unreliable, or irrelevant information without logical reasoning.",
        "Developing": "Evaluates evidence inconsistently, accepting information at face value or relying on limited sources; reasoning may lack depth or thoroughness.",
        "Proficient": "Evaluates evidence systematically by considering its source, relevance, and validity; uses this evaluation to make reasoned, logical, and well-supported decisions.",
        "Mastery": "Demonstrates exceptional critical thinking by thoroughly analyzing and synthesizing complex evidence from various sources to make insightful, well-justified, and nuanced decisions."
    }
},
"2.4: Applies knowledge creatively to innovate and adapt to new situations.": {
    "Grade 1-3": {
        "Beginning": "(intentionally left blank)",
        "Developing": "(intentionally left blank)",
        "Proficient": "Can fully understand what they know. Starts to apply knowledge to answer other questions.",
        "Mastery": "Is excellent at using what they know to come up with ideas to answer questions."
    },
    "Grade 4-5": {
        "Beginning": "Tries to get deeper understandings to what have been learned.",
        "Developing": "Can understand what they have learned, but assistance is needed when trying to apply knowledge to other contexts.",
        "Proficient": "Can use what they've learned to solve new problems and try different ways of doing things.",
        "Mastery": "Is very good at using their knowledge to create new ideas as solutions in many different situations."
    },
    "Grade 6-8": {
        "Beginning": "Start to explore how to use what they know in new situations or come up with new ways of doing things.",
        "Developing": "Can use what they know in situations they've seen before, and needs guidance to transfer to new contexts.",
        "Proficient": "Can use what they've learned to solve new problems and try different ways of doing things.",
        "Mastery": "Is very good at using their knowledge to create new ideas as solutions in many different situations."
    },
    "Grade 9-12": {
        "Beginning": "Demonstrates limited ability to apply existing knowledge to new situations or generate innovative solutions.",
        "Developing": "Applies existing knowledge to new situations with some success but may struggle with significant adaptations or truly innovative approaches.",
        "Proficient": "Effectively applies existing knowledge to new and unfamiliar situations, demonstrating creativity and adaptability in problem-solving.",
        "Mastery": "Consistently and innovatively applies knowledge to diverse and complex situations, generating novel solutions and demonstrating exceptional adaptability."
    }
}
// ... (The rest of the rubrics object would go here, but it's too long for this example) ...
};

const standardsData = {
    '1': {
        'PE': [
            'Net/Wall Games • Demonstrate underhand and overhand throws toward a wall or target with control.',
            'Net/Wall Games • Move to open space to return an object during a rally-based activity.',
            'Net/Wall Games • Strike a balloon or ball using their hand or a paddle in a controlled manner.',
            'Net/Wall Games • Follow established rules and routines when participating in partner games.',
            'Net/Wall Games • Work respectfully and cooperatively with a partner to maintain a rally.',
            'Target Games • Use accurate underhand throws to hit a stationary target from a set distance.',
            'Target Games • Adjust their force and direction to improve throwing accuracy.',
            'Target Games • Demonstrate balance and stable posture when aiming at a target.',
            'Target Games • Wait their turn and show patience while participating in group games.',
            'Target Games • Offer kind and helpful feedback to peers during activities.',
            'Striking/Fielding Games • Strike a stationary object using a bat or paddle with increasing control.',
            'Striking/Fielding Games • Run to a designated area after striking an object.',
            'Striking/Fielding Games • Field a ball using both hands or appropriate soft equipment.',
            'Striking/Fielding Games • Take turns and follow game rules with fairness and honesty.',
            'Striking/Fielding Games • Communicate clearly with teammates during games.',
            'Invasion/Territory Games • Travel with control while carrying or dribbling an object.',
            'Invasion/Territory Games • Work together with teammates to move toward a scoring area.',
            'Invasion/Territory Games • Use space effectively during gameplay.',
            'Invasion/Territory Games • Tag others safely and respect boundaries.',
            'Invasion/Territory Games • Follow team rules and display good sportsmanship.',
            'Aquatics • Demonstrate comfort and confidence in shallow water environments.',
            'Aquatics • Follow basic water safety rules and listen to instructions near water.',
            'Aquatics • Practice floating on their front and back with or without support.',
            'Aquatics • Demonstrate basic kicking and gliding skills using a flotation aid.',
            'Aquatics • Move safely in and out of the water using proper techniques.',
            'Adventure Challenges • Solve simple physical challenges with a partner or small group.',
            'Adventure Challenges • Use clear communication and listening skills during team tasks.',
            'Adventure Challenges • Move safely through a shared physical space with awareness.',
            'Adventure Challenges • Reflect on what strategies helped them succeed in challenges.',
            'Adventure Challenges • Show respect for different ideas and team contributions.',
            'Daily Habits and Physical Activity • Participate in daily physical activity for at least 60 minutes.',
            'Daily Habits and Physical Activity • Describe how their body feels before and after movement.',
            'Daily Habits and Physical Activity • Identify ways to stay active at school and home.',
            'Daily Habits and Physical Activity • Demonstrate proper posture and effort during routines.',
            'Daily Habits and Physical Activity • Understand why regular movement is important for health.',
            'Creative Movement • Express ideas and emotions using movement and body shapes.',
            'Creative Movement • Explore different qualities of movement such as speed and direction.',
            'Creative Movement • Move through space using levels (high/medium/low) and pathways.',
            'Creative Movement • Work with others to create and perform simple movement patterns.',
            'Creative Movement • Reflect on how movement can tell a story or show feelings.'
        ],
        'Music': [
            'A wonderful world of sounds • Understand and explore the production and characteristics of sound.',
            'A wonderful world of sounds • The relationship between sound generation and vibration',
            'A wonderful world of sounds • The timbre characteristics of the sound',
            'A wonderful world of sounds • The loudness characteristics of the sound',
            'A wonderful world of sounds • The characteristics of the pitch of the sound',
            'Steady beat is like our heartbeat • Experience music at different speeds through game practice and maintaining a steady beat.',
            'Steady beat is like our heartbeat • Dance games can accurately judge the changes in the speed of music.',
            'Steady beat is like our heartbeat • The metronome game trains students\' ability to maintain a steady beat on their own',
            'Steady beat is like our heartbeat • In percussion games, students can express the changes in musical tempo by themselves.',
            'Steady beat is like our heartbeat • Work in groups and accompany the piece "Song of Spring" with percussion instruments.'
        ],
        'English': [
            'Reading: Print Concepts • Demonstrate understanding of basic print features and word boundaries.',
            'Reading: Phonological Awareness • Identify and manipulate phonemes in spoken words.',
            'Reading: Phonics • Decode common one-syllable words using letter-sound relationships.',
            'Reading: Fluency • Read grade-level texts orally with accuracy and understanding.',
            'Reading: Comprehension • Answer who/what/where questions about key details.',
            'Reading: Comprehension • Retell familiar stories including key events.',
            'Writing: Text Types • Write opinion pieces stating preferences with reasons.',
            'Writing: Text Types • Compose informative texts naming topics with facts.',
            'Writing: Text Types • Narrate sequenced events using temporal words (first, next).',
            'Writing: Production • Focus writing on single topic with adult guidance.',
            'Writing: Research • Participate in shared research using provided sources.',
            'Language: Conventions • Print all upper- and lowercase letters legibly.',
            'Language: Conventions • Use common nouns/verbs and basic punctuation.',
            'Language: Vocabulary • Sort words into categories and define vocabulary through context.',
            'Listening & Speaking: Comprehension • Follow two-step directions and ask clarifying questions.',
            'Listening & Speaking: Comprehension • Describe people/events orally with relevant details.',
            'Listening & Speaking: Presentation • Speak in complete sentences during discussions.'
        ]
    },
    'K': {
        'English': [
            'Reading: Print Concepts • Identify front/back of book and directionality of text.',
            'Reading: Print Concepts • Recognize that words are separated by spaces.',
            'Reading: Phonological Awareness • Recognize and produce rhyming words.',
            'Reading: Phonological Awareness • Blend and segment syllables in spoken words.',
            'Reading: Phonics • Name all upper- and lowercase letters.',
            'Reading: Phonics • Associate letters with primary sounds.',
            'Reading: Fluency • Read simple texts with purpose and understanding.',
            'Reading: Comprehension • Answer questions about key details in stories.',
            'Reading: Comprehension • Identify characters and settings in familiar texts.',
            'Writing: Text Types • Use drawings and letters to express opinions.',
            'Writing: Text Types • Label familiar objects in informational writing.',
            'Writing: Text Types • Narrate simple sequenced events with prompting.',
            'Writing: Production • Add details to strengthen writing with guidance.',
            'Language: Conventions • Print many upper/lowercase letters.',
            'Language: Conventions • Form regular plural nouns orally.',
            'Language: Vocabulary • Sort objects into basic categories.',
            'Language: Vocabulary • Use new words acquired through conversations.',
            'Listening & Speaking: Comprehension • Follow one-step oral directions.',
            'Listening & Speaking: Comprehension • Ask/answer questions about texts read aloud.',
            'Listening & Speaking: Presentation • Describe familiar people with prompting.'
        ]
    },
    '2': {
        'PE': [
            'Net/Wall Games • Throw and strike a ball with control toward a target.',
            'Net/Wall Games • Move to space and return an object during a rally.',
            'Net/Wall Games • Maintain a rally with a partner using hand or paddle.',
            'Net/Wall Games • Follow game rules and stay safe with equipment.',
            'Net/Wall Games • Work respectfully with a partner.',
            'Target Games • Aim and throw objects to hit a target.',
            'Target Games • Adjust force and direction to improve accuracy.',
            'Target Games • Show balance and focus while aiming.',
            'Target Games • Take turns and wait patiently.',
            'Target Games • Give positive feedback to peers.',
            'Striking/Fielding Games • Strike a ball off a tee or cone.',
            'Striking/Fielding Games • Run to a target zone after hitting.',
            'Striking/Fielding Games • Field a rolling ball using two hands.',
            'Striking/Fielding Games • Take turns and play by the rules.',
            'Striking/Fielding Games • Talk and listen to teammates.',
            'Invasion/Territory Games • Travel with control and keep possession.',
            'Invasion/Territory Games • Pass to teammates in open space.',
            'Invasion/Territory Games • Use space wisely in a game setting.',
            'Invasion/Territory Games • Defend safely and fairly.',
            'Invasion/Territory Games • Play with teamwork and honesty.',
            'Adventure Challenges • Solve physical tasks with a group.',
            'Adventure Challenges • Use communication to complete challenges.',
            'Adventure Challenges • Move carefully with awareness of space.',
            'Adventure Challenges • Show respect for team roles.',
            'Adventure Challenges • Reflect on what helped your team.',
            'Daily Habits and Physical Activity • Be active for 60 minutes every day.',
            'Daily Habits and Physical Activity • Describe how movement affects the body.',
            'Daily Habits and Physical Activity • List ways to stay active daily.',
            'Daily Habits and Physical Activity • Show effort and good posture during activity.',
            'Daily Habits and Physical Activity • Explain why moving is good for health.',
            'Creative Movement • Use movement to show ideas or emotions.',
            'Creative Movement • Change speed, direction, and shape while moving.',
            'Creative Movement • Use space and pathways in movement.',
            'Creative Movement • Create short routines with others.',
            'Creative Movement • Talk about what movements mean.'
        ],
        'English': [
            'Reading: Phonics • Decode multisyllabic words using phonics patterns.',
            'Reading: Fluency • Read grade-level texts orally with accuracy and expression.',
            'Reading: Comprehension • Describe connections between events in stories.',
            'Reading: Comprehension • Identify main topic of multi-paragraph texts.',
            'Writing: Text Types • Develop opinion pieces with reasons and closure.',
            'Writing: Text Types • Group related facts in informative writing.',
            'Writing: Text Types • Include sensory details in narrative writing.',
            'Writing: Production • Use digital tools to produce/publish writing.',
            'Language: Conventions • Form irregular plural nouns and past-tense verbs.',
            'Language: Conventions • Use adjectives and adverbs in simple sentences.',
            'Language: Vocabulary • Determine shades of meaning in related words.',
            'Listening & Speaking: Comprehension • Recount key ideas from read-alouds.',
            'Listening & Speaking: Presentation • Tell stories with descriptive details and clear sequence.'
        ]
    },
    '3': {
        'English': [
            'Reading: Key Ideas • Refer to explicit text evidence in literary texts.',
            'Reading: Key Ideas • Determine main ideas and supporting details.',
            'Reading: Craft & Structure • Determine meaning of academic vocabulary.',
            'Reading: Craft & Structure • Distinguish personal point of view from characters.',
            'Reading: Integration • Interpret information from charts and graphs.',
            'Reading: Range • Read prose and poetry at grade level independently.',
            'Writing: Text Types • Write opinion pieces with introductory/concluding statements.',
            'Writing: Text Types • Organize informative writing with headings.',
            'Writing: Text Types • Use dialogue in narrative writing.',
            'Writing: Production • Plan and revise writing with guidance.',
            'Writing: Research • Conduct short research projects using multiple sources.',
            'Language: Conventions • Use relative pronouns and modal auxiliaries.',
            'Language: Vocabulary • Use context clues to determine word meaning.',
            'Listening & Speaking: Comprehension • Paraphrase text read aloud.',
            'Listening & Speaking: Presentation • Report on topics with audio recordings.'
        ],
        'PE': [
            'Net/Wall Games • Serve and rally using proper form.',
            'Net/Wall Games • Move into position to receive or intercept.',
            'Net/Wall Games • Track and strike objects with accuracy.',
            'Net/Wall Games • Apply simple strategies during gameplay.',
            'Net/Wall Games • Show cooperation and fairness in games.',
            'Target Games • Aim and hit targets with consistent control.',
            'Target Games • Modify techniques to improve precision.',
            'Target Games • Demonstrate spatial awareness and focus.',
            'Target Games • Encourage others and show patience.',
            'Target Games • Reflect on personal improvement.',
            'Striking/Fielding Games • Strike a moving object with control.',
            'Striking/Fielding Games • Move quickly and safely between bases.',
            'Striking/Fielding Games • Catch and throw to field effectively.',
            'Striking/Fielding Games • Use game rules to solve problems.',
            'Striking/Fielding Games • Contribute to team success.',
            'Invasion/Territory Games • Keep possession through passing and movement.',
            'Invasion/Territory Games • Defend with control and sportsmanship.',
            'Invasion/Territory Games • Create scoring opportunities as a team.',
            'Invasion/Territory Games • Adjust to opponents and space.',
            'Invasion/Territory Games • Communicate clearly on the field.',
            'Adventure Challenges • Collaborate to solve timed challenges.',
            'Adventure Challenges • Practice active listening in group settings.',
            'Adventure Challenges • Show responsibility in shared physical space.',
            'Adventure Challenges • Reflect on personal and team contributions.',
            'Adventure Challenges • Adjust strategies when needed.',
            'Daily Habits and Physical Activity • Meet daily physical activity goals.',
            'Daily Habits and Physical Activity • Monitor heart rate and energy levels.',
            'Daily Habits and Physical Activity • Set a personal fitness challenge.',
            'Daily Habits and Physical Activity • Recognize links between movement and mood.',
            'Daily Habits and Physical Activity • Track progress over time.',
            'Creative Movement • Create routines that show expression and structure.',
            'Creative Movement • Move with rhythm and timing.',
            'Creative Movement • Explore spatial patterns and levels.',
            'Creative Movement • Work with a group to choreograph.',
            'Creative Movement • Explain the meaning behind your movement.'
        ]
    },
    '4': {
        'English': [
            'Reading: Key Ideas • Refer to explicit text evidence in informational texts.',
            'Reading: Key Ideas • Summarize main ideas with supporting evidence.',
            'Reading: Craft & Structure • Compare points of view across texts.',
            'Reading: Integration • Explain author\'s use of evidence and reasoning.',
            'Writing: Text Types • Support opinions with organized reasons and evidence.',
            'Writing: Text Types • Develop informative texts using domain-specific vocabulary.',
            'Writing: Text Types • Use transitional phrases in narrative writing.',
            'Writing: Production • Produce clear writing appropriate to task.',
            'Writing: Research • Gather information from digital sources.',
            'Language: Conventions • Form and use progressive verb tenses.',
            'Language: Vocabulary • Demonstrate understanding of figurative language.',
            'Listening & Speaking: Comprehension • Identify evidence supporting claims.',
            'Listening & Speaking: Presentation • Enhance presentations with multimedia.'
        ]
    },
    '5': {
        'English': [
            'Reading: Craft & Structure • Analyze how chapters/scenes fit into overall text structure.',
            'Reading: Integration • Analyze multiple accounts of the same event.',
            'Reading: Integration • Draw information from multiple print/digital sources.',
            'Writing: Text Types • Link opinion points using transitional words and phrases.',
            'Writing: Text Types • Develop topics with facts, definitions and quotations.',
            'Writing: Text Types • Use pacing techniques in narrative writing.',
            'Writing: Production • Strengthen writing through planning and revision.',
            'Language: Conventions • Recognize variations from standard English.',
            'Language: Vocabulary • Interpret idioms and proverbs in context.',
            'Listening & Speaking: Comprehension • Summarize information presented in diverse media.',
            'Listening & Speaking: Presentation • Adapt speech to formal/informal contexts.'
        ]
    },
    '6': {
        'English': [
            'Reading: Key Ideas • Cite textual evidence supporting analysis.',
            'Reading: Craft & Structure • Analyze how word choice affects meaning and tone.',
            'Reading: Craft & Structure • Determine author\'s point of view/purpose.',
            'Reading: Integration • Trace and evaluate specific arguments in texts.',
            'Writing: Text Types • Write arguments with clear claims and relevant evidence.',
            'Writing: Text Types • Develop informative texts using precise language.',
            'Writing: Text Types • Create narratives with effective sequencing.',
            'Writing: Production • Produce coherent writing with consistent organization.',
            'Writing: Research • Gather credible information from multiple sources.',
            'Language: Conventions • Ensure proper pronoun case and agreement.',
            'Language: Vocabulary • Determine meaning of words using Greek/Latin roots.',
            'Listening & Speaking: Comprehension • Analyze speaker\'s argument and reasoning.',
            'Listening & Speaking: Presentation • Present claims with pertinent evidence.'
        ]
    },
    '7': {
        'English': [
            'Reading: Key Ideas • Provide objective summaries of texts.',
            'Reading: Craft & Structure • Analyze how structure contributes to meaning.',
            'Reading: Integration • Compare/contrast texts in different media formats.',
            'Writing: Text Types • Support claims with logical reasoning and evidence.',
            'Writing: Text Types • Use domain-specific vocabulary in informative writing.',
            'Writing: Text Types • Use narrative techniques in personal writing.',
            'Writing: Research • Assess source credibility and accuracy.',
            'Language: Conventions • Recognize and correct inappropriate shifts in pronoun number.',
            'Language: Vocabulary • Distinguish between denotative and connotative meanings.',
            'Listening & Speaking: Comprehension • Evaluate speaker\'s evidence and reasoning.',
            'Listening & Speaking: Presentation • Use multimedia to enhance presentations.'
        ]
    }
};