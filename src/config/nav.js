export const NAV = [
  {
    "id": "home",
    "label": "Game Designer's Note",
    "icon": "🎮"
  },
  {
    "id": "gameplay-design",
    "label": "Gameplay Design",
    "path": "gameplay-design",
    "children": [
      {
        "id": "emergent-gameplay",
        "label": "Emergent Gameplay",
        "path": "gameplay-design/emergent-gameplay",
        "children": [
          {
            "id": "complex-systems",
            "label": "Complex Systems",
            "path": "gameplay-design/emergent-gameplay/complex-systems",
            "icon": "stars"
          }
        ],
        "icon": "paintbrush-pencil"
      },
      {
        "id": "game-vision",
        "label": "Game Vision",
        "path": "gameplay-design/game-vision",
        "children": [
          {
            "id": "checklist",
            "label": "Checklist",
            "path": "gameplay-design/game-vision/checklist",
            "icon": "clipboard-check"
          },
          {
            "id": "game-loop",
            "label": "Game Loop",
            "path": "gameplay-design/game-vision/game-loop",
            "icon": "arrow-progress"
          }
        ],
        "icon": "bullseye"
      },
      {
        "id": "specific-systems",
        "label": "Specific Systems",
        "path": "gameplay-design/specific-systems",
        "children": [
          {
            "id": "core-systems",
            "label": "Core Systems",
            "path": "gameplay-design/specific-systems/core-systems",
            "children": [
              {
                "id": "action-games",
                "label": "Action Games",
                "path": "gameplay-design/specific-systems/core-systems/action-games",
                "children": [
                  {
                    "id": "enemy",
                    "label": "Enemy",
                    "path": "gameplay-design/specific-systems/core-systems/action-games/enemy",
                    "children": [
                      {
                        "id": "boss",
                        "label": "Boss",
                        "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss",
                        "children": [
                          {
                            "id": "boss-design",
                            "label": "Boss Design",
                            "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design",
                            "children": [
                              {
                                "id": "boss-attacks",
                                "label": "Boss Attacks",
                                "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-attacks"
                              },
                              {
                                "id": "boss-reaction",
                                "label": "Boss Reaction",
                                "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-reaction"
                              },
                              {
                                "id": "boss-types",
                                "label": "Boss Types",
                                "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-types"
                              },
                              {
                                "id": "stagger-system",
                                "label": "Stagger System",
                                "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/stagger-system"
                              }
                            ]
                          },
                          {
                            "id": "multiple-bosses",
                            "label": "Multiple Bosses",
                            "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/boss/multiple-bosses"
                          }
                        ]
                      },
                      {
                        "id": "mob",
                        "label": "Mob",
                        "path": "gameplay-design/specific-systems/core-systems/action-games/enemy/mob"
                      }
                    ]
                  },
                  {
                    "id": "player",
                    "label": "Player",
                    "path": "gameplay-design/specific-systems/core-systems/action-games/player",
                    "children": [
                      {
                        "id": "actions",
                        "label": "Actions",
                        "path": "gameplay-design/specific-systems/core-systems/action-games/player/actions"
                      },
                      {
                        "id": "platformer",
                        "label": "Platformer",
                        "path": "gameplay-design/specific-systems/core-systems/action-games/player/platformer"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "card-games",
                "label": "Card Games",
                "path": "gameplay-design/specific-systems/core-systems/card-games",
                "children": [
                  {
                    "id": "balancing",
                    "label": "Balancing",
                    "path": "gameplay-design/specific-systems/core-systems/card-games/balancing"
                  },
                  {
                    "id": "card-design",
                    "label": "Card Design",
                    "path": "gameplay-design/specific-systems/core-systems/card-games/card-design"
                  },
                  {
                    "id": "end-turn-resolution",
                    "label": "End-turn Resolution",
                    "path": "gameplay-design/specific-systems/core-systems/card-games/end-turn-resolution"
                  }
                ]
              },
              {
                "id": "detective-games",
                "label": "Detective Games",
                "path": "gameplay-design/specific-systems/core-systems/detective-games"
              },
              {
                "id": "puzzle-games",
                "label": "Puzzle Games",
                "path": "gameplay-design/specific-systems/core-systems/puzzle-games"
              },
              {
                "id": "tactic-system",
                "label": "Tactic System",
                "path": "gameplay-design/specific-systems/core-systems/tactic-system"
              }
            ],
            "icon": "cubes"
          },
          {
            "id": "more-systems",
            "label": "More Systems",
            "path": "gameplay-design/specific-systems/more-systems",
            "children": [
              {
                "id": "dice-system",
                "label": "Dice System",
                "path": "gameplay-design/specific-systems/more-systems/dice-system"
              },
              {
                "id": "engineering-system",
                "label": "Engineering System",
                "path": "gameplay-design/specific-systems/more-systems/engineering-system"
              },
              {
                "id": "minigame-system",
                "label": "Minigame System",
                "path": "gameplay-design/specific-systems/more-systems/minigame-system"
              },
              {
                "id": "multiplayer",
                "label": "Multiplayer",
                "path": "gameplay-design/specific-systems/more-systems/multiplayer"
              },
              {
                "id": "negotiation-system",
                "label": "Negotiation System",
                "path": "gameplay-design/specific-systems/more-systems/negotiation-system"
              },
              {
                "id": "partner-system",
                "label": "Partner System",
                "path": "gameplay-design/specific-systems/more-systems/partner-system",
                "children": [
                  {
                    "id": "parallel-presence",
                    "label": "Parallel Presence",
                    "path": "gameplay-design/specific-systems/more-systems/partner-system/parallel-presence"
                  }
                ]
              }
            ],
            "icon": "sliders"
          },
          {
            "id": "supporting-systems",
            "label": "Supporting Systems",
            "path": "gameplay-design/specific-systems/supporting-systems",
            "children": [
              {
                "id": "achievement-system",
                "label": "Achievement System",
                "path": "gameplay-design/specific-systems/supporting-systems/achievement-system"
              },
              {
                "id": "animation-system",
                "label": "Animation System",
                "path": "gameplay-design/specific-systems/supporting-systems/animation-system"
              },
              {
                "id": "death-system",
                "label": "Death System",
                "path": "gameplay-design/specific-systems/supporting-systems/death-system"
              },
              {
                "id": "sys-home",
                "label": "Home",
                "path": "gameplay-design/specific-systems/supporting-systems/home"
              },
              {
                "id": "map-system",
                "label": "Map System",
                "path": "gameplay-design/specific-systems/supporting-systems/map-system"
              },
              {
                "id": "moving-system",
                "label": "Moving System",
                "path": "gameplay-design/specific-systems/supporting-systems/moving-system"
              },
              {
                "id": "progression-system",
                "label": "Progression System",
                "path": "gameplay-design/specific-systems/supporting-systems/progression-system"
              },
              {
                "id": "randomness",
                "label": "Randomness",
                "path": "gameplay-design/specific-systems/supporting-systems/randomness"
              }
            ],
            "icon": "screwdriver-wrench"
          }
        ],
        "icon": "diagram-project"
      },
      {
        "id": "system-review",
        "label": "System Review",
        "path": "gameplay-design/system-review",
        "children": [
          {
            "id": "intuitive-design",
            "label": "Intuitive Design",
            "path": "gameplay-design/system-review/intuitive-design",
            "icon": "lightbulb"
          },
          {
            "id": "self-check",
            "label": "Self-check",
            "path": "gameplay-design/system-review/self-check",
            "icon": "clipboard-check"
          }
        ],
        "icon": "magnifying-glass"
      }
    ]
  },
  {
    "id": "game-experience",
    "label": "Game Experience",
    "path": "game-experience",
    "children": [
      {
        "id": "8-funs",
        "label": "8 Funs",
        "path": "game-experience/8-funs",
        "children": [
          {
            "id": "challenge",
            "label": "Challenge",
            "path": "game-experience/8-funs/challenge",
            "children": [
              {
                "id": "depth-of-gameplay",
                "label": "Depth of Gameplay",
                "path": "game-experience/8-funs/challenge/depth-of-gameplay"
              },
              {
                "id": "flavors-of-difficulty",
                "label": "Flavors of Difficulty",
                "path": "game-experience/8-funs/challenge/flavors-of-difficulty",
                "children": [
                  {
                    "id": "physical",
                    "label": "Physical",
                    "path": "game-experience/8-funs/challenge/flavors-of-difficulty/physical"
                  },
                  {
                    "id": "reasoning",
                    "label": "Reasoning",
                    "path": "game-experience/8-funs/challenge/flavors-of-difficulty/reasoning"
                  }
                ]
              },
              {
                "id": "how-difficult",
                "label": "How Difficult",
                "path": "game-experience/8-funs/challenge/how-difficult",
                "children": [
                  {
                    "id": "control-difficulty",
                    "label": "Control Difficulty",
                    "path": "game-experience/8-funs/challenge/how-difficult/control-difficulty"
                  },
                  {
                    "id": "how-our-brain-works",
                    "label": "How our Brain Works",
                    "path": "game-experience/8-funs/challenge/how-difficult/how-our-brain-works"
                  }
                ]
              }
            ],
            "icon": "hand-fist"
          },
          {
            "id": "discovery",
            "label": "Discovery",
            "path": "game-experience/8-funs/discovery",
            "children": [
              {
                "id": "curiosity",
                "label": "Curiosity",
                "path": "game-experience/8-funs/discovery/curiosity",
                "children": [
                  {
                    "id": "building-curiosity",
                    "label": "Building Curiosity",
                    "path": "game-experience/8-funs/discovery/curiosity/building-curiosity"
                  },
                  {
                    "id": "extra-content",
                    "label": "Extra Content",
                    "path": "game-experience/8-funs/discovery/curiosity/extra-content"
                  },
                  {
                    "id": "objects-of-curiosity",
                    "label": "Objects of Curiosity",
                    "path": "game-experience/8-funs/discovery/curiosity/objects-of-curiosity"
                  },
                  {
                    "id": "rewarding-exploration",
                    "label": "Rewarding Exploration",
                    "path": "game-experience/8-funs/discovery/curiosity/rewarding-exploration"
                  }
                ]
              },
              {
                "id": "the-eureka-moment",
                "label": "The Eureka Moment",
                "path": "game-experience/8-funs/discovery/the-eureka-moment"
              }
            ],
            "icon": "cat"
          },
          {
            "id": "expression",
            "label": "Expression",
            "path": "game-experience/8-funs/expression",
            "children": [
              {
                "id": "player-agency",
                "label": "Player Agency",
                "path": "game-experience/8-funs/expression/player-agency"
              }
            ],
            "icon": "paintbrush-pencil"
          },
          {
            "id": "sensation",
            "label": "Sensation",
            "path": "game-experience/8-funs/sensation",
            "icon": "gem"
          },
          {
            "id": "submission",
            "label": "Submission",
            "path": "game-experience/8-funs/submission",
            "icon": "sack-dollar"
          }
        ]
      },
      {
        "id": "game-feel",
        "label": "Game Feel",
        "path": "game-experience/game-feel",
        "children": [
          {
            "id": "fluidity",
            "label": "Fluidity",
            "path": "game-experience/game-feel/fluidity",
            "children": [
              {
                "id": "input-and-controls",
                "label": "Input And Controls",
                "path": "game-experience/game-feel/fluidity/input-and-controls"
              },
              {
                "id": "time-scale",
                "label": "Time-scale",
                "path": "game-experience/game-feel/fluidity/time-scale"
              }
            ],
            "icon": "water"
          },
          {
            "id": "juice-elements",
            "label": "Juice Elements",
            "path": "game-experience/game-feel/juice-elements",
            "icon": "bolt"
          },
          {
            "id": "readability",
            "label": "Readability",
            "path": "game-experience/game-feel/readability",
            "icon": "glasses"
          }
        ],
        "icon": "bolt"
      },
      {
        "id": "other-experience",
        "label": "Other Experience",
        "path": "game-experience/other-experience",
        "children": [
          {
            "id": "horror-and-discomfort",
            "label": "Horror And Discomfort",
            "path": "game-experience/other-experience/horror-and-discomfort",
            "children": [
              {
                "id": "creating-unease",
                "label": "Creating Unease",
                "path": "game-experience/other-experience/horror-and-discomfort/creating-unease",
                "children": [
                  {
                    "id": "uncanny-valley",
                    "label": "Uncanny Valley",
                    "path": "game-experience/other-experience/horror-and-discomfort/creating-unease/uncanny-valley"
                  },
                  {
                    "id": "unknown",
                    "label": "Unknown",
                    "path": "game-experience/other-experience/horror-and-discomfort/creating-unease/unknown"
                  }
                ]
              },
              {
                "id": "types-of-fear",
                "label": "Types of Fear",
                "path": "game-experience/other-experience/horror-and-discomfort/types-of-fear"
              }
            ],
            "icon": "ghost"
          }
        ],
        "icon": "star"
      },
      {
        "id": "the-magic-circle",
        "label": "The Magic Circle",
        "path": "game-experience/the-magic-circle",
        "children": [
          {
            "id": "expectation-management",
            "label": "Expectation Management",
            "path": "game-experience/the-magic-circle/expectation-management",
            "icon": "sliders"
          },
          {
            "id": "feedback-loops",
            "label": "Feedback Loops",
            "path": "game-experience/the-magic-circle/feedback-loops",
            "icon": "arrow-progress"
          },
          {
            "id": "flow-state",
            "label": "Flow State",
            "path": "game-experience/the-magic-circle/flow-state",
            "children": [
              {
                "id": "match-difficulty-with-player-growth",
                "label": "Match Difficulty with Player Growth",
                "path": "game-experience/the-magic-circle/flow-state/match-difficulty-with-player-growth",
                "children": [
                  {
                    "id": "player-progression",
                    "label": "Player Progression",
                    "path": "game-experience/the-magic-circle/flow-state/match-difficulty-with-player-growth/player-progression"
                  }
                ]
              }
            ],
            "icon": "water"
          }
        ],
        "icon": "bullseye"
      }
    ]
  },
  {
    "id": "game-development",
    "label": "Game Development",
    "path": "game-development",
    "children": [
      {
        "id": "bug-handling",
        "label": "Bug Handling",
        "path": "game-development/bug-handling",
        "icon": "spider-black-widow"
      },
      {
        "id": "structure",
        "label": "Structure",
        "path": "game-development/structure",
        "icon": "folder-tree"
      }
    ]
  },
  {
    "id": "level-design",
    "label": "Level Design",
    "path": "level-design",
    "children": [
      {
        "id": "design-process",
        "label": "Design Process",
        "path": "level-design/design-process",
        "children": [
          {
            "id": "blockout",
            "label": "Blockout",
            "path": "level-design/design-process/blockout",
            "icon": "cube"
          },
          {
            "id": "plan",
            "label": "Plan",
            "path": "level-design/design-process/plan",
            "icon": "clipboard-list"
          },
          {
            "id": "review",
            "label": "Review",
            "path": "level-design/design-process/review",
            "icon": "clipboard-check"
          },
          {
            "id": "sketch",
            "label": "Sketch",
            "path": "level-design/design-process/sketch",
            "icon": "pencil"
          }
        ],
        "icon": "arrow-progress"
      },
      {
        "id": "guidance",
        "label": "Guidance",
        "path": "level-design/guidance",
        "children": [
          {
            "id": "macro-guidance",
            "label": "Macro Guidance",
            "path": "level-design/guidance/macro-guidance",
            "icon": "compass"
          },
          {
            "id": "micro-guidance",
            "label": "Micro Guidance",
            "path": "level-design/guidance/micro-guidance",
            "icon": "eye"
          },
          {
            "id": "tutorial-levels",
            "label": "Tutorial Levels",
            "path": "level-design/guidance/tutorial-levels",
            "icon": "graduation-cap"
          }
        ],
        "icon": "signs-post"
      },
      {
        "id": "layout",
        "label": "Layout",
        "path": "level-design/layout",
        "children": [
          {
            "id": "cognitive-map",
            "label": "Cognitive Map",
            "path": "level-design/layout/cognitive-map",
            "children": [
              {
                "id": "coginitive-map-elements",
                "label": "Coginitive Map Elements",
                "path": "level-design/layout/cognitive-map/coginitive-map-elements"
              },
              {
                "id": "waytracking-disruptions",
                "label": "Waytracking Disruptions",
                "path": "level-design/layout/cognitive-map/waytracking-disruptions"
              }
            ],
            "icon": "map"
          },
          {
            "id": "level-components",
            "label": "Level Components",
            "path": "level-design/layout/level-components",
            "children": [
              {
                "id": "layout-patterns",
                "label": "Layout Patterns",
                "path": "level-design/layout/level-components/layout-patterns",
                "children": [
                  {
                    "id": "functional-patterns",
                    "label": "Functional Patterns",
                    "path": "level-design/layout/level-components/layout-patterns/functional-patterns"
                  }
                ]
              },
              {
                "id": "level-elements",
                "label": "Level Elements",
                "path": "level-design/layout/level-components/level-elements"
              }
            ],
            "icon": "cubes"
          },
          {
            "id": "map-hierarchy",
            "label": "Map Hierarchy",
            "path": "level-design/layout/map-hierarchy",
            "icon": "sitemap"
          },
          {
            "id": "verticality",
            "label": "Verticality",
            "path": "level-design/layout/verticality",
            "children": [
              {
                "id": "stairs",
                "label": "Stairs",
                "path": "level-design/layout/verticality/stairs"
              }
            ],
            "icon": "arrows-up-down"
          }
        ],
        "icon": "table-cells-large"
      },
      {
        "id": "pacing",
        "label": "Pacing",
        "path": "level-design/pacing",
        "children": [
          {
            "id": "circulation",
            "label": "Circulation",
            "path": "level-design/pacing/circulation",
            "children": [
              {
                "id": "circulation-elements",
                "label": "Circulation Elements",
                "path": "level-design/pacing/circulation/circulation-elements"
              },
              {
                "id": "circulation-patterns",
                "label": "Circulation Patterns",
                "path": "level-design/pacing/circulation/circulation-patterns"
              },
              {
                "id": "pace-control",
                "label": "Pace Control",
                "path": "level-design/pacing/circulation/pace-control",
                "children": [
                  {
                    "id": "psychology",
                    "label": "Psychology",
                    "path": "level-design/pacing/circulation/pace-control/psychology"
                  }
                ]
              }
            ],
            "icon": "route"
          },
          {
            "id": "game-beat",
            "label": "Game Beat",
            "path": "level-design/pacing/game-beat",
            "children": [
              {
                "id": "common-beat-elements",
                "label": "Common Beat Elements",
                "path": "level-design/pacing/game-beat/common-beat-elements"
              },
              {
                "id": "design-beat-by-need",
                "label": "Design Beat by Need",
                "path": "level-design/pacing/game-beat/design-beat-by-need"
              },
              {
                "id": "game-beat-examples",
                "label": "Game Beat Examples",
                "path": "level-design/pacing/game-beat/game-beat-examples"
              },
              {
                "id": "open-world",
                "label": "Open world",
                "path": "level-design/pacing/game-beat/open-world"
              }
            ],
            "icon": "chart-line"
          }
        ],
        "icon": "gauge-high"
      },
      {
        "id": "puzzle-design",
        "label": "Puzzle Design",
        "path": "level-design/puzzle-design",
        "icon": "puzzle-piece"
      },
      {
        "id": "reward-and-exploration",
        "label": "Reward And Exploration",
        "path": "level-design/reward-and-exploration",
        "children": [
          {
            "id": "collectibles",
            "label": "Collectibles",
            "path": "level-design/reward-and-exploration/collectibles",
            "icon": "coins"
          },
          {
            "id": "lock-and-key",
            "label": "Lock And Key",
            "path": "level-design/reward-and-exploration/lock-and-key",
            "icon": "key"
          },
          {
            "id": "rewards",
            "label": "Rewards",
            "path": "level-design/reward-and-exploration/rewards",
            "icon": "gift"
          }
        ],
        "icon": "gem"
      }
    ]
  },
  {
    "id": "narrative-design",
    "label": "Narrative Design",
    "path": "narrative-design",
    "children": [
      {
        "id": "moral",
        "label": "Moral",
        "path": "narrative-design/moral",
        "children": [
          {
            "id": "descrimination",
            "label": "Descrimination",
            "path": "narrative-design/moral/descrimination",
            "icon": "user-slash"
          },
          {
            "id": "violence",
            "label": "Violence",
            "path": "narrative-design/moral/violence",
            "icon": "hand-fist"
          }
        ],
        "icon": "scale-balanced"
      },
      {
        "id": "narrative-structure",
        "label": "Narrative Structure",
        "path": "narrative-design/narrative-structure",
        "children": [
          {
            "id": "narrative-elements",
            "label": "Narrative Elements",
            "path": "narrative-design/narrative-structure/narrative-elements",
            "icon": "puzzle-piece"
          },
          {
            "id": "narrative-patterns",
            "label": "Narrative Patterns",
            "path": "narrative-design/narrative-structure/narrative-patterns",
            "children": [
              {
                "id": "emergent-narrative",
                "label": "Emergent Narrative",
                "path": "narrative-design/narrative-structure/narrative-patterns/emergent-narrative"
              },
              {
                "id": "fragmented-narrative",
                "label": "Fragmented Narrative",
                "path": "narrative-design/narrative-structure/narrative-patterns/fragmented-narrative"
              },
              {
                "id": "linear-narrative",
                "label": "Linear Narrative",
                "path": "narrative-design/narrative-structure/narrative-patterns/linear-narrative"
              },
              {
                "id": "multi-thread-narrative",
                "label": "Multi-thread Narrative",
                "path": "narrative-design/narrative-structure/narrative-patterns/multi-thread-narrative",
                "children": [
                  {
                    "id": "branching-structures",
                    "label": "Branching Structures",
                    "path": "narrative-design/narrative-structure/narrative-patterns/multi-thread-narrative/branching-structures"
                  }
                ]
              }
            ],
            "icon": "layer-group"
          },
          {
            "id": "narrative-timing",
            "label": "Narrative Timing",
            "path": "narrative-design/narrative-structure/narrative-timing",
            "icon": "clock"
          },
          {
            "id": "suspense",
            "label": "Suspense",
            "path": "narrative-design/narrative-structure/suspense",
            "icon": "hourglass-half"
          }
        ],
        "icon": "diagram-project"
      },
      {
        "id": "player-and-character",
        "label": "Player And Character",
        "path": "narrative-design/player-and-character",
        "children": [
          {
            "id": "character-design",
            "label": "Character Design",
            "path": "narrative-design/player-and-character/character-design",
            "children": [
              {
                "id": "emotional-link",
                "label": "Emotional Link",
                "path": "narrative-design/player-and-character/character-design/emotional-link"
              },
              {
                "id": "grounded-characters",
                "label": "Grounded Characters",
                "path": "narrative-design/player-and-character/character-design/grounded-characters",
                "children": [
                  {
                    "id": "dialogue",
                    "label": "Dialogue",
                    "path": "narrative-design/player-and-character/character-design/grounded-characters/dialogue",
                    "children": [
                      {
                        "id": "character-through-dialogue",
                        "label": "Character Through Dialogue",
                        "path": "narrative-design/player-and-character/character-design/grounded-characters/dialogue/character-through-dialogue"
                      },
                      {
                        "id": "exposition-through-dialogue",
                        "label": "Exposition Through Dialogue",
                        "path": "narrative-design/player-and-character/character-design/grounded-characters/dialogue/exposition-through-dialogue"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "protagonist-tone",
                "label": "Protagonist Tone",
                "path": "narrative-design/player-and-character/character-design/protagonist-tone"
              },
              {
                "id": "world-building",
                "label": "World Building",
                "path": "narrative-design/player-and-character/character-design/world-building"
              }
            ],
            "icon": "id-card"
          }
        ],
        "icon": "user"
      },
      {
        "id": "narrative-design-world-building",
        "label": "World Building",
        "path": "narrative-design/world-building",
        "children": [
          {
            "id": "world-building-level-design",
            "label": "Level Design",
            "path": "narrative-design/world-building/level-design",
            "icon": "route"
          },
          {
            "id": "where-to-start",
            "label": "Where to Start",
            "path": "narrative-design/world-building/where-to-start",
            "icon": "seedling"
          },
          {
            "id": "world-authenticity",
            "label": "World Authenticity",
            "path": "narrative-design/world-building/world-authenticity",
            "icon": "link"
          }
        ],
        "icon": "earth-asia"
      }
    ]
  },
  {
    "id": "appendix",
    "label": "Appendix",
    "path": "appendix",
    "children": [
      {
        "id": "books-to-read",
        "label": "Books to Read",
        "path": "appendix/books-to-read",
        "icon": "book-open"
      },
      {
        "id": "tools",
        "label": "Tools",
        "path": "appendix/tools",
        "icon": "screwdriver-wrench"
      }
    ]
  },
  {
    "id": "celeste-and-forgiveness",
    "label": "Celeste And Forgiveness",
    "path": "celeste-and-forgiveness"
  }
];
export const SEARCH_INDEX = [
  {
    "id": "home",
    "title": "Game Designer's Note",
    "text": "personal knowledge base game design level design book notes compiled structured"
  },
  {
    "id": "sys-home",
    "title": "Home",
    "text": "supporting systems home core loop clarity fluidity"
  },
  {
    "id": "8-funs",
    "title": "8 Funs",
    "text": "MDA framework aesthetic categories sensation fantasy narrative challenge fellowship discovery expression submission"
  },
  {
    "id": "achievement-system",
    "title": "Achievement System",
    "text": "achievement system"
  },
  {
    "id": "action-games",
    "title": "Action Games",
    "text": "player environment enemy three important aspects"
  },
  {
    "id": "actions",
    "title": "Actions",
    "text": "active input performance spectrum fromsoft devil may cry ninja gaiden poise dodge roll parry ukemi depth emergent"
  },
  {
    "id": "animation-system",
    "title": "Animation System",
    "text": "animation system"
  },
  {
    "id": "appendix",
    "title": "Appendix",
    "text": "appendix"
  },
  {
    "id": "balancing",
    "title": "Balancing",
    "text": "power sorting tags card rarity rare intricate power creep counter weaknesses"
  },
  {
    "id": "blockout",
    "title": "Blockout",
    "text": "rough white box without final art placeholder geometry playtest scale"
  },
  {
    "id": "books-to-read",
    "title": "Books to Read",
    "text": "level design workshop GDC china architecture form space order PDF"
  },
  {
    "id": "boss",
    "title": "Boss",
    "text": "moves readable attack windows stagger system phase transitions boss interaction monster hunter flinch stunned drool"
  },
  {
    "id": "boss-attacks",
    "title": "Boss Attacks",
    "text": "boss attacks"
  },
  {
    "id": "boss-design",
    "title": "Boss Design",
    "text": "boss design"
  },
  {
    "id": "boss-reaction",
    "title": "Boss Reaction",
    "text": "boss reaction"
  },
  {
    "id": "boss-types",
    "title": "Boss Types",
    "text": "large monster biological human mind game"
  },
  {
    "id": "branching-structures",
    "title": "Branching Structures",
    "text": "shrub detroit reconverging branches ending reflective choices illusion choice clarity declare war wording"
  },
  {
    "id": "bug-handling",
    "title": "Bug Handling",
    "text": "keep bugs riven animation cancel bunny hopping KBD tekken dribbling basketball restructure instruction overriding"
  },
  {
    "id": "building-curiosity",
    "title": "Building Curiosity",
    "text": "building curiosity"
  },
  {
    "id": "card-design",
    "title": "Card Design",
    "text": "categorize cards type labels balatro early economy late chips mult slay spire attack defense cycling"
  },
  {
    "id": "card-games",
    "title": "Card Games",
    "text": "lore define physics world duels emergent narrative"
  },
  {
    "id": "celeste-and-forgiveness",
    "title": "Celeste And Forgiveness",
    "text": "celeste and forgiveness"
  },
  {
    "id": "challenge",
    "title": "Challenge",
    "text": "obstacle course how difficult depth gameplay flavors difficulty"
  },
  {
    "id": "character-design",
    "title": "Character Design",
    "text": "action not just dialogue avatar blank project strong story abilities personality"
  },
  {
    "id": "character-through-dialogue",
    "title": "Character Through Dialogue",
    "text": "speech patterns accent traits charisma motivation subtext"
  },
  {
    "id": "checklist",
    "title": "Checklist",
    "text": "game vision clarity target audience game length clear"
  },
  {
    "id": "circulation",
    "title": "Circulation",
    "text": "players move through space linear branching hub-and-spoke loop"
  },
  {
    "id": "circulation-elements",
    "title": "Circulation Elements",
    "text": "architecture circulation path route"
  },
  {
    "id": "circulation-patterns",
    "title": "Circulation Patterns",
    "text": "circulation patterns"
  },
  {
    "id": "coginitive-map-elements",
    "title": "Coginitive Map Elements",
    "text": "coginitive map elements"
  },
  {
    "id": "cognitive-map",
    "title": "Cognitive Map",
    "text": "mental model space legible landmarks distinct visual identity consistent"
  },
  {
    "id": "collectibles",
    "title": "Collectibles",
    "text": "thorough explorers paths secrets visible just-out-of-reach"
  },
  {
    "id": "common-beat-elements",
    "title": "Common Beat Elements",
    "text": "combat choreo cinematic exploration puzzles beat"
  },
  {
    "id": "complex-systems",
    "title": "Complex Systems",
    "text": "emergent gameplay distinct parts affect each other stone soup effect persist"
  },
  {
    "id": "control-difficulty",
    "title": "Control Difficulty",
    "text": "control difficulty"
  },
  {
    "id": "core-systems",
    "title": "Core Systems",
    "text": "main gameplay action tactic puzzle detective card"
  },
  {
    "id": "creating-unease",
    "title": "Creating Unease",
    "text": "techniques creating unease dread"
  },
  {
    "id": "curiosity",
    "title": "Curiosity",
    "text": "curiosity"
  },
  {
    "id": "death-system",
    "title": "Death System",
    "text": "death system"
  },
  {
    "id": "depth-of-gameplay",
    "title": "Depth of Gameplay",
    "text": "decision space replay value"
  },
  {
    "id": "descrimination",
    "title": "Descrimination",
    "text": "descrimination"
  },
  {
    "id": "design-beat-by-need",
    "title": "Design Beat by Need",
    "text": "it takes two cooperative puzzle boss open exploration"
  },
  {
    "id": "design-process",
    "title": "Design Process",
    "text": "plan sketch blockout review sequence new level"
  },
  {
    "id": "detective-games",
    "title": "Detective Games",
    "text": "clue-driven tests information integration inference"
  },
  {
    "id": "dialogue",
    "title": "Dialogue",
    "text": "reveal character common dialogue grounded characters"
  },
  {
    "id": "dice-system",
    "title": "Dice System",
    "text": "dice system"
  },
  {
    "id": "discovery",
    "title": "Discovery",
    "text": "uncharted territory game as"
  },
  {
    "id": "emergent-gameplay",
    "title": "Emergent Gameplay",
    "text": "complex simple rules unscripted player experiences"
  },
  {
    "id": "emergent-narrative",
    "title": "Emergent Narrative",
    "text": "emergent narrative"
  },
  {
    "id": "emotional-link",
    "title": "Emotional Link",
    "text": "charisma knowledge interests values presence visible journey small interactions petting RDR2 horse bond"
  },
  {
    "id": "end-turn-resolution",
    "title": "End-turn Resolution",
    "text": "readability notify resolution order calculation balatro reduce downtime adjustable settlement speed"
  },
  {
    "id": "enemy",
    "title": "Enemy",
    "text": "enemy readability locate read quickly the finals clean bright visual style"
  },
  {
    "id": "engineering-system",
    "title": "Engineering System",
    "text": "engineering system"
  },
  {
    "id": "expectation-management",
    "title": "Expectation Management",
    "text": "expectations genre conventions marketing early gameplay subvert escalate"
  },
  {
    "id": "exposition-through-dialogue",
    "title": "Exposition Through Dialogue",
    "text": "guide character unnatural resistance casual world-building daily conversation mystery"
  },
  {
    "id": "expression",
    "title": "Expression",
    "text": "self-discovery game as"
  },
  {
    "id": "extra-content",
    "title": "Extra Content",
    "text": "extra content"
  },
  {
    "id": "feedback-loops",
    "title": "Feedback Loops",
    "text": "positive negative feedback loop tension flow state engagement"
  },
  {
    "id": "flavors-of-difficulty",
    "title": "Flavors of Difficulty",
    "text": "different kinds challenges"
  },
  {
    "id": "flow-state",
    "title": "Flow State",
    "text": "immersion energized focus challenge skill balance boredom anxiety clear goals immediate feedback"
  },
  {
    "id": "fluidity",
    "title": "Fluidity",
    "text": "fluidity"
  },
  {
    "id": "fragmented-narrative",
    "title": "Fragmented Narrative",
    "text": "dead cells souls scattered pieces weak guidance art direction"
  },
  {
    "id": "functional-patterns",
    "title": "Functional Patterns",
    "text": "functional patterns"
  },
  {
    "id": "game-beat",
    "title": "Game Beat",
    "text": "level patterns tension resolution wonder tutorial beat"
  },
  {
    "id": "game-beat-examples",
    "title": "Game Beat Examples",
    "text": "general peak-end non-linear levels pacing flow"
  },
  {
    "id": "game-development",
    "title": "Game Development",
    "text": "game-development"
  },
  {
    "id": "game-experience",
    "title": "Game Experience",
    "text": "game-experience"
  },
  {
    "id": "game-feel",
    "title": "Game Feel",
    "text": "juice tactile sensation responsive moment-to-moment"
  },
  {
    "id": "game-loop",
    "title": "Game Loop",
    "text": "30-second core loop nested loops small large feed"
  },
  {
    "id": "game-vision",
    "title": "Game Vision",
    "text": "game vision"
  },
  {
    "id": "gameplay-design",
    "title": "Gameplay Design",
    "text": "gameplay-design"
  },
  {
    "id": "grounded-characters",
    "title": "Grounded Characters",
    "text": "dialogue behavior values character reveal actions habits"
  },
  {
    "id": "guidance",
    "title": "Guidance",
    "text": "macro micro tutorial orient attention landmark lighting"
  },
  {
    "id": "horror-and-discomfort",
    "title": "Horror And Discomfort",
    "text": "horror core fear discomfort"
  },
  {
    "id": "how-difficult",
    "title": "How Difficult",
    "text": "tuning difficulty target audience brain works control"
  },
  {
    "id": "how-our-brain-works",
    "title": "How our Brain Works",
    "text": "how our brain works"
  },
  {
    "id": "input-and-controls",
    "title": "Input And Controls",
    "text": "input and controls"
  },
  {
    "id": "intuitive-design",
    "title": "Intuitive Design",
    "text": "intuitive mental model player confusion tutorial"
  },
  {
    "id": "juice-elements",
    "title": "Juice Elements",
    "text": "squash stretch screen shake particles hitstop coyote time audio punchy"
  },
  {
    "id": "layout",
    "title": "Layout",
    "text": "physical space structured perceived variety depth real-life buildings"
  },
  {
    "id": "layout-patterns",
    "title": "Layout Patterns",
    "text": "reusable structures circulation functional patterns guidance pacing challenge"
  },
  {
    "id": "level-components",
    "title": "Level Components",
    "text": "reusable spatial pieces rooms corridors arenas hubs junctions"
  },
  {
    "id": "level-design",
    "title": "Level Design",
    "text": "level-design"
  },
  {
    "id": "level-elements",
    "title": "Level Elements",
    "text": "avatar boss collectible enemy environment hazard mechanic power-up projectiles"
  },
  {
    "id": "linear-narrative",
    "title": "Linear Narrative",
    "text": "ki-sho-ten-ketsu four-act three-act dramatic structure smaller arcs curiosity development turn resolution"
  },
  {
    "id": "lock-and-key",
    "title": "Lock And Key",
    "text": "lock and key"
  },
  {
    "id": "macro-guidance",
    "title": "Macro Guidance",
    "text": "level scale orient landmark silhouettes lighting direction funneling sound objectives"
  },
  {
    "id": "map-hierarchy",
    "title": "Map Hierarchy",
    "text": "multiple spaces primary secondary optional reward-gated"
  },
  {
    "id": "map-system",
    "title": "Map System",
    "text": "map system"
  },
  {
    "id": "match-difficulty-with-player-growth",
    "title": "Match Difficulty with Player Growth",
    "text": "match difficulty with player growth"
  },
  {
    "id": "micro-guidance",
    "title": "Micro Guidance",
    "text": "object moment scale color contrast motion light sound enemy placement"
  },
  {
    "id": "minigame-system",
    "title": "Minigame System",
    "text": "minigame system"
  },
  {
    "id": "mob",
    "title": "Mob",
    "text": "stack enemies interruptible ninja gaiden executions walls many-vs-one"
  },
  {
    "id": "moral",
    "title": "Moral",
    "text": "validates behavior encourages discrimination violence"
  },
  {
    "id": "more-systems",
    "title": "More Systems",
    "text": "secondary texture variety multiplayer minigame dice partner negotiation engineering"
  },
  {
    "id": "moving-system",
    "title": "Moving System",
    "text": "moving system"
  },
  {
    "id": "multi-thread-narrative",
    "title": "Multi-thread Narrative",
    "text": "parallel threads full picture player-driven AI branching structures"
  },
  {
    "id": "multiplayer",
    "title": "Multiplayer",
    "text": "multiplayer"
  },
  {
    "id": "multiple-bosses",
    "title": "Multiple Bosses",
    "text": "multiple bosses"
  },
  {
    "id": "narrative-design",
    "title": "Narrative Design",
    "text": "narrative-design"
  },
  {
    "id": "narrative-design-world-building",
    "title": "World Building",
    "text": "world building"
  },
  {
    "id": "narrative-elements",
    "title": "Narrative Elements",
    "text": "interactivity repetition embodiment persistence death retry inhabits"
  },
  {
    "id": "narrative-patterns",
    "title": "Narrative Patterns",
    "text": "linear multi-thread fragmented emergent parallel story"
  },
  {
    "id": "narrative-structure",
    "title": "Narrative Structure",
    "text": "patterns elements timing suspense"
  },
  {
    "id": "narrative-timing",
    "title": "Narrative Timing",
    "text": "bad interrupts great enhances lore exploring not fighting audio logs cutscenes"
  },
  {
    "id": "negotiation-system",
    "title": "Negotiation System",
    "text": "negotiation system"
  },
  {
    "id": "objects-of-curiosity",
    "title": "Objects of Curiosity",
    "text": "objects of curiosity"
  },
  {
    "id": "open-world",
    "title": "Open world",
    "text": "soft guiding checklist interest points predict player movement breath of the wild"
  },
  {
    "id": "other-experience",
    "title": "Other Experience",
    "text": "other experience horror curiosity"
  },
  {
    "id": "pace-control",
    "title": "Pace Control",
    "text": "pacing flow psychology"
  },
  {
    "id": "pacing",
    "title": "Pacing",
    "text": "rhythm intensity challenge rest sequenced over time"
  },
  {
    "id": "parallel-presence",
    "title": "Parallel Presence",
    "text": "parallel presence"
  },
  {
    "id": "partner-system",
    "title": "Partner System",
    "text": "partner system"
  },
  {
    "id": "physical",
    "title": "Physical",
    "text": "physical"
  },
  {
    "id": "plan",
    "title": "Plan",
    "text": "level concept before building core experience mechanics emotional arc tension relief wonder"
  },
  {
    "id": "platformer",
    "title": "Platformer",
    "text": "celeste game feel tricks coyote time jump buffering halved gravity corner correction lift momentum wall jump buffer"
  },
  {
    "id": "player",
    "title": "Player",
    "text": "player"
  },
  {
    "id": "player-agency",
    "title": "Player Agency",
    "text": "encourage enforce control freedom restriction combo style meter devil may cry basketball"
  },
  {
    "id": "player-and-character",
    "title": "Player And Character",
    "text": "harder films novels psychology avatar character strong"
  },
  {
    "id": "player-progression",
    "title": "Player Progression",
    "text": "player progression"
  },
  {
    "id": "progression-system",
    "title": "Progression System",
    "text": "progression system"
  },
  {
    "id": "protagonist-tone",
    "title": "Protagonist Tone",
    "text": "expressive immersive protagonist avatar player separate embodiment"
  },
  {
    "id": "psychology",
    "title": "Psychology",
    "text": "psychology"
  },
  {
    "id": "puzzle-design",
    "title": "Puzzle Design",
    "text": "self-contained challenge discoverable solution rules test inevitable teach"
  },
  {
    "id": "puzzle-games",
    "title": "Puzzle Games",
    "text": "rule-driven tests abstract thinking puzzle design"
  },
  {
    "id": "randomness",
    "title": "Randomness",
    "text": "randomness"
  },
  {
    "id": "readability",
    "title": "Readability",
    "text": "readability"
  },
  {
    "id": "reasoning",
    "title": "Reasoning",
    "text": "reasoning"
  },
  {
    "id": "review",
    "title": "Review",
    "text": "level meets design goals getting lost confused pacing difficulty curve"
  },
  {
    "id": "reward-and-exploration",
    "title": "Reward And Exploration",
    "text": "reward-and-exploration"
  },
  {
    "id": "rewarding-exploration",
    "title": "Rewarding Exploration",
    "text": "rewarding exploration"
  },
  {
    "id": "rewards",
    "title": "Rewards",
    "text": "functional narrative aesthetic upgrades weapons abilities lore cosmetics"
  },
  {
    "id": "self-check",
    "title": "Self-check",
    "text": "flowchart design mechanism used once rethink intuitive side branch"
  },
  {
    "id": "sensation",
    "title": "Sensation",
    "text": "sense-pleasure game as"
  },
  {
    "id": "sketch",
    "title": "Sketch",
    "text": "explore space quickly multiple variations flow shape landmarks entry exit"
  },
  {
    "id": "specific-systems",
    "title": "Specific Systems",
    "text": "core secondary supporting systems overview"
  },
  {
    "id": "stagger-system",
    "title": "Stagger System",
    "text": "stagger system"
  },
  {
    "id": "stairs",
    "title": "Stairs",
    "text": "connecting spaces different verticality tips"
  },
  {
    "id": "structure",
    "title": "Structure",
    "text": "stone soup qframework modular architecture ViewController System Utility details emerge naturally"
  },
  {
    "id": "submission",
    "title": "Submission",
    "text": "pastime game as"
  },
  {
    "id": "supporting-systems",
    "title": "Supporting Systems",
    "text": "core loop clarity fluidity randomness moving death map progression achievement animation"
  },
  {
    "id": "suspense",
    "title": "Suspense",
    "text": "information asymmetry foreshadowing dramatic irony countdown withholding unanswered"
  },
  {
    "id": "system-review",
    "title": "System Review",
    "text": "system review"
  },
  {
    "id": "tactic-system",
    "title": "Tactic System",
    "text": "prioritize tactics shadow tactics desperados RTT pause reaction decision-making"
  },
  {
    "id": "the-eureka-moment",
    "title": "The Eureka Moment",
    "text": "the eureka moment"
  },
  {
    "id": "the-magic-circle",
    "title": "The Magic Circle",
    "text": "keep player interested expectation flow state game contents"
  },
  {
    "id": "time-scale",
    "title": "Time-scale",
    "text": "time-scale"
  },
  {
    "id": "tools",
    "title": "Tools",
    "text": "floorplanner pinterest milanote figma articy draft level design moodboard narrative"
  },
  {
    "id": "tutorial-levels",
    "title": "Tutorial Levels",
    "text": "teach mechanics level structure pop-up text safe low-stakes invisible"
  },
  {
    "id": "types-of-fear",
    "title": "Types of Fear",
    "text": "emotional flavors horror target"
  },
  {
    "id": "uncanny-valley",
    "title": "Uncanny Valley",
    "text": "uncanny valley"
  },
  {
    "id": "unknown",
    "title": "Unknown",
    "text": "unknown"
  },
  {
    "id": "verticality",
    "title": "Verticality",
    "text": "height elevation layered routes tactical depth high ground"
  },
  {
    "id": "violence",
    "title": "Violence",
    "text": "tool intentional design what does violence mean rewards communicate"
  },
  {
    "id": "waytracking-disruptions",
    "title": "Waytracking Disruptions",
    "text": "decision stacking pickups flow disruption mixing bowls"
  },
  {
    "id": "where-to-start",
    "title": "Where to Start",
    "text": "conflict question image rule entry points world building"
  },
  {
    "id": "world-authenticity",
    "title": "World Authenticity",
    "text": "internal consistency rules coherent fantastical lived-in history"
  },
  {
    "id": "world-building",
    "title": "World Building",
    "text": "authenticity logic environmental storytelling level narrative where to start"
  },
  {
    "id": "world-building-level-design",
    "title": "Level Design",
    "text": "level design"
  }
];

// Build id↔path maps from explicit GitBook paths on each node
function buildPaths(nodes) {
  const idToPath = {};
  const pathToId = {};
  function walk(list) {
    for (const node of list) {
      if (node.id === 'home') {
        idToPath.home = '/';
        pathToId['/'] = 'home';
      } else {
        const p = `/${node.path}`;
        idToPath[node.id] = p;
        pathToId[p] = node.id;
      }
      if (node.children) walk(node.children);
    }
  }
  walk(nodes);
  return { idToPath, pathToId };
}

export const { idToPath, pathToId } = buildPaths(NAV);
