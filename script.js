document.addEventListener('DOMContentLoaded', () => {
            const toolsGrid = document.getElementById('toolsGrid');
            const searchInput = document.getElementById('searchInput');
            const categoryBtns = document.querySelectorAll('.category-btn');
            const emptyState = document.getElementById('emptyState');
            const btnResetSearch = document.getElementById('btnResetSearch');

            // Tool data with additional metadata and enhanced icons
            const toolsData = [
                {
                    icon: 'fa-solid fa-tasks', // Example icon, replace with a suitable one
                    title: 'Performance Task Design Tool',
                    description: 'Design authentic performance tasks that assess deeper understanding.',
                    category: 'assessment', // Assuming 'assessment', adjust if needed
                    isFavorited: false,
                    formFields: [],
                 actions: [{name: 'openLink', label: 'Open Tool', type: 'primary', url: './pa-template/index.html'}]
                },
                {
                    icon: 'fa-solid fa-ruler',
                    title: 'Leveler',
                    description: 'Adjust the reading level of a text to make it more or less complex.',
                    category: 'planning',
                    isFavorited: true,
                    formFields: ['textarea'],
                    actions: [
                        { name: 'openLink', label: 'English text', type: 'primary', url: 'https://yuanqi.tencent.com/agent/s8hZA9JPvhk7' },
                        { name: 'openLink', label: 'Chinese text', type: 'primary', url: 'https://yuanqi.tencent.com/agent/iomAX06eLMBI' }
                    ]
                },
                {
                    icon: 'fa-solid fa-bars',
                    title: 'Chunk Text',
                    description: 'Break complex texts into manageable sections for easier student comprehension.',
                    category: 'planning',
                    isFavorited: false,
                    formFields: [],
                    actions: [
                        {name: 'openLink', label: 'Long Text', type: 'primary', url: 'https://yuanqi.tencent.com/agent/VGG01iZUTK8j'},
                        {name: 'openLink', label: 'Short Text', type: 'primary', url: 'https://yuanqi.tencent.com/agent/AbYoIQ1jMG3m'}
                    ]
                },
                {
                    icon: 'fa-solid fa-file-lines',
                    title: 'Clear Directions',
                    description: 'Generate concise, easy-to-follow instructions for assignments and activities.',
                    category: 'planning',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/LL0m3lQv0zo8'}]
                },

                {
                    icon: 'fa-solid fa-ticket',
                    title: 'Exit Ticket',
                    description: 'Create quick end-of-lesson assessments to check student understanding.',
                    category: 'assessment',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/UpGCq8RLnn4y'}]
                },

                //adding a new tool called 'lesson hook'
                {
                    icon: 'fa-solid fa-anchor',
                    title: 'Lesson Hook',
                    description: 'Plan compelling lesson starters to engage students.',
                    category: 'engagement',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/FSZ7T7x3Sqa8'}]
                },
            /*    
                            {
                    icon: 'fa-solid fa-bullseye',
                    title: 'Learning Objective(s)',
                    description: 'Develop clear, measurable learning objectives to guide instruction.',
                    category: 'planning',
                    isFavorited: false,
                    formFields: []
                },
                {
                    icon: 'fa-solid fa-earth-americas',
                    title: 'Real World Context Generator',
                    description: 'Connect lesson topics to engaging real-world examples and applications.',
                    category: 'engagement',
                    isFavorited: false,
                    formFields: []
                },*/
                {
                    icon: 'fa-solid fa-list-check',
                    title: 'Multiple Choice Assessment',
                    description: 'Create multiple-choice assessments on a variety of topics.',
                    category: 'assessment',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/AolEMzp3h0jy'}]
                },
              /*  {
                    icon: 'fa-solid fa-circle-question',
                    title: 'Questions Generator',
                    description: 'Create questions for a specific piece of content.',
                    category: 'assessment',
                    isFavorited: false,
                    formFields: []
                },*/
                {
                    icon: 'fa-solid fa-comments',
                    title: 'Discussion Prompts',
                    description: 'Craft engaging prompts to stimulate meaningful classroom discussions.',
                    category: 'engagement',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/Zv63iKK9MgWl'}]
                   
                },
             /*   {
                    icon: 'fa-solid fa-anchor',
                    title: 'Lesson Hook',
                    description: 'Plan compelling lesson starters to engage students.',
                    category: 'engagement',
                    isFavorited: false,
                    formFields: []
                },*/
                {
                    icon: 'fa-solid fa-link',
                    title: 'Make It Relevant',
                    description: 'Link lesson content to students\' lives and interests to boost engagement.',
                    category: 'engagement',
                    isFavorited: false,
                    formFields: [],
                    actions: [{name: 'openLink', label: 'Get agent', type: 'primary', url: 'https://yuanqi.tencent.com/agent/g6EqCe7eKo2o'}]
                }
            ];

            // Function to create badge with icon
            function createBadgeWithIcon(category) {
                let iconClass;
                
                switch(category) {
                    case 'planning':
                        iconClass = 'fa-solid fa-calendar-days';
                        break;
                    case 'assessment':
                        iconClass = 'fa-solid fa-chart-simple';
                        break;
                    case 'engagement':
                        iconClass = 'fa-solid fa-users';
                        break;
                    default:
                        iconClass = 'fa-solid fa-tag';
                }
                
                return `<i class="${iconClass}"></i>${category.charAt(0).toUpperCase() + category.slice(1)}`;
            }

            // Function to create tool card
            function createToolCard(tool) {
                const card = document.createElement('div');
                card.className = 'tool-card';
                card.style.opacity = "1"; // Ensure card is visible immediately
                card.dataset.category = tool.category;
                
                const toolHeader = document.createElement('div');
                toolHeader.className = 'tool-header';
                
                const iconDiv = document.createElement('div');
                iconDiv.className = 'tool-icon';
                iconDiv.innerHTML = `<i class="${tool.icon}"></i>`;
                
                const titleH3 = document.createElement('h3');
                titleH3.className = 'tool-title';
                titleH3.textContent = tool.title;
                
                toolHeader.appendChild(iconDiv);
                toolHeader.appendChild(titleH3);
                
                const toolContent = document.createElement('div');
                toolContent.className = 'tool-content';
                
                const descriptionP = document.createElement('p');
                descriptionP.className = 'tool-description';
                descriptionP.textContent = tool.description;
                
                const badgeSpan = document.createElement('span');
                badgeSpan.className = `badge badge-${tool.category}`;
                badgeSpan.innerHTML = createBadgeWithIcon(tool.category);
                
                toolContent.appendChild(descriptionP);
                toolContent.appendChild(badgeSpan);
                
                const toolFooter = document.createElement('div');
                toolFooter.className = 'tool-footer';
                
                // Add action buttons if they exist
                if (tool.actions && tool.actions.length > 0) {
                    tool.actions.forEach(action => {
                        const actionBtn = document.createElement('button');
                        actionBtn.className = action.type === 'primary' ? 'tool-btn' : 'tool-btn secondary';
                        if (action.label === 'English text') {
                            actionBtn.classList.add('english-text-btn');
                        } else if (action.label === 'Chinese text') {
                            actionBtn.classList.add('chinese-text-btn');
                        }
                        
                        let iconClass = '';
                        switch(action.name) {
                            case 'openLink': // Generic case for opening links
                                // Determine icon based on label or a new 'icon' property in action if needed
                                if (action.label === 'Long Text') iconClass = 'fa-solid fa-align-left';
                                else if (action.label === 'Short Text') iconClass = 'fa-solid fa-align-center';
                                else if (action.label === 'Get agent') iconClass = 'fa-solid fa-robot';
                                else if (action.label === 'English text') iconClass = 'fa-solid fa-language';
                                else if (action.label === 'Chinese text') iconClass = 'fa-solid fa-language'; // Assuming same icon for now
                                else iconClass = 'fa-solid fa-hand'; //else show a hand
                                break;

                            default:
                                iconClass = 'fa-solid fa-arrow-right';
                        }
                        
                        actionBtn.innerHTML = `<i class="${iconClass}"></i> ${action.label}`;
                        
                        actionBtn.addEventListener('click', () => {
                            if (action.url) {
                                window.open(action.url, '_blank');
                            } else {
                                // Fallback or default behavior if no URL is specified for other actions
                                window.open('https://yuanqi.tencent.com/agent/VGG01iZUTK8j', '_blank');
                            }
                        });
                        
                        toolFooter.appendChild(actionBtn);
                    });
                }
                
                const addToListButton = document.createElement('button');
                addToListButton.className = 'add-to-list-btn';
                addToListButton.setAttribute('aria-label', 'Add to favorites');
                addToListButton.innerHTML = `<i class="fa-regular fa-star"></i>`;
                
                // Check if tool is already in favorites
                const isInList = localStorage.getItem(`tool_${tool.title}`) === 'true';
                if (isInList) {
                    addToListButton.classList.add('added');
                    addToListButton.innerHTML = `<i class="fa-solid fa-star"></i>`;
                    addToListButton.setAttribute('aria-label', 'Remove from favorites');
                }
                
                addToListButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isAdded = addToListButton.classList.contains('added');
                    
                    if (isAdded) {
                        // Remove from favorites
                        addToListButton.classList.remove('added');
                        addToListButton.innerHTML = `<i class="fa-regular fa-star"></i>`;
                        addToListButton.setAttribute('aria-label', 'Add to favorites');
                        localStorage.removeItem(`tool_${tool.title}`);
                    } else {
                        // Add to favorites
                        addToListButton.classList.add('added');
                        addToListButton.innerHTML = `<i class="fa-solid fa-star"></i>`;
                        addToListButton.setAttribute('aria-label', 'Remove from favorites');
                        localStorage.setItem(`tool_${tool.title}`, 'true');
                    }
                });
                
                toolFooter.appendChild(addToListButton);
                
                card.appendChild(toolHeader);
                card.appendChild(toolContent);
                card.appendChild(toolFooter);
                
                return card;
            }

            // Render all tools initially
            function renderTools(tools) {
                toolsGrid.innerHTML = '';
                
                if (tools.length === 0) {
                    emptyState.style.display = 'flex';
                    toolsGrid.style.display = 'none';
                } else {
                    emptyState.style.display = 'none';
                    toolsGrid.style.display = 'grid';
                    
                    tools.forEach(tool => {
                        const toolCardElement = createToolCard(tool);
                        toolsGrid.appendChild(toolCardElement);
                    });
                }
            }

            // Filter tools by search input
            searchInput.addEventListener('input', () => {
                filterTools();
            });

            // Reset search
            btnResetSearch.addEventListener('click', () => {
                searchInput.value = '';
                filterTools();
                searchInput.focus();
            });

            // Filter function
            function filterTools() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const activeCategory = document.querySelector('.category-btn.active').dataset.category;
                
                const filteredTools = toolsData.filter(tool => {
                    const matchesSearch = tool.title.toLowerCase().includes(searchTerm) || 
                                        tool.description.toLowerCase().includes(searchTerm);
                    let matchesCategory = true;
                    
                    if (activeCategory === 'my-list') {
                        matchesCategory = localStorage.getItem(`tool_${tool.title}`) === 'true';
                    } else if (activeCategory !== 'all') {
                        matchesCategory = tool.category === activeCategory;
                    }
                    
                    return matchesSearch && matchesCategory;
                });
                
                renderTools(filteredTools);
            }

            // Filter tools by category
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterTools();
                });
            });

            // Force immediate rendering of all tools
            setTimeout(() => {
                renderTools(toolsData);
                // Force layout recalculation
                document.body.offsetHeight;
            }, 0);
        });