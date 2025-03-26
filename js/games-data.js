/**
 * Game Data Processing Module
 * Contains game data processing, display and interaction functions
 */

/**
 * Get user browser language
 * @returns {string} Language code (en)
 */
function getUserLanguage() {
    return 'en';
}

// Language configuration
const translations = {
    en: {
        playNow: "Play Now",
        closeGame: "Close Game",
        casual: "Casual",
        racing: "Racing",
        action: "Action",
        sports: "Sports",
        puzzle: "Puzzle",
        strategy: "Strategy",
        arcade: "Arcade",
        skill: "Skill",
        mahjong: "Mahjong",
        girls: "Girls",
        match3: "Match 3",
        cards: "Cards",
        sport: "Sport",
        makeup: "Make-up",
        dressup: "Dress-up",
        educational: "Educational",
        multiplayer: "Multiplayer",
        bubbleshooter: "Bubble Shooter"
    }
};

/**
 * Process game data function
 * @param {Object} game - Game object
 * @returns {Object} - Processed game object
 */
function processGameData(game) {
    // Process game tags
    let tags = Array.isArray(game.tags) ? game.tags : game.tags.split(',').map(tag => tag.trim());
    
    // Add default tag if no tags
    if (tags.length === 0) {
        tags = [translations.en.casual];
    }

    // Process game description
    const maxDescLength = 150;
    let description = game.description;
    if (description.length > maxDescLength) {
        description = description.substring(0, maxDescLength) + '...';
    }

    // Return processed game data
    return {
        title: game.title,
        description: description,
        cover_image: game.cover_image,
        game_url: game.game_url,
        tags: tags.map(tag => translations.en[tag.toLowerCase()] || tag)
    };
}

