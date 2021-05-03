document.addEventListener('mouseover', (e) => {
    // Build Activity elements
    const activityImage = document.getElementById('active-image');
    const activityImageSrc = document.getElementById('active-image').getAttribute('src');
    const topActivity = document.getElementById('plus-border-top');
    const midActivity = document.getElementById('plus-border-mid');
    const bottomActivity = document.getElementById('plus-border-bottom');
    const ethImage = 'assets/eth2.0.png';
    
    let currentTarget = e.target;
    switch (currentTarget.id) {
        case topActivity.id :
            topActivity.style.border = '3px solid white';
            break;
        case midActivity.id :
            midActivity.style.border = '3px solid white';
            break;
        case bottomActivity.id :
            bottomActivity.style.border = '3px solid white';
            activityImage.style.border = 'none';
            activityImage.src = ethImage;
            break;
        default :
            topActivity.style.border = 'none';
            midActivity.style.border = 'none';
            bottomActivity.style.border = 'none';
            break;
    }
})



