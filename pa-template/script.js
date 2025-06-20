// Function to automatically resize textarea height
function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto'; // Reset height to recalculate
    textarea.style.height = textarea.scrollHeight + 'px';
}

// 主入口：DOM加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // Add auto-resize functionality to all textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        // Initial resize
        autoResizeTextarea(textarea);
        // Resize on input
        textarea.addEventListener('input', () => autoResizeTextarea(textarea));
    });

    // 获取DOM元素
    const paForm = document.getElementById('paForm');
    const downloadPdfButton = document.getElementById('downloadPdfButton');
    const saveButton = document.getElementById('saveButton');
    const competencySelect = document.getElementById('competencySelect');
    const competencyIndicatorsContainer = document.getElementById('competencyIndicatorsContainer');
    const rubricsContainer = document.getElementById('rubricsContainer');
    const imageUpload = document.getElementById('imageUpload');
    const fileSelected = document.getElementById('file-selected');
    const gradeSelectStandards = document.getElementById('gradeSelectStandards');
    const subjectSelectStandards = document.getElementById('subjectSelectStandards');
    const standardsSelect = document.getElementById('standardsSelect');
    const learningObjectivesTextarea = document.getElementById('learningObjectives');
    const aiEditButton1 = document.getElementById('aiEditButton1');
    const aiEditButton2 = document.getElementById('aiEditButton2');
    const aiEditButton3 = document.getElementById('aiEditButton3');
    const aiEditButton4 = document.getElementById('aiEditButton4');
    const aiEditButton5 = document.getElementById('aiEditButton5');
    const aiEditButton6 = document.getElementById('aiEditButton6');
    const gradeSelect = document.getElementById('gradeSelect');
    const gradeLevelSelect = document.getElementById('gradeLevelSelect');
    const restartButton = document.getElementById('restartButton');

    // 移除 gradeLevelSelect 的选项
    if (gradeLevelSelect) {
        gradeLevelSelect.style.display = 'none';
    }

    // 定义 grade 到 grade level range 的映射
    const gradeToLevelRange = {
        '1': 'Grade 1-3',
        '2': 'Grade 1-3',
        '3': 'Grade 1-3',
        '4': 'Grade 4-5',
        '5': 'Grade 4-5',
        '6': 'Grade 6-8',
        '7': 'Grade 6-8',
        '8': 'Grade 6-8',
        '9': 'Grade 9-12',
        '10': 'Grade 9-12',
        '11': 'Grade 9-12',
        '12': 'Grade 9-12'
    };

    // 文件上传显示文件名
    imageUpload.addEventListener('change', function() {
        if(this.files && this.files[0]) {
            fileSelected.textContent = this.files[0].name;
        } else {
            fileSelected.textContent = 'No file chosen';
        }
    });



    // 更新标准选项
    function updateStandardsOptions() {
        standardsSelect.innerHTML = '<option value="">Select Standard</option>';
        const grade = gradeSelectStandards.value;
        const subject = subjectSelectStandards.value;
        
        if (standardsData[grade] && standardsData[grade][subject]) {
            standardsData[grade][subject].forEach(function(std) {
                const opt = document.createElement('option');
                opt.value = std;
                opt.textContent = std;
                standardsSelect.appendChild(opt);
            });
        }
    }

    // 添加事件监听器
    if (gradeSelectStandards && subjectSelectStandards) {
        gradeSelectStandards.addEventListener('change', updateStandardsOptions);
        subjectSelectStandards.addEventListener('change', updateStandardsOptions);
    }

    // 全局变量存储Base64格式的图片
    let storedBase64Image = '';

    // 图片上传处理
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type === 'image/png') {
            const reader = new FileReader();
            reader.onloadend = function() {
                storedBase64Image = reader.result.split(',')[1];
                showImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            storedBase64Image = '';
            alert('Please select a PNG format image file');
        }
    });

    // 显示图片预览和编辑界面
    function showImagePreview(imageData) {
        // 创建预览模态框
        const modal = document.createElement('div');
        modal.className = 'image-preview-modal';
        modal.innerHTML = `
            <div class="image-preview-container">
                <div class="image-preview-header">
                    <h3>Image Preview and Edit</h3>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="image-preview-content">
                    <div class="image-container">
                        <img src="${imageData}" id="previewImage">
                    </div>
                    <div class="image-controls">
                        <div class="control-group">
                            <label>Scale:</label>
                            <input type="range" id="scaleSlider" min="50" max="200" value="100">
                            <span id="scaleValue">100%</span>
                        </div>
                        <div class="control-group">
                            <button id="resetBtn" class="control-btn">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="image-preview-footer">
                    <button id="saveImageBtn" class="save-btn">Save</button>
                    <button id="cancelImageBtn" class="cancel-btn">Cancel</button>
                </div>
            </div>
        `;

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .image-preview-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            .image-preview-container {
                background-color: white;
                border-radius: 8px;
                width: 80%;
                max-width: 800px;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
            }
            .image-preview-header {
                padding: 15px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .image-preview-header h3 {
                margin: 0;
                color: #333;
            }
            .image-preview-content {
                padding: 20px;
                overflow: auto;
                flex-grow: 1;
            }
            .image-container {
                width: 100%;
                height: 400px;
                overflow: hidden;
                position: relative;
                background-color: #f5f5f5;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            #previewImage {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                transform-origin: center center;
                transition: transform 0.1s ease;
            }
            .image-controls {
                margin-top: 20px;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 4px;
            }
            .control-group {
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .control-btn {
                padding: 8px 15px;
                border: none;
                border-radius: 4px;
                background-color: #1976d2;
                color: white;
                cursor: pointer;
            }
            .control-btn:hover {
                background-color: #1565c0;
            }
            .image-preview-footer {
                padding: 15px;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            .save-btn, .cancel-btn {
                padding: 8px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .save-btn {
                background-color: #4caf50;
                color: white;
            }
            .save-btn:hover {
                background-color: #43a047;
            }
            .cancel-btn {
                background-color: #f5f5f5;
                color: #333;
                border: 1px solid #ddd;
            }
            .cancel-btn:hover {
                background-color: #e0e0e0;
            }
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
            }
            .close-btn:hover {
                color: #333;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(modal);

        // 获取元素
        const previewImage = document.getElementById('previewImage');
        const scaleSlider = document.getElementById('scaleSlider');
        const scaleValue = document.getElementById('scaleValue');
        const resetBtn = document.getElementById('resetBtn');
        const saveImageBtn = document.getElementById('saveImageBtn');
        const cancelImageBtn = document.getElementById('cancelImageBtn');
        const closeBtn = modal.querySelector('.close-btn');

        // 等待图片加载完成
        previewImage.onload = function() {
            // 缩放功能
            scaleSlider.addEventListener('input', function() {
                const scale = this.value;
                scaleValue.textContent = scale + '%';
                previewImage.style.transform = `scale(${scale / 100})`;
            });

            // 重置功能
            resetBtn.addEventListener('click', function() {
                scaleSlider.value = 100;
                scaleValue.textContent = '100%';
                previewImage.style.transform = 'scale(1)';
            });

            // 保存功能
            saveImageBtn.addEventListener('click', function() {
                // 创建canvas来保存编辑后的图片
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const scale = scaleSlider.value / 100;
                
                // 计算缩放后的尺寸
                const scaledWidth = previewImage.naturalWidth * scale;
                const scaledHeight = previewImage.naturalHeight * scale;
                
                // 设置canvas尺寸为缩放后的图片尺寸
                canvas.width = scaledWidth;
                canvas.height = scaledHeight;
                
                // 保存当前变换状态
                ctx.save();
                
                // 移动到画布中心
                ctx.translate(canvas.width / 2, canvas.height / 2);
                
                // 应用缩放
                ctx.scale(scale, scale);
                
                // 绘制图片，注意偏移量
                ctx.drawImage(previewImage, -previewImage.naturalWidth / 2, -previewImage.naturalHeight / 2);
                
                // 恢复变换状态
                ctx.restore();

                // 获取图片数据
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                // 找到图片的实际边界
                let minX = canvas.width;
                let minY = canvas.height;
                let maxX = 0;
                let maxY = 0;

                // 遍历像素找到非透明像素的边界
                for (let y = 0; y < canvas.height; y++) {
                    for (let x = 0; x < canvas.width; x++) {
                        const idx = (y * canvas.width + x) * 4;
                        if (data[idx + 3] > 0) { // 如果像素不是完全透明的
                            minX = Math.min(minX, x);
                            minY = Math.min(minY, y);
                            maxX = Math.max(maxX, x);
                            maxY = Math.max(maxY, y);
                        }
                    }
                }

                // 创建新的canvas来存储裁剪后的图片
                const croppedCanvas = document.createElement('canvas');
                const croppedCtx = croppedCanvas.getContext('2d');
                
                // 设置新canvas的尺寸为裁剪后的尺寸
                croppedCanvas.width = maxX - minX + 1;
                croppedCanvas.height = maxY - minY + 1;
                
                // 将裁剪区域复制到新canvas
                croppedCtx.drawImage(
                    canvas,
                    minX, minY, croppedCanvas.width, croppedCanvas.height,
                    0, 0, croppedCanvas.width, croppedCanvas.height
                );
                
                // 转换为base64
                const newImageData = croppedCanvas.toDataURL('image/png');
                storedBase64Image = newImageData.split(',')[1];
                
                // 更新文件选择器显示
                const fileSelected = document.getElementById('file-selected');
                if (fileSelected) {
                    fileSelected.textContent = 'Image edited';
                }
                
                // 关闭模态框
                document.body.removeChild(modal);
                document.head.removeChild(style);
            });
        };

        // 取消功能
        cancelImageBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });

        // 关闭按钮功能
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });
    }

    // 从标准中选择并添加到学习目标
    if (standardsSelect && learningObjectivesTextarea) {
        standardsSelect.addEventListener('change', function() {
            const selectedStandardText = this.options[this.selectedIndex].text;
            if (this.value !== "") {
                learningObjectivesTextarea.value += (learningObjectivesTextarea.value ? '\n' : '') + selectedStandardText;
            }
        });
    }

    // AI Edit for Learning Objectives
    if (aiEditButton1) {
        aiEditButton1.addEventListener('click', async () => {
            const learningObjectives = document.getElementById('learningObjectives');
            const spinner = document.getElementById('aiEditSpinner1');
            const currentContent = learningObjectives.value;
            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
                
                if (!currentContent) {
                alert('please enter the learning objectives first');
                    return;
            }
            spinner.style.display = 'inline-block';
            aiEditButton1.disabled = true;

            const suggestionTextarea = document.getElementById('learningObjectivesAiSuggestion');
            const applyButton = document.getElementById('applyLearningObjectives');
            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to improve the learning outcomes using I can statements based on the following information:\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nCurrent Learning Outcomes:\n${currentContent}\n\nOnly provide the improved learning outcomes, do not include any other information.`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        learningObjectives.value = suggestionTextarea.value;
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton1.disabled = false;
            }
        });
    }

    // AI Edit for Essential Question 
    if (aiEditButton2) {
        aiEditButton2.addEventListener('click', async () => {
            const essentialQuestions = document.getElementById('essentialQuestions');
            const spinner = document.getElementById('aiEditSpinner2');
            const currentContent = essentialQuestions.value;
            const learningObjectives = document.getElementById('learningObjectives').value;
                
                spinner.style.display = 'inline-block';
            aiEditButton2.disabled = true;

            const suggestionTextarea = document.getElementById('essentialQuestionsAiSuggestion');
            const applyButton = document.getElementById('applyEssentialQuestions');
            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'Qwen/Qwen3-8B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to improve the essential questions based on the following information:\nLearning Objectives and Standards:\n${learningObjectives}\nCurrent Essential Questions:\n${currentContent}\n\nOnly provide the improved essential questions, do not include any other information.`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        essentialQuestions.value = suggestionTextarea.value;
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton2.disabled = false;
            }
        });
    }

    // AI Edit for Background Knowledge
    if (aiEditButton3) {
        aiEditButton3.addEventListener('click', async () => {
            const backgrounds = document.getElementById('backgrounds');
            const spinner = document.getElementById('aiEditSpinner3');
            const currentContent = backgrounds.value;
            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
            const learningObjectives = document.getElementById('learningObjectives').value;

            spinner.style.display = 'inline-block';
            aiEditButton3.disabled = true;

            const suggestionTextarea = document.getElementById('backgroundsAiSuggestion');
            const applyButton = document.getElementById('applyBackgrounds');
                try {
                    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            model: 'Qwen/Qwen3-8B',
                            messages: [{
                                role: 'user',
                            content: `Please help me to improve the background information based on the following information:\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nLearning Objectives and Standards:\n${learningObjectives}\nCurrent Background:\n${currentContent}\n\nOnly provide the improved background information, do not include any other information.`
                            }],
                            stream: false,
                            max_tokens: 4096,
                            temperature: 0.7,
                            top_p: 0.7
                        })
                    });
                const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        backgrounds.value = suggestionTextarea.value;
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton3.disabled = false;
            }
        });
    }

    // AI Edit for PA description
    if (aiEditButton4) {
        aiEditButton4.addEventListener('click', async () => {
            const paDescription = document.getElementById('paDescription');
            const currentContent = paDescription.value;
            const spinner = document.getElementById('aiEditSpinner4');
            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
            const learningObjectives = document.getElementById('learningObjectives').value;
            const backgrounds = document.getElementById('backgrounds').value;

            spinner.style.display = 'inline-block';
            aiEditButton4.disabled = true;

            const suggestionTextarea = document.getElementById('paDescriptionAiSuggestion');
            const applyButton = document.getElementById('applyPaDescription');
            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'Qwen/Qwen3-8B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to improve the performance assessment task description based on the following information:\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nLearning Objectives and Standards:\n${learningObjectives}\nBackground:\n${backgrounds}\nCurrent Task Description:\n${currentContent}\n\nOnly provide the improved task description, do not include any other information.`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                    const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        paDescription.value = suggestionTextarea.value;
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton4.disabled = false;
            }
        });
    }

    // AI Edit for artifacts evidence
    if (aiEditButton5) {
        aiEditButton5.addEventListener('click', async () => {
            const artifactsEvidence = document.getElementById('artifactsEvidence');
            const currentContent = artifactsEvidence.value;
            const spinner = document.getElementById('aiEditSpinner5');
            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
            const learningObjectives = document.getElementById('learningObjectives').value;
            const backgrounds = document.getElementById('backgrounds').value;
            const paDescription = document.getElementById('paDescription').value;
            
            spinner.style.display = 'inline-block';
            aiEditButton5.disabled = true;

            const suggestionTextarea = document.getElementById('artifactsEvidenceAiSuggestion');
            const applyButton = document.getElementById('applyArtifactsEvidence');
            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'Qwen/Qwen3-8B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to improve the artifacts, evidence, and final products based on the following information:\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nLearning Objectives and Standards:\n${learningObjectives}\nBackground:\n${backgrounds}\nAssessment Task Description:\n${paDescription}\nCurrent Artifacts and Evidence:\n${currentContent}\n\nOnly provide the improved artifacts, evidence, and final products, do not include any other information.`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                const data = await response.json();
                    if (response.ok) {
                        const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                        suggestionTextarea.value = improvedContent;
                        suggestionTextarea.style.display = 'block';
                        applyButton.style.display = 'block';

                        applyButton.onclick = () => {
                            artifactsEvidence.value = suggestionTextarea.value;
                            suggestionTextarea.style.display = 'none';
                            applyButton.style.display = 'none';
                        };
                    } else {
                        alert(`API请求失败：${data.error.message}`);
                    }
                } catch (error) {
                    alert(`发生错误：${error.message}`);
                } finally {
                    spinner.style.display = 'none';
                    aiEditButton5.disabled = false;
                }
        });
    }

    // AI Edit for Rubrics
    if (aiEditButton6) {
        aiEditButton6.addEventListener('click', async () => {
            const Rubrics = document.getElementById('Rubrics');
            const currentContent = Rubrics.value;
            const spinner = document.getElementById('aiEditSpinner6');
            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
            const learningObjectives = document.getElementById('learningObjectives').value;
            const backgrounds = document.getElementById('backgrounds').value;
            const paDescription = document.getElementById('paDescription').value;
            
            // 获取选中的能力指标和对应的评分标准
            const selectedIndicators = Array.from(document.querySelectorAll('.indicator-checkbox:checked'))
                .map(checkbox => checkbox.value);
            const selectedGradeLevel = document.getElementById('gradeLevelSelect').value;
            let selectedRubrics = '';
            
            if (selectedIndicators.length > 0 && selectedGradeLevel) {
                selectedIndicators.forEach(indicator => {
                    const rubric = rubrics[indicator]?.[selectedGradeLevel];
                    if (rubric) {
                        selectedRubrics += `\nIndicator: ${indicator}\n`;
                        selectedRubrics += `Beginning: ${rubric.Beginning}\n`;
                        selectedRubrics += `Developing: ${rubric.Developing}\n`;
                        selectedRubrics += `Proficient: ${rubric.Proficient}\n`;
                        selectedRubrics += `Mastery: ${rubric.Mastery}\n`;
                    }
                });
            }
            
            spinner.style.display = 'inline-block';
            aiEditButton6.disabled = true;

            const suggestionTextarea = document.getElementById('rubricsAiSuggestion'); // Assuming 'rubricsAiSuggestion' is the ID for the new textarea
            const applyButton = document.getElementById('applyRubrics'); // Assuming 'applyRubrics' is the ID for the new button
            // Note: The original textarea id for rubrics is 'Rubrics' (capital R). Ensure HTML and JS are consistent.
            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'Qwen/Qwen3-8B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to create a comprehensive rubric based on the following information:\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nLearning Objectives and Standards:\n${learningObjectives}\nBackground:\n${backgrounds}\nAssessment Task Description:\n${paDescription}\nSelected Competency Rubrics:\n${selectedRubrics}\nCurrent Rubric:\n${currentContent}\n\n only output the rubric, do not include any other information. THe format is as follows:
                            <rubric>
                            <indicator>
                            <level>
                            <description>
                            </rubric>`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        Rubrics.value = suggestionTextarea.value;
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton6.disabled = false;
            }
        });
    }

    // AI Edit for Custom Rubrics
    const aiEditButton7 = document.getElementById('aiEditButton7');
    if (aiEditButton7) {
        aiEditButton7.addEventListener('click', async () => {
            const spinner = document.getElementById('aiEditSpinner7');
            const suggestionTextarea = document.getElementById('customRubricsAiSuggestion');
            const applyButton = document.getElementById('applyCustomRubricsAiSuggestion');

            const gradeLevel = document.getElementById('gradeSelect').value;
            const unitName = document.getElementById('unitName').value;
            const learningObjectives = document.getElementById('learningObjectives').value;
            const essentialQuestions = document.getElementById('essentialQuestions').value;
            const backgrounds = document.getElementById('backgrounds').value;
            const paDescription = document.getElementById('paDescription').value;
            const artifactsEvidence = document.getElementById('artifactsEvidence').value;

            // 获取选中的核心能力指标和对应的评分标准
            const selectedCoreIndicators = Array.from(document.querySelectorAll('.indicator-checkbox:checked'))
                .map(checkbox => checkbox.value);
            const selectedGradeLevelForRubrics = document.getElementById('gradeSelect').value; // Corrected ID from gradeLevelSelect to gradeSelect
            let selectedCoreRubrics = '';
            if (selectedCoreIndicators.length > 0 && selectedGradeLevelForRubrics) {
                selectedCoreIndicators.forEach(indicator => {
                    // Assuming 'rubrics' is a global or accessible object containing rubric data
                    const rubricData = rubrics[indicator]?.[selectedGradeLevelForRubrics]; 
                    if (rubricData) {
                        selectedCoreRubrics += `\nIndicator: ${indicator}\n`;
                        selectedCoreRubrics += `Beginning: ${rubricData.Beginning}\n`;
                        selectedCoreRubrics += `Developing: ${rubricData.Developing}\n`;
                        selectedCoreRubrics += `Proficient: ${rubricData.Proficient}\n`;
                        selectedCoreRubrics += `Mastery: ${rubricData.Mastery}\n`;
                    }
                });
            }

            // 获取现有的自定义评分标准内容
            let currentCustomRubricsContent = '';
            const customRubricIndicators = document.querySelectorAll('#customRubricsContainer .indicator-group');
            customRubricIndicators.forEach((group, index) => {
                const indicatorText = group.querySelector('input[type="text"]').value;
                const levels = group.querySelectorAll('textarea');
                currentCustomRubricsContent += `Custom Indicator ${index + 1}: ${indicatorText}\n`;
                currentCustomRubricsContent += `  Beginning: ${levels[0] ? levels[0].value : ''}\n`;
                currentCustomRubricsContent += `  Developing: ${levels[1] ? levels[1].value : ''}\n`;
                currentCustomRubricsContent += `  Proficient: ${levels[2] ? levels[2].value : ''}\n`;
                currentCustomRubricsContent += `  Mastery: ${levels[3] ? levels[3].value : ''}\n\n`;
            });

            spinner.style.display = 'inline-block';
            aiEditButton7.disabled = true;

            try {
                const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer sk-alomvjggchnhjbicphfiqymckfsdnggssxskqptveqntpraq',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'Qwen/Qwen3-8B',
                        messages: [{
                            role: 'user',
                            content: `Please help me to create or improve ONE custom rubric based on the following information. Ensure the rubric is detailed and specific to the learning objectives and assessment task. Format the output with a title for the indicator, and then descriptions for 'Beginning', 'Developing', 'Proficient', and 'Mastery' levels. If improving an existing custom rubric, refine it based on the provided context. If creating a new one, generate a relevant indicator title and its level descriptions.\n\nGrade Level: ${gradeLevel}\nUnit Name: ${unitName}\nLearning Objectives and Standards:\n${learningObjectives}\nEssential Questions:\n${essentialQuestions}\nBackground:\n${backgrounds}\nAssessment Task Description:\n${paDescription}\nArtifacts/Evidence:\n${artifactsEvidence}\nSelected Core Competency Rubrics (for reference):\n${selectedCoreRubrics}\nExisting Custom Rubrics (if any, to be improved or used as a base - focus on the first one if multiple exist, or create a new one if none exist):
${currentCustomRubricsContent}\n\nOutput ONLY the single improved/new custom rubric in the following format:\nIndicator Title: [Your Generated Title for the Custom Indicator]\nBeginning: [Description for Beginning Level]\nDeveloping: [Description for Developing Level]\nProficient: [Description for Proficient Level]\nMastery: [Description for Mastery Level]`
                        }],
                        stream: false,
                        max_tokens: 4096,
                        temperature: 0.7,
                        top_p: 0.7
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    const improvedContent = data.choices[0].message.content.replace(/^\s*[\r\n]/gm, '');
                    suggestionTextarea.value = improvedContent;
                    suggestionTextarea.style.display = 'block';
                    applyButton.style.display = 'block';

                    applyButton.onclick = () => {
                        const suggestion = suggestionTextarea.value;
                        const lines = suggestion.split('\n');
                        let title = '';
                        let beginning = '';
                        let developing = '';
                        let proficient = '';
                        let mastery = '';

                        lines.forEach(line => {
                            if (line.startsWith('Indicator Title:')) {
                                title = line.substring('Indicator Title:'.length).trim();
                            } else if (line.startsWith('Beginning:')) {
                                beginning = line.substring('Beginning:'.length).trim();
                            } else if (line.startsWith('Developing:')) {
                                developing = line.substring('Developing:'.length).trim();
                            } else if (line.startsWith('Proficient:')) {
                                proficient = line.substring('Proficient:'.length).trim();
                            } else if (line.startsWith('Mastery:')) {
                                mastery = line.substring('Mastery:'.length).trim();
                            }
                        });

                        const customRubricsContainer = document.getElementById('customRubricsContainer');
                        let firstIndicatorGroup = customRubricsContainer.querySelector('.indicator-container');

                        if (!firstIndicatorGroup) {
                            // If no indicator group exists, create one
                            const addIndicatorBtn = document.getElementById('addIndicatorBtn');
                            if (addIndicatorBtn) {
                                addIndicatorBtn.click(); // Simulate click to add a new indicator group
                                firstIndicatorGroup = customRubricsContainer.querySelector('.indicator-container:last-child');
                            }
                        }

                        if (firstIndicatorGroup) {
                            const titleInput = firstIndicatorGroup.querySelector('input[type="text"]');
                            const textareas = firstIndicatorGroup.querySelectorAll('textarea');
                            if (titleInput) titleInput.value = title;
                            if (textareas[0]) textareas[0].value = beginning; // Beginning
                            if (textareas[1]) textareas[1].value = developing; // Developing
                            if (textareas[2]) textareas[2].value = proficient; // Proficient
                            if (textareas[3]) textareas[3].value = mastery; // Mastery
                            
                            // Trigger input event for auto-resizing if necessary
                            [titleInput, ...textareas].forEach(el => {
                                if (el && typeof autoResizeTextarea === 'function') {
                                    autoResizeTextarea.call(el);
                                }
                            });
                        } else {
                            alert('Could not find or create a custom rubric to apply the suggestion.');
                        }

                        console.log("Attempting to hide suggestion area and apply button.");
                        suggestionTextarea.style.display = 'none';
                        applyButton.style.display = 'none';
                        console.log("Suggestion area display:", suggestionTextarea.style.display);
                        console.log("Apply button display:", applyButton.style.display);
                        suggestionTextarea.value = ''; // Clear suggestion
                        aiEditButton7.disabled = false; // Re-enable the button
                    };
                } else {
                    alert(`API请求失败：${data.error.message}`);
                }
            } catch (error) {
                alert(`发生错误：${error.message}`);
            } finally {
                spinner.style.display = 'none';
                aiEditButton7.disabled = false;
            }
        });
    }

    // 更新能力指标
    function updateCompetencyIndicators() {
        const selectedCompetency = competencySelect.value;
        
        if (!selectedCompetency) {
            competencyIndicatorsContainer.innerHTML = '<p>Please select a core competency to view related indicators</p>';
            return;
        }

        const indicators = getCompetencyIndicators(selectedCompetency);
        
        if (indicators && indicators.length > 0) {
            let html = '<ul class="indicators-list">';
            indicators.forEach(indicator => {
                html += `
                    <li class="indicator-item">
                        <input type="checkbox" class="indicator-checkbox" value="${indicator}">
                        <span class="indicator-text">${indicator}</span>
                    </li>
                `;
            });
            html += '</ul>';
            
            competencyIndicatorsContainer.innerHTML = html;
            
            // 添加事件监听器
            document.querySelectorAll('.indicator-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', displayRubricsForSelectedIndicators);
            });
        } else {
            competencyIndicatorsContainer.innerHTML = '<p>No available indicators for this core competency</p>';
        }
    }

    // 获取能力指标
    function getCompetencyIndicators(competencyId) {
        const indicators = {
            '1': [
                "1.1: Demonstrates respect and empathy for diverse cultural perspectives.",
                "1.2: Applies knowledge of cultural traditions and global trends to address challenges.",
                "1.3: Effectively communicates across languages and cultural contexts.",
                "1.4: Collaborates with others to build understanding and solve problems across cultural divides."
            ],
            '2': [
                "2.1: Breaks down problems into smaller components and identifies solutions.",
                "2.2: Demonstrates originality and flexibility in generating ideas.",
                "2.3: Evaluates evidence critically to make reasoned decisions.",
                "2.4: Applies knowledge creatively to innovate and adapt to new situations."
            ],
            '3': [
                "3.1: Inspires and motivates others through inclusive and ethical leadership.",
                "3.2: Builds and sustains positive relationships within teams.",
                "3.3: Mediates conflicts constructively and promotes collaboration.",
                "3.4: Takes initiative in group settings and contributes to collective problem-solving."
            ],
            '4': [
                "4.1: Demonstrates a growth mindset by embracing setbacks as learning opportunities.",
                "4.2: Maintains focus and balance in the face of stress or uncertainty.",
                "4.3: Advocates for personal and community well-being.",
                "4.4: Perseveres in the pursuit of meaningful goals."
            ],
            '5': [
                "5.1: Engages in service projects that address community needs.",
                "5.2: Reflects on the ethical implications of actions and decisions.",
                "5.3: Promotes sustainability and equity in personal and collaborative endeavors.",
                "5.4: Demonstrates honesty, fairness, and accountability in decision-making."
            ],
            '6': [
                "6.1: Writes, speaks, and presents ideas with clarity and purpose.",
                "6.2: Uses creative forms of expression to convey ideas effectively.",
                "6.3: Actively listens and responds thoughtfully in conversations.",
                "6.4: Adapts communication styles to suit different audiences and contexts."
            ]
        };
        return indicators[competencyId] || [];
    }

    // 显示所选指标的评分标准
    function displayRubricsForSelectedIndicators() {
        const selectedIndicators = Array.from(document.querySelectorAll('.indicator-checkbox:checked'))
            .map(checkbox => checkbox.value);
        
        // 获取当前选择的年级
        const selectedGrade = gradeSelect.value;
        // 根据年级获取对应的 grade level range
        const selectedGradeLevel = gradeToLevelRange[selectedGrade];

        if (selectedIndicators.length > 0 && selectedGradeLevel) {
        let html = '';
        selectedIndicators.forEach(indicator => {
            const rubric = rubrics[indicator]?.[selectedGradeLevel];
            
                if (rubric) {
            html += `
                <div class="rubric-category">
                    <h4 class="rubric-header">${indicator}</h4>
                    <table class="rubric-table">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="level-beginning">
                                <td>Beginning</td>
                                <td>${rubric.Beginning || 'No description available'}</td>
                            </tr>
                            <tr class="level-developing">
                                <td>Developing</td>
                                <td>${rubric.Developing || 'No description available'}</td>
                            </tr>
                            <tr class="level-proficient">
                                <td>Proficient</td>
                                <td>${rubric.Proficient || 'No description available'}</td>
                            </tr>
                            <tr class="level-mastery">
                                <td>Mastery</td>
                                <td>${rubric.Mastery || 'No description available'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
                }
        });
        
        rubricsContainer.innerHTML = html;
        } else {
            rubricsContainer.innerHTML = '<p>Please select indicators and ensure a grade level is selected</p>';
        }
    }

    // 添加 grade 选择变化事件监听器
    if (gradeSelect) {
        gradeSelect.addEventListener('change', () => {
            // 当年级改变时，重新显示评分标准
            displayRubricsForSelectedIndicators();
        });
    }

    // 生成PDF
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        let y = 20;

        // 获取选中的指标
        const selectedIndicators = Array.from(document.querySelectorAll('.indicator-checkbox:checked'))
            .map(checkbox => checkbox.value);

        // 添加标题
        doc.setFontSize(18);
        doc.setTextColor(25, 118, 210); // 主题色
        doc.text('Performance Assessment Task Plan', pageWidth / 2, y, { align: 'center' });
        y += 10;
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100); // 灰色
        doc.text('Shenzhen Mingwan School', pageWidth / 2, y, { align: 'center' });
        y += 20;

        // 添加表单内容
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // 黑色
        
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        
        // 年级
        const selectedGrade = gradeSelect.value;
        const selectedGradeLevel = gradeToLevelRange[selectedGrade];
        doc.text(`Grade: ${selectedGradeLevel}`, margin, y);
        y += 8;
        
        // 单元名称
        const unitName = document.getElementById('unitName').value;
        doc.text(`Unit Name: ${unitName}`, margin, y);
        y += 15;

        // 学习目标
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        doc.text('Learning Goals & Standards', margin, y);
        y += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        
        const learningObjectives = document.getElementById('learningObjectives').value;
        const learningObjectivesLines = doc.splitTextToSize(learningObjectives, pageWidth - 2 * margin);
        doc.text(learningObjectivesLines, margin, y);
        y += learningObjectivesLines.length * 5 + 10;

        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        // 核心问题
        doc.text('Essential Questions:', margin, y);
        y += 8;
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);

        const essentialQuestions = document.getElementById('essentialQuestions').value;
        const essentialQuestionsLines = doc.splitTextToSize(essentialQuestions, pageWidth - 2 * margin);
        doc.text(essentialQuestionsLines, margin, y);
        y += essentialQuestionsLines.length * 5 + 15;

        // 如果页面空间不够，添加新页
        if (y > doc.internal.pageSize.getHeight() - 50) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        
        // 背景
        doc.text('Background (Authentic Context):', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);

        const backgrounds = document.getElementById('backgrounds').value;
        const backgroundsLines = doc.splitTextToSize(backgrounds, pageWidth - 2 * margin);
        doc.text(backgroundsLines, margin, y);
        y += backgroundsLines.length * 5 + 10;

        // 评估任务描述
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        doc.text('Assessment Task Description:', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);

        const paDescription = document.getElementById('paDescription').value;
        const paDescriptionLines = doc.splitTextToSize(paDescription, pageWidth - 2 * margin);
        doc.text(paDescriptionLines, margin, y);
        y += paDescriptionLines.length * 5 + 10;

        // 图片
        if (storedBase64Image) {
            // 如果页面空间不够，添加新页
            if (y > doc.internal.pageSize.getHeight() - 80) {
                doc.addPage();
                y = 20;
            }
            
            doc.text('Related Images:', margin, y);
            y += 10;
            
            try {  
                // 获取页面宽度
                const pageWidth = doc.internal.pageSize.getWidth();
                const maxWidth = pageWidth * (2/3); // 最大宽度为页面宽度的2/3
                
                // 使用jsPDF的内置方法获取图片信息
                const imgData = doc.getImageProperties('data:image/png;base64,' + storedBase64Image);
                
                // 计算缩放比例
                let width = imgData.width;
                let height = imgData.height;
                
                // 如果图片宽度超过最大宽度，按比例缩放
                if (width > maxWidth) {
                    const ratio = maxWidth / width;
                    width = maxWidth;
                    height = height * ratio;
                }
                
                // 计算居中位置
                const x = (pageWidth - width) / 2;
                
                // 添加图片
                doc.addImage('data:image/png;base64,' + storedBase64Image, 'PNG', x, y, width, height);
                y += height + 10;
            } catch (e) {
                console.error('Image addition failed:', e);
            }
        }

        // 如果页面空间不够，添加新页
        if (y > doc.internal.pageSize.getHeight() - 50) {
            doc.addPage();
            y = 20;
        }
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        // 成果/证据
        doc.text('Artifacts/Evidence:', margin, y);
        y += 8;
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const artifactsEvidence = document.getElementById('artifactsEvidence').value;
        const artifactsEvidenceLines = doc.splitTextToSize(artifactsEvidence, pageWidth - 2 * margin);
        doc.text(artifactsEvidenceLines, margin, y);
        y += artifactsEvidenceLines.length * 5 + 15;

        // 如果页面空间不够，添加新页
        if (y > doc.internal.pageSize.getHeight() - 50) {
            doc.addPage();
            y = 20;
        }

        // 核心能力
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        doc.text('Core Competency Indicators', margin, y);
        y += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        
        // 选择的能力
        const selectedCompetency = competencySelect.options[competencySelect.selectedIndex].text;
        doc.text(`Core Competency: ${selectedCompetency}`, margin, y);
        y += 15;
        
        // 评分标准
        doc.setFontSize(11);
        doc.setTextColor(25, 118, 210);
        doc.text('Rubrics:', margin, y);
        y += 10;

        if (selectedIndicators.length > 0 && selectedGradeLevel) {
            selectedIndicators.forEach(indicator => {
                const rubric = rubrics[indicator]?.[selectedGradeLevel];
                
                if (rubric) {
                    // 如果页面空间不够，添加新页
                    if (y > doc.internal.pageSize.getHeight() - 50) {
                        doc.addPage();
                        y = 20;
                    }

                    // 添加指标标题
                    doc.setFontSize(12);
                    doc.setTextColor(25, 118, 210);
                    const indicatorLines = doc.splitTextToSize(indicator, pageWidth - 2 * margin);
                    doc.text(indicatorLines, margin, y);
                    y += indicatorLines.length * 5 + 5;

                    // 添加评分标准表格
                    doc.setFontSize(10);
                    doc.setTextColor(0, 0, 0);
                    
                    // 计算列宽和边距
                    const marginLeft = 2; // 增加左边距
                    const marginRight = 4; // 增加右边距
                    const marginBetween = 8; // 增加列间距
                    const marginTop = 2; // 增加顶部边距
                    const marginBottom = 2; // 增加底部边距
                    
                    // 计算列宽
                    const levelColWidth = 30; // 增加等级列宽度
                    const descColWidth = pageWidth - 2 * margin - levelColWidth - marginBetween - marginRight; // 描述列宽度
                    
                    // 表格标题行
                    doc.setFillColor(240, 240, 240);
                    doc.rect(margin, y, pageWidth - 2 * margin, 10, 'F'); // 增加标题行高度
                    doc.text('Level', margin + marginLeft + 10, y + 7);
                    doc.text('Description', margin + levelColWidth + marginBetween+ 50, y + 7);
                    y += 10;

                    // 表格内容
                    const levels = ['Beginning', 'Developing', 'Proficient', 'Mastery'];
                    levels.forEach(level => {
                        if (y > doc.internal.pageSize.getHeight() - 30) { // 增加页面切换的提前量
                            doc.addPage();
                            y = 20;
                        }

                        // 水平线
                        doc.line(margin, y, pageWidth - margin, y);
                        
                        // 等级
                        doc.text(level, margin + marginLeft + 5, y + marginTop + 3);
                        
                        // 描述
                        const description = rubric[level] || 'No description available';
                        const descriptionLines = doc.splitTextToSize(description, descColWidth - marginRight);
                        
                        // 计算当前行需要的高度
                        const lineHeight = 6;
                        const contentHeight = descriptionLines.length * lineHeight;
                        const rowHeight = Math.max(contentHeight + marginTop + marginBottom, 12); // 增加最小行高
                        
                        // 绘制单元格边框
                        doc.line(margin, y, margin, y + rowHeight); // 左边框
                        doc.line(margin + levelColWidth, y, margin + levelColWidth, y + rowHeight); // 等级列右边框
                        doc.line(pageWidth - margin, y, pageWidth - margin, y + rowHeight); // 右边框
                        
                        // 添加描述文本
                        let currentY = y + marginTop + 3;
                        descriptionLines.forEach(line => {
                            doc.text(line, margin + levelColWidth + marginBetween, currentY);
                            currentY += lineHeight;
                        });
                        
                        y += rowHeight;
                    });

                    // 底部水平线
                    doc.line(margin, y, pageWidth - margin, y);
                    y += 15;
                }
            });
        }

        // 在添加完其他内容后，添加自定义评分标准
        y = addCustomRubricsToPDF(doc, y);
        
        // 创建预览窗口
        const previewWindow = window.open('', '_blank', 'width=800,height=600');
        if (previewWindow) {
            // 将PDF转换为base64
            const pdfData = doc.output('datauristring');
            
            // 创建预览HTML
            const previewHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>PDF Preview</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 20px;
                            background-color: #f5f5f5;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            font-family: Arial, sans-serif;
                        }
                        .preview-container {
                            background-color: white;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                            margin-bottom: 20px;
                        }
                        .button-container {
                            display: flex;
                            gap: 10px;
                            margin-top: 20px;
                        }
                        button {
                            padding: 10px 20px;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 14px;
                            transition: background-color 0.3s;
                        }
                        .download-btn {
                            background-color: #1976d2;
                            color: white;
                        }
                        .download-btn:hover {
                            background-color: #1565c0;
                        }
                        .convert-btn {
                            background-color: #4caf50;
                            color: white;
                        }
                        .convert-btn:hover {
                            background-color: #43a047;
                        }
                        .close-btn {
                            background-color: #f5f5f5;
                            color: #333;
                            border: 1px solid #ddd;
                        }
                        .close-btn:hover {
                            background-color: #e0e0e0;
                        }
                        iframe {
                            border: none;
                            width: 100%;
                            height: 500px;
                        }
                    </style>
                </head>
                <body>
                    <div class="preview-container">
                        <iframe src="${pdfData}"></iframe>
                    </div>
                    <div class="button-container">
                        <button class="download-btn" onclick="downloadPDF()">Download PDF</button>
                        <button class="convert-btn" onclick="window.open('https://smallpdf.com/pdf-to-word', '_blank')">Convert to Word</button>
                        <button class="close-btn" onclick="window.close()">Close Preview</button>
                    </div>
                    <script>
                        function downloadPDF() {
                            const link = document.createElement('a');
                            link.href = '${pdfData}';
                            link.download = 'Performance Assessment Task Plan.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }
                    </script>
                </body>
                </html>
            `;
            
            // 写入预览窗口
            previewWindow.document.write(previewHTML);
            previewWindow.document.close();
        } else {
            // 如果无法打开预览窗口，直接下载
            doc.save('Performance Assessment Task Plan.pdf');
        }
    }

    // 自定义评分标准功能
    function initializeCustomRubrics() {
        const addIndicatorBtn = document.getElementById('addIndicatorBtn');
        const customRubricsContainer = document.getElementById('customRubricsContainer');
        
        // 添加新指标
        addIndicatorBtn.addEventListener('click', () => {
            const indicatorId = 'indicator_' + Date.now();
            const indicatorHtml = `
                <div class="indicator-container mb-4" id="${indicatorId}">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="mb-0 custom-rubric-indicator-title">Indicator</h5>
                        <!-- Remove button moved from here -->
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Enter indicator description" 
                               name="custom_indicator_${indicatorId}">
                    </div>
                    <div class="levels-container">
                        <div class="level-row mb-3">
                            <label class="form-label">Beginning</label>
                            <textarea class="form-control" rows="2" 
                                    name="custom_beginning_${indicatorId}"
                                    placeholder="Enter description for Beginning level"></textarea>
                        </div>
                        <div class="level-row mb-3">
                            <label class="form-label">Developing</label>
                            <textarea class="form-control" rows="2" 
                                    name="custom_developing_${indicatorId}"
                                    placeholder="Enter description for Developing level"></textarea>
                        </div>
                        <div class="level-row mb-3">
                            <label class="form-label">Proficient</label>
                            <textarea class="form-control" rows="2" 
                                    name="custom_proficient_${indicatorId}"
                                    placeholder="Enter description for Proficient level"></textarea>
                        </div>
                        <div class="level-row mb-3 d-flex align-items-end">
                            <div style="flex-grow: 1;">
                                <label class="form-label">Mastery</label>
                                <textarea class="form-control" rows="2" 
                                        name="custom_mastery_${indicatorId}"
                                        placeholder="Enter description for Mastery level"></textarea>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-danger ms-2" onclick="removeIndicator('${indicatorId}')" style="height: fit-content;">
                                <i class="bi bi-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
            customRubricsContainer.insertAdjacentHTML('beforeend', indicatorHtml);
        });
    }

    // 移除指标
    window.removeIndicator = function(indicatorId) {
        const indicator = document.getElementById(indicatorId);
        if (indicator) {
            indicator.remove();
        }
    };

    // 获取自定义评分标准数据
    function getCustomRubricsData() {
        const customRubrics = [];
        const indicators = document.querySelectorAll('.indicator-container');
        
        indicators.forEach(indicator => {
            const indicatorText = indicator.querySelector(`input[name^="custom_indicator_"]`).value;
            
            if (indicatorText.trim()) {
                const rubric = {
                    indicator: indicatorText,
                    Beginning: indicator.querySelector(`textarea[name^="custom_beginning_"]`).value,
                    Developing: indicator.querySelector(`textarea[name^="custom_developing_"]`).value,
                    Proficient: indicator.querySelector(`textarea[name^="custom_proficient_"]`).value,
                    Mastery: indicator.querySelector(`textarea[name^="custom_mastery_"]`).value
                };
                customRubrics.push(rubric);
            }
        });
        
        return customRubrics;
    }

    // 在生成PDF时添加自定义评分标准
    function addCustomRubricsToPDF(doc, y) {
        const customRubrics = getCustomRubricsData();
        if (customRubrics.length > 0) {
            doc.setFontSize(11);
            doc.text('Custom Rubrics', 20, y);
                    y += 10;

            customRubrics.forEach((rubric, index) => {
                // 检查是否需要新页面
                if (y > 250) {
                    doc.addPage();
                    y = 20;
                }

                // 添加指标标题
                doc.setFontSize(12);
                doc.text(`Indicator: ${rubric.indicator}`, 20, y);
                y += 10;

                // 添加表头
                doc.setFillColor(240, 240, 240);
                doc.rect(20, y, 30, 10, 'F');
                doc.rect(50, y, 140, 10, 'F');
                doc.setFontSize(10);
                doc.text('Level', 27, y + 7);
                doc.text('Description', 92, y + 7);
                y += 10;

                // 添加评分标准表格
                const tableData = [
                    ['Beginning', rubric.Beginning],
                    ['Developing', rubric.Developing],
                    ['Proficient', rubric.Proficient],
                    ['Mastery', rubric.Mastery]
                ];

                // 添加表格
                tableData.forEach((row, rowIndex) => {
                    // 检查是否需要新页面
                    if (y > 250) {
                        doc.addPage();
                        y = 20;
                    }

                    // 处理描述文本的自动换行
                    const splitText = doc.splitTextToSize(row[1], 130);
                    const lineHeight = 7;
                    const minCellHeight = 10;
                    const padding = 4;
                    const cellHeight = Math.max(minCellHeight, (splitText.length * lineHeight) + padding);
                    
                    // 添加单元格边框 - 只绘制左右边框
                    doc.line(20, y, 20, y + cellHeight); // 左边框
                    doc.line(50, y, 50, y + cellHeight); // 中间分隔线
                    doc.line(190, y, 190, y + cellHeight); // 右边框
                    doc.line(20, y, 190, y); // 上边框
                    doc.line(20, y + cellHeight, 190, y + cellHeight); // 下边框

                    // 添加文本
                    doc.setFontSize(10);
                    doc.text(row[0], 27, y + 7);
                    
                    // 添加描述文本
                    splitText.forEach((line, lineIndex) => {
                        doc.text(line, 55, y + 7 + (lineIndex * lineHeight));
                    });

                    y += cellHeight;
                });

                y += 10; // 添加一些间距
            });
        }
        return y;
    }

    // 保存草稿功能
    function saveDraft() {
        // 获取所有表单数据
        const formData = {
            grade: gradeSelect.value,
            unitName: document.getElementById('unitName').value,
            learningObjectives: document.getElementById('learningObjectives').value,
            essentialQuestions: document.getElementById('essentialQuestions').value,
            backgrounds: document.getElementById('backgrounds').value,
            paDescription: document.getElementById('paDescription').value,
            artifactsEvidence: document.getElementById('artifactsEvidence').value,
            rubrics: document.getElementById('Rubrics').value,
            competency: competencySelect.value,
            selectedIndicators: Array.from(document.querySelectorAll('.indicator-checkbox:checked'))
                .map(checkbox => checkbox.value),
            image: storedBase64Image
        };

        // 保存到 localStorage
        localStorage.setItem('paFormDraft', JSON.stringify(formData));
        
        // 显示保存成功提示
        const saveButton = document.getElementById('saveButton');
        const originalText = saveButton.innerHTML;
        saveButton.innerHTML = '<i class="bi bi-check"></i> Saved';
        saveButton.style.backgroundColor = '#4caf50';
        saveButton.style.color = 'white';
        
        // 3秒后恢复按钮原样
        setTimeout(() => {
            saveButton.innerHTML = originalText;
            saveButton.style.backgroundColor = '';
            saveButton.style.color = '';
        }, 3000);
    }

    // 加载草稿功能
    function loadDraft() {
        const savedDraft = localStorage.getItem('paFormDraft');
        if (savedDraft) {
            const formData = JSON.parse(savedDraft);
            
            // 恢复表单数据
            if (formData.grade) gradeSelect.value = formData.grade;
            if (formData.unitName) document.getElementById('unitName').value = formData.unitName;
            if (formData.learningObjectives) document.getElementById('learningObjectives').value = formData.learningObjectives;
            if (formData.essentialQuestions) document.getElementById('essentialQuestions').value = formData.essentialQuestions;
            if (formData.backgrounds) document.getElementById('backgrounds').value = formData.backgrounds;
            if (formData.paDescription) document.getElementById('paDescription').value = formData.paDescription;
            if (formData.artifactsEvidence) document.getElementById('artifactsEvidence').value = formData.artifactsEvidence;
            if (formData.rubrics) document.getElementById('Rubrics').value = formData.rubrics;
            if (formData.competency) {
                competencySelect.value = formData.competency;
                updateCompetencyIndicators();
                
                // 恢复选中的指标
                setTimeout(() => {
                    formData.selectedIndicators.forEach(indicator => {
                        const checkbox = document.querySelector(`.indicator-checkbox[value="${indicator}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                    displayRubricsForSelectedIndicators();
                }, 100);
            }
            if (formData.image) storedBase64Image = formData.image;
        }
    }

    // 页面加载时尝试加载草稿
    loadDraft();

    // 添加事件监听器
    if (competencySelect) {
        competencySelect.addEventListener('change', () => {
            updateCompetencyIndicators();
            // 清空评分标准显示
            rubricsContainer.innerHTML = '<p>Select indicators to view corresponding rubrics (rubrics will be included in PDF)</p>';
        });
    }

    if (downloadPdfButton) {
        downloadPdfButton.addEventListener('click', generatePDF);
    }
    
    if (saveButton) {
        saveButton.addEventListener('click', saveDraft);
    }

    if (restartButton) {
        restartButton.addEventListener('click', restartForm);
    }

    // 更新进度条状态
    function updateProgressBar() {
        const steps = document.querySelectorAll('.progress-step');
        const sections = [
            { id: 'basicInfo', title: 'Basic Info' },
            { id: 'learningGoals', title: 'Learning Goals' },
            { id: 'assessmentDesign', title: 'Assessment Design' },
            { id: 'competencyIndicators', title: 'Competency Indicators' }
        ];

        steps.forEach((step, index) => {
            const stepLabel = step.querySelector('.step-label').textContent;
            step.addEventListener('click', () => {
                // 移除所有步骤的激活状态
                steps.forEach(s => s.classList.remove('step-active'));
                // 激活当前步骤
                step.classList.add('step-active');
                
                // 找到对应的部分并滚动到该部分
                const section = sections.find(s => s.title === stepLabel);
                if (section) {
                    const targetElement = document.querySelector(`.app-card:nth-child(${index + 1})`);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }
    
    // 初始化
    updateProgressBar();

    // 重启功能
    function restartForm() {
        // 显示确认对话框
        if (confirm('Are you sure you want to start over? This will clear all entered content.')) {
            // 清除 localStorage 中的数据
            localStorage.removeItem('paFormDraft');
            
            // 重置所有表单字段
            document.getElementById('unitName').value = '';
            document.getElementById('learningObjectives').value = '';
            document.getElementById('essentialQuestions').value = '';
            document.getElementById('backgrounds').value = '';
            document.getElementById('paDescription').value = '';
            document.getElementById('artifactsEvidence').value = '';
            document.getElementById('Rubrics').value = '';
            
            // 重置选择框
            gradeSelect.value = '';
            competencySelect.value = '';
            
            // 清除图片
            storedBase64Image = '';
            document.getElementById('file-selected').textContent = 'No file chosen';
            
            // 重置能力指标显示
            competencyIndicatorsContainer.innerHTML = '<p>Please select a core competency to view related indicators</p>';
            
            // 重置评分标准显示
            rubricsContainer.innerHTML = '<p>Select indicators to view corresponding rubrics (rubrics will be included in PDF)</p>';
            
            // 显示重启成功提示
            const restartButton = document.getElementById('restartButton');
            const originalText = restartButton.innerHTML;
            restartButton.innerHTML = '<i class="bi bi-check"></i> Restarted';
            restartButton.style.backgroundColor = '#4caf50';
            restartButton.style.color = 'white';
            
            // 3秒后恢复按钮原样
            setTimeout(() => {
                restartButton.innerHTML = originalText;
                restartButton.style.backgroundColor = '';
                restartButton.style.color = '';
            }, 3000);
        }
    }

    // 初始化自定义评分标准功能
    initializeCustomRubrics();
});