// Game data array
const gamesData = [
    {
        "title": "Moto X3M",
        "description": "Experience the thrill of extreme motorcycle racing in Moto X3M! Master challenging tracks, perform stunning stunts, and race against time. Beautiful graphics and simple controls make it perfect for players of all ages.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/moto-x3m/v100/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["racing", "action", "sports"]
    },
    {
        "title": "Sushi Roll",
        "description": "You are shrimply the best! In this endless-runner game, control your sushi roll through challenging tracks, collect ingredients, and avoid obstacles. Simple yet addictive gameplay!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SushiRollTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/sushi-roll/v240/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=18e7034e-d066-45e1-b67c-ee36ddae7cf9&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["arcade", "skill", "casual"]
    },
    {
        "title": "Onet World",
        "description": "Build a beautiful place where cute little animals can live! Match identical tiles to clear the board, unlock new levels and scenes. A relaxing and engaging puzzle experience!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/OnetWorldTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/o/onet-world/v260/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=a287bd43-371a-458b-b31e-a7c886e8301a&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["puzzle", "mahjong", "casual"]
    },
    {
        "title": "Blocks Puzzle Zoo",
        "description": "Save the captive animals in this challenging puzzle game! Solve block puzzles to help adorable animals regain their freedom. Test your wit and enjoy the rescue mission!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BlocksPuzzleZooTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/blocks-puzzle-zoo/v100/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=71fa26a0-b567-438c-bc4e-88246ceba3f6&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["puzzle", "casual"]
    },
    {
        "title": "Emergency Surgery",
        "description": "Play as a doctor and help patients in this exciting medical simulation! Perform emergency surgeries, diagnose conditions, and save lives in this thrilling medical adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/EmergencySurgeryTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/e/emergency-surgery/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=acee1042-e95f-4559-b56d-d876d11e99ee&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Element Blocks",
        "description": "Weather the elements in this crazy addictive puzzle game! Match and combine elemental blocks to create powerful reactions. Challenge your mind with increasingly complex puzzles.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/ElementBlocksTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/e/element-blocks/b9a8f22e/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8c70b6c7-5792-4c40-b891-496eef2fb5ed&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["puzzle", "casual"]
    },
    {
        "title": "Zoo Boom",
        "description": "Match cute animal cubes in this colorful puzzle game! Connect adorable zoo creatures, create powerful combinations, and solve challenging levels in this delightful match-3 adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/ZooBoomTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/z/zoo-boom/cd0be843/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=5e772ebe-9e0a-4cd3-adcf-bba662f35535&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=553",
        "tags": ["match3", "puzzle", "casual"]
    },
    {
        "title": "Pirate Cards",
        "description": "In this rogue-like card game, play as a brave pirate captain! Build your deck, battle fierce enemies, and navigate through challenging seas in this strategic card adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/PirateCardsTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/p/pirate-cards/v270/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7ba3cf66-f926-40dc-ba0e-6b1d7204d1b4&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["action", "cards", "strategy"]
    },
    {
        "title": "Moto X3M Pool Party",
        "description": "Moto X3M is back with a splash! Race through sun-soaked beach tracks, perform amazing water stunts, and enjoy summer vibes in this exciting pool-themed motorcycle adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mPoolPartyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/moto-x3m-pool-party/v080/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=b2102250-eb51-4704-9cab-ff296491cc68&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["racing", "action", "sports"]
    },
    {
        "title": "Wiggle",
        "description": "Play as a cute little worm on an epic escape adventure! Wiggle your way through challenging obstacles, collect power-ups, and use your skills to survive in this charming and addictive game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/WiggleTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/w/wiggle/v150/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=13a784d6-be50-4745-8e48-898d1442a773&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["skill", "arcade", "casual"]
    },
    {
        "title": "Adventure Drivers",
        "description": "Go on an exciting adventure and compete in thrilling races! Master various vehicles, conquer challenging tracks, and become the ultimate adventure driver in this action-packed racing game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/AdventureDriversTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/a/adventure-drivers/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7adef9f1-9ddd-437a-b5ee-196da61ba5c7&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=554",
        "tags": ["racing", "action"]
    },
    {
        "title": "Solitaire Legend",
        "description": "Experience the classic card game like never before! Challenge yourself with multiple solitaire variations, enjoy beautiful graphics, and prove yourself as a true Solitaire Legend.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SolitaireLegendTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/solitaire-legend/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=89269fd5-5e8c-4461-96c4-43adcb2655f9&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=553",
        "tags": ["cards", "strategy", "casual"]
    },
    {
        "title": "Kawaii Chibi Creator",
        "description": "Create your own adorable Chibi character in this kawaii avatar maker! Customize every detail, from hairstyles to accessories, and bring your cute anime character to life.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/KawaiiChibiCreator_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/k/kawaii-chibi-creator/v090/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8f591e93-0b3b-4bd2-bf32-6905b6df9271&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Find In Mind",
        "description": "Train your brain and improve your cognitive abilities in this engaging puzzle game! Challenge yourself with various memory tasks and brain-teasing puzzles.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/FindInMind_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/f/find-in-mind/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8820fb9b-f0da-4277-b989-2f47810a1462&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["puzzle", "skill", "casual"]
    },
    {
        "title": "Merge Jewels",
        "description": "Become a true jewel collector in this addictive puzzle game! Match and merge beautiful gems to create even more valuable treasures. Test your matching skills!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MergeJewelsTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/merge-jewels/v160/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=3f1d74b9-66ea-44b9-991f-7908c2fee68d&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=552",
        "tags": ["puzzle", "match3", "casual"]
    },
    {
        "title": "High Hills",
        "description": "How far can you go? Get in your car and master challenging hill climbs in this thrilling racing game! Test your driving skills across various terrains.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HighHillsTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/high-hills/v130/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=2a35d037-696c-4351-9e34-7260392f9404&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["action", "skill", "racing"]
    },
    {
        "title": "Knife Rain",
        "description": "Sharpen your knives and get ready for the ultimate precision challenge! Time your throws perfectly to hit targets and avoid obstacles in this thrilling arcade game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/KnifeRainTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/k/knife-rain/v820/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=acf1dae7-f647-4107-b381-8817a18a6e4d&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["action", "arcade", "skill"]
    },
    {
        "title": "Maze",
        "description": "Your task in this popular puzzle game is simple: find your way through increasingly challenging mazes! Test your problem-solving skills and spatial awareness.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MazeTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/maze/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=73ae54ea-f54f-480b-bf80-7e42dc3b9fe6&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["skill", "puzzle", "casual"]
    },
    {
        "title": "1000 Blocks",
        "description": "How many levels can you beat in this addictive puzzle game? Arrange blocks strategically, clear lines, and reach new heights in this challenging block-stacking adventure!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/1000Blocks_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/1000-blocks/v380/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=62914200-4d5c-459a-9e44-6d23733f89cb&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["puzzle", "skill", "casual"]
    },
    {
        "title": "Bunny Quest",
        "description": "Help the little bunny reach the goal! In this cute puzzle game, use your logic to create safe paths and guide your furry friend through challenging levels.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BunnyQuestTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/bunny-quest/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7ff7268f-4b08-43bc-b547-c92a7b2f4803&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["puzzle", "casual"]
    },
    {
        "title": "Drag Racing Club",
        "description": "Get into your car and explore the exciting world of drag racing! Tune your vehicle, master perfect timing, and compete against tough opponents in intense races.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/DragRacingClubTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/d/drag-racing-club/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7903c763-4f6b-48fb-8396-3a18daae70c7&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["racing", "sport", "action", "skill"]
    },
    {
        "title": "3D Basketball",
        "description": "Prove your basketball skills in this arcade-style sports game! Perfect your shooting technique, score amazing baskets, and become the ultimate basketball champion.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dBasketballTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-basketball/v240/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=a7b60a51-7426-449a-8fed-e4f57d3dccd7&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport", "arcade"]
    },
    {
        "title": "3D Chess",
        "description": "Train your logic and strategic skills with one of the most classic board games! Experience chess in stunning 3D graphics and challenge yourself against smart AI opponents.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dChessTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-chess/v180/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8e9306bb-99cc-4762-9708-a34d8afa6ae1&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=553",
        "tags": ["skill", "strategy", "casual"]
    },
    {
        "title": "3D Darts",
        "description": "Experience the thrill of professional darts in stunning 3D! Perfect your aim, master different throwing techniques, and compete for high scores in this realistic darts simulator.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dDartsTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-darts/v190/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=58bfd66f-ebc8-4b7e-be65-68ff573a11bf&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["sport", "skill"]
    },
    {
        "title": "Baby Lily Care",
        "description": "Take care of Baby Lily in this adorable girl game! Bathe, dress, and play with this cute baby girl. Create special moments and make her happy in this delightful care game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BabyLilyCare_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/baby-lily-care/v290/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=4bf78416-0d8f-491c-92b0-36d134d3ce1e&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Baby Lily Birthday",
        "description": "It's Baby Lily's birthday and you have to help her celebrate! Decorate the party room, prepare delicious treats, and make this special day unforgettable for the adorable baby girl.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BabyLilyBirthday_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/baby-lily-birthday/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=9b7c423a-10b7-40a4-8ffa-ebba665d38b4&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Baby Lily Sick Day",
        "description": "Baby Lily is sick and needs your care! Help her feel better by giving medicine, making her comfortable, and showing lots of love in this caring game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BabyLilySickDayTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/baby-lily-sick-day/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=9fec7b0e-ee53-4ced-9e97-f989c0ec0b54&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Dunk Brush",
        "description": "Your task in this addictive skill game is to draw the perfect path for the basketball to reach the hoop. Master the art of drawing and become a basketball champion!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/DunkBrushTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/d/dunk-brush/v160/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=1c1cf583-eebb-4907-8a68-0df950dd7c81&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["arcade", "sport", "skill"]
    },
    {
        "title": "Goalkeeper Champ",
        "description": "Play as goalkeeper in this exciting soccer game and save as many goals as you can! Test your reflexes and timing to become the ultimate goalkeeper champion.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/GoalkeeperChampTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/g/goalkeeper-champ/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=08c16895-73e4-4646-b0d2-398503758186&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport"]
    },
    {
        "title": "Find 500 Differences",
        "description": "Test your observation skills in this challenging spot-the-difference game! Compare two similar images and find all the hidden differences. Perfect for sharpening your attention to detail.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/Find500DifferencesTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/f/find-500-differences/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7c3d6873-9470-466b-8e8c-d68aa8c6d699&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["puzzle", "skill", "casual"]
    },
    {
        "title": "BFFs House Party",
        "description": "It's weekend and you and your friends have planned an amazing house party! Decorate the house, prepare delicious snacks, and create the perfect atmosphere for an unforgettable celebration.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BffsHousePartyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/bffs-house-party/v080/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=6be9908e-c24b-4b95-bab2-b4073e390444&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "The Ways",
        "description": "This minimalist puzzle game will put your skills and logic to the test! Find the correct path through increasingly challenging levels in this elegant and engaging puzzle experience.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TheWaysTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/the/the-ways/v150/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ab57b708-4f31-414f-bd86-b76819fc4c97&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["arcade", "skill", "puzzle"]
    },
    {
        "title": "Totemia: Cursed Marbles",
        "description": "Explore a mysterious ancient world in Totemia and break the curse of the marbles! Match and combine magical marbles to unlock the secrets of this enchanting puzzle adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TotemiaCursedMarblesTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/totemia-cursed-marbles/cc3f70d6/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ca588700-4790-46f1-82a2-cef934fd368a&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["match3", "skill", "puzzle"]
    },
    {
        "title": "Mafia Poker",
        "description": "Play classic Texas Hold 'em Poker with the rough guys in this thrilling card game! Test your poker face, bluff your way to victory, and become the ultimate mafia poker champion.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MafiaPokerTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/mafia-poker/v090/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8900d831-7ff7-478a-a4bb-5d811178c0b8&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["cards", "strategy"]
    },
    {
        "title": "Nina - Costume Party",
        "description": "Help Nina prepare for an amazing costume party! Choose the perfect outfit, apply makeup, and create a stunning look for this special celebration.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/NinaCostumePartyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/n/nina-costume-party/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=bf17df1e-ed0f-49cb-81c3-69a6235afc19&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Tina - Great Summer Day",
        "description": "Have fun in the sun with Tina! Summer is here, so let's help Tina enjoy her perfect summer day with exciting activities and adventures.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TinaGreatSummerDayTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/tina-great-summer-day/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=bf17df1e-ed0f-49cb-81c3-69a6235afc19&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Nina - Great Summer Day",
        "description": "School's out for summer! Help student Nina finish her last day of school and start her summer vacation with fun activities and adventures.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/NinaGreatSummerDayTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/n/nina-great-summer-day/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=0d522442-9b84-43bb-913f-ee7310fe390f&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Street Hoops 3D",
        "description": "Earn as many points as possible with a limited number of shots in this exciting 3D basketball game! Perfect your timing and become the street basketball champion.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/StreetHoops3dTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/street-hoops-3d/v190/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=6467c2f4-1fc0-4b98-98c9-9eefcf45d6d1&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport"]
    },
    {
        "title": "Square Stacker",
        "description": "In this super addictive puzzle game, your task is to stack squares perfectly! Test your spatial awareness and timing skills in this challenging arcade experience.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SquareStackerTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/square-stacker/v250/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=121d3120-e460-4273-b3d4-d683ed6b3c5f&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["skill", "puzzle", "arcade"]
    },
    {
        "title": "Find 500 Differences",
        "description": "Train your brain in this fun puzzle game! Look at two similar images and find all the hidden differences. Perfect for improving your observation skills.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/Find500DifferencesTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/f/find-500-differences/v090/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=b0894d32-6b8f-4dfe-927e-83460129f090&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["skill", "puzzle"]
    },
    {
        "title": "Happy Chipmunk",
        "description": "Take care of an adorable chipmunk in this cute pet-raising game! Feed, bathe, and play with your new furry friend to keep it happy and healthy.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyChipmunkTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-chipmunk/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Surfer Archers",
        "description": "Evil skeletons have invaded your favorite beach and it's up to you to defend it! Use your bow and arrow skills to take down enemies in this action-packed archery game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SurferArchersTeaserB.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/surfer-archers/v110/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=753864b1-5a27-4d35-a4d8-a104ac858f82&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["action", "skill"]
    },
    {
        "title": "Happy Bunny",
        "description": "Take care of a cute bunny in this adorable girl game! Bathe, feed, and play with your fluffy pet to make it the happiest bunny in the world.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyBunnyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-bunny/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=4c45107d-95eb-4f61-b765-fe9aa0bebf3c&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Happy Fox",
        "description": "Take care of your best friend, a cute fox! Your task is to feed, wash, and play with this adorable woodland creature to keep it happy and healthy.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyFoxTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-fox/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8d7e6a15-9fbb-4ff7-80b8-ead9f7cb182f&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Word Search Classic",
        "description": "Find all the words in this classic word search puzzle game! Challenge your vocabulary and observation skills as you search for hidden words in every direction.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/WordSearchClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/w/word-search-classic/v330/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=b47a1c8a-8f40-4d93-825f-e96652354ded&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["puzzle", "casual", "skill"]
    },
    {
        "title": "Tina - Costume Party",
        "description": "Tina has planned a fancy costume party at the beach! Help her choose the perfect outfit, do her makeup, and create the ultimate beach party look.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TinaCostumePartyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/tina-costume-party/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7412dd75-738f-49cb-9464-b70d35c03aba&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "My Fairytale Griffin",
        "description": "Take care of a magical griffin in this enchanting fantasy game! Feed, bathe, and play with this majestic creature as you help it thrive in a magical world.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleGriffinTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-griffin/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Archery World Tour",
        "description": "Grab a bow and put your archery skills to the ultimate test! Travel around the world, aim accurately, and hit targets in various challenging environments.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/ArcheryWorldTourTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/a/archery-world-tour/v610/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ebcb987a-3fd0-4b4a-bae6-f456fff9cac3&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=555",
        "tags": ["action", "skill", "sport"]
    },
    {
        "title": "My Fairytale Wolf",
        "description": "In this animal dress up game, you have to help take care of an adorable wolf! Bathe, feed, and style your magical wolf friend in this enchanting fairytale adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleWolfTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-wolf/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=3bdd6bf8-93ce-4bfc-9ac3-a78164540328&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Happy Elephant",
        "description": "In this cute animal makeover game you have to take care of an adorable elephant! Help this gentle giant stay clean, healthy, and happy through fun activities.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyElephantTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-elephant/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=6f93266a-c8b2-46a8-be19-995534547012&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "My Fairytale Dragon",
        "description": "Help the fairy take care of a beautiful dragon in this magical game! Feed, clean, and play with your fire-breathing friend in an enchanted fairytale world.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleDragonTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-dragon/v090/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=1dfe7054-c305-4c25-b7fc-373f3a0d0eab&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "The Little Giant",
        "description": "Help the Little Giant in this challenging platform game! Guide this tiny hero through obstacle-filled levels, solve puzzles, and overcome tricky terrain.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TheLittleGiantTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/the/the-little-giant/v100/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=e2a4e1cd-a9bd-4e53-9db6-5305530e963a&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["skill", "arcade", "casual"]
    },
    {
        "title": "Nina - Pop Star",
        "description": "Help Nina become a famous pop star! Choose a glamorous outfit, perfect makeup, and accessories to prepare her for her big concert performance.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/NinaPopStarTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/n/nina-pop-star/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Kitchen Mahjong Classic",
        "description": "Find pairs of identical Mahjong tiles in this kitchen-themed puzzle game! Match and remove all tiles before time runs out in this delicious twist on the classic game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/KitchenMahjongClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/k/kitchen-mahjong-classic/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=a89729bf-466e-46af-8d38-7c2ef8194905&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["puzzle", "mahjong", "casual"]
    },
    {
        "title": "Defly.io",
        "description": "Fly your little helicopter in this action-packed multiplayer game! Build walls, destroy enemies, and become the ultimate aerial warrior in this thrilling io game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/DeflyTeaser.jpg",
        "game_url": "https://play.famobi.com/defly",
        "tags": ["action", "skill", "multiplayer"]
    },
    {
        "title": "Color Pixel Art Classic",
        "description": "In this creative coloring game you can color hundreds of pixel art pictures! Express your artistic side and create beautiful digital masterpieces in this relaxing puzzle game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorPixelArtClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/c/color-pixel-art-classic/6615e1f9/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=1d87d326-b266-4148-b2c8-c720d5285632&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["educational", "girls", "puzzle"]
    },
    {
        "title": "Mahjong Connect Classic",
        "description": "Your goal in this classic Mahjong connect game is to match identical tiles that can be connected by a line. Test your puzzle-solving skills in this beautiful tile-matching challenge!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MahjongConnectClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/mahjong-connect-classic/v210/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=04d26c11-11db-49f4-9df4-6c423fa8fdac&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["puzzle", "mahjong", "casual"]
    },
    {
        "title": "My Fairytale Unicorn",
        "description": "Help the cute fairy take care of a beautiful unicorn in this magical game! Feed, groom, and play with this majestic creature in an enchanted fairytale world.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleUnicornTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-unicorn/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=553ee087-9f8e-4b14-82b6-789f52ddefed&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=558",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Race Right",
        "description": "In this minimalist racing game, you can only do one thing: turn right! Master precise timing, avoid obstacles, and set new speed records in this uniquely challenging arcade racer.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/RaceRightTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/r/race-right/v240/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=2c1acec8-38bc-4c30-86f2-843c0d1f6dca&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["arcade", "racing", "skill"]
    },
    {
        "title": "Mahjong Flowers",
        "description": "This classic Mahjong version with a beautiful flower theme offers a peaceful gaming experience. Match identical tiles and clear all boards in this relaxing puzzle game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MahjongFlowersTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/mahjong-flowers/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=309f13b1-bda6-480e-bbb0-826c826b2782&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["puzzle", "mahjong"]
    },
    {
        "title": "8 Ball Billiards Classic",
        "description": "Train your billiard skills and play against the computer or friends! Line up perfect shots, master angles, and become a pool champion in this realistic billiards simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/8BallBilliardsClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/8-ball-billiards-classic/f6589445/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=82038e98-d4e1-46dd-8de9-1460d1395eab&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["arcade", "skill", "sport"]
    },
    {
        "title": "Nina - Detective",
        "description": "Nina has a new job as a private detective! Help her solve mysterious cases by preparing her perfect detective outfit and gathering clues in this exciting adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/NinaDetectiveTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/n/nina-detective/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=4b5c9357-5e91-47d7-89bb-4dee97eb1022&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["makeup", "dressup", "girls"]
    },
    {
        "title": "Tina - Detective",
        "description": "Help private detective Tina with her new job and solve exciting cases! Choose the perfect detective outfit, gather evidence, and crack the mystery in this engaging game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TinaDetectiveTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/tina-detective/v040/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=8b6a8b29-9285-4f28-a506-e02629a35005&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["makeup", "dressup", "girls"]
    },
    {
        "title": "Cute Puppy Care",
        "description": "Take care of a cute puppy in this adorable girl game! Feed, bathe, and play with the lovable puppy as you help it grow happy and healthy in this heartwarming pet simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/CutePuppyCareTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/c/cute-puppy-care/v090/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=73a942be-1cd7-4247-ad19-21c72956cf22&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Dominoes Classic",
        "description": "Enjoy a round of Dominoes in this HTML5 version of the classic tile game! Match numbers strategically, plan your moves carefully, and be the first to play all your tiles.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/DominoesClassicTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/d/dominoes-classic/v180/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=0aadacb2-b1b0-4e28-8367-afd3225f985a&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=554",
        "tags": ["puzzle", "strategy", "casual"]
    },
    {
        "title": "Cute Kitty Care",
        "description": "Take care of a little kitten in this cute animal game! Feed, bathe, and play with your adorable kitten to help it grow happy and healthy in this charming pet simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/CuteKittyCareTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/c/cute-kitty-care/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=6a7697b5-9886-435b-b3c7-89f485f1e825&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Tina - Pop Star",
        "description": "Help newcomer Tina in this cool girl game and make her a famous pop star! Choose stunning outfits, perfect makeup, and prepare her for an amazing stage performance.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TinaPopStarTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/tina-pop-star/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ad58da82-c467-40f7-ba3b-1e70de1bfd91&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["makeup", "dressup", "girls"]
    },
    {
        "title": "Nina - Pop Star",
        "description": "Nina is a rising star in the pop music world! In this stylish game, help her choose the perfect outfit, makeup, and accessories for her big concert performance.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/NinaPopStarTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/n/nina-pop-star/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=efd422dc-d4b3-4da7-8f12-a1f23eee2416&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["makeup", "dressup", "girls"]
    },
    {
        "title": "Soccer Champ 2018",
        "description": "Experience the excitement of soccer championships! Take to the field, show off your goal-scoring skills, and lead your team to victory in this thrilling sports game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SoccerChamp2018Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/soccer-champ-2018/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["sport", "skill", "arcade"]
    },
    {
        "title": "3D Bowling",
        "description": "3D Bowling Classic is the ultimate bowling experience! Aim your shots, control the spin, and knock down all the pins in this realistic bowling simulator.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dBowlingTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-bowling/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=63ed6e3a-cf0c-42de-81ed-917cccb8e412&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["skill", "sport"]
    },
    {
        "title": "3D Free Kick",
        "description": "Prove your free kick skills in this fast-paced 3D soccer game! Curve the ball around defenders, aim for the corners, and score spectacular goals.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dFreeKickTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-free-kick/16498237/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=2ee096ab-4cd7-4f9a-baa9-f58a54413c47&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport", "arcade"]
    },
    {
        "title": "Soccertastic World Cup 18",
        "description": "This fast-paced penalty soccer game is all about getting the ball past the goalkeeper! Show off your penalty kick skills in this World Cup themed arcade soccer game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SoccertasticWorldCup18Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/soccertastic-world-cup-18/v020/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ed348197-2f04-4e23-9ded-58e8077e6d5d&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["sport", "arcade"]
    },
    {
        "title": "My Fairytale Tiger",
        "description": "Take care of a fantasy tiger in this magical makeover game! Bathe, feed, and dress up your majestic tiger friend in this enchanting fairytale adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleTigerTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-tiger/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=cf804ce2-3f20-4b94-b26b-04edfdbd659c&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Happy Lemur",
        "description": "Take care of a ring-tailed baby lemur in this cute animal game! Feed, bathe, and play with your adorable lemur friend to keep it happy and healthy.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyLemur_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-lemur/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=d6bfb6a3-f19f-4cb3-8987-90bab45c911c&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Tap My Water",
        "description": "Help the little plumber connect the pipes and try to solve all the puzzles! Rotate pieces, create a flowing path for water, and challenge your logical thinking skills.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/TapMyWaterTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/t/tap-my-water/v040/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=80e0013c-a40f-4191-93dc-30d3e494ee8f&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["puzzle", "skill", "casual"]
    },
    {
        "title": "Pie Realife Cooking",
        "description": "Become a pastry chef and bake a delicious fruit pie! Follow the recipe, prepare ingredients, and create mouthwatering desserts in this fun cooking simulation game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/PieRealifeCookingTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/p/pie-realife-cooking/v040/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7d38e80f-42b8-4513-867a-e1a82d135533&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "educational", "casual"]
    },
    {
        "title": "Pizza Realife Cooking",
        "description": "Become a chef and make a delicious pizza in this authentic cooking game! Prepare the dough, add toppings, and bake the perfect pizza in this fun culinary adventure.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/PizzaRealifeCookingTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/p/pizza-realife-cooking/v070/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7fa4a757-ffc4-43a3-9e87-4be4a557c202&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "educational", "casual"]
    },
    {
        "title": "World Cup Penalty 2018",
        "description": "Compete with the best football teams of 2018 in this exciting penalty shootout game! Choose your team, aim your shots carefully, and become the penalty champion.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/WorldCupPenalty_2018Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/w/world-cup-penalty-2018/v140/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=812dd47f-13c0-4a03-8678-00cfab89b971&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["sport", "skill", "arcade"]
    },
    {
        "title": "Happy Koala",
        "description": "Take care of an adorable koala in this cute animal game! Feed, bathe, and play with your lovable koala friend to keep it happy and healthy in this heartwarming pet simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyKoalaTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-koala/v060/?fg_domain=play.famobi.com&fg_aid=A1000-1",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Perfect Piano",
        "description": "Become a pianist and tap the tiles to the rhythm of the music! Test your reflexes and timing in this addictive rhythm game featuring beautiful piano melodies.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/PerfectPiano_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/p/perfect-piano/50931273/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=24f835e0-d21a-47e1-a721-9f68beed83f3&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["arcade", "skill", "educational"]
    },
    {
        "title": "Sailor Girls Avatar Maker",
        "description": "Create your favorite Sailor girl in this magical avatar creator! Customize hairstyles, outfits, accessories, and more to design your perfect sailor-themed character.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/SailorGirlsAvatarMaker_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/s/sailor-girls-avatar-maker/v120/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=14f5e085-423e-471d-a2d3-b9401aca1a6f&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Cheap Golf",
        "description": "Enjoy 60 levels of retromodern mini golf, hosted by a charming AI! Navigate through challenging courses, avoid obstacles, and get the ball in the hole with as few strokes as possible.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/CheapGolfTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/c/cheap-golf/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=c6b20975-bf99-4644-a173-dd72ab1067f9&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["sport", "arcade", "skill"]
    },
    {
        "title": "Jigsaw Puzzle Deluxe",
        "description": "Relax after a stressful day and enjoy this beautiful puzzle game! Solve challenging jigsaw puzzles featuring stunning imagery at various difficulty levels.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/Jigsaw_Puzzle_Deluxe_Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/j/jigsaw-puzzle-deluxe/v300/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=50bb00b6-7151-4279-90c9-5b202e6ba691&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["puzzle", "casual"]
    },
    {
        "title": "3D Anime Fantasy",
        "description": "Explore this magical fantasy world in 3D and create your own anime character! Customize every detail from hairstyles to outfits in this enchanting avatar creator.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3d_AnimeFantasyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-anime-fantasy/v050/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=5d47b695-64fc-41ee-a6b1-2ec1349156dd&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Bubble Woods",
        "description": "Enter the magical forest and earn as many points as possible in this enchanting bubble shooter! Match colorful bubbles to clear the board in this addictive puzzle game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BubbleWoodsTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/bubble-woods/v570/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=53159388-d515-45e5-b65a-56d21c595405&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=554",
        "tags": ["match3", "bubbleshooter", "puzzle"]
    },
    {
        "title": "3D Free Kick World Cup 18",
        "description": "Do you have what it takes to win the World Cup 18? Test your free kick skills, curve the ball around defenders, and score spectacular goals in this exciting soccer game!",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dFreeKickWorldCup18Teaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-free-kick-world-cup-18/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=65228119-474b-459d-9f44-4ac5b12bdd2a&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport", "arcade"]
    },
    {
        "title": "Cute Unicorn Care",
        "description": "Take care of a hurt little unicorn and cure it so it can be healthy and happy again! Nurse this magical creature back to health in this adorable pet care game.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/CuteUnicornCareTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/c/cute-unicorn-care/v040/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=bdecf59e-66b7-45ee-9e7a-1bbb520f84d4&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Kumba Kool",
        "description": "Join Kumba the ape in this exciting sidescroller and help him collect as many bananas as possible! Swing through the jungle, avoid obstacles, and show off your platforming skills.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/KumbaKoolTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/k/kumba-kool/v120/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=16afbe05-a248-4978-b982-57cd59f5d615&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["arcade", "skill", "action"]
    },
    {
        "title": "3D Air Hockey",
        "description": "Play this fast-paced 3D version of the popular arcade game! Show off your reflexes and strategy as you aim to score points against your opponent in this thrilling air hockey simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/3dAirHockeyTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/0/3d-air-hockey/v100/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=3ff68b2d-104e-4565-84af-02998729e128&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=557",
        "tags": ["skill", "sport", "arcade"]
    },
    {
        "title": "My Fairytale Deer",
        "description": "Take care of a magical deer in this fairytale makeover game! Feed, groom, and play with your enchanted deer friend in this adorable animal care simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleDeerTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-deer/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=ccef2898-2f2f-483c-8fee-639b287ef48e&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Blaze Kick",
        "description": "Train your free kick skills in this blazing soccer game! Perfect your aim, curve the ball around walls, and score spectacular goals in various challenging scenarios.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/BlazeKickTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/b/blaze-kick/v230/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=7c3d6873-9470-466b-8e8c-d68aa8c6d699&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["skill", "sport"]
    },
    {
        "title": "My Fairytale Water Horse",
        "description": "Take care of a little water horse in this fairytale game! Feed, bathe, and play with this magical aquatic creature in an enchanted underwater world.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/MyFairytaleWaterHorseTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/m/my-fairytale-water-horse/v040/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=cddc71e5-27ad-4808-be9a-c14808f805e0&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    },
    {
        "title": "Happy Panda",
        "description": "In this cute animal makeover game you have to help take care of an adorable panda! Feed, bathe, and play with your cuddly friend in this heartwarming pet simulation.",
        "cover_image": "https://img.cdn.famobi.com/portal/html5games/images/tmp/HappyPandaTeaser.jpg",
        "game_url": "https://games.cdn.famobi.com/html5games/h/happy-panda/v030/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=b86cbc9f-284b-4a05-9ae3-7ec25561f808&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=556",
        "tags": ["girls", "casual"]
    }
].map(processGameData);

