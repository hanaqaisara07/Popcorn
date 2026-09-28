// Movie Database & Data Structures

const Data = {
    action: {
        title: "Action Movies",
        vibes: [
            { id: 1, label: "High Octane / Superhero", icon: "fa-bolt" },
            { id: 2, label: "Action + Thriller", icon: "fa-gun" }
        ],
        recommendations: {
            1: {
                title: "Extraction",
                badge: "High Octane Action",
                year: "2020",
                duration: "1h 56m",
                score: "94%",
                description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
                banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "The Gray Man",
                badge: "Action Thriller",
                year: "2022",
                duration: "2h 02m",
                score: "91%",
                description: "When a shadowy CIA agent uncovers agency secrets, he triggers a global hunt by psychopathic assassins released by his ex-colleague.",
                banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
            }
        }
    },
    comedy: {
        title: "Comedy Movies",
        vibes: [
            { id: 1, label: "Feel-Good / Lighthearted", icon: "fa-face-smile" },
            { id: 2, label: "Dark Satire", icon: "fa-masks-theater" }
        ],
        recommendations: {
            1: {
                title: "Murder Mystery",
                badge: "Lighthearted Comedy",
                year: "2019",
                duration: "1h 37m",
                score: "89%",
                description: "On a long-awaited trip to Europe, a NYC cop and his hairdresser wife wind up trying to solve a baffling murder aboard a billionaire's yacht.",
                banner: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "Don't Look Up",
                badge: "Dark Satire",
                year: "2021",
                duration: "2h 18m",
                score: "92%",
                description: "Two astronomers go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth, but nobody seems to care.",
                banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            }
        }
    },
    scifi: {
        title: "Sci-Fi Movies",
        vibes: [
            { id: 1, label: "Space Exploration", icon: "fa-rocket" },
            { id: 2, label: "Dystopian / Mind Bending", icon: "fa-brain" }
        ],
        recommendations: {
            1: {
                title: "Interstellar",
                badge: "Space Exploration",
                year: "2014",
                duration: "2h 49m",
                score: "98%",
                description: "When Earth becomes uninhabitable, a team of ex-NASA pilots undertakes a perilous wormhole voyage to find a new home for humanity.",
                banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "Inception",
                badge: "Mind Bending Sci-Fi",
                year: "2010",
                duration: "2h 28m",
                score: "96%",
                description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
            }
        }
    }, 
    
    romance: {
        title: "Romance Movies",
        vibes: [
            { id: 1, label: "Lighthearted Rom-Com", icon: "fa-heart-circle-bolt" },
            { id: 2, label: "Heartwarming / Emotional Drama", icon: "fa-wine-glass" },
            { id: 3, label: "Fantasy / Time-Travel Romance", icon: "fa-hourglass-half" }
        ],
        recommendations: {
            1: {
                title: "Set It Up",
                badge: "Rom-Com",
                year: "2018",
                duration: "1h 45m",
                score: "92%",
                description: "Two overworked, underpaid assistants plan to trick their demanding bosses into falling in love to make their own work lives easier.",
                banner: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "The Notebook",
                badge: "Emotional Romance",
                year: "2004",
                duration: "2h 03m",
                score: "95%",
                description: "An elderly man reads a story from his notebook to a fellow nursing home resident about two young lovers separated by social differences.",
                banner: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80"
            },
            3: {
                title: "About Time",
                badge: "Fantasy Romance",
                year: "2013",
                duration: "2h 03m",
                score: "94%",
                description: "At the age of 21, Tim discovers he can travel in time and change what happens in his own life. His decision to make his world better by getting a girlfriend turns out not to be so easy.",
                banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
            }
        }
    },
    horror: {
        title: "Horror Movies",
        vibes: [
            { id: 1, label: "Supernatural / Paranormal", icon: "fa-ghost" },
            { id: 2, label: "Psychological / Slasher", icon: "fa-skull" },
            { id: 3, label: "Creature / Sci-Fi Horror", icon: "fa-biohazard" }
        ],
        recommendations: {
            1: {
                title: "The Conjuring",
                badge: "Supernatural Horror",
                year: "2013",
                duration: "1h 52m",
                score: "93%",
                description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
                banner: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "Halloween",
                badge: "Slasher / Thrills",
                year: "2018",
                duration: "1h 46m",
                score: "89%",
                description: "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree.",
                banner: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
            },
            3: {
                title: "A Quiet Place",
                badge: "Sci-Fi Horror",
                year: "2018",
                duration: "1h 30m",
                score: "96%",
                description: "A family struggles for survival in a post-apocalyptic world inhabited by blind alien monsters with ultra-sensitive hearing.",
                banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            }
        }
    },
    thriller: {
        title: "Thriller Movies",
        vibes: [
            { id: 1, label: "Crime / Mystery", icon: "fa-user-secret" },
            { id: 2, label: "Psychological Thriller", icon: "fa-eye" },
            { id: 3, label: "High-Stakes / Survival", icon: "fa-compass" }
        ],
        recommendations: {
            1: {
                title: "Knives Out",
                badge: "Crime Mystery",
                year: "2019",
                duration: "2h 10m",
                score: "97%",
                description: "A detective investigates the death of a patriarch of an eccentric, combative family in a witty, modern whodunit murder mystery.",
                banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            },
            2: {
                title: "Shutter Island",
                badge: "Psychological Thriller",
                year: "2010",
                duration: "2h 18m",
                score: "95%",
                description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on a remote island.",
                banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            },
            3: {
                title: "Fall",
                badge: "Survival Thriller",
                year: "2022",
                duration: "1h 47m",
                score: "88%",
                description: "Best friends Becky and Hunter find themselves trapped at the top of a 2,000-foot radio tower with no way down and extreme conditions.",
                banner: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
            }
        }
    }
};
const movieDatabase = { ...person2Data, ...person3Data };

// Merged Database Object
const movieDatabase = { ...person2Data, ...person3Data };
