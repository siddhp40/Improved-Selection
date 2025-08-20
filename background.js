chrome.commands.onCommand.addListener(async (command) => {
    if(command === "add-to-stack"){
        let [tab] = await chrome.tabs.query({active: true,currentWindow: true});
        if(!tab?.id) return;
        try{
            await chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        }catch(error){
            console.error("Tab is not the active tab");
        }
    }
});