/**
 * Create game card HTML structure
 * @param {Object} game - Game object
 * @returns {string} - Game card HTML string
 */
function createGameCard(game) {
    const userLang = getUserLanguage();
    return `
        <article class="game-card">
            <a href="javascript:void(0)" onclick="openGame('${game.title.toLowerCase().replace(/\s+/g, '-')}')" class="game-link">
                <img src="${game.cover_image}" alt="${game.title}" class="game-thumbnail" loading="lazy">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-tags">
                        ${game.tags.map(tag => `<div class="category-tag">${tag}</div>`).join('')}
                    </div>
                    <p class="game-description">${game.description}</p>
                    <button class="play-button">${translations.en.playNow}</button>
                </div>
            </a>
        </article>
    `;
}

/**
 * Open game modal
 * @param {string} gameId - Game ID
 */
function openGame(gameId) {
    const userLang = getUserLanguage();
    const game = gamesData.find(g => g.title.toLowerCase().replace(/\s+/g, '-') === gameId);
    if (!game) return;

    const gameModal = document.createElement('div');
    gameModal.className = 'game-modal';
    gameModal.innerHTML = `
        <div class="game-modal-content">
            <div class="game-modal-header">
                <h2>${game.title}</h2>
                <button class="close-button" onclick="closeGame()" aria-label="${translations.en.closeGame}">×</button>
            </div>
            <div class="game-modal-body">
                <iframe src="${game.game_url}" 
                        title="${game.title}"
                        allow="fullscreen; autoplay; gamepad"
                        allowfullscreen
                        scrolling="no"
                        frameborder="0"></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(gameModal);
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleEscapeKey);
    gameModal.addEventListener('click', handleModalClick);
}

/**
 * Handle ESC key close event
 * @param {KeyboardEvent} e - Keyboard event object
 */
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeGame();
    }
}

/**
 * Handle modal click close event
 * @param {MouseEvent} e - Mouse event object
 */
function handleModalClick(e) {
    if (e.target.classList.contains('game-modal')) {
        closeGame();
    }
}

/**
 * Close game modal
 */
function closeGame() {
    const gameModal = document.querySelector('.game-modal');
    if (gameModal) {
        // Remove event listeners
        document.removeEventListener('keydown', handleEscapeKey);
        gameModal.removeEventListener('click', handleModalClick);
        // Remove modal
        gameModal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add game modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    /* Game card styles optimization */
    .game-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        will-change: transform;
    }

    .game-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .game-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0.5rem 0;
    }

    .category-tag {
        background: var(--apple-blue);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
    }

    /* Game modal styles optimization */
    .game-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
        animation: modalFadeIn 0.3s ease;
    }

    .game-modal-content {
        background: #000;
        width: 95%;
        height: 95%;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: modalSlideIn 0.3s ease;
    }

    @keyframes modalFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes modalSlideIn {
        from { transform: translateY(20px); }
        to { transform: translateY(0); }
    }

    .game-modal-header {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    .game-modal-header h2 {
        color: white;
        margin: 0;
        font-size: 1.5rem;
    }

    .close-button {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 1.5rem;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }

    .close-button:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .game-modal-body {
        flex: 1;
        display: flex;
        background: #000;
    }

    .game-modal-body iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    /* 搜索相关样式 */
    .search-container {
        margin: 1.5rem auto;
        max-width: 600px;
        position: relative;
    }
    
    .search-input {
        width: 100%;
        padding: 12px 20px 12px 40px; /* 为搜索图标留出空间 */
        border-radius: 30px;
        border: 2px solid var(--apple-blue);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .search-input:focus {
        box-shadow: 0 0 10px rgba(0, 122, 255, 0.5);
    }
    
    .search-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--apple-blue);
        font-size: 1.2rem;
    }
    
    .search-button {
        position: absolute;
        right: 5px;
        top: 5px;
        background: var(--apple-blue);
        border: none;
        border-radius: 30px;
        padding: 8px 20px;
        color: white;
        cursor: pointer;
        transition: background 0.3s;
    }
    
    .search-button:hover {
        background: #005bb5;
    }
    
    /* 搜索结果提示样式 */
    .search-info {
        text-align: center;
        margin: 1rem auto;
        padding: 12px;
        background-color: rgba(0, 122, 255, 0.1);
        border-radius: 10px;
        font-weight: bold;
        display: none;
        max-width: 80%;
        color: var(--apple-blue);
        border: 1px solid rgba(0, 122, 255, 0.3);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* 没有结果提示样式 */
    .no-games-message {
        text-align: center;
        padding: 3rem;
        color: #666;
        font-size: 1.2rem;
        display: none;
        background-color: #f8f8f8;
        border-radius: 10px;
        margin: 2rem auto;
        max-width: 80%;
        border: 1px dashed #ccc;
        animation: fadeIn 0.3s ease;
    }
    
    /* 添加游戏卡片中标签的点击样式 */
    .category-tag {
        background: var(--apple-blue);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .category-tag:hover {
        background: #005bb5;
        transform: scale(1.05);
    }

    /* Responsive design optimization */
    @media (max-width: 768px) {
        .game-modal-content {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        .close-button {
            width: 32px;
            height: 32px;
            font-size: 1.2rem;
        }
        
        .search-container {
            width: 90%;
        }
    }
`;
document.head.appendChild(styleSheet);

/**
 * 筛选游戏函数
 * @param {string} searchTerm - 搜索关键词
 */
function filterGames(searchTerm) {
    const gameGrid = document.querySelector('.game-grid');
    const searchInfo = document.querySelector('.search-info');
    const noGamesMessage = document.querySelector('.no-games-message');
    
    if (!gameGrid) return;
    
    // 清空当前游戏列表
    gameGrid.innerHTML = '';
    
    if (!searchTerm.trim()) {
        // 如果搜索词为空，显示所有游戏
        gamesData.forEach(game => {
            gameGrid.innerHTML += createGameCard(game);
        });
        // 隐藏信息提示
        if (searchInfo) searchInfo.style.display = 'none';
        if (noGamesMessage) noGamesMessage.style.display = 'none';
        return;
    }
    
    // 转为小写进行不区分大小写的搜索
    const term = searchTerm.trim().toLowerCase();
    
    // 筛选符合条件的游戏（分类标签或游戏名称包含搜索词）
    const filteredGames = gamesData.filter(game => {
        const titleMatch = game.title.toLowerCase().includes(term);
        const tagMatch = game.tags.some(tag => tag.toLowerCase().includes(term));
        return titleMatch || tagMatch;
    });
    
    // 显示筛选结果信息
    if (searchInfo) {
        searchInfo.textContent = `找到 ${filteredGames.length} 个与 "${searchTerm}" 相关的游戏`;
        searchInfo.style.display = 'block';
    }
    
    // 如果没有找到游戏，显示提示信息
    if (filteredGames.length === 0) {
        if (noGamesMessage) {
            noGamesMessage.textContent = `没有找到与 "${searchTerm}" 相关的游戏`;
            noGamesMessage.style.display = 'block';
        } else {
            // 如果没有现成的提示元素，就创建一个
            const message = document.createElement('div');
            message.className = 'no-games-message';
            message.textContent = `没有找到与 "${searchTerm}" 相关的游戏`;
            gameGrid.appendChild(message);
        }
        return;
    }
    
    // 显示筛选出的游戏
    filteredGames.forEach(game => {
        gameGrid.innerHTML += createGameCard(game);
    });
}

/**
 * 监听搜索表单提交事件
 */
function setupSearchListeners() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const searchTerm = searchInput.value;
            filterGames(searchTerm);
        });
    }
    
    // 添加搜索输入实时响应
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value;
            // 只有输入至少1个字符才开始搜索
            if (searchTerm.length >= 1 || searchTerm.length === 0) {
                filterGames(searchTerm);
                
                // 如果清空搜索框，重置分类激活状态
                if (searchTerm.length === 0) {
                    const categoryItems = document.querySelectorAll('.category-item');
                    categoryItems.forEach(item => item.classList.remove('active'));
                }
            }
        });
    }
}

