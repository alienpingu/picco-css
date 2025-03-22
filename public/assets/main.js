const currentColor = () => !document.body.classList.contains('dark') ? '000000' : 'ffffff'

function updateIconColors(newColor) {
    document.querySelectorAll("img").forEach(img => {
        if (img.src.includes("icongr.am") && img.src.includes("color=")) {
            img.src = img.src.replace(/color=[^&]*/, `color=${newColor}`);
        }
    });
}

function switchMode(override) {
    let icon = 'sun'
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        icon = 'moon'
    } else { document.body.classList.add('dark') }

    document.getElementById('dark-theme-icon').src = `https://icongr.am/clarity/${icon}.svg?size=24&color=${currentColor()}`


    updateIconColors(currentColor());
}
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.add('dark')
    switchMode()

}