/**
 * Initialize game grid
 */
function initializeGames() {
    const gameGrid = document.querySelector('.game-grid');
    if (gameGrid) {
        gameGrid.innerHTML = '';
        gamesData.forEach(game => {
            gameGrid.innerHTML += createGameCard(game);
        });
    }
    updateCategoryCounts();
    
    // 设置搜索监听
    setupSearchListeners();
    
    // 创建搜索结果信息元素
    if (!document.querySelector('.search-info')) {
        const gameContainer = document.querySelector('.game-container') || document.querySelector('.main-content');
        if (gameContainer) {
            const searchInfo = document.createElement('div');
            searchInfo.className = 'search-info';
            gameContainer.insertBefore(searchInfo, gameGrid);
        }
    }
    
    // 创建无结果提示元素
    if (!document.querySelector('.no-games-message')) {
        const noGamesMessage = document.createElement('div');
        noGamesMessage.className = 'no-games-message';
        gameGrid.appendChild(noGamesMessage);
    }
    
    // 初始化标签点击事件
    initializeTagClickEvents();
}

/**
 * 初始化标签点击事件
 */
function initializeTagClickEvents() {
    // 为侧边栏分类标签添加点击事件
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.textContent.split('(')[0].trim();
            // 将分类名称填入搜索框并触发搜索
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.value = categoryName;
                filterGames(categoryName);
                
                // 激活当前分类，取消其他分类的激活状态
                categoryItems.forEach(cat => cat.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 为游戏卡片上的标签添加点击事件
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('category-tag')) {
            const tagName = e.target.textContent;
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.value = tagName;
                filterGames(tagName);
                
                // 更新侧边栏分类激活状态
                const categoryItems = document.querySelectorAll('.category-item');
                categoryItems.forEach(item => {
                    const categoryName = item.textContent.split('(')[0].trim();
                    if (categoryName.toLowerCase() === tagName.toLowerCase()) {
                        categoryItems.forEach(cat => cat.classList.remove('active'));
                        item.classList.add('active');
                    }
                });
            }
        }
    });
}

// Initialize games when the page loads
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', initializeGames);
